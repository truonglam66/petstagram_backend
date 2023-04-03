import { IsNotEmpty, IsString } from 'class-validator'

export class FollowingCreateDto {
  @IsNotEmpty()
  @IsString()
  followingId: string
}