import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { ReactionService} from './reaction.service'
import { ApeAuthGuard } from '../../common/guards'
import { CurrentUser } from '../../common/decorators'

@Controller('Reaction')
export class ReactionController {
  constructor(private readonly service: ReactionService) {}

  @UseGuards(ApeAuthGuard)
  @Post('load_data')
  public async loadData(data: any) {
    return await this.service.loadDataToPost(data)
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
