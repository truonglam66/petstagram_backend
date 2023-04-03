import { Repository } from 'typeorm'
import { DistrictEntity } from '../entities'
import { CustomRepository } from '../typeorm/typeorm-ex.decorator'

@CustomRepository(DistrictEntity)
export class DistrictRepository extends Repository<DistrictEntity> {}
