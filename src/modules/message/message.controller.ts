import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { MessageService } from './message.service'
import { MessageCreateDto, MessageUpdateDto } from './dto'
import { CurrentUser } from '../../common/decorators'
import { FilterOneDto, UserDto } from '../../common/dto'
import { ApeAuthGuard } from '../../common/guards'

@Controller('message')
export class MessageController {
  constructor(private readonly service: MessageService) {}

  @UseGuards(ApeAuthGuard)
  @Post('load_data')
  public async loadData(@CurrentUser() user: UserDto) {
    return await this.service.loadData(user)
  }

  @UseGuards(ApeAuthGuard)
  @Post('load_detail')
  public async loadDetail(@CurrentUser() user: UserDto, @Body() data: FilterOneDto) {
    return await this.service.loadDetail(user, data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('find_one')
  public async findOne(@CurrentUser() user: UserDto, @Body() data: any) {
    return await this.service.findOne(user, data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('pagination')
  public async pagination(@CurrentUser() user: UserDto, @Body() data: any) {
    return await this.service.pagination(user, data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('create_data')
  public async createData(@CurrentUser() user: UserDto, @Body() data: MessageCreateDto) {
    return await this.service.createData(user, data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('update_data')
  public async updateData(@CurrentUser() user: UserDto, @Body() data: MessageUpdateDto) {
    return await this.service.updateData(user, data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('update_active')
  public async updateActive(@CurrentUser() user: UserDto, @Body() data: FilterOneDto) {
    return await this.service.updateIsDelete(user, data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('read')
  public async readMessage(@CurrentUser() user: UserDto, @Body() data: FilterOneDto) {
    return await this.service.readMessage(user, data)
  }
}
