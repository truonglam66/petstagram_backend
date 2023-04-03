import { IsNotEmpty, IsString } from 'class-validator'

export class FilterOneDto {
  @IsNotEmpty()
  @IsString()
  id: string
}
