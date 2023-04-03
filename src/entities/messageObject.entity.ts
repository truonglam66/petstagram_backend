import { BaseEntity } from './base.entity'
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm'
import { UserEntity } from './user.entity'
import { MessageEntity } from './message.entity'

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

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  employeeId: string



  @ManyToOne(() => MessageEntity, (p) => p.objects)
  @JoinColumn({ name: 'messageId', referencedColumnName: 'id' })
  message: Promise<MessageEntity>

  @ManyToOne(() => UserEntity, (p) => p.messageObjects)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: Promise<UserEntity>

}
