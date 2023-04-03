import { Module } from '@nestjs/common'
import { CommentRepository } from '../../repositories/comment.repository'
import { TypeOrmExModule } from '../../typeorm'
import { CommentController } from './comment.controller'
import { CommentService } from './comment.service'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([CommentRepository])],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class PostModule {}
