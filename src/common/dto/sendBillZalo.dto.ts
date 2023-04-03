import { IsOptional } from 'class-validator'

export class SendBillZaloDto {
  phone: string

  month: Date

  residentName: string

  residentCode: string

  roomName: string

  price: number

  money: number

  electronicFee: number

  waterFee: number

  serviceFee: number

  transferInfo: string

  transferText: string

  note: string

  billId: string

  monthBill: Date

  moneyDebt: number

  moneyPay: number

  moneyPaid: number
}
