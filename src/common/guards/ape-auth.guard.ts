import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class ApeAuthGuard extends AuthGuard('ape') {}
