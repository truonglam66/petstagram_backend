import { Module } from '@nestjs/common'
import { FirebaseService } from './firebase.service'
import { FirebaseController } from './firebase.controller'
import { UserRepository } from '../../repositories'
import { TypeOrmExModule } from '../../typeorm'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  controllers: [FirebaseController],
  providers: [FirebaseService],
  exports: [FirebaseService],
})
export class FirebaseModule {}
