import { Body, Controller, Post } from '@nestjs/common'
import { PostService } from './post.service'

@Controller('post')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Post('load_data')
  public async loadData() {
    return await this.service.loadData()
  }

  @Post('create_data')
  public async createData(@Body() data: any) {
    return await this.service.createData(data)
  }

  @Post('update_data')
  public async updateData(@Body() data: any) {
    return await this.service.updateData(data)
  }
}
