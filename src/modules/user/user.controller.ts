import { Body, Controller, Post } from '@nestjs/common'
import { CurrentUser } from '../../common/decorators'
import { UserDto } from '../../common/dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('load_data')
  public async loadData(@CurrentUser() user: UserDto) {
    return await this.service.loadData(user)
  }

  @Post('update_current_user')
  public async updateCurrentUser(@CurrentUser() user: UserDto, @Body() data: any) {
    return await this.service.updateCurrentUser(user, data)
  }
}
