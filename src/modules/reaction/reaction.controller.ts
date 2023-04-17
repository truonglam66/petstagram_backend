import { Body, Controller, Post } from '@nestjs/common'
import { CurrentUser } from '../../common/decorators'
import { ReactionService } from './reaction.service'

@Controller('Reaction')
export class ReactionController {
  constructor(private readonly service: ReactionService) {}

  @Post('load_data')
  public async loadData(data: any) {
    return await this.service.loadDataToPost(data)
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
