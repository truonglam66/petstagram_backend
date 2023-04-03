import { BaseEntity } from './base.entity'
import { Entity, Column, OneToMany } from 'typeorm'
import { DistrictEntity } from './district.entity'

/** Danh sách tỉnh thành */
@Entity('city')
export class CityEntity extends BaseEntity {
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
    length: 50,
    nullable: false,
    default: '',
  })
  area: string

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    default: '',
  })
  region: string

  /** DS quận huyện của tỉnh thành */
  @OneToMany(() => DistrictEntity, (p) => p.city)
  districts: Promise<DistrictEntity[]>
}
