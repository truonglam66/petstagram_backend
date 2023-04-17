import { Body, Controller, Post } from '@nestjs/common'
import { CurrentUser } from '../../common/decorators'
import { FollowingService } from './following.service'

@Controller('following')
export class FollowingController {
  constructor(private readonly service: FollowingService) {}

  @Post('load_data')
  public async loadData(@CurrentUser() userLogin) {
    return await this.service.loadData(userLogin)
  }

  @Post('create_data')
  public async createData(@CurrentUser() userLogin, @Body() data: any) {
    return await this.service.createData(userLogin, data)
  }

  @Post('update_data')
  public async updateData(@CurrentUser() userLogin, @Body() data: any) {
    return await this.service.updateData(userLogin, data)
  }
}
