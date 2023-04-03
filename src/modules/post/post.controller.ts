import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { PostService } from './post.service'
import { ApeAuthGuard } from '../../common/guards'

@Controller('post')
export class PostController {
  constructor(private readonly service: PostService) {}

  @UseGuards(ApeAuthGuard)
  @Post('load_data')
  public async loadData() {
    return await this.service.loadData()
  }

  @UseGuards(ApeAuthGuard)
  @Post('create_data')
  public async createData(@Body() data: any) {
    return await this.service.createData(data)
  }

  @UseGuards(ApeAuthGuard)
  @Post('update_data')
  public async updateData(@Body() data: any) {
    return await this.service.updateData(data)
  }
}
