import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { UserRepository } from '../../repositories'
import { JwtPayloadDto } from './dto'
import { apeAuthApiHelper } from '../../helpers'

@Injectable()
export class ApeStrategy extends PassportStrategy(Strategy, 'ape') {
  constructor(protected configService: ConfigService, private userRepo: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
      passReqToCallback: true,
    })
  }

  async validate(req: Request, payload: JwtPayloadDto) {
    const isProduct = process.env.IS_PRODUCT == 'true'

    if (isProduct) {
      const header: any = req?.headers
      const token = header?.authorization
      if (!token) throw new UnauthorizedException('Không có quyền truy cập! (code: BEARER_TOKEN_ERROR)')
      const data: any = await apeAuthApiHelper.validateToken(token)
      if (!data) throw new UnauthorizedException('Không có quyền truy cập! (code: APE_AUTH_TOKEN_ERROR)')

      const user = await this.userRepo.findOne({
        where: { username: data.username, isDeleted: false },
        select: {
          id: true,
          employeeId: true,
          username: true,
          type: true,
        },
      })
      if (!user) throw new UnauthorizedException('Không có quyền truy cập! (code: APE_ROOM_USER_ERROR)')
      return { ...user }
    }
    // AUTH: On-premise
    else {
      // CHECK QUYỀN
      // throw new UnauthorizedException('Không có quyền truy cập! (code: APE_ROOM_USER_ERROR)')
      // if (!payload.uid) throw new UnauthorizedException('Không có quyền truy cập! (code: ROOM_TOKEN_ERROR)')
      const user = await this.userRepo.findOne({
        where: { id: payload.uid },
        select: {
          id: true,
          employeeId: true,
          username: true,
          type: true,
        },
      })
      if (!user) throw new UnauthorizedException('Không có quyền truy cập! (code: ROOM_USER_ERROR)')
    }
  }
}
