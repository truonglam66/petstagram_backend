import { Module } from '@nestjs/common'
import { ArchivalFileRepository } from '../../repositories/archivalFile.repository'
import { TypeOrmExModule } from '../../typeorm'
import { ArchivalFileController } from './archivalFile.controller'
import { ArchivalFileService } from './archivalFile.service'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([ArchivalFileRepository])],
  controllers: [ArchivalFileController],
  providers: [ArchivalFileService],
  exports: [ArchivalFileService],
})
export class ArchivalFileModule {}
