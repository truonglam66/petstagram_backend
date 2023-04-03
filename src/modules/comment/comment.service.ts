import { Injectable } from '@nestjs/common'
import { UserDto } from '../../common/dto'
import { CREATE_SUCCESS, DELETE_SUCCESS, UPDATE_SUCCESS } from '../../common/constants'
import { CommentRepository } from '../../repositories/comment.repository'
import { CommentCreateDto } from './dto/commentCreate.dto'
import { CommentEntity } from '../../entities/comment.entity'

@Injectable()
export class CommentService {
  constructor(private repository: CommentRepository) {}

  /**
   * @returns danh sách những comment của user theo bài đăng
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
   * @returns thông báo thêm thành công 1 comment
   */
  public async createData(userLogin: UserDto, data: CommentCreateDto) {
    return await this.repository.manager.transaction(async (trans) => {
      let result = new CommentEntity()

      result.userId = userLogin.id
      result.content = data.content
      result.postId = data.postId

      trans.getRepository(CommentRepository).save(result)

      return {message: CREATE_SUCCESS}
    })
  }

  /**
   * 
   * @param userLogin 
   * @param data 
   * @returns thông báo cập nhật comment thành công
   */
  public async updateData(userLogin: UserDto, data: any) {
    return await this.repository.manager.transaction(async (trans) => {

      if(data.action === 'delete') {
        data.isDeleted = true;
        trans.getRepository(CommentRepository).save(data)
        return {message: DELETE_SUCCESS}
      }

      let result = new CommentEntity()

      result.userId = userLogin.id
      result.content = data.content
      result.postId = data.postId

      trans.getRepository(CommentRepository).save(result)

      return {message: UPDATE_SUCCESS}
    })
  }
}
