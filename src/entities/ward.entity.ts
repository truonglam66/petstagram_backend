import { BaseEntity } from './base.entity'
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm'
import { DistrictEntity } from './district.entity'

@Entity('ward')
export class WardEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 250,
    nullable: false,
  })
  code: string

  @Column({
    type: 'varchar',
    length: 250,
    nullable: false,
  })
  name: string

  @Column({
    type: 'varchar',
    length: 36,
    nullable: false,
  })
  districtId: string

  @ManyToOne(() => DistrictEntity, (p) => p.wards)
  @JoinColumn({ name: 'districtId', referencedColumnName: 'id' })
  district: Promise<DistrictEntity>
}
