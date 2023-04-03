import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'

class ApeAuthApiHelper {
  constructor(private httpService: HttpService) { }

  public login(data: { username: string; password: string }) {
    return new Promise((resolve, reject) => {
      const request = this.httpService.post(`${process.env.HOST_APE_AUTH}/login_room`, data)
      lastValueFrom(request)
        .then((res) => {
          // console.log('OK', res.data)
          resolve(res.data)
        })
        .catch((err: any) => {
          // console.log('FAIL', err.response)
          reject(err.response)
        })
    })
  }

  public validateToken(authorization: string) {
    return new Promise((resolve, reject) => {
      const request = this.httpService.post(
        `${process.env.HOST_APE_AUTH}/validate_token`,
        {},
        { headers: { Authorization: authorization } },
      )
      lastValueFrom(request)
        .then((res) => {
          // console.log('OK', res.data)
          resolve(res.data)
        })
        .catch((err: any) => {
          // console.log('FAIL', err.response)
          reject(err.response)
        })
    })
  }

  public getFeatureRoom(authorization: string) {
    return new Promise((resolve, reject) => {
      const request = this.httpService.post(
        `${process.env.HOST_APE_AUTH}/get_feature_room`,
        {},
        { headers: { Authorization: authorization } },
      )
      lastValueFrom(request)
        .then((res) => {
          // console.log('OK', res.data)
          resolve(res.data)
        })
        .catch((err: any) => {
          // console.log('FAIL', err.response)
          reject(err.response)
        })
    })
  }

  //#region employee
  public createRoomEmployee(data: {
    code: string,
    fullName: string,
    email: string,
    description?: string,
    departmentId: string,
    userId: string,
    isMobile: boolean,
    isManager: boolean,
    imageFace1: string,
    imageFace2: string,
    imageIdNo1: string,
    imageIdNo2: string,
    sex: string,
    idNo: string,
    phone: string,
    birthday: Date,
    address: string,
    username: string,
    password: string,
    confirmNewPassword: string
  }) {
    return new Promise((resolve, reject) => {
      const request = this.httpService.post(`${process.env.HOST_APE_AUTH}/create_room_employee`, data)
      lastValueFrom(request)
        .then((res) => {
          // console.log('OK', res.data)
          resolve(res.data)
        })
        .catch((err: any) => {
          // console.log('FAIL', err.response)
          reject(err.response)
        })
    })
  }

  public updateRoomEmployeePassword(data: {
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string
  }) {
    return new Promise((resolve, reject) => {
      const request = this.httpService.post(`${process.env.HOST_APE_AUTH}/udpate_room_employee_password`, data)
      lastValueFrom(request)
        .then((res) => {
          // console.log('OK', res.data)
          resolve(res.data)
        })
        .catch((err: any) => {
          // console.log('FAIL', err.response)
          reject(err.response)
        })
    })
  }

  public deleteRoomEmployee(data: {
    id: string
  }) {
    return new Promise((resolve, reject) => {
      const request = this.httpService.post(`${process.env.HOST_APE_AUTH}/delete_room_employee`, data)
      lastValueFrom(request)
        .then((res) => {
          // console.log('OK', res.data)
          resolve(res.data)
        })
        .catch((err: any) => {
          // console.log('FAIL', err.response)
          reject(err.response)
        })
    })
  }
  //#endregion
}

export const apeAuthApiHelper = new ApeAuthApiHelper(new HttpService())

export const enumApeAuth = {
  UserType: {
    CompanyPackageAdmin: 'CompanyPackageAdmin',
    CompanyPackageEmployee: 'CompanyPackageEmployee',
    CompanyPackageSupplier: 'CompanyPackageSupplier',
  },
}

export class UserAuthDto {
  id: string
  username: string
  type: string
  companyId?: string
  createdAt: Date
  updatedAt: Date
  roles?: string[]
  accessToken: string
}
