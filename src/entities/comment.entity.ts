import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { PostEntity } from './post.entity'
import { UserEntity } from './user.entity'

@Entity({ name: 'user' })
export class CommentEntity extends BaseEntity {
  @Column({
    type: 'text',
    nullable: true,
  })
  content: string

  @Column({
    nullable: false,
  })
  userId: string

  @Column({
    nullable: false,
  })
  postId: string

  @ManyToOne(() => UserEntity, (p) => p.comments)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: Promise<UserEntity>

  @ManyToOne( () => PostEntity, (p) => p.comments)
  @JoinColumn({ name: 'postId', referencedColumnName: 'id' })
  post: Promise<PostEntity>
}
