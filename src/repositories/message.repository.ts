import { Repository } from 'typeorm'
import { MessageEntity } from '../entities/message.entity'
import { CustomRepository } from '../typeorm'

@CustomRepository(MessageEntity)
export class MessageRepository extends Repository<MessageEntity> {}
