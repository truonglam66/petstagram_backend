import { Module } from '@nestjs/common'
import { CityController } from './city.controller'
import { CityService } from './city.service'
import { TypeOrmExModule } from '../../typeorm/typeorm-ex.module'
import { CityRepository } from '../../repositories'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([CityRepository])],
  providers: [CityService],
  controllers: [CityController],
})
export class CityModule {}
