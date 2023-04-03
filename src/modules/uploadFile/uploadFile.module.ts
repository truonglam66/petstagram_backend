import { Module } from '@nestjs/common'
import { UploadFileController } from './uploadFile.controller'
import { UploadFileService } from './uploadFile.service'

@Module({
  imports: [],
  controllers: [UploadFileController],
  providers: [UploadFileService],
  exports: [UploadFileService],
})
export class UploadFileModule {}
