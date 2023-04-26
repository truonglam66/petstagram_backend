import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'
import { MessageObjectEntity } from './messageObject.entity'
import { UserEntity } from './user.entity'
/**
 * tin nhắn
 */
@Entity('message')
export class MessageEntity extends BaseEntity {
  /** User */
  @Column({ nullable: false })
  userId: string
  @ManyToOne(() => UserEntity, (p) => p.messages)
  @JoinColumn({name: 'userId', referencedColumnName: 'id'})
  user: Promise<UserEntity>

  /** Ngày gửi tin */
  @Column({ nullable: false })
  processDate: Date

  /** Tên */
  @Column({
    type: 'varchar',
    length: 500,
    nullable: false,
  })
  title: string

  /** Nội dung */
  @Column({
    type: 'text',
    nullable: true,
  })
  content: string
  
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  status: string
  
  @OneToMany(() => MessageObjectEntity, (p) => p.message)
  objects: Promise<MessageObjectEntity[]>
}
