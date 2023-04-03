import { IsNotEmpty, IsString } from 'class-validator'
import { ArchivalFileCreateDto } from './archivalFileCreate.dto'

export class ArchivalFileUpdateDto extends ArchivalFileCreateDto {
  @IsNotEmpty()
  @IsString()
  id: string

}
