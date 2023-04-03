import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { PostEntity } from './post.entity'
import { UserEntity } from './user.entity'

@Entity({ name: 'user' })
export class PhotoEntity extends BaseEntity {
  @Column({
    nullable: false,
  })
  photoUrl: string

  @Column({
    nullable: false,
  })
  postId: string

  @Column({
    nullable: false,
  })
  userId: string

  @ManyToOne(() => PostEntity, (p) => p.photos)
  @JoinColumn({ name: 'postId', referencedColumnName: 'id' })
  post: Promise<PostEntity>
}
