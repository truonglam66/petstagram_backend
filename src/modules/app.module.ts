import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { AuthModule } from './auth/auth.module'
import { UploadFileModule } from './uploadFile/uploadFile.module'
import { CommonModule } from './common/common.module'
import { ScheduleModule } from '@nestjs/schedule'
import { FirebaseModule } from './firebase/firebase.module'
import { MessageModule } from './message/message.module'
import { UserModule } from './user/user.module'
import { ArchivalFileModule } from './archivalFile/archivalFile.module'
import { CityModule } from './city/city.module'
import { WardModule } from './ward/ward.module'
import { SocketModule } from './socket/socket.module'
import { DistrictModule } from './district/district.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    AuthModule,
    UploadFileModule,
    CommonModule,
    FirebaseModule,
    MessageModule,
    UserModule,
    ArchivalFileModule,
    SocketModule,

    // SETTING
    CityModule,
    DistrictModule,
    WardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
