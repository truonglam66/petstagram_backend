import { IsNotEmpty, IsString, IsEmail } from 'class-validator'

export class SendConfirmCodeDto {
  @IsNotEmpty()
  username: string
  @IsNotEmpty()
  @IsEmail()
  email: string
}

export class SendConfirmCodeResultDto {
  message: string
}
