import { Module, OnModuleInit } from '@nestjs/common'
import { CommonService } from './common.service'
import { CommonController } from './common.controller'
import { TypeOrmExModule } from '../../typeorm'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([])],
  controllers: [CommonController],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule implements OnModuleInit {
  constructor(private appService: CommonService) {}

  onModuleInit() {
    console.log(`Initialization...`)
  }
}
