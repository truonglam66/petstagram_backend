import { IsNotEmpty, IsString } from 'class-validator'

export class RequestFCMTokenDto {
  @IsNotEmpty()
  @IsString()
  userId: string

  fcmToken: string
}
