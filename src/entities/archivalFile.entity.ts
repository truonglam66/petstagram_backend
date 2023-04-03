import { BaseEntity } from './base.entity'
import { Entity, Column } from 'typeorm'

@Entity('archival_file')
export class ArchivalFileEntity extends BaseEntity {

  @Column({
    type: 'text',
    nullable: false,
  })
  fileUrl: string

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  fileCode: string

  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  fileName: string

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  dataType: string

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string

}
