import { Injectable } from '@nestjs/common'
import { Like } from 'typeorm'
import { PaginationDto } from '../../common/dto'
import { WardRepository } from '../../repositories'

@Injectable()
export class WardService {
  constructor(private wardRepository: WardRepository) {}

  public async find(data: { districtId: string; id: string }) {
    const whereCon: any = {}
    if (data.districtId) whereCon.districtId = data.districtId
    return await this.wardRepository.findBy(whereCon)
  }

  public async pagination(data: PaginationDto) {
    const whereCon: any = {}
    if (data.where.code) {
      whereCon.code = Like(`%${data.where.code}%`)
    }
    if (data.where.name) {
      whereCon.name = Like(`%${data.where.name}%`)
    }
    if (data.where.districtId) {
      whereCon.districtId = Like(`%${data.where.districtId}%`)
    }
    if (data.where.cityId) {
      whereCon.district = { cityId: Like(`%${data.where.cityId}%`) }
    }
    const res: any[] = await this.wardRepository.findAndCount({
      relations: {
        district: {
          city: true,
        },
      },
      where: whereCon,
      skip: data.skip,
      take: data.take,
    })

    for (const ward of res[0]) {
      if (ward.__district__) {
        ward.cityName = ward.__district__.__city__.name
        ward.districtName = ward.__district__.name
        delete ward.__district__
      }
      if (ward.__locations__) {
        ward.numLocations = ward.__locations__.length
        delete ward.__locations__
      }
    }
    return res
  }
}
