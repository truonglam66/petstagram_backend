import { Module } from '@nestjs/common'
import { ReactionRepository } from '../../repositories/reaction.repository'
import { TypeOrmExModule } from '../../typeorm'
import { ReactionController } from './reaction.controller'
import { ReactionService } from './reaction.service'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([ReactionRepository])],
  controllers: [ReactionController],
  providers: [ReactionService],
  exports: [ReactionService],
})
export class PostModule {}
