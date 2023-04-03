import { IsUUID, IsString, IsDate, IsArray, IsOptional } from 'class-validator'

export class UserDto {
  @IsUUID()
  id: string

  @IsString()
  username: string

  @IsString()
  fullName: string

  @IsString()
  type: string

  @IsOptional()
  @IsString()
  apartmentId?: string | null

  @IsOptional()
  @IsString()
  residentId: string | null

  @IsOptional()
  @IsString()
  employeeId: string | null

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date

  @IsOptional()
  @IsArray()
  roles?: string[]

  @IsOptional()
  employeeType?: string | null

  @IsString()
  companyId: string

  @IsOptional()
  avatarUrl: string
}
