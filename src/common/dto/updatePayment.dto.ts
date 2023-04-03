import { IsNotEmpty, IsString } from 'class-validator'

export class UpdatePaymentDto {
  @IsNotEmpty()
  @IsString()
  id: string

  @IsString()
  money: number

  @IsString()
  paymentType: string

  @IsString()
  description: string
}
