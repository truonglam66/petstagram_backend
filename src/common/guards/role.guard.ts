import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Request } from 'express'
import { UserDto } from '../dto'

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(ctx: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', ctx.getHandler())

    if (!roles) {
      return true
    }

    const request = ctx.switchToHttp().getRequest<Request>()
    const user = request.user as UserDto
    const hasRole = () => {
      const { roles: userRoles = [] } = user

      const res = roles.some((role) => userRoles.includes(role))

      return res
    }

    return user && roles && hasRole()
  }
}
