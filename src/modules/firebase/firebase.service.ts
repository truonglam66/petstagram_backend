import { Injectable } from '@nestjs/common'
import { FirebaseDto } from './dto'
import { ConfigService } from '@nestjs/config'
import * as admin from 'firebase-admin'
import { UserRepository } from '../../repositories'

@Injectable()
export class FirebaseService {
  serviceAccount: any
  constructor(private readonly userRepo: UserRepository, private readonly configService: ConfigService) {
    this.serviceAccount = {
      type: this.configService.get<string>('FIRE_BASE_TYPE') || '',
      project_id: this.configService.get<string>('FIRE_BASE_PROJECT_ID') || '',
      private_key_id: this.configService.get<string>('FIRE_BASE_PRIVATE_KEY_ID') || '',
      private_key: this.configService.get<string>('FIRE_BASE_PRIVATE_KEY')?.replace(/\\n/g, '\n') || '',
      client_email: this.configService.get<string>('FIRE_BASE_CLIENT_EMAIL') || '',
      client_id: this.configService.get<string>('FIRE_BASE_CLIENT_ID') || '',
      auth_uri: this.configService.get<string>('FIRE_BASE_AUTH_URI') || 'https://accounts.google.com/o/oauth2/auth',
      token_uri: this.configService.get<string>('FIRE_BASE_TOKEN_URI') || 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url:
        this.configService.get<string>('FIRE_BASE_AUTH_PROVIDER_CERT_URL') ||
        'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: this.configService.get<string>('FIRE_BASE_CLIENT_CERT_URL') || '',
    }
  }

  public async Send(data: FirebaseDto[]) {
    try {
      for (let item of data) {
        let token: any = await this.userRepo.findOne({ where: { id: item.userId } })
        let data_send = { title: item.title, content: item.content }
        let message = { data: data_send, token: token.fcmToken }
        if (token && token.fcmToken) {
          await this.Push(message)
        }
      }
    } catch (error) {
      throw error
    }
  }

  async Push(message: any) {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(this.serviceAccount),
        databaseURL:
          this.configService.get<string>('FIRE_BASE_databaseURL') ||
          'https://nhatrosachse-62de4-default-rtdb.asia-southeast1.firebasedatabase.app',
      })
    }
    const notification_options = {
      priority: 'high',
      timeToLive: 60 * 60 * 24,
      delay_while_idle: false,
      content_available: true,
    }
    const registrationToken = message.token
    var payload = {
      notification: {
        title: message.data.title,
        body: message.data.content,
        sound: 'default',
      },
    }
    admin
      .messaging()
      .sendToDevice(registrationToken, payload, notification_options)
      .then(() => {
        console.log('Send Success')
      })
      .catch((error: any) => {
        console.log(error)
      })
  }
}
