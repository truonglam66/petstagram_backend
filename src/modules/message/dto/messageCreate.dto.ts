import { IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { MessageObjectDto } from '.'

export class MessageCreateDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  content: string

  @IsOptional()
  status: string

  @IsNotEmpty()
  processDate: Date

  @IsOptional()
  apartmentId: string

  @IsOptional()
  roomId: string

  isSendNow: boolean

  __objects__: MessageObjectDto[]
}
