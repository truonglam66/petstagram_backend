import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { PostEntity } from './post.entity'

@Entity({ name: 'photo' })
export class PhotoEntity extends BaseEntity {
  @Column({
    nullable: false,
  })
  photoUrl: string
  
  @Column({
    nullable: false,
  })
  userId: string
  
  @Column({
    nullable: false,
  })
  postId: string
  @ManyToOne(() => PostEntity, (p) => p.photos)
  @JoinColumn({ name: 'postId', referencedColumnName: 'id' })
  post: Promise<PostEntity>
}
