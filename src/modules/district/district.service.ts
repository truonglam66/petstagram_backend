import { Injectable } from '@nestjs/common'
import { Like } from 'typeorm'
import { PaginationDto } from '../../common/dto'
import { DistrictRepository } from '../../repositories'

@Injectable()
export class DistrictService {
  constructor(private districtRepository: DistrictRepository) {}

  public async find(data: { cityId: string }) {
    const whereCon: any = {}
    if (data.cityId) whereCon.cityId = data.cityId
    return await this.districtRepository.findBy(whereCon)
  }

  public async loadData(data: { cityId: string }) {
    const districts: any[] = await this.districtRepository.find({
      where: { cityId: data.cityId },
      relations: { city: true, wards: true },
    })
    for (const district of districts) {
      if (district.__wards__) {
        district.numWard = district.__wards__.length
        district.districtName = district.name
        delete district.__wards__
      }
      if (district.__city__) {
        district.cityName = district.__city__.name
        delete district.__city__
      }
    }

    return districts
  }

  public async pagination(data: PaginationDto) {
    const whereCon: any = {}
    if (data.where.code) whereCon.code = Like(`%${data.where.code}%`)
    if (data.where.name) whereCon.name = Like(`%${data.where.name}%`)
    if (data.where.cityId) whereCon.cityId = Like(`%${data.where.cityId}%`)

    const res: any[] = await this.districtRepository.findAndCount({
      relations: {
        city: true,
        wards: true,
      },
      where: whereCon,
      skip: data.skip,
      take: data.take,
    })

    for (const district of res[0]) {
      if (district.__wards__) {
        district.numWard = district.__wards__.length
        delete district.__wards__
      }
      if (district.__city__) {
        district.cityName = district.__city__.name
        delete district.__city__
      }
      if (district.__locations__) {
        district.numLocations = district.__locations__.length
        delete district.__locations__
      }
    }
    return res
  }
}
