import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'
import { PhotoEntity } from '../../../entities/photo.entity'

export class PostUpdateDto {
  @IsUUID()
  id: string

  @IsNotEmpty()
  @IsString()
  title: string

  @IsOptional()
  @IsString()
  content: string
 
  @IsOptional()
  photos: PhotoEntity[]
}