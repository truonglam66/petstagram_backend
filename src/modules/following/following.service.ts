import { Injectable } from '@nestjs/common'
import { UserDto } from '../../common/dto'
import { FollowingRepository } from '../../repositories/following.repository'
import { FollowingCreateDto } from './dto/followingCreate.dto'
import { FollowingEntity } from '../../entities/following.entity'
import { CREATE_SUCCESS, DELETE_SUCCESS, UPDATE_SUCCESS } from '../../common/constants'

@Injectable()
export class FollowingService {
  constructor(private repository: FollowingRepository) {}

  /**
   * @returns danh sách những following của user
   */
  public async loadData(userLogin: UserDto) {
    return await this.repository.find({
      where: {
        isDeleted: false,
        userId: userLogin.id,
      }
    })
  }

  /**
   * 
   * @param userLogin 
   * @param data 
   * @returns thông báo thêm thành công 1 following
   */
  public async createData(userLogin: UserDto, data: FollowingCreateDto) {
    return await this.repository.manager.transaction(async (trans) => {
      let result = new FollowingEntity()

      result.followingId = data.followingId
      result.userId = userLogin.id

      trans.getRepository(FollowingRepository).save(result)

      return {message: CREATE_SUCCESS}
    })
  }

  /**
   * 
   * @param userLogin 
   * @param data 
   * @returns thông báo cập nhật danh sách following thành công
   */
  public async updateData(userLogin: UserDto, data: any) {
    return await this.repository.manager.transaction(async (trans) => {

      if(data.action === 'delete') {
        data.isDeleted = true
        trans.getRepository(FollowingRepository).save(data)
        return {message: DELETE_SUCCESS}
      }

      let result = new FollowingEntity()

      result.followingId = data.followingId
      result.userId = userLogin.id

      trans.getRepository(FollowingRepository).save(result)

      return {message: UPDATE_SUCCESS}
    })
  }
}
