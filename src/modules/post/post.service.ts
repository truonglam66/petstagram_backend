import { Injectable } from '@nestjs/common'
import { PhotoEntity } from '../../entities/photo.entity'
import { PostUpdateDto } from './dto'
import { PostCreateDto } from './dto/postCreate.dto'
import { PostRepository } from '../../repositories/post.repository'
import { PhotoRepository } from '../../repositories/photo.repository'
import { CREATE_SUCCESS, UPDATE_SUCCESS } from '../../common/constants'
import { PostEntity } from '../../entities/post.entity'
import { FollowingRepository } from '../../repositories/following.repository'

@Injectable()
export class PostService {
  constructor(private repository: PostRepository,
    private photoRepository: PhotoRepository,
    private followingRepository: FollowingRepository) {}

  /**
   * @returns danh sách bài post của những following
   */
  public async loadData() {
    return await this.followingRepository.find({
      where: {
        isDeleted: false,
      },
      order: { createdAt: 'DESC' },
    })
  }

  /**
   * 
   * @param data 
   * @returns thông báo tạo mới bài post thành công
   */
  public async createData(data: PostCreateDto) {
    return await this.repository.manager.transaction(async (trans) => {
      let result = new PostEntity()
      result.title = data.title
      result.content = data.content

      await trans.getRepository(PostEntity).save(result)
      data.photos.forEach(async (photo: any) => {
        await trans.getRepository(PhotoEntity).save(photo)
      })
      
      return {message: CREATE_SUCCESS}
    })
  }

  /**
   * 
   * @param userLogin 
   * @param data 
   * @returns thông báo chỉnh sửa bài post thành công
   */
  public async updateData(data: PostUpdateDto) {
    return await this.repository.manager.transaction(async (trans) => {
      let editPost = await this.repository.findOne({
        where: {
          isDeleted: false,
          id: data.id,
        }
      })
  
      let editPostPhotos = await this.photoRepository.find({
        where: {
          isDeleted: false,
          postId: data.id,
        }
      })
  
      // cập nhật tiêu đề và nội dung bài post
      editPost.title = data.title
      editPost.content = data.content
  
      // cập nhật ds photoUrl
      editPostPhotos = data.photos

      trans.getRepository(PostEntity).save(editPost)
      editPostPhotos.forEach((photo) => {
        trans.getRepository(PhotoEntity).save(photo)
      })

      return {message: UPDATE_SUCCESS}
    })
  }
}
