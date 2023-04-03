import { Repository } from 'typeorm'
import { FollowingEntity } from '../entities/following.entity'
import { CustomRepository } from '../typeorm/typeorm-ex.decorator'

@CustomRepository(FollowingEntity)
export class FollowingRepository extends Repository<FollowingEntity> {}