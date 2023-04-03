import { Module } from '@nestjs/common'
import { WardController } from './ward.controller'
import { WardService } from './ward.service'
import { TypeOrmExModule } from '../../typeorm/typeorm-ex.module'
import { WardRepository } from '../../repositories'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([WardRepository])],
  providers: [WardService],
  controllers: [WardController],
})
export class WardModule {}
