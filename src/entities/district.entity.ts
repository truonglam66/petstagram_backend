import { BaseEntity } from './base.entity'
import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { CityEntity } from './city.entity'
import { WardEntity } from './ward.entity'

@Entity('district')
export class DistrictEntity extends BaseEntity {
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

  @OneToMany(() => WardEntity, (p) => p.district)
  wards: Promise<WardEntity[]>

  @Column({
    type: 'varchar',
    length: 36,
    nullable: false,
  })
  cityId: string

  @ManyToOne(() => CityEntity, (p) => p.districts)
  @JoinColumn({ name: 'cityId', referencedColumnName: 'id' })
  city: Promise<CityEntity>
}
