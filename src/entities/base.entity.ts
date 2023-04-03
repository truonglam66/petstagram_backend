import { BaseEntity as Base, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

export abstract class BaseEntity extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  createdBy: string

  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  createdByName: string

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  updatedBy: string

  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  updatedByName: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column({
    name: 'isDeleted',
    nullable: false,
    default: false,
  })
  isDeleted: boolean
}
