import { Injectable } from '@nestjs/common'
import { UserDto } from '../../common/dto'
import { FollowerRepository } from '../../repositories/follower.repository'

@Injectable()
export class FollowerService {
  constructor(private repository: FollowerRepository) {}

  /**
   * @returns danh sách những follower của user
   */
  public async loadData(userLogin: UserDto) {
    return await this.repository.find({
      where: {
        isDeleted: false,
        userId: userLogin.id,
      }
    })
  }
}
