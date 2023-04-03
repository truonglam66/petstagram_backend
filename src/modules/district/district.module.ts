import { Module } from '@nestjs/common'
import { DistrictController } from './district.controller'
import { DistrictService } from './district.service'
import { TypeOrmExModule } from '../../typeorm/typeorm-ex.module'
import { DistrictRepository } from '../../repositories'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([DistrictRepository])],
  providers: [DistrictService],
  controllers: [DistrictController],
})
export class DistrictModule {}
