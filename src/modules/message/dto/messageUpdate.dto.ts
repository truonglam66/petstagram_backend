import { IsNotEmpty, IsString } from 'class-validator'
import { MessageCreateDto } from './messageCreate.dto'

export class MessageUpdateDto extends MessageCreateDto {
  @IsNotEmpty()
  @IsString()
  id: string

}
