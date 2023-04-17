import { Column, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'
import { MessageObjectEntity } from './messageObject.entity'
/**
 * tin nhắn
 */
@Entity('message')
export class MessageEntity extends BaseEntity {
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

  /** Mô tả */
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
