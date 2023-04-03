import { IsString, IsOptional, IsNumber } from 'class-validator'

export class QueryPaginationDto {
  @IsString()
  @IsOptional()
  sort?: string

  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  text?: string

  @IsNumber()
  skip: number

  @IsNumber()
  take: number
}
