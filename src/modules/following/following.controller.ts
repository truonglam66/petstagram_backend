import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { FollowingService} from './following.service'
import { ApeAuthGuard } from '../../common/guards'
import { CurrentUser } from '../../common/decorators'

@Controller('following')
export class FollowingController {
  constructor(private readonly service: FollowingService) {}

  @UseGuards(ApeAuthGuard)
  @Post('load_data')
  public async loadData(@CurrentUser() userLogin) {
    return await this.service.loadData(userLogin)
  }

  @UseGuards(ApeAuthGuard)
  @Post('create_data')
  public async createData(@CurrentUser() userLogin, @Body() data: any) {
    return await this.service.createData(userLogin, data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('update_data')
  public async updateData(@CurrentUser() userLogin, @Body() data: any) {
    return await this.service.updateData(userLogin, data)
  }
}
