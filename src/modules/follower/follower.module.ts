import { Module } from '@nestjs/common'
import { FollowerRepository } from '../../repositories/follower.repository'
import { TypeOrmExModule } from '../../typeorm'
import { FollowerController } from './follower.controller'
import { FollowerService } from './follower.service'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([FollowerRepository])],
  controllers: [FollowerController],
  providers: [FollowerService],
  exports: [FollowerService],
})
export class PostModule {}
