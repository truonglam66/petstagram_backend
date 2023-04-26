import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UserRegisterDto {
  @IsString()
  username: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsNotEmpty()
  @IsString()
  fullName: string

  @IsOptional()
  @IsString()
  type: string
}
