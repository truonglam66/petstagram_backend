import { SetMetadata } from '@nestjs/common'

export const UserTypes = (...types: string[]) => SetMetadata('user-types', types)
