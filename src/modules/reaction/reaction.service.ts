import { Injectable } from '@nestjs/common'
import { UserDto } from '../../common/dto'
import { CREATE_SUCCESS, DELETE_SUCCESS, UPDATE_SUCCESS } from '../../common/constants'
import { ReactionRepository } from '../../repositories/reaction.repository'
import { ReactionCreateDto } from './dto/reactionCreate.dto'
import { ReactionEntity } from '../../entities/Reaction.entity'

@Injectable()
export class ReactionService {
  constructor(private repository: ReactionRepository) {}

  /**
   * @returns danh sách những reaction của user theo bài đăng
   */
  public async loadDataToPost(data: any) {
    return await this.repository.find({
      where: {
        isDeleted: false,
        postId: data.postId
      },
      order: {
        createdAt: 'DESC'
      }
    })
  }

  /**
   * 
   * @param userLogin 
   * @param data 
   * @returns thông báo thêm thành công 1 reaction
   */
  public async createData(userLogin: UserDto, data: ReactionCreateDto) {
    return await this.repository.manager.transaction(async (trans) => {
      let result = new ReactionEntity()

      result.userId = userLogin.id
      result.type = data.type
      result.postId = data.postId

      trans.getRepository(ReactionRepository).save(result)

      return {message: CREATE_SUCCESS}
    })
  }

  /**
   * 
   * @param userLogin 
   * @param data 
   * @returns thông báo cập nhật reaction thành công
   */
  public async updateData(userLogin: UserDto, data: any) {
    return await this.repository.manager.transaction(async (trans) => {

      if(data.action === 'delete') {
        data.isDeleted = true;
        trans.getRepository(ReactionRepository).save(data)
        return {message: DELETE_SUCCESS}
      }

      let result = new ReactionEntity()

      result.userId = userLogin.id
      result.type = data.type
      result.postId = data.postId

      trans.getRepository(ReactionRepository).save(result)

      return {message: UPDATE_SUCCESS}
    })
  }
}
