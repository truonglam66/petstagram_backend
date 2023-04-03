import { BaseEntity } from './base.entity'
import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm'
import { UserEntity } from './user.entity'
/**
 * Thông báo
 */
@Entity('notify')
export class NotifyEntity extends BaseEntity {
  /** enum NotifyObjectType */
  @Column({
    type: 'varchar',
    length: 500,
    nullable: false,
  })
  objectType: string

  @Column({
    type: 'varchar',
    length: 500,
    nullable: false,
  })
  title: string

  @Column({
    type: 'text',
    nullable: true,
  })
  content: string

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
    nullable: true,
  })
  jobId: string

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  jobDailyId: string

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  userId: string

  @Column({
    type: 'text',
    nullable: true,
  })
  dataJSON: string

  @ManyToOne(() => UserEntity, (p) => p.notifys)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: Promise<UserEntity>
}
