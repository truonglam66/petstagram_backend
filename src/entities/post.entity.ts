import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'
import { CommentEntity } from './comment.entity'
import { PhotoEntity } from './photo.entity'
import { UserEntity } from './user.entity'

@Entity({ name: 'user' })
export class PostEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  title: string

  @Column({
    type: 'text',
    nullable: true,
  })
  content: string

  @Column({
    nullable: false,
  })
  userId: string

  @ManyToOne(() => UserEntity, (p) => p.posts)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: Promise<UserEntity>

  @OneToMany(() => PhotoEntity, (p) => p.post)
  photos: Promise<PhotoEntity>

  @OneToMany(() => CommentEntity, (p) => p.post)
  comments: Promise<CommentEntity>

  @OneToMany(() => CommentEntity, (p) => p.post)
  reactions: Promise<CommentEntity>
}
