import { Module } from '@nestjs/common'
import { FollowingRepository } from '../../repositories/following.repository'
import { TypeOrmExModule } from '../../typeorm'
import { FollowingController } from './following.controller'
import { FollowingService } from './following.service'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([FollowingRepository])],
  controllers: [FollowingController],
  providers: [FollowingService],
  exports: [FollowingService],
})
export class PostModule {}
