import { IsOptional } from 'class-validator'

export class SendContractZaloDto {
  @IsOptional()
  id: string

  @IsOptional()
  phone: string

  @IsOptional()
  expiryDate: Date

  @IsOptional()
  extensionDate: Date

  @IsOptional()
  residentName: string

  @IsOptional()
  contractCode: string

  @IsOptional()
  roomName: string
}
