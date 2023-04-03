import { IsString, IsEmail } from 'class-validator'
import { BaseDto } from './base.dto'

export class EmployeeDto extends BaseDto {

  @IsString()
  fullName: string

  @IsEmail()
  email: string

  @IsString()
  code: string

  @IsString()
  departmentId: string

}
