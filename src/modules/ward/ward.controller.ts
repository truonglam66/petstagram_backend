import { Controller, UseGuards, Post, Body } from '@nestjs/common'
import { WardService } from './ward.service'
import { JwtAuthGuard } from '../../common/guards'
import { PaginationDto } from '../../common/dto'

@Controller('wards')
export class WardController {
  constructor(private readonly wardService: WardService) {}

  @UseGuards(JwtAuthGuard)
  @Post('find')
  public async find(@Body() data: { districtId: string; id: string }) {
    return await this.wardService.find(data)
  }

  @UseGuards(JwtAuthGuard)
  @Post('pagination')
  public async pagination(@Body() data: PaginationDto) {
    return await this.wardService.pagination(data)
  }
}
