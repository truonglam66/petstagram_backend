import { Module } from '@nestjs/common'
import { PostRepository } from '../../repositories/post.repository'
import { PostService } from './post.service'
import { PostController } from './post.controller'
import { TypeOrmExModule } from '../../typeorm'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([PostRepository])],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
