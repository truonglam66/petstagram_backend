import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { UserEntity } from './user.entity'

@Entity({ name: 'follower' })
export class FollowerEntity extends BaseEntity {
  @Column({
    nullable: false,
  })
  followerId: string

  @Column({
    nullable: false,
  })
  userId: string
  @ManyToOne(() => UserEntity, (p) => p.followers)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: Promise<UserEntity>
}
