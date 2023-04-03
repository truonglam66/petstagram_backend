import { Repository } from 'typeorm'
import { PhotoEntity } from '../entities/photo.entity'
import { CustomRepository } from '../typeorm'

@CustomRepository(PhotoEntity)
export class PhotoRepository extends Repository<PhotoEntity> {}
