import { Body, Controller, Post } from '@nestjs/common'
import { CurrentUser } from '../../common/decorators'
import { FilterOneDto, PaginationDto, UserDto } from '../../common/dto'
import { ArchivalFileService } from './archivalFile.service'
import { ArchivalFileCreateDto, ArchivalFileUpdateDto } from './dto'

@Controller('archivalFile')
export class ArchivalFileController {
  constructor(private readonly service: ArchivalFileService) {}

  @Post('find')
  public async find(@CurrentUser() user: UserDto, @Body() data: any) {
    return await this.service.find(data)
  }

  @Post('pagination')
  public async pagination(@CurrentUser() user: UserDto, @Body() data: PaginationDto) {
    return await this.service.pagination(user, data)
  }

  @Post('load_detail')
  public async loadDetail(@CurrentUser() user: UserDto, @Body() data: FilterOneDto) {
    return await this.service.loadDetail(user, data)
  }

  @Post('create_data')
  public async createData(@CurrentUser() user: UserDto, @Body() data: ArchivalFileCreateDto) {
    return await this.service.createData(user, data)
  }

  @Post('update_data')
  public async updateData(@CurrentUser() user: UserDto, @Body() data: ArchivalFileUpdateDto) {
    return await this.service.updateData(user, data)
  }

  @Post('update_active')
  public async updateActive(@CurrentUser() user: UserDto, @Body() data: FilterOneDto) {
    return await this.service.updateIsDelete(user, data)
  }
}
