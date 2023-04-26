import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { PostEntity } from './post.entity'
import { UserEntity } from './user.entity'

@Entity({ name: 'comment' })
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
  @ManyToOne(() => UserEntity, (p) => p.comments)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: Promise<UserEntity>

  @Column({
    nullable: false,
  })
  postId: string
  @ManyToOne( () => PostEntity, (p) => p.comments)
  @JoinColumn({ name: 'postId', referencedColumnName: 'id' })
  post: Promise<PostEntity>
}
