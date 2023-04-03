import { Injectable } from '@nestjs/common'
import { Like } from 'typeorm'
import { PaginationDto } from '../../common/dto'
import { CityRepository } from '../../repositories'

@Injectable()
export class CityService {
  constructor(private citiesRepository: CityRepository) {}

  public async find(data: { id?: string }) {
    const whereCon: any = {}
    if (data.id) whereCon.id = data.id

    return await this.citiesRepository.findBy(whereCon)
  }

  public async pagination(data: PaginationDto) {
    const whereCon: any = {}

    if (data.where.code) {
      whereCon.code = Like(`%${data.where.code}%`)
    }
    if (data.where.name) {
      whereCon.name = Like(`%${data.where.name}%`)
    }
    if (data.where.region) {
      whereCon.region = Like(`%${data.where.region}%`)
    }
    const res: any[] = await this.citiesRepository.findAndCount({
      relations: {
        districts: {
          wards: true,
        },
      },
      where: whereCon,
      skip: data.skip,
      take: data.take,
    })

    for (const city of res[0]) {
      if (city.__districts__) {
        city.numDistrict = city.__districts__.length
        delete city.__districts__
      }
      if (city.__locations__) {
        city.numLocations = city.__locations__.length
        delete city.__locations__
      }
    }
    return res
  }
}
