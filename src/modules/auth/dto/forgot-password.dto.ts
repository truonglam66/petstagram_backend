import { IsNotEmpty, IsString, IsEmail } from 'class-validator'

export class ForgotPasswordDto {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  confirmCode: string

  @IsNotEmpty()
  @IsString()
  newPassword: string

  @IsNotEmpty()
  @IsString()
  confirmNewPassword: string
}

export class ForgotPasswordResultDto {
  message: string
}
