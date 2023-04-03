import { Repository } from 'typeorm'
import { CityEntity } from '../entities'
import { CustomRepository } from '../typeorm/typeorm-ex.decorator'

@CustomRepository(CityEntity)
export class CityRepository extends Repository<CityEntity> {}
