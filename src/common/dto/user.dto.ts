import { DateAxisOptions } from 'aws-sdk/clients/quicksight'
import { IsDate, IsOptional, IsString, IsUUID } from 'class-validator'

export class UserDto {
  @IsUUID()
  id: string

  @IsString()
  username: string

  @IsString()
  fullName: string

  @IsString()
  type: string

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: DateAxisOptions

  @IsOptional()
  avatarUrl: string
}
