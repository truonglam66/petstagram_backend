import { IsNotEmpty, IsString } from 'class-validator'

export class UpdatePasswordDto {
  @IsNotEmpty()
  @IsString()
  currentPassword: string

  @IsString()
  newPassword: string

  @IsString()
  confirmNewPassword: string
}
