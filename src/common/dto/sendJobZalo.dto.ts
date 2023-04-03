import { IsOptional } from 'class-validator'

export class SendJobZaloDto {
  phone: string

  jobId: string

  paymentDate: Date

  residentName: string

  residentCode: string

  money: string

  roomName: string

  apartmentName: string

  note: string
}
