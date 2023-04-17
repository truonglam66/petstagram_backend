import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtPayloadDto } from './dto/jwt-payload.dto'
import { UserRepository } from '../../repositories'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(protected readonly configService: ConfigService, private readonly userRepo: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
      passReqToCallback: true,
    })
  }

  async validate(header: Headers, payload: JwtPayloadDto) {
    const user = await this.userRepo.findOne({ where: { id: payload.uid } })
    if (!user) throw new UnauthorizedException('Không có quyền truy cập!')

    delete user.password

    return { ...user }
  }
}
