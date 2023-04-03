import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { PostEntity } from './post.entity'
import { UserEntity } from './user.entity'

@Entity({ name: 'user' })
export class ReactionEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 10,
    nullable: false,
  })
  type: string

  @Column({
    nullable: false,
  })
  userId: string

  @Column({
    nullable: false,
  })
  postId: string

  @ManyToOne(() => UserEntity, (p) => p.reactions)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: Promise<UserEntity>

  @ManyToOne( () => PostEntity, (p) => p.reactions)
  @JoinColumn({ name: 'postId', referencedColumnName: 'id' })
  post: Promise<PostEntity>
}
