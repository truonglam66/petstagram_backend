import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { MessageEntity } from './message.entity'
import { UserEntity } from './user.entity'

/**
 * Đối tượng gửi
 */
@Entity('message_object')
export class MessageObjectEntity extends BaseEntity {

  @Column({
    type: 'varchar',
    length: 36,
    nullable: false,
  })
  messageId: string

  /** Trạng thái */
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  status: string

  @Column({
    type: 'varchar',
    length: 36,
    nullable: false,
  })
  userId: string

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  residentId: string

  @ManyToOne(() => MessageEntity, (p) => p.objects)
  @JoinColumn({ name: 'messageId', referencedColumnName: 'id' })
  message: Promise<MessageEntity>

  @ManyToOne(() => UserEntity, (p) => p.messageObjects)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: Promise<UserEntity>

}
