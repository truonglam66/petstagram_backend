import { Body, Controller, Post, Req, Request, UseGuards } from '@nestjs/common'
import { Request as IRequest } from 'express'
import { AuthService } from './auth.service'

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
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Req() req: IRequest) {
    return await this.authService.login(req.user as UserAuthDto)
  }

  @Post('authorization-client')
  public async authorizationClient(@Request() req: IRequest) {
    return await this.authService.authorizationClient(req.user as UserDto)
  }

  @Post('register')
  public async register(@Body() user: UserRegisterDto) {
    return await this.authService.register(user)
  }

  @Post('update-password')
  public async UpdatePassword(@Body() info: UpdatePasswordDto, @CurrentUser() user: UserDto) {
    return await this.authService.UpdatePassword(info, user)
  }

  @Post('update-username')
  public async updateUsername(@Body() info: UpdateUsernameDto, @CurrentUser() user: UserDto) {
    return await this.authService.updateUsername(info, user)
  }

  @Post('send-confirm-code')
  public async sendConfirmCode(@Body() data: SendConfirmCodeDto) {
    return await this.authService.sendConfirmCode(data)
  }

  @Post('forgot-password')
  public async forgotPassword(@Body() data: ForgotPasswordDto) {
    return await this.authService.forgotPassword(data)
  }

  @Post('request_fcmtoken')
  public async requestFcmToken(@Body() data: RequestFCMTokenDto) {
    return await this.authService.requestFcmToken(data)
  }
}
