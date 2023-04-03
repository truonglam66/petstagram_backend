import { Injectable } from '@nestjs/common'
import { hash } from 'bcrypt'
import { compare } from 'mathjs'
import { enumData, ERROR_NOT_FOUND_DATA, PWD_SALT_ROUNDS, SUCCESS } from '../../common/constants'
import { UserDto } from '../../common/dto'
import { UserEntity } from '../../entities'
import { UserRepository } from '../../repositories'

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  public async loadData(userLogin: UserDto) {
    return await this.repository.find({
      where: {
        isDeleted: false,
        type: enumData.UserType.Employee.code,
      },
      // relations: ['employee'],
      relations: {
      },
      order: { fullName: 'ASC' },
    })
  }

  /**
   * cap nhat mat khau + avatar cho current user
   * @param userLogin
   * @returns
   */
  async updateCurrentUser(user: UserDto, data: any) {
    const currentUser = await this.repository.findOne({ where: { id: user.id } })
    if (!currentUser) throw new Error(ERROR_NOT_FOUND_DATA)
    currentUser.avatarUrl = data.avatarUrl
    currentUser.password = data.newPassword
    this.repository.manager.transaction(async (trans) => {
      await trans.getRepository(UserEntity).save(currentUser)
    })
    return { message: 'update success!' }
  }

  findByUserName(username: string) {
    return this.repository.findOne({ where: { username, isDeleted: false } })
  }

  getUserInfo(uid: string) {
    return this.repository.findOne({
      where: { id: uid, isDeleted: false },
      // relations: ['employee', 'apartmentEmployees', 'apartmentEmployees.apartment'],
      relations: {
      },
    })
  }
}
