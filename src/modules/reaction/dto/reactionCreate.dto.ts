import { IsNotEmpty, IsString } from 'class-validator'

export class ReactionCreateDto {
  @IsNotEmpty()
  @IsString()
  postId: string

  @IsNotEmpty()
  type: string
}