import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { CommentService} from './comment.service'
import { ApeAuthGuard } from '../../common/guards'
import { CurrentUser } from '../../common/decorators'

@Controller('comment')
export class CommentController {
  constructor(private readonly service: CommentService) {}

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
