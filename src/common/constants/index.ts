export const PWD_SALT_ROUNDS = 12
export const ERROR_VALIDATE = 'Dữ liệu không hợp lệ!'
export const ERROR_NOT_FOUND_DATA = 'Không tìm thấy dữ liệu!'
export const ERROR_DUPLICATE_DATA = 'Dữ liệu vừa thêm đã tồn tại trong hệ thống!'
export const ERROR_CODE_TAKEN = 'Mã đã được sử dụng!'
export const ERROR_TAXCODE_TAKEN = 'Mã Số Thuế đã được sử dụng!'
export const ERROR_NAME_TAKEN = 'Tên đã được sử dụng!'
export const ERROR_PERCENT_SUM = 'Tổng tỉ trọng không được quá 100%!'
export const ERROR_SERVICE_CANNOT_CREATE = 'Dịch vụ không thể tạo!'
export const ERROR_SERVICE_CANNOT_UPDATE = 'Dịch vụ không thể cập nhật!'
export const ERROR_SEND_EMAIL_FAIL = 'Gửi email thất bại.'
export const ERROR_INVALID_FOMULAR = 'Công thức không hợp lệ'
export const ERROR_INVALID_PRPLAN = 'Vui lòng chọn thêm kế hoạch mua hàng'
export const ERROR_INVALID_SERVICE = 'Vui lòng chọn thêm loại vật tư'

export const ERROR_YOU_DO_NOT_HAVE_PERMISSION = 'Bạn không có quyền!'

export const CREATE_SUCCESS = 'Thêm mới thành công.'
export const UPDATE_SUCCESS = 'Cập nhật thành công.'
export const ACCEPT_SUCCESS = 'Duyệt thành công.'
export const UPDATE_ACTIVE_SUCCESS = 'Cập nhật trạng thái thành công.'
export const DELETE_SUCCESS = 'Xoá thành công.'
export const SEND_SUCCESS = 'Gửi thành công!'

export const GETDATA_FAIL = 'Lấy dữ liệu thất bại.'
export const CREATE_FAIL = 'Thêm mới thất bại.'
export const UPDATE_FAIL = 'Cập nhật thất bại.'
export const ACCEPT_FAIL = 'Duyệt thất bại.'
export const UPDATE_ACTIVE_FAIL = 'Cập nhật trạng thái thất bại.'
export const DELETE_FAIL = 'Xoá thất bại.'
export const ERROR_IDNO_TAKEN = 'CMND/CCCD đã được sử dụng!'

/** 1 số lỗi cần thiết khi gửi Zalo Notification Service */

/** Mã truy cập không hợp lệ */
export const ACCESS_TOKEN_INVALID = -124
/** Gửi zalo thành công */
export const SUCCESS = 0
/** Thanh toán ZCA thất bại (ví không đủ số dư, …)  */
export const ZCA_CHARGE_FAILURE = -137
/** Refresh token hết hạn  */
export const REFRESH_TOKEN_EXPIRED = -140200
/** Refresh token không hợp lệ  */
export const INVALID_REFRESH_TOKEN = -14014
/** Authorized code hết hạn */
export const AUTHORIZED_CODE_EXPIRED = -14019
/** Oauthorized code không hợp lệ */
export const INVALID_OAUTHORIZED_CODE = -14005

export * from './enumData'

export const TYPEORM_EX_CUSTOM_REPOSITORY = 'TYPEORM_EX_CUSTOM_REPOSITORY'
export const DATA_SOURCE = 'DATA_SOURCE'
