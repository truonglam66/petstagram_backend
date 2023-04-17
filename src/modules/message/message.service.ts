import { Injectable } from '@nestjs/common'
import * as moment from 'moment'
import { In, Like, Not, Raw } from 'typeorm'
import {
  CREATE_FAIL,
  CREATE_SUCCESS,
  ERROR_NOT_FOUND_DATA,
  UPDATE_ACTIVE_SUCCESS,
  enumData,
} from '../../common/constants'
import { FilterOneDto, PaginationDto, UserDto } from '../../common/dto'
import { MessageEntity, MessageObjectEntity } from '../../entities'
import { MessageRepository } from '../../repositories/message.repository'
import { FirebaseDto } from '../firebase/dto'
import { FirebaseService } from '../firebase/firebase.service'
import { MessageUpdateDto } from './dto'
import { MessageCreateDto } from './dto/messageCreate.dto'

@Injectable()
export class MessageService {
  serviceAccount: any
  constructor(private readonly repository: MessageRepository, private readonly fbService: FirebaseService) {}

  public async loadData(userLogin: UserDto) {
    return await this.repository.find({
      where: { isDeleted: false,},
    })
  }

  public async loadDetail(userLogin: UserDto, data: FilterOneDto) {
    return await this.repository.findOne({
      where: { isDeleted: false, id: data.id },
      relations: {
        objects: {
          user: true,
        }
      },
    })
  }

  public async findOne(userLogin: UserDto, data: any) {
    return await this.repository.findOne(data)
  }

  async pagination(userLogin: UserDto, data: PaginationDto) {
    let where: any = new Object()
    if (data.where) {
      data.where.isDeleted = false
      data.where.companyId = userLogin.companyId
    }
    if (data.where.title) {
      where.title = Like(`%${data.where.title}%`)
    }
    if (data.where.apartmentId) {
      where.apartmentId = data.where.apartmentId
    }
    if (data.where.isDeleted) {
      where.isDeleted = data.where.statusId
    }
    if (data.where.status) {
      where.status = data.where.status
    }
    if (data.where.roomId) {
      where.roomId = data.where.roomId
    }

    if (data.where.residentId) {
      let lstMO = await this.repository.manager.getRepository(MessageObjectEntity).findBy({
        isDeleted: false,
        residentId: data.where.residentId,
      })
      if (lstMO.length > 0) {
        let lstMOId = lstMO.map((s: any) => s.messageId)
        lstMOId = Array.from(new Set(lstMOId))
        where.id = In(lstMOId)
      }
    }

    return await this.repository.findAndCount({
      relations: data.relations,
      where: where,
      order: data.order,
      skip: data.skip,
      take: data.take,
    })
  }

  async updateData(userLogin: UserDto, data: MessageUpdateDto) {
    return this.repository.manager.transaction(async (transaction) => {
      const item = await transaction.getRepository(MessageEntity).findOne({
        where: { id: data.id, isDeleted: false},
      })
      if (!item) {
        throw new Error(ERROR_NOT_FOUND_DATA + ' [ Tin Nhắn ]')
      }
      if (item.status == enumData.MessageStatus.Send.code) {
        throw new Error('Tin Nhắn đã được gửi, không thể chỉnh sửa !')
      }
      item.title = data.title
      item.content = data.content
      item.processDate = data.processDate

      let lstNew = data.__objects__.filter((s: any) => !s.id)
      let lstKeep = data.__objects__.filter((s: any) => s.id)

      for await (const obj of lstNew) {
        let mObj = new MessageObjectEntity()
        mObj.messageId = item.id
        mObj.userId = obj.userId
        mObj.residentId = obj.residentId
        mObj.status = enumData.MessageObjectStatus.Non.code

        mObj.createdBy = userLogin.id
        mObj.createdByName = userLogin.fullName
        const mObjCreate = transaction.getRepository(MessageObjectEntity).create({ ...mObj })
        await transaction.getRepository(MessageObjectEntity).save(mObjCreate)
      }

      let where: any = new Object()
      where.messageId = item.id
      if (lstKeep.length > 0) {
        let lstKeepId = lstKeep.map((s: any) => s.id)
        where.id = Not(In(lstKeepId))
      }
      await transaction.getRepository(MessageObjectEntity).update(where, {
        isDeleted: true,
        updatedAt: new Date(),
        updatedBy: userLogin.id,
        updatedByName: userLogin.fullName,
      })

      item.updatedAt = new Date()
      item.updatedBy = userLogin.id
      item.updatedByName = userLogin.fullName
      return await transaction.getRepository(MessageEntity).save(item)
    })
  }

  async updateIsDelete(userLogin: UserDto, data: FilterOneDto) {
    return this.repository.manager.transaction(async (transaction) => {
      const notify = await transaction
        .getRepository(MessageEntity)
        .findOne({ where: { id: data.id, isDeleted: false} })
      if (!notify) {
        throw new Error(ERROR_NOT_FOUND_DATA)
      }
      notify.isDeleted = !notify.isDeleted

      notify.updatedAt = new Date()
      notify.updatedBy = userLogin.id
      notify.updatedByName = userLogin.fullName
      await transaction.getRepository(MessageEntity).save(notify)
      return { message: UPDATE_ACTIVE_SUCCESS }
    })
  }

  async autoCheckSendMessage(userLogin: UserDto) {
    return this.repository.manager.transaction(async (transaction) => {
      const lstMessage = await transaction.getRepository(MessageEntity).find({
        where: {
          processDate: Raw((alias) => `(${alias}) <= ("${moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}") `),
          status: enumData.MessageStatus.New.code,
          isDeleted: false,
        },
      })

      let lstResult = []
      if (lstMessage.length > 0) {
        let lstId = lstMessage.map((s: any) => s.id)
        const lstMO = await transaction.getRepository(MessageObjectEntity).findBy({
          id: In(lstId),
          isDeleted: false,
        })
        for await (const mo of lstMO) {
          let message = lstMessage.find((s: any) => s.id == mo.messageId)
          if (message) {
            let item: any = new Object()
            item.userId = mo.userId
            item.title = message.title
            item.content = message.content
            lstResult.push(item)
          }
        }
      }
      return lstResult
    })
  }

  async readMessage(userLogin: UserDto, data: FilterOneDto) {
    return this.repository.manager.transaction(async (transaction) => {
      const mo = await transaction.getRepository(MessageObjectEntity).findOne({
        where: { id: data.id, isDeleted: false},
      })
      if (!mo) {
        throw new Error(ERROR_NOT_FOUND_DATA + ' [ Tin Nhắn ]')
      }
      if (mo.status == enumData.MessageObjectStatus.Non.code) {
        mo.status = enumData.MessageObjectStatus.Read.code
        mo.updatedAt = new Date()
        mo.updatedBy = userLogin.id
        mo.updatedByName = userLogin.fullName
        return await transaction.getRepository(MessageObjectEntity).save(mo)
      }
    })
  }

  public async createData(userLogin: UserDto, data: MessageCreateDto) {
    if (new Date(data.processDate).getTime() < new Date().getTime()) {
      data.isSendNow = true
    }
    let rs = await this.createMessage(userLogin, data)
    if (rs.success == true && rs.data && data.isSendNow == false) {
      for await (const userId of rs.data) {
        let param = new FirebaseDto()
        param.userId = userId
        param.title = data.title
        param.content = data.content
        this.fbService.Send([param])
      }
    }
    return rs
  }

  async createMessage(userLogin: UserDto, data: MessageCreateDto) {
    return this.repository.manager.transaction(async (transaction) => {
      let item = new MessageEntity()
      item.title = data.title
      item.content = data.content
      item.processDate = data.processDate
      item.status = enumData.MessageStatus.New.code
      if (data.isSendNow) {
        item.status = enumData.MessageStatus.Send.code
      }

      item.createdBy = userLogin.id
      item.createdByName = userLogin.fullName
      const itemCreate = transaction.getRepository(MessageEntity).create({ ...item })
      const mess = await transaction.getRepository(MessageEntity).save(itemCreate)

      let lstUserId = []
      for await (const obj of data.__objects__) {
        let mObj = new MessageObjectEntity()
        mObj.messageId = mess.id
        mObj.userId = obj.userId
        mObj.residentId = obj.residentId
        mObj.status = enumData.MessageObjectStatus.Non.code

        mObj.createdBy = userLogin.id
        mObj.createdByName = userLogin.fullName
        const mObjCreate = transaction.getRepository(MessageObjectEntity).create({ ...mObj })
        await transaction.getRepository(MessageObjectEntity).save(mObjCreate)

        lstUserId.push(obj.userId)
      }

      if (lstUserId.length > 0) {
        return { message: CREATE_SUCCESS, data: lstUserId, success: true }
      }
      return { message: CREATE_FAIL, success: false }
    })
  }
}
