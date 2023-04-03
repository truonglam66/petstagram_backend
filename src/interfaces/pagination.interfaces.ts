export interface IPaginationQueryParams {
  skip: number
  take: number
  parentId?: string
  isDeleted?: boolean
  serviceId?: string
  name?: string
}
