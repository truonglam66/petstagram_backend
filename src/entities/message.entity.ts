import { BaseEntity } from './base.entity'
import { Entity, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm'
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
    length: 36,
    nullable: true,
  })
  apartmentId: string

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  roomId: string

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  status: string

  @OneToMany(() => MessageObjectEntity, (p) => p.message)
  objects: Promise<MessageObjectEntity[]>
}
