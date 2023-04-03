import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { UserDto } from '../dto'

export const CurrentUser = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  const user = request.user
  return plainToClass(UserDto, request.user)
})
