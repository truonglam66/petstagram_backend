import { Body, Controller, Post, Req, Request, UseGuards } from '@nestjs/common'
import { Request as IRequest } from 'express'
import { LoginService } from './login.service'

import { CurrentUser } from '../../common/decorators'
import { UserDto } from '../../common/dto'
import { LocalAuthGuard } from '../../common/guards'
import { UserAuthDto } from '../../helpers'
import { ForgotPasswordDto } from './dto/forgot-password.dto'
import { UserRegisterDto } from './dto/register.dto'
import { RequestFCMTokenDto } from './dto/requestFcmToken.dto'
import { SendConfirmCodeDto } from './dto/send-confirm-code.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'
import { UpdateUsernameDto } from './dto/update-username'
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Req() req: IRequest) {
    return await this.loginService.login(req.user as UserAuthDto)
  }

  @Post('authorization-client')
  public async authorizationClient(@Request() req: IRequest) {
    return await this.loginService.authorizationClient(req.user as UserDto)
  }

  @Post('register')
  public async register(@Body() user: UserRegisterDto) {
    return await this.loginService.register(user)
  }

  @Post('update-password')
  public async UpdatePassword(@Body() info: UpdatePasswordDto, @CurrentUser() user: UserDto) {
    return await this.loginService.UpdatePassword(info, user)
  }

  @Post('update-username')
  public async updateUsername(@Body() info: UpdateUsernameDto, @CurrentUser() user: UserDto) {
    return await this.loginService.updateUsername(info, user)
  }

  @Post('send-confirm-code')
  public async sendConfirmCode(@Body() data: SendConfirmCodeDto) {
    return await this.loginService.sendConfirmCode(data)
  }

  @Post('forgot-password')
  public async forgotPassword(@Body() data: ForgotPasswordDto) {
    return await this.loginService.forgotPassword(data)
  }

  @Post('request_fcmtoken')
  public async requestFcmToken(@Body() data: RequestFCMTokenDto) {
    return await this.loginService.requestFcmToken(data)
  }
}
