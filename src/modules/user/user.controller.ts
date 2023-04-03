import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { UserService } from './user.service'
import { ApeAuthGuard } from '../../common/guards'
import { CurrentUser } from '../../common/decorators'
import { UserDto } from '../../common/dto'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @UseGuards(ApeAuthGuard)
  @Post('load_data')
  public async loadData(@CurrentUser() user: UserDto) {
    return await this.service.loadData(user)
  }

  @UseGuards(ApeAuthGuard)
  @Post('update_current_user')
  public async updateCurrentUser(@CurrentUser() user: UserDto, @Body() data: any) {
    return await this.service.updateCurrentUser(user, data)
  }
}
