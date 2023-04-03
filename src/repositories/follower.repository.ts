import { Repository } from 'typeorm'
import {FollowerEntity} from './../entities/follower.entity'
import { CustomRepository } from '../typeorm/typeorm-ex.decorator'

@CustomRepository(FollowerEntity)
export class FollowerRepository extends Repository<FollowerEntity> {}