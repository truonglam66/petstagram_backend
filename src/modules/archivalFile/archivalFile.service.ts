import { Injectable } from '@nestjs/common'
import * as moment from 'moment'
import { customAlphabet } from 'nanoid'
import { Like, Raw } from 'typeorm'
import { ERROR_NOT_FOUND_DATA, UPDATE_ACTIVE_SUCCESS } from '../../common/constants'
import { FilterOneDto, PaginationDto, UserDto } from '../../common/dto'
import { ArchivalFileEntity } from '../../entities'
import { ArchivalFileRepository } from '../../repositories/archivalFile.repository'
import { ArchivalFileCreateDto, ArchivalFileUpdateDto } from './dto'

@Injectable()
export class ArchivalFileService {
  constructor(private readonly repository: ArchivalFileRepository) {}

  public async find(data: any) {
    return await this.repository.find(data)
  }

  public async createData(userLogin: UserDto, data: ArchivalFileCreateDto) {
    return this.repository.manager.transaction(async (transaction) => {
      const nanoid = customAlphabet('1234567890QWERTYUIOPASDFGHJKLZXCVBNM', 10)
      const codeNano = nanoid()

      let entity = new ArchivalFileEntity()
      entity.fileCode = codeNano
      entity.fileUrl = data.fileUrl
      entity.fileName = data.fileName
      entity.dataType = data.dataType
      entity.description = data.description

      entity.createdBy = userLogin.id
      entity.createdByName = userLogin.fullName
      const mfCreate = await transaction.getRepository(ArchivalFileEntity).create({ ...entity })
      const mfEntity = await transaction.getRepository(ArchivalFileEntity).save(mfCreate)

      return { message: UPDATE_ACTIVE_SUCCESS, mfEntity }
    })
  }

  public async updateData(userLogin: UserDto, data: ArchivalFileUpdateDto) {
    return this.repository.manager.transaction(async (transaction) => {
      const entity = await transaction
        .getRepository(ArchivalFileEntity)
        .findOne({ where: { id: data.id, isDeleted: false } })
      if (!entity) {
        throw new Error(ERROR_NOT_FOUND_DATA)
      }
      entity.fileUrl = data.fileUrl
      entity.fileName = data.fileName
      entity.dataType = data.dataType
      entity.description = data.description

      entity.updatedBy = userLogin.id
      entity.updatedByName = userLogin.fullName
      const updatedEntity = await transaction.getRepository(ArchivalFileEntity).save(entity)

      return { message: UPDATE_ACTIVE_SUCCESS, updatedEntity }
    })
  }

  public async pagination(userLogin: UserDto, data: PaginationDto) {
    let where: any = {}
    where.isDeleted = false

    if (data.where.createdAt && data.where.createdAt.length > 0) {
      const ds = new Date(new Date(data.where.createdAt[0]).setHours(0, 0, 0, 0))
      var de = new Date(new Date(data.where.createdAt[1]).setHours(23, 59, 59, 59))
      where['createdAt'] = Raw(
        (alias) =>
          `(${alias}) BETWEEN ("${moment(ds).format('YYYY-MM-DD HH:mm:ss')}") AND ("${moment(de).format(
            'YYYY-MM-DD HH:mm:ss',
          )}")`,
      )
    }
    if (data.where.dataType) {
      where.dataType = data.where.dataType
    }
    if (data.where.fileCode) {
      data.where.fileCode = Like(`%${data.where.fileCode}%`)
    }
    if (data.where.fileName) {
      data.where.fileName = Like(`%${data.where.fileName}%`)
    }

    return await this.repository.findAndCount({
      where: where,
      order: data.order,
      skip: data.skip,
      take: data.take,
    })
  }

  public async loadDetail(userLogin: UserDto, data: FilterOneDto) {
    let mf = await this.repository.manager.getRepository(ArchivalFileEntity).findOne({
      where: { id: data.id, isDeleted: false },
    })
    if (!mf) {
      throw new Error(ERROR_NOT_FOUND_DATA)
    }

    return mf
  }

  public async updateIsDelete(userLogin: UserDto, data: FilterOneDto) {
    const entity = await this.repository.findOne({
      where: { id: data.id, isDeleted: false },
    })
    if (!entity) {
      throw new Error(ERROR_NOT_FOUND_DATA)
    }
    entity.isDeleted = !entity.isDeleted
    entity.updatedAt = new Date()
    entity.updatedBy = userLogin.id
    entity.updatedByName = userLogin.fullName
    const updatedEntity = await this.repository.save(entity)
    return { message: UPDATE_ACTIVE_SUCCESS, updatedEntity }
  }
}
