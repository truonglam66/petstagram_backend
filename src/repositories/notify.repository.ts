import { Repository } from 'typeorm'
import { NotifyEntity } from '../entities/notify.entity'
import { CustomRepository } from '../typeorm'

@CustomRepository(NotifyEntity)
export class NotifyRepository extends Repository<NotifyEntity> {}
