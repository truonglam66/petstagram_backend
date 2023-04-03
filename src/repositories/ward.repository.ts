import { Repository } from 'typeorm'
import { WardEntity } from '../entities'
import { CustomRepository } from '../typeorm/typeorm-ex.decorator'

@CustomRepository(WardEntity)
export class WardRepository extends Repository<WardEntity> {}
