import { Repository } from 'typeorm'
import {CommentEntity} from './../entities/comment.entity'
import { CustomRepository } from '../typeorm/typeorm-ex.decorator'

@CustomRepository(CommentEntity)
export class CommentRepository extends Repository<CommentEntity> {}