import { DateAggregationFunction } from 'aws-sdk/clients/quicksight'
import { IsOptional, IsString } from 'class-validator'

export class FilterDto {
  @IsOptional()
  month: DateAggregationFunction

  @IsOptional()
  @IsString()
  residentId: string

  @IsOptional()
  @IsString()
  status: string

  @IsOptional()
  @IsString()
  code: string

  @IsOptional()
  idNo: string

  @IsOptional()
  skip: number

  @IsOptional()
  take: number

  @IsOptional()
  bill: any

  @IsOptional()
  type: any
}
