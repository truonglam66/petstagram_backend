export const enumData = {
  Admin: {
    Id: '59d16def-de29-469a-bf89-658b34ec7cf6',
  },
  Constants: {
    Model_Edit: 'Cập nhật',
    Model_Add: 'Thêm mới',
    Message_Create_Success: 'Thêm mới thành công!',
    Message_Update_Success: 'Cập nhật thành công!',
    Message_Delete_Success: 'Xoá thành công!',
    Message_Action_Success: 'Thao tác thành công!',
  },

  Page: {
    pageIndex: 1,
    pageSize: 10,
    pageSizeMax: 10000,
    total: 0,
  },
  maxSizeUpload: 10,

  NotifyType: {
    Success: 'success',
    Error: 'error',
    Warning: 'warning',
    Danger: 'danger',
  },

  StatusFilter: {
    All: { value: 0, code: 'all', name: 'Tất cả' },
    Active: { value: 1, code: 'active', name: 'Đang hoạt động' },
    InActive: { value: 2, code: 'inactive', name: 'Ngưng hoạt động' },
  },

  UserType: {
    Admin: { code: 'ADMIN', name: 'Admin'},
    User: { code: 'USER', name: 'User'}
  },

  Role: {
    Permission: {
      code: 'Permission',
      name: 'Phân Quyền',
      View: { name: 'Xem', code: 'Permission_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Permission_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Permission_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Permission_Delete', value: false },
    },
    SettingString: {
      code: 'SettingString',
      name: 'Cấu Hình Động',
      View: { name: 'Xem', code: 'SettingString_View', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'SettingString_Edit', value: false },
    },
    Notify: {
      code: 'Notify',
      name: 'Quản Lý Thông Báo',
      View: { name: 'Xem', code: 'Notify_View', value: false },
    },
    Message: {
      code: 'Message',
      name: 'Quản Lý Tin Nhắn',
      View: { name: 'Xem', code: 'Message_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Message_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Message_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Message_Delete', value: false },
    },
  },

  NotifyStatus: {
    New: { code: 'NEW', name: 'Chưa Đọc', color: '#40a9ff' },
    Read: { code: 'READ', name: 'Đã Đọc', color: '#ff4d4f' },
  },

  Sex: {
    Man: { code: 'MAN', name: 'Nam' },
    Woman: { code: 'WOMAN', name: 'Nữ' },
    Unknown: { code: 'UNKNOWN', name: 'Không biết' },
  },

  FileData: {
    Template: { code: 'TEMPLATE', name: 'Tệp Mẫu' },
    Archival: { code: 'ARCHIVAL', name: 'Tệp Lưu Trữ' },
  },

  MessageStatus: {
    New: { code: 'NEW', name: 'Mới Tạo', color: '#40a9ff' },
    Send: { code: 'SEND', name: 'Đã Gửi', color: '#ff4d4f' },
  },

  MessageObjectStatus: {
    Non: { code: 'NON', name: 'Chưa Đọc', color: '#40a9ff' },
    Read: { code: 'READ', name: 'Đã Đọc', color: '#ff4d4f' },
  },

  FileType: {
    New: { code: 'NEW', name: 'Khởi tạo', description: 'Khởi tạo' },
    Complete: { code: 'COMPLETE', name: 'Hoàn thành', description: 'Hoàn thành' },
    ConfirmPayment: { code: 'CONFIRMPAYMENT', name: 'Xác nhận thanh toán', description: 'Xác nhận thanh toán' },
  },
}
