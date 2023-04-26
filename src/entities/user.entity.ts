import { compare, hash } from 'bcrypt'
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm'
import { PWD_SALT_ROUNDS } from '../common/constants'
import { BaseEntity } from './base.entity'
import { CommentEntity } from './comment.entity'
import { FollowerEntity } from './follower.entity'
import { FollowingEntity } from './following.entity'
import { MessageEntity } from './message.entity'
import { MessageObjectEntity } from './messageObject.entity'
import { NotifyEntity } from './notify.entity'
import { PostEntity } from './post.entity'
import { ReactionEntity } from './reaction.entity'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  username: string

  @Column({
    type: 'varchar',
    length: 250,
    unique: false,
  })
  fullName: string

  @Column({
    name: 'password',
    type: 'text',
    nullable: false,
  })
  password: string

  @Column({
    type: 'text',
    nullable: true,
  })
  fcmToken: string

  @Column({
    nullable: true,
  })
  avatarUrl: string

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      const hashedPassword = await hash(this.password, PWD_SALT_ROUNDS)
      this.password = hashedPassword
    }
  }

  comparePassword(candidate: string) {
    return compare(candidate, this.password)
  }

  @OneToMany(() => MessageObjectEntity, (p) => p.user)
  messageObjects: Promise<MessageObjectEntity[]>

  @OneToMany(() => NotifyEntity, (p) => p.user)
  notifys: Promise<NotifyEntity[]>

  @OneToMany(() => PostEntity, (p) => p.user)
  posts: Promise<PostEntity>

  @OneToMany(() => CommentEntity, (p) => p.user)
  comments: Promise<CommentEntity>

  @OneToMany(() => ReactionEntity, (p) => p.user)
  reactions: Promise<ReactionEntity>

  @OneToMany(() => FollowerEntity, (p) => p.user)
  followers: Promise<FollowerEntity>

  @OneToMany(() => FollowingEntity, (p) => p.user)
  followings: Promise<FollowingEntity>

  @OneToMany(() => MessageEntity, (p) => p.user)
  messages: Promise<MessageEntity[]>
}
