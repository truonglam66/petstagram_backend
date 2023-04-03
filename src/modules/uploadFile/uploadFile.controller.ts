import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common'
import { UploadFileService } from './uploadFile.service'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('uploadFiles')
export class UploadFileController {
  constructor(private readonly uploadFileService: UploadFileService) {}

  @Post('upload_single')
  @UseInterceptors(FileInterceptor('file'))
  async uploadSingle(@UploadedFile() file: any) {
    return await this.uploadFileService.uploadSingle(file)
  }
}
