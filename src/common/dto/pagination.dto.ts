import { IsNumber, IsObject, IsArray, IsOptional } from 'class-validator'

export class PaginationDto {
  @IsArray()
  @IsOptional()
  relations?: any

  @IsObject()
  @IsOptional()
  where?: any

  @IsObject()
  @IsOptional()
  order?: any

  @IsNumber()
  skip: number

  @IsNumber()
  take: number
}
