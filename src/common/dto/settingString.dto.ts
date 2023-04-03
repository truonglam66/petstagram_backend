import { IsUUID, IsString, IsDate } from 'class-validator'

export class SettingStringDto {
  @IsUUID()
  id: string

  @IsString()
  code: string

  @IsString()
  name: string

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date
}
