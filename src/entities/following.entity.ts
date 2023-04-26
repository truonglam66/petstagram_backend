import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { UserEntity } from './user.entity'

@Entity({ name: 'following' })
export class FollowingEntity extends BaseEntity {
  @Column({
    nullable: false,
  })
  followingId: string

  @Column({
    nullable: false,
  })
  userId: string
  @ManyToOne(() => UserEntity, (p) => p.followings)
  @JoinColumn({name: 'userId', referencedColumnName: 'id'})
  user: Promise<UserEntity>
}
