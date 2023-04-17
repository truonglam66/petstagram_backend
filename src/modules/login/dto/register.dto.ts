import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class UserRegisterDto {
  @IsString()
  username: string

  @IsNotEmpty()
  @IsString()
  password: string
}
