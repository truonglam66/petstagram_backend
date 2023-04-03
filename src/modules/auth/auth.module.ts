import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { PassportModule } from '@nestjs/passport'
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserRepository } from '../../repositories'
import { LocalStrategy } from './local.strategy'
import { ApeStrategy } from './ape.strategy'
import { TypeOrmExModule } from '../../typeorm'
import { JwtStrategy } from './jwt.strategy'
import { UserService } from '../user/user.service'

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([UserRepository]),
    PassportModule.register({ session: true }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<JwtModuleOptions> => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRY') },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, ApeStrategy, UserService],
  exports: [AuthService],
})
export class AuthModule {}
