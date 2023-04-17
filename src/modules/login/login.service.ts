import { Injectable, ConflictException, BadRequestException, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { plainToClass } from 'class-transformer'
import { UserRepository } from '../../repositories'
import { UserRegisterDto } from './dto/register.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'
import { UpdatePasswordResultDto } from './dto/update-password-result.dto'
import { UserDto } from '../../common/dto/user.dto'
import { SendConfirmCodeDto, SendConfirmCodeResultDto } from './dto/send-confirm-code.dto'
import { ForgotPasswordDto, ForgotPasswordResultDto } from './dto/forgot-password.dto'
import { In } from 'typeorm'
import { enumData } from '../../common/constants'
import { UpdateUsernameDto } from './dto/update-username'
import { RequestFCMTokenDto } from './dto'
import { enumApeAuth, UserAuthDto } from '../../helpers'
import { UserEntity } from '../../entities'
import { UserService } from '../user/user.service'

@Injectable()
export class LoginService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepo: UserRepository,
    private readonly userService: UserService,
  ) {}

  /** Xác thực user cho On-premise */
  public async validateUserOnPremise(username: string, password: string) {
    // throw new NotFoundException('Tính năng chưa phát triển!')
    // check user
    const user = await this.userRepo.findOne({
      where: { username: username },
    })
    if (!user) return null

    // check pw
    const isPasswordMatch = await user.comparePassword(password)
    if (!isPasswordMatch) return null

    // delete pw in obj
    delete user.password

    return user
  }

  /** Xác thực user */
  public async validateUserProduct(userType: string, companyId: string, username: string) {
    let userEntity = await this.userRepo.findOne({ where: { username } })

    // Nếu là user loại Admin hoặc AdminCompanyPackage thì tự tạo user nếu chưa có
    if (!userEntity && userType == enumApeAuth.UserType.CompanyPackageAdmin) {
      const userNew = new UserEntity()
      userNew.username = username
      userNew.type = enumData.UserType.AdminCompany.code
      userEntity = await this.userRepo.save(userNew)
    }

    return userEntity
  }

  public async login(user: UserAuthDto) {
    const userEntity = await this.userRepo.findOne({
      where: {
        id: user.id,
        type: In([enumData.UserType.Admin.code, enumData.UserType.Employee.code, enumData.UserType.AdminCompany.code]),
        isDeleted: false,
      },
      relations: { },
    })
    if (!userEntity) throw new NotFoundException('Tài khoản không tồn tại!')

    let userId = userEntity.id
    let userType = await userEntity.type
    let employeeType
    if (user.type == enumData.EmployeeType.Admin.code) {
      employeeType = enumData.EmployeeType.Admin.code
    } else {
      employeeType = enumData.EmployeeType.Employee.code
    }

    if (userEntity && userEntity.type == enumData.UserType.Admin.code) {
      employeeType = enumData.EmployeeType.Admin.code
    }

    const isProduct = process.env.IS_PRODUCT == 'true'
    const accessToken = isProduct ? user.accessToken : this.jwtService.sign({ uid: user.id })

    const result = {
      accessToken,
      enumData: enumData,
      userId: userId,
      type: userType,
      avatarUrl: userEntity.avatarUrl,
    }
    return result
  }

  public async authorizationClient(user: UserDto) {
    const userEntity = await this.userRepo.findOne({
      // relations: ['employee'],
      relations: {
      },
      where: {
        id: user.id,
        type: enumData.UserType.Employee.code,
        isDeleted: false,
      },
    })
    if (!userEntity) {
      throw new NotFoundException('Tài khoản không tồn tại.')
    }

    return {
      id: userEntity.id,
      username: userEntity.username,
    }
  }

  private async isUserNameTaken(username: string) {
    const userEntity = await this.userService.findByUserName(username)
    if (!userEntity) {
      return false
    }
    return true
  }

  public async register(user: UserRegisterDto): Promise<UserDto> {
    const isUserNameTaken = await this.isUserNameTaken(user.username)
    if (isUserNameTaken) {
      throw new ConflictException('Tên tài khoản đã được sử dụng.')
    }
    const newUserEntity = this.userRepo.create(user)
    const { password, isDeleted, ...createdUserEntity } = await this.userRepo.save(newUserEntity)
    const createdUser = plainToClass(UserDto, createdUserEntity)
    return createdUser
  }

  public async UpdatePassword(
    { currentPassword, newPassword, confirmNewPassword }: UpdatePasswordDto,
    user: UserDto,
  ): Promise<UpdatePasswordResultDto> {
    if (newPassword !== confirmNewPassword) {
      throw new BadRequestException('Mật khẩu mới không trùng khớp.')
    }
    if (newPassword === currentPassword) {
      throw new BadRequestException('Trùng mật khẩu cũ.')
    }
    const userEntity = await this.userRepo.findOne({ where: { id: user.id } })
    if (!userEntity) {
      throw new NotFoundException('Tài khoản không tồn tại.')
    }
    const isCurrentPasswordMatch = await userEntity.comparePassword(currentPassword)
    if (!isCurrentPasswordMatch) {
      throw new BadRequestException('Sai mật khẩu cũ.')
    }
    userEntity.password = newPassword
    const updatedUserEntity = await this.userRepo.save(userEntity)

    return { message: 'Đổi mật khẩu thành công.' }
  }

  public async updateUsername(
    { currentPassword, newUsername }: UpdateUsernameDto,
    user: UserDto,
  ): Promise<UpdatePasswordResultDto> {
    newUsername = newUsername.trim()
    if (!newUsername || newUsername.length < 3) {
      throw new NotFoundException('Tên đăng nhập mới không hợp lệ')
    }
    const userEntity = await this.userRepo.findOne({ where: { id: user.id } })
    if (!userEntity) {
      throw new NotFoundException('Tài khoản không tồn tại.')
    }
    if (newUsername === userEntity.username) {
      throw new BadRequestException('Trùng tên đăng nhập cũ.')
    }
    const isCurrentPasswordMatch = await userEntity.comparePassword(currentPassword)
    if (!isCurrentPasswordMatch) {
      throw new BadRequestException('Sai mật khẩu cũ.')
    }
    const existUserEntity = await this.userRepo.findOne({
      where: {
        isDeleted: false,
        // companyId: userLogin.companyId,
        username: newUsername,
      },
    })
    if (existUserEntity) {
      throw new NotFoundException('Tên đăng nhập đã tồn tại.')
    }
    userEntity.username = newUsername
    userEntity.password = currentPassword
    const updatedUserEntity = await this.userRepo.save(userEntity)

    return { message: 'Đổi tên đăng nhập thành công.' }
  }

  public async sendConfirmCode({ email }: SendConfirmCodeDto): Promise<SendConfirmCodeResultDto> {
    // const confirmCode = await this.userConfirmCodeRepository.addNewConfirmCode({ email })
    // this.emailService.sendConfirmCode({ email, confirmCode })

    return { message: 'Check code sent!' }
  }

  public async forgotPassword({
    email,
    confirmCode,
    newPassword,
    confirmNewPassword,
  }: ForgotPasswordDto): Promise<ForgotPasswordResultDto> {
    // const confirm = await this.userConfirmCodeRepository.checkConfirmCode({ email, confirmCode })
    // if (!confirm) throw new NotFoundException('Mã xác nhận không hợp lệ!')

    // if (newPassword !== confirmNewPassword) {
    //   throw new BadRequestException('Mật khẩu mới không trùng khớp.')
    // }

    // const userEntity = await this.userRepo.findOne(confirm.userId)
    // if (!userEntity) {
    //   throw new NotFoundException('Tài khoản không tồn tại.')
    // }
    // const isCurrentPasswordMatch = await userEntity.comparePassword(newPassword)
    // if (isCurrentPasswordMatch) {
    //   throw new BadRequestException('Sai mật khẩu cũ.')
    // }
    // userEntity.password = newPassword
    // const updatedUserEntity = await this.userRepo.save(userEntity)

    return { message: 'Thành công.' }
  }

  public async requestFcmToken(user: RequestFCMTokenDto): Promise<any> {
    const userEntity = await this.userRepo.findOne({
      where: {
        id: user.userId,
        isDeleted: false,
        // companyId: userLogin.companyId,
      },
    })
    if (!userEntity) {
      throw new NotFoundException('Tài khoản không tồn tại.')
    }
    let result = await this.userRepo.update(userEntity.id, { fcmToken: user.fcmToken })
    return result
  }
}
