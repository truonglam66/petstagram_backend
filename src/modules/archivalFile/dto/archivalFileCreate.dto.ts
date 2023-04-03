import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class ArchivalFileCreateDto {

  @IsNotEmpty()
  @IsString()
  fileUrl: string

  @IsOptional()
  fileCode: string

  @IsOptional()
  fileName: string

  @IsOptional()
  dataType: string

  @IsOptional()
  description: string

}
