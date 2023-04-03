import { Injectable } from '@nestjs/common'
import * as AWS from 'aws-sdk'
import { ConfigService } from '@nestjs/config'
import { customAlphabet } from 'nanoid'
import { env } from 'process'
const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 10)

@Injectable()
export class UploadFileService {
  AWS_S3_BUCKET_NAME: string
  s3: AWS.S3
  constructor(private readonly configService: ConfigService) {
    this.AWS_S3_BUCKET_NAME = this.configService.get<string>('AWS_S3_BUCKET_NAME') || ''
    const ACCESS_KEY_ID = this.configService.get<string>('AWS_S3_ACCESS_KEY_ID')
    const SECRET_ACCESS_KEY = this.configService.get<string>('AWS_S3_SECRET_ACCESS_KEY')

    this.s3 = new AWS.S3({
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
      // region: 'ap-southeast-1',
      // apiVersion: '2006-03-01',
    })
  }

  async uploadSingle(file: any) {
    const current = new Date()
    let temp: string[] = file.originalname ? file.originalname.split('.') : []
    let ext = temp.length > 1 ? `.${temp[temp.length - 1]}` : ''
    let LINK_UPLOAD_S3 = env.LINK_UPLOAD_S3
    const key = `ntvv/${current.getFullYear()}${current.getMonth() +
      1}${current.getDate()}-${nanoid()}${ext}`
    const params = {
      Bucket: this.AWS_S3_BUCKET_NAME,
      Key: key, // File name you want to save as in S3
      Body: file.buffer,
      ACL: 'public-read',
      // ContentType: 'image/jpeg',
    }
    return new Promise<string[]>((resolve, reject) => {
      this.s3.upload(params, (err: any, data: any) => {
        if (err) {
          reject(err)
        } else {
          resolve([data.Location])
        }
      })
    })
  }
}
