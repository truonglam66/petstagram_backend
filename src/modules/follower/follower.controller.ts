import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { FollowerService} from './follower.service'
import { ApeAuthGuard } from '../../common/guards'
import { CurrentUser } from '../../common/decorators'

@Controller('following')
export class FollowerController {
  constructor(private readonly service: FollowerService) {}

  @UseGuards(ApeAuthGuard)
  @Post('load_data')
  public async loadData(@CurrentUser() userLogin) {
    return await this.service.loadData(userLogin)
  }
}
