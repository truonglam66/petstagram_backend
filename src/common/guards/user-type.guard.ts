// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
// import { Reflector } from '@nestjs/core'
// import { Request } from 'express'
// import { UserDto } from '../dto'

// @Injectable()
// export class UserTypeGuard implements CanActivate {
//   constructor(private readonly reflector: Reflector) {}

//   canActivate(ctx: ExecutionContext): boolean {
//     const types = this.reflector.get<string[]>('user-types', ctx.getHandler())

//     if (!types) {
//       return true
//     }

//     const request = ctx.switchToHttp().getRequest<Request>()
//     const user = request.user as UserDto

//     const hasType = () => {
//       const { type } = user

//       const result = types.includes(type)

//       return result
//     }

//     return user && types && hasType()
//   }
// }
