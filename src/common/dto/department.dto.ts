import { IsUUID, IsString, IsDate } from 'class-validator'

export class DepartmentDto {
  @IsUUID()
  id: string

  @IsString()
  code: string

  @IsString()
  name: string

  @IsString()
  description: string

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date
}
