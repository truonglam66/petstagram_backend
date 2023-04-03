import { Module } from '@nestjs/common'
import { MessageRepository } from '../../repositories/message.repository'
import { MessageService } from './message.service'
import { MessageController } from './message.controller'
import { FirebaseModule } from '../firebase/firebase.module'
import { TypeOrmExModule } from '../../typeorm'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([MessageRepository]), FirebaseModule],
  controllers: [MessageController],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}
