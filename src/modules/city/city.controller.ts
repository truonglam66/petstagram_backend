import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { CityService } from './city.service'
import { JwtAuthGuard } from '../../common/guards'
import { PaginationDto } from '../../common/dto'

@Controller('cities')
export class CityController {
  constructor(private readonly service: CityService) {}

  @UseGuards(JwtAuthGuard)
  @Post('find')
  public async find(@Body() data: { id?: string }) {
    return await this.service.find(data)
  }

  @UseGuards(JwtAuthGuard)
  @Post('pagination')
  public async pagination(@Body() data: PaginationDto) {
    return await this.service.pagination(data)
  }
}
