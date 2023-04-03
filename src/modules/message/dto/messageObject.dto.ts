import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class MessageObjectDto {

  @IsOptional()
  id: string

  @IsOptional()
  messageId: string

  @IsOptional()
  status: string

  @IsNotEmpty()
  @IsString()
  userId: string

  @IsOptional()
  residentId: string

  @IsOptional()
  employeeId: string

}
