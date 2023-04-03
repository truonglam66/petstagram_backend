import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { FilterOneDto, PaginationDto, UserDto } from '../../common/dto'
import { CurrentUser } from '../../common/decorators'
import { ApeAuthGuard } from '../../common/guards'
import { ArchivalFileService } from './archivalFile.service'
import { ArchivalFileCreateDto, ArchivalFileUpdateDto } from './dto'

@Controller('archivalFile')
export class ArchivalFileController {
  constructor(private readonly service: ArchivalFileService) {}

  @UseGuards(ApeAuthGuard)
  @Post('find')
  public async find(@CurrentUser() user: UserDto, @Body() data: any) {
    return await this.service.find(data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('pagination')
  public async pagination(@CurrentUser() user: UserDto, @Body() data: PaginationDto) {
    return await this.service.pagination(user, data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('load_detail')
  public async loadDetail(@CurrentUser() user: UserDto, @Body() data: FilterOneDto) {
    return await this.service.loadDetail(user, data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('create_data')
  public async createData(@CurrentUser() user: UserDto, @Body() data: ArchivalFileCreateDto) {
    return await this.service.createData(user, data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('update_data')
  public async updateData(@CurrentUser() user: UserDto, @Body() data: ArchivalFileUpdateDto) {
    return await this.service.updateData(user, data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('update_active')
  public async updateActive(@CurrentUser() user: UserDto, @Body() data: FilterOneDto) {
    return await this.service.updateIsDelete(user, data)
  }
}
