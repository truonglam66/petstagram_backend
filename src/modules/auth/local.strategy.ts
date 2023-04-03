import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserRepository } from '../../repositories'
import { apeAuthApiHelper } from '../../helpers'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService, private readonly userRepo: UserRepository) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    })
  }

  async validate(username: string, password: string) {
    const isProduct = process.env.IS_PRODUCT == 'true'
    if (isProduct) {
      const data: any = await apeAuthApiHelper.login({ username, password })

      // Xác thực user Product
      const checkUser = await this.authService.validateUserProduct(data.userType, data.companyId, username)
      if (!checkUser)
        throw new UnauthorizedException('Tên đăng nhập hoặc mật khẩu không hợp lệ, vui lòng kiểm tra lại!')

      const user: any = await this.userRepo.findOne({ where: { username, isDeleted: false } })
      if (!user) throw new UnauthorizedException('Không có quyền truy cập!')

      delete user.password
      return { ...user, accessToken: data.accessToken }
    }
    // AUTH: On-premise
    else {
      // throw new UnauthorizedException('Không có quyền truy cập!')
      const user: any = await this.authService.validateUserOnPremise(username, password)
      if (!user) {
        throw new UnauthorizedException('Tên đăng nhập hoặc mật khẩu không hợp lệ, vui lòng kiểm tra lại!')
      }
      delete user.password
      return user
    }
  }
}
