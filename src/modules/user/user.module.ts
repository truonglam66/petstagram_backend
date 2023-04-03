import { Module } from '@nestjs/common'
import { UserRepository } from '../../repositories'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypeOrmExModule } from '../../typeorm'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
