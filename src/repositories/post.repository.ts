import { Repository } from 'typeorm'
import { PostEntity } from './../entities/post.entity'
import { CustomRepository } from '../typeorm/typeorm-ex.decorator'

@CustomRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {}