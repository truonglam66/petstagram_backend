import { Repository } from 'typeorm'
import { ArchivalFileEntity } from '../entities'
import { CustomRepository } from '../typeorm'
@CustomRepository(ArchivalFileEntity)
export class ArchivalFileRepository extends Repository<ArchivalFileEntity> {}
