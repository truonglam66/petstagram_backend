import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { DistrictService } from './district.service'
import { JwtAuthGuard } from '../../common/guards'
import { PaginationDto } from '../../common/dto'

@Controller('districts')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @UseGuards(JwtAuthGuard)
  @Post('find')
  public async find(@Body() data: { cityId: string }) {
    return await this.districtService.find(data)
  }

  @UseGuards(JwtAuthGuard)
  @Post('load_data')
  public async loadData(@Body() data: { cityId: string }) {
    return await this.districtService.loadData(data)
  }

  @UseGuards(JwtAuthGuard)
  @Post('pagination')
  public async pagination(@Body() data: PaginationDto) {
    return await this.districtService.pagination(data)
  }
}
