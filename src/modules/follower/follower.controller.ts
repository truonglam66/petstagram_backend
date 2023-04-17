import { Controller, Post } from '@nestjs/common'
import { CurrentUser } from '../../common/decorators'
import { FollowerService } from './follower.service'

@Controller('following')
export class FollowerController {
  constructor(private readonly service: FollowerService) {}

  @Post('load_data')
  public async loadData(@CurrentUser() userLogin) {
    return await this.service.loadData(userLogin)
  }
}
