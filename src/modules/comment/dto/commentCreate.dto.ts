import { IsNotEmpty, IsString } from 'class-validator'

export class CommentCreateDto {
  @IsNotEmpty()
  @IsString()
  postId: string

  @IsNotEmpty()
  content: string
}