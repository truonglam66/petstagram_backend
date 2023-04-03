import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateUsernameDto {
  @IsNotEmpty()
  @IsString()
  currentPassword: string

  @IsString()
  newUsername: string
}
