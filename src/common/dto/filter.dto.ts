import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class FilterDto {
  @IsOptional()
  month: Date

  @IsOptional()
  @IsString()
  roomId: string

  @IsOptional()
  @IsString()
  apartmentId: string

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
  @IsString()
  billId: string

  @IsOptional()
  @IsString()
  jobId: string

  @IsOptional()
  @IsString()
  sentBillStatus: string

  @IsOptional()
  @IsString()
  paymentType: string

  @IsOptional()
  skip: number

  @IsOptional()
  take: number

  @IsOptional()
  bill: any

  @IsOptional()
  type: any
}
