import { Repository } from 'typeorm'
import { ReactionEntity } from './../entities/reaction.entity'
import { CustomRepository } from '../typeorm/typeorm-ex.decorator'

@CustomRepository(ReactionEntity)
export class ReactionRepository extends Repository<ReactionEntity> {}