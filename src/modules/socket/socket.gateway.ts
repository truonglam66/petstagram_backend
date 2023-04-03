import { Logger, OnModuleInit } from '@nestjs/common'
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { Server } from 'socket.io'
@WebSocketGateway({
  // namespace: 'Socket',
  cors: {
    origin: '*',
  },
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit {
  @WebSocketServer()
  server: Server
  users: number = 0
  private logger: Logger = new Logger('AppGateway')

  onModuleInit() {}

  async handleConnection() {
    // A client has connected
    this.users++
    // Notify connected clients of current users
    this.server.emit('users', this.users)
  }

  async handleDisconnect() {
    // // A client has disconnected
    this.users--
    // Notify connected clients of current users
    this.server.emit('users', this.users)
  }

  /** SETTING STRING */
  @SubscribeMessage('NEW_SETTING_STRING')
  NewSettingString(@MessageBody() data: any) {
    this.server.emit('NEW_SETTING_STRING', data)
  }
}
