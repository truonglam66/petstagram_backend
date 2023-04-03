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
    Message_Import_Success: 'Nhập excel thành công!',
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
    Employee: { code: 'EMPLOYEE', name: 'Nhân Viên', description: 'Nhân viên' },
    Admin: { code: 'ADMIN', name: 'Chủ Đầu Tư', description: 'Adminstrator' },
    AdminCompany: { code: 'AdminCompany', name: 'Admin Công ty', description: '' },
    Resident: { code: 'RESIDENT', name: 'Khách Thuê', description: 'Khách Thuê' },
  },

  EmployeeType: {
    Employee: { code: 'EMPLOYEE', name: 'Nhân viên' },
    ManagerApartment: { code: 'MANAGER_APARTMENT', name: 'Quản Lý Khu Trọ' },
    ManagerDepartment: { code: 'MANAGER_DEPARTMENT', name: 'Trưởng Phòng Ban' },
    Admin: { code: 'ADMIN', name: 'Chủ Đầu Tư', description: 'Adminstrator' },
  },

  EmployeeApartmentType: {
    Employee: { code: 'EMPLOYEE', name: 'Nhân viên', description: 'Nhân viên' },
    Manager: { code: 'MANAGER', name: 'Quản Lý', description: 'Quản Lý' },
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
    Department: {
      code: 'Department',
      name: 'Phòng Ban',
      View: { name: 'Xem', code: 'Department_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Department_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Department_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Department_Delete', value: false },
    },
    SettingString: {
      code: 'SettingString',
      name: 'Cấu Hình Động',
      View: { name: 'Xem', code: 'SettingString_View', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'SettingString_Edit', value: false },
    },
    Employee: {
      code: 'Employee',
      name: 'Nhân Viên',
      View: { name: 'Xem', code: 'Employee_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Employee_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Employee_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Employee_Delete', value: false },
      Password: { name: 'Đổi Mật Khẩu', code: 'Employee_Password', value: false },
    },
    Contract: {
      code: 'Contract',
      name: 'Hợp Đồng',
      View: { name: 'Xem', code: 'Contract_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Contract_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Contract_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Contract_Delete', value: false },
      UpdateIndex: { name: 'Cập Nhật Chỉ Số', code: 'Contract_UpdateIndex', value: false },
      Close: { name: 'Đóng Hợp Đồng', code: 'Contract_Close', value: false },
    },
    Resident: {
      code: 'Resident',
      name: 'Cư Dân',
      View: { name: 'Xem', code: 'Resident_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Resident_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Resident_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Resident_Delete', value: false },
    },
    Bill: {
      code: 'Bill',
      name: 'Hóa Đơn',
      View: { name: 'Xem', code: 'Bill_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Bill_Add', value: false },
      Payment: { name: 'Thanh Toán', code: 'Bill_Payment', value: false },
      Compute: { name: 'Tính Hóa Đơn', code: 'Bill_Compute', value: false },
      Print: { name: 'In', code: 'Bill_Print', value: false },
      Confirm: { name: 'Xác Nhận Thanh Toán', code: 'Bill_Confirm', value: false },
      Download: { name: 'Xuất Excel', code: 'Bill_Download', value: false },
      Send: { name: 'Gửi Zalo', code: 'Bill_Send', value: false },
      Update: { name: 'Cập Nhật Chỉ Số', code: 'Bill_Update', value: false },
      Create: { name: 'Khởi Tạo Hóa Đơn', code: 'Bill_Create', value: false },
      Delete: { name: 'Xóa Hóa Đơn Khác', code: 'Bill_Delete', value: false },
    },
    CharterCapital: {
      code: 'CharterCapital',
      name: 'Quản Lý Vốn',
      View: { name: 'Xem', code: 'CharterCapital_View', value: false },
      Add: { name: 'Tăng Vốn', code: 'CharterCapital_Add', value: false },
      Decrease: { name: 'Giảm Vốn', code: 'CharterCapital_Decrease', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'CharterCapital_Edit', value: false },
      Delete: { name: 'Xóa', code: 'CharterCapital_Delete', value: false },
      Download: { name: 'Xuất Excel', code: 'CharterCapital_Download', value: false },
      Approved: { name: 'Duyệt Lệnh', code: 'CharterCapital_Approved', value: false },
    },
    Payslip: {
      code: 'Payslip',
      name: 'Phiếu Chi',
      View: { name: 'Xem', code: 'Payslip_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Payslip_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Payslip_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Payslip_Delete', value: false },
      Print: { name: 'In', code: 'Payslip_Print', value: false },
      Download: { name: 'Xuất Excel', code: 'Payslip_Download', value: false },
      Approved: { name: 'Duyệt Phiếu Chi', code: 'Payslip_Approved', value: false },
    },
    Receipt: {
      code: 'Receipt',
      name: 'Phiếu Thu',
      View: { name: 'Xem', code: 'Receipt_View', value: false },
      Print: { name: 'In', code: 'Receipt_Print', value: false },
      Download: { name: 'Xuất Excel', code: 'Receipt_Download', value: false },
    },
    Job: {
      code: 'Job',
      name: 'Danh Sách Công Việc',
      View: { name: 'Xem', code: 'Job_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Job_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Job_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Job_Delete', value: false },
      Complete: { name: 'Hoàn Thành', code: 'Job_Complete', value: false },
      Download: { name: 'Xuất Excel', code: 'Job_Download', value: false },
    },
    JobDaily: {
      code: 'JobDaily',
      name: 'Danh Sách Công Việc Hằng Ngày',
      View: { name: 'Xem', code: 'JobDaily_View', value: false },
      Add: { name: 'Tạo Mới', code: 'JobDaily_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'JobDaily_Edit', value: false },
      Delete: { name: 'Xóa', code: 'JobDaily_Delete', value: false },
      Update: { name: 'Cập Nhật', code: 'JobDaily_Update', value: false },
      Download: { name: 'Xuất Excel', code: 'JobDaily_Download', value: false },
    },
    EmployeeDebt: {
      code: 'EmployeeDebt',
      name: 'Quản Lý Công Nợ',
      View: { name: 'Xem', code: 'EmployeeDebt_View', value: false },
      Download: { name: 'Xuất Excel', code: 'EmployeeDebt_Download', value: false },
      Payment: { name: 'Thanh Toán', code: 'EmployeeDebt_Payment', value: false },
    },
    EmployeeDebtHistory: {
      code: 'EmployeeDebtHistory',
      name: 'Lịch Sử Thu Nhân Viên',
      View: { name: 'Xem', code: 'EmployeeDebtHistory_View', value: false },
      Download: { name: 'Xuất Excel', code: 'EmployeeDebtHistory_Download', value: false },
    },
    EmployeeAdvance: {
      code: 'EmployeeAdvance',
      name: 'Quản Lý Tạm Ứng',
      View: { name: 'Xem', code: 'EmployeeAdvance_View', value: false },
      Download: { name: 'Xuất Excel', code: 'EmployeeAdvance_Download', value: false },
      Payment: { name: 'Thanh Toán', code: 'EmployeeAdvance_Payment', value: false },
    },
    EmployeeAdvanceHistory: {
      code: 'EmployeeAdvanceHistory',
      name: 'Lịch Sử Hoàn Ứng Nhân Viên',
      View: { name: 'Xem', code: 'EmployeeAdvanceHistory_View', value: false },
      Download: { name: 'Xuất Excel', code: 'EmployeeAdvanceHistory_Download', value: false },
    },
    Area: {
      code: 'Area',
      name: 'Vùng',
      View: { name: 'Xem', code: 'Area_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Area_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Area_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Area_Delete', value: false },
      Upload: { name: 'Nhập Excel', code: 'Area_Upload', value: false },
      Download: { name: 'Xuất Excel', code: 'Area_Download', value: false },
    },
    Apartment: {
      code: 'Apartment',
      name: 'Khu Trọ',
      View: { name: 'Xem', code: 'Apartment_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Apartment_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Apartment_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Apartment_Delete', value: false },
      Upload: { name: 'Nhập Excel', code: 'Apartment_Upload', value: false },
      Download: { name: 'Xuất Excel', code: 'Apartment_Download', value: false },
      AddEmployee: { name: 'Thêm Nhân Viên', code: 'Apartment_AddEmployee', value: false },
    },
    Room: {
      code: 'Room',
      name: 'Phòng Trọ',
      View: { name: 'Xem', code: 'Room_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Room_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Room_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Room_Delete', value: false },
      Upload: { name: 'Nhập Excel', code: 'Room_Upload', value: false },
      Download: { name: 'Xuất Excel', code: 'Room_Download', value: false },
    },
    Service: {
      code: 'Service',
      name: 'Danh Sách Dịch Vụ',
      View: { name: 'Xem', code: 'Service_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Service_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Service_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Service_Delete', value: false },
    },
    JobCategory: {
      code: 'JobCategory',
      name: 'Danh Sách Loại Công Việc',
      View: { name: 'Xem', code: 'JobCategory_View', value: false },
      Add: { name: 'Tạo Mới', code: 'JobCategory_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'JobCategory_Edit', value: false },
      Delete: { name: 'Xóa', code: 'JobCategory_Delete', value: false },
    },
    Supplier: {
      code: 'Supplier',
      name: 'Danh Sách Nhà Cung Cấp',
      View: { name: 'Xem', code: 'Supplier_View', value: false },
      Add: { name: 'Tạo Mới', code: 'Supplier_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'Supplier_Edit', value: false },
      Delete: { name: 'Xóa', code: 'Supplier_Delete', value: false },
    },
    Notify: {
      code: 'Notify',
      name: 'Quản Lý Thông Báo',
      View: { name: 'Xem', code: 'Notify_View', value: false },
    },
    AssetManagement: {
      code: 'AssetManagement',
      name: 'Tài Sản',
      View: { name: 'Xem', code: 'AssetManagement_View', value: false },
      Add: { name: 'Tạo Mới', code: 'AssetManagement_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'AssetManagement_Edit', value: false },
      Delete: { name: 'Xóa', code: 'AssetManagement_Delete', value: false },
      Upload: { name: 'Nhập Excel', code: 'AssetManagement_Upload', value: false },
      Download: { name: 'Xuất Excel', code: 'AssetManagement_Download', value: false },
    },

    AssetCategory: {
      code: 'AssetCategory',
      name: 'Loại Tài Sản',
      View: { name: 'Xem', code: 'AssetCategory_View', value: false },
      Add: { name: 'Tạo Mới', code: 'AssetCategory_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'AssetCategory_Edit', value: false },
      Delete: { name: 'Xóa', code: 'AssetCategory_Delete', value: false },
    },
    // Message: {
    //   code: 'Message',
    //   name: 'Quản Lý Tin Nhắn',
    //   View: { name: 'Xem', code: 'Message_View', value: false },
    //   Add: { name: 'Tạo Mới', code: 'Message_Add', value: false },
    //   Edit: { name: 'Chỉnh Sửa', code: 'Message_Edit', value: false },
    //   Delete: { name: 'Xóa', code: 'Message_Delete', value: false },
    // },
    Report: {
      code: 'Report',
      name: 'Bảng điều khiển',
      View: { name: 'Xem', code: 'Report_View', value: false },
    },
    JobDailyInApartmentReport: {
      code: 'JobDailyInApartmentReport',
      name: 'Báo Cáo Công Việc Hằng Ngày',
      View: { name: 'Xem', code: 'JobDailyInApartmentReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'JobDailyInApartmentReport_Download', value: false },
    },
    FinanceAnalysis: {
      code: 'FinanceAnalysis',
      name: 'Phân Tích Tài Chính',
      View: { name: 'Xem', code: 'FinanceAnalysis_View', value: false },
      Download: { name: 'Xuất Excel', code: 'FinanceAnalysis_Download', value: false },
    },
    FinanceSummaryReport: {
      code: 'FinanceSummaryReport',
      name: 'Báo Cáo Tổng Hợp Tài Chính',
      View: { name: 'Xem', code: 'FinanceSummaryReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'FinanceSummaryReport_Download', value: false },
    },

    RevenueApartmentByTypeReport: {
      code: 'RevenueApartmentByTypeReport',
      name: 'Báo Cáo Doanh Thu Hiện Tại',
      View: { name: 'Xem', code: 'RevenueApartmentByTypeReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'RevenueApartmentByTypeReport_Download', value: false },
    },
    RevenueApartmentInMonthReport: {
      code: 'RevenueApartmentInMonthReport',
      name: 'Báo Cáo Doanh Thu Theo Khu',
      View: { name: 'Xem', code: 'RevenueApartmentInMonthReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'RevenueApartmentInMonthReport_Download', value: false },
    },
    RevenueDetail: {
      code: 'RevenueDetail',
      name: 'Báo Cáo Chi Tiết Doanh Thu',
      View: { name: 'Xem', code: 'RevenueDetail_View', value: false },
      Download: { name: 'Xuất Excel', code: 'RevenueDetail_Download', value: false },
    },
    DepositReport: {
      code: 'DepositReport',
      name: 'Báo Cáo Thu Cọc',
      View: { name: 'Xem', code: 'DepositReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'DepositReport_Download', value: false },
    },
    DepositReportByApartment: {
      code: 'RevenueDetailByApartment',
      name: 'Báo Cáo Chi Tiết Doanh Thu Theo Khu',
      View: { name: 'Xem', code: 'RevenueDetailByApartment_View', value: false },
      Download: { name: 'Xuất Excel', code: 'RevenueDetailByApartment_Download', value: false },
    },
    SummaryRevenueApartmentReport: {
      code: 'SummaryRevenueApartmentReport',
      name: 'Báo Cáo Doanh Thu Lịch Sử',
      View: { name: 'Xem', code: 'SummaryRevenueApartmentReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'SummaryRevenueApartmentReport_Download', value: false },
    },

    CostApartmentReport: {
      code: 'CostApartmentReport',
      name: 'Báo Cáo Chi Khu Trọ',
      View: { name: 'Xem', code: 'CostApartmentReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'CostApartmentReport_Download', value: false },
    },
    CostDepartmentReport: {
      code: 'CostDepartmentReport',
      name: 'Báo Cáo Chi Văn Phòng',
      View: { name: 'Xem', code: 'CostDepartmentReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'CostDepartmentReport_Download', value: false },
    },
    CostDetailReport: {
      code: 'CostDetailReport',
      name: 'Báo Cáo Chi Tiết Chi',
      View: { name: 'Xem', code: 'CostDetailReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'CostDetailReport_Download', value: false },
    },

    CashFlowAnalysisReport: {
      code: 'CashFlowAnalysisReport',
      name: 'Báo Cáo Theo Dõi Tiền Mặt',
      View: { name: 'Xem', code: 'CashFlowAnalysisReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'CashFlowAnalysisReport_Download', value: false },
    },
    AssetReport: {
      code: 'AssetReport',
      name: 'Báo Cáo Tài Sản',
      View: { name: 'Xem', code: 'AssetReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'AssetReport_Download', value: false },
    },

    ProfitApartmentInMonthReport: {
      code: 'ProfitApartmentInMonthReport',
      name: 'Báo Cáo Lợi Nhuận Khu Theo Tháng',
      View: { name: 'Xem', code: 'ProfitApartmentInMonthReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'ProfitApartmentInMonthReport_Download', value: false },
    },
    AssetAndDepreciationReport: {
      code: 'AssetAndDepreciationReport',
      name: 'Báo Cáo Theo Dõi Tài Sản & Khấu Hao',
      View: { name: 'Xem', code: 'AssetAndDepreciationReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'AssetAndDepreciationReport_Download', value: false },
    },

    AreaStatus: {
      code: 'AreaStatus',
      name: 'Tình Trạng Phòng',
      View: { name: 'Xem', code: 'AreaStatus_View', value: false },
    },
    Collect: {
      code: 'Collect',
      name: 'Tổng Hợp',
      View: { name: 'Xem', code: 'Collect_View', value: false },
    },
    Status: {
      code: 'Status',
      name: 'Theo Khu',
      View: { name: 'Xem', code: 'Status_View', value: false },
    },
    // Complaint: {
    //   code: 'Complaint',
    //   name: 'Khiếu Nại',
    //   View: { name: 'Xem', code: 'Complaint_View', value: false },
    //   Tick: { name: 'Đánh Dấu Đã Xử Lý', code: 'Complaint_Tick', value: false },
    // },
    // ComplaintType: {
    //   code: 'ComplaintType',
    //   name: 'Loại Khiếu Nại',
    //   View: { name: 'Xem', code: 'ComplaintType_View', value: false },
    //   Add: { name: 'Tạo Mới', code: 'ComplaintType_Add', value: false },
    //   Edit: { name: 'Chỉnh Sửa', code: 'ComplaintType_Edit', value: false },
    //   Delete: { name: 'Xóa', code: 'ComplaintType_Delete', value: false },
    // },
    TemplateFile: {
      code: 'TemplateFile',
      name: 'Chứng Từ Mẫu',
      View: { name: 'Xem', code: 'TemplateFile_View', value: false },
      Add: { name: 'Tạo Mới', code: 'TemplateFile_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'TemplateFile_Edit', value: false },
      Delete: { name: 'Xóa', code: 'TemplateFile_Delete', value: false },
    },
    BillSentToZalo: {
      code: 'BillSentToZalo',
      name: 'Báo Cáo Hóa Đơn Gửi Zalo',
      View: { name: 'Xem', code: 'BillSentToZalo_View', value: false },
      Download: { name: 'Xuất Excel', code: 'BillSentToZalo_Download', value: false },
    },
    CollectionReport: {
      code: 'CollectionReport',
      name: 'Thống Kê Gửi Hóa Đơn',
      View: { name: 'Xem', code: 'CollectionReport_View', value: false },
      Download: { name: 'Xuất Excel', code: 'CollectionReport_Download', value: false },
    },
    ResidentDeposit: {
      code: 'ResidentDeposit',
      name: 'Quản Lý Đặt Cọc',
      View: { name: 'Xem', code: 'ResidentDeposit_View', value: false },
      Add: { name: 'Tạo Mới', code: 'ResidentDeposit_Add', value: false },
      Edit: { name: 'Chỉnh Sửa', code: 'ResidentDeposit_Edit', value: false },
    },
  },

  SettingString: {
    Hotline: {
      code: 'HOTLINE',
      name: 'Số điện thoại đường dây nóng',
      default: '0827372737',
      description: 'Số điện thoại đường dây nóng phản ảnh!',
      unit: 'VNI (+84)',
    },
    WarningRoomPrepareExpireContract: {
      code: 'WARNING_ROOM_PREPARE_EXPIRE_CONTRACT',
      name: 'Cảnh báo phòng sắp hết hạn hợp đồng',
      default: 30,
      description: 'Trước xxx ngày trước khi sắp hết hạn hợp đồng, cảnh báo sẽ được bật!',
      unit: 'Ngày',
    },
    ConfigClosingInvoiceDate: {
      code: 'CONFIG_CLOSING_INVOICE_DATE',
      name: 'Ngày chốt tính hóa đơn',
      default: 1,
      description: 'Ngày chốt tạo hóa đơn phòng !',
      unit: 'Hằng tháng',
    },
    ConfigPaidInvoiceDeadline: {
      code: 'CONFIG_PAID_INVOICE_DEADLINE',
      name: 'Hạn cuối thanh toán tính hóa đơn',
      default: 10,
      description: 'Hạn cuối thanh toán hóa đơn phòng !',
      unit: 'Hằng tháng',
    },
    ConfigCompanyIncomeTaxPercent: {
      code: 'CONFIG_COMPANY_INCOME_TAX_PERCENT',
      name: 'Thuế thu nhập doanh nghiệp',
      default: 20,
      description: 'Phần trăm thuế thu nhập doanh nghiệp !',
      unit: '%',
    },
    ConfigPaidAdvanceDate: {
      code: 'CONFIG_PAID_ADVANCE_DEADLINE',
      name: 'Ngày cuối hoàn ứng của nhân viên',
      default: 30,
      description: 'Ngày hạn cuối để thanh toán tiền tạm ứng của nhân viên !',
      unit: 'Hằng tháng',
    },
    WarningPaidAdvanceDateComingSoon: {
      code: 'WARNING_PAID_ADVANCE_DEADLINE_COMING_SOON',
      name: 'Cảnh báo sắp đến hạn hoàn ứng của nhân viên',
      default: 7,
      description: 'Trước xxx ngày trước khi đến hạn hoàn ứng, cảnh báo sẽ được bật!',
      unit: 'Ngày',
    },
    ConfigBankNameDefault: {
      code: 'CONFIG_BANK_NAME_DEFAULT',
      name: 'Tên ngân hàng mặc định',
      default: 'NH QUÂN ĐỘI',
      description: 'Tên ngân hàng dùng cho khách chuyển khoản !',
      unit: '',
    },
    ConfigBankAccountNameDefault: {
      code: 'CONFIG_BANK_ACCOUNT_NAME_DEFAULT',
      name: 'Tên tài khoản mặc định',
      default: 'CTy CP Nhà Trọ Sạch Sẽ',
      description: 'Tên tài khoản dùng cho khách chuyển khoản !',
      unit: '',
    },
    ConfigBankAccountDefault: {
      code: 'CONFIG_BANK_ACCOUNT_DEFAULT',
      name: 'Số tài khoản ngân hàng mặc định',
      default: '687888687888',
      description: 'Số tài khoản ngân hàng dùng cho khách chuyển khoản !',
      unit: '',
    },
    ConfigTaxCodeDefault: {
      code: 'CONFIG_TAX_CODE_DEFAULT',
      name: 'Mã số thuế mặc định',
      default: '8631540851',
      description: 'Mã số thuế của Công Ty TNHH Nhà Trọ Sạch Sẽ!',
      unit: '',
    },
  },

  NotifyStatus: {
    New: { code: 'NEW', name: 'Chưa Đọc', color: '#40a9ff' },
    Read: { code: 'READ', name: 'Đã Đọc', color: '#ff4d4f' },
  },

  ContractStatus: {
    New: { code: 'NEW', name: 'Khởi tạo', color: 'orange' },
    Active: { code: 'ACTIVE', name: 'Kích hoạt', color: '#40a9ff' },
    Close: { code: 'CLOSE', name: 'Kết thúc', color: '#ff4d4f' },
  },

  PaymentStatus: {
    Paid: { code: 'PAID', name: 'Đã Thanh Toán', color: '#40a9ff' },
    Debt: { code: 'DEBT', name: 'Công Nợ', color: '#ff4d4f' },
  },

  PaymentStatus2: {
    Non: { code: 'NON', name: 'Chưa Thanh Toán', color: '#ff4d4f' },
    Wait: { code: 'WAIT', name: 'Chờ Xác Nhận', color: '#40a9ff' },
    Haft: { code: 'HAFT', name: 'Thanh Toán 1 Phần', color: 'green' },
    Paid: { code: 'PAID', name: 'Đã Thanh Toán', color: '#29a745' },
  },

  Sex: {
    Man: { code: 'MAN', name: 'Nam' },
    Woman: { code: 'WOMAN', name: 'Nữ' },
    Unknown: { code: 'UNKNOWN', name: 'Không biết' },
  },

  RoomStatus: {
    EMPTY: { code: 'EMPTY', name: 'CÒN TRỐNG', color: '#f5bb1b' },
    SALE: { code: 'SALE', name: 'SẮP TRỐNG', color: '#F77A36' },
    DEPOSIT: { code: 'DEPOSIT', name: 'GIỮ CHỖ', color: '#0ad118' },
    FULL: { code: 'FULL', name: 'ĐÃ THUÊ', color: '#0e7ee5' },
    LOCK: { code: 'LOCK', name: 'ĐÃ KHÓA', color: '#b2b3af' },
    MAINTANANCE: { code: 'MAINTANANCE', name: 'BẢO TRÌ', color: '#f02222' },
  },

  BillStatus: {
    Paid: { code: 'PAID', name: 'Đã Thanh Toán', color: '#29a745' },
    Haft: { code: 'HAFT', name: 'Thanh Toán 1 Phần', color: 'green' },
    Wait: { code: 'WAIT', name: 'Chờ Xác Nhận', color: '#40a9ff' },
    Non: { code: 'NON', name: 'Chưa Thanh Toán', color: '#ff4d4f' },
  },

  PaymentType: {
    Transfer: {
      code: 'TRANSFER',
      name: 'Chuyển khoản',
      description: 'Khách hàng chuyển khoản',
      color: 'orange',
    },
    Cash: {
      code: 'CASH',
      name: 'Tiền mặt',
      description: 'Thu tiền mặt từ khách hàng',
      color: 'blue',
    },
  },

  PayslipStatus: {
    New: { code: 'NEW', name: 'Mới tạo', color: '#254261' },
    Approved: { code: 'APPROVED', name: 'Đã duyệt', color: '#28a745' },
    // Spent: { code: 'SPENT', name: 'Đã Chi' },
    Cancel: { code: 'CANCEL', name: 'Đã hủy', color: '#ff4d4f' },
  },

  JobStatus: {
    Approved: { code: 'APPROVED', name: 'Xác Nhận', color: '#faad14' },
    Process: { code: 'PROCESSING', name: 'Xác Nhận Đang Làm', color: '#1d39c4' },
    Complete: { code: 'COMPLETE', name: 'Đã Hoàn Thành', color: '#28a745' },
    Cancel: { code: 'CANCEL', name: 'Đã Hủy', color: '#ff4d4f' },
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

  NotifyObjectType: {
    Job: { code: 'JOB', name: 'Công Việc' },
    JobDaily: { code: 'JOB_DAILY', name: 'Công Việc Hằng Ngày' },
    Bill: { code: 'BILL', name: 'Hóa Đơn' },
    Contract: { code: 'CONTRACT', name: 'Hợp Đồng' },
    EmployeeAdvance: { code: 'EMPLOYEE_ADVANCE', name: 'Tạm Ứng' },
  },

  ComplaintStatus: {
    New: { code: 'NEW', name: 'Mới Tạo', color: '#40a9ff' },
    Complete: { code: 'COMPLETE', name: 'Hoàn Thành', color: '#ff4d4f' },
  },

  JobType: {
    Single: { code: 'SINGLE', name: 'Sửa Chữa', color: '#40a9ff' },
    Daily: { code: 'DAILY', name: 'Hằng Ngày', color: '#ff4d4f' },
  },

  // trạng thái của  debt
  DebtStatus: {
    Non: { code: 'NON', name: 'Chưa thu', description: 'Chưa Thu', color: '#FF0000' },
    Paid: { code: 'PAID', name: 'Đã thu', description: 'Đã Thu', color: '#0000FF' },
    PaidPartial: { code: 'PAIDPARTIAL', name: 'Thu Một Phần', description: 'Thu Một Phần', color: '#254261' },
  },

  FileType: {
    New: { code: 'NEW', name: 'Khởi tạo', description: 'Khởi tạo' },
    Complete: { code: 'COMPLETE', name: 'Hoàn thành', description: 'Hoàn thành' },
    ConfirmPayment: { code: 'CONFIRMPAYMENT', name: 'Xác nhận thanh toán', description: 'Xác nhận thanh toán' },
  },

  AdvancePaymentStatus: {
    Non: { code: 'NON', name: 'Chưa thu', description: 'Chưa Thu', color: '#FF0000' },
    Paid: { code: 'PAID', name: 'Đã thu', description: 'Đã Thu', color: '#0000FF' },
    PaidPartial: { code: 'PAIDPARTIAL', name: 'Thu Một Phần', description: 'Thu Một Phần', color: '#254261' },
  },

  AdvanceType: {
    Payslip: { code: 'PAYSLIP', name: 'Phiếu Chi' },
    Refund: { code: 'REFUND', name: 'Hoàn Ứng' },
  },

  PayslipType: {
    Apartment: {
      level: 0,
      code: 'APARTMENT',
      name: 'Chi Phí Khu Trọ',
      shortCode: 'A',
      child: {
        RentLand: { level: 1, code: 'APARTMENT_RENTLAND', name: 'Chi Thuê Mặt Bằng', shortCode: 'ARL' },
        Payroll: { level: 1, code: 'APARTMENT_PAYROLL', name: 'Chi Lương', shortCode: 'APAY' },
        Insurance: { level: 1, code: 'APARTMENT_INSURANCE', name: 'Chi BHXH', shortCode: 'AINS' },
        Operation: {
          level: 1,
          code: 'APARTMENT_OPERATION',
          name: 'Chi Vận Hành',
          shortCode: 'AO',
          children: {
            Trash: { level: 2, code: 'APARTMENT_OPERATION_TRASH', name: 'Chi Rác', shortCode: 'AOT' },
            Water: { level: 2, code: 'APARTMENT_OPERATION_WATER', name: 'Chi Nước', shortCode: 'AOW' },
            Electric: { level: 2, code: 'APARTMENT_OPERATION_ELECTRIC', name: 'Chi Điện', shortCode: 'AOE' },
            Police: {
              level: 2,
              code: 'APARTMENT_OPERATION_POLICE',
              name: 'Chi Công An - Làm Tạm Trú',
              shortCode: 'AOP',
            },
            Internet: { level: 2, code: 'APARTMENT_OPERATION_INTERNET', name: 'Chi Internet', shortCode: 'AOI' },
            Deposit: { level: 2, code: 'APARTMENT_OPERATION_DEPOSIT', name: 'Chi Cọc', shortCode: 'AOD' },
            Other: { level: 2, code: 'APARTMENT_OPERATION_OTHER', name: 'Chi Khác (Cây, Sửa Chữa…)', shortCode: 'AOO' },
          },
        },
      },
    },
    Office: {
      level: 0,
      code: 'OFFICE',
      name: 'Chi Phí Văn Phòng',
      shortCode: 'O',
      child: {
        Payroll: { level: 1, code: 'OFFICE_PAYROLL', name: 'Chi Lương', shortCode: 'OPAY' },
        Insurance: { level: 1, code: 'OFFICE_INSURANCE', name: 'Chi BHXH', shortCode: 'OINS' },
        RentCar: { level: 1, code: 'OFFICE_RENTCAR', name: 'Chi Thuê Xe', shortCode: 'ORC' },
        Stationery: { level: 1, code: 'OFFICE_STATIONERY', name: 'Chi Văn Phòng Phẩm', shortCode: 'OST' },
        Equipment: { level: 1, code: 'OFFICE_EQUIPMENT', name: 'Chi Thiết Bị Văn Phòng', shortCode: 'OEQ' },
        Other: { level: 1, code: 'OFFICE_OTHER', name: 'Chi Khác', shortCode: 'OOT' },
      },
    },
  },

  AssetType: {
    Home: { code: 'HOME', name: 'Nhà', shortCode: 'HOME' },
    Car: { code: 'CAR', name: 'Xe', shortCode: 'CAR' },
    Soft: { code: 'SOFT', name: 'Phần Mềm', shortCode: 'SOF' },
    Equip: { code: 'EQUIP', name: 'Thiết bị gia dụng', shortCode: 'EQUI' },
    Security: { code: 'SECURITY', name: 'Camera/Vân tay/Khoá bảo mật', shortCode: 'SEC' },
    Other: { code: 'OTHER', name: 'Khác', shortCode: 'OTH' },
  },

  ReceiptType: {
    Bill: { code: 'BILL', name: 'Hóa Đơn', color: '#ff4d4f' },
    Job: { code: 'JOB', name: 'Công Việc', color: 'blue' },
    Deposit: { code: 'DEPOSIT', name: 'Tiền Cọc', color: '#40a9ff' },
    Offset: { code: 'OFFSET', name: 'Tiền Bồi Thường', color: 'orange' },
  },

  DepreciationType: {
    Office: { code: 'DEPRECIATION_OFFICE', name: 'Chi Phí Khấu Hao Văn Phòng', shortCode: 'DEPO' },
    Apartment: { code: 'DEPRECIATION_APARTMENT', name: 'Chi Phí Khấu Hao Khu Trọ', shortCode: 'DEPA' },
  },

  DedtType: {
    Advance: { code: 'ADVANCE', name: 'Tạm Ứng', color: '#40a9ff' },
    Bill: { code: 'BILL', name: 'Hóa Đơn Tháng', color: '#ff4d4f' },
    BillJob: { code: 'BILL_JOB', name: 'Hóa Đơn Công Việc', color: '#ff4d4f' },
    ContractDeposit: { code: 'CONTRACT_DEPOSIT', name: 'Cọc Hợp Đồng', color: '#ff4d4f' },
    ContractOffSet: { code: 'CONTRACT_OFFSET', name: 'Bồi Thường Hư Hỏng', color: '#ff4d4f' },
    QuickDeposit: { code: 'QUICK_DEPOSIT', name: 'Đặt cọc nhanh', color: '#ff4d4f' },
  },

  AssetStatus: {
    Used: { code: 'USED', name: 'Đang Sử Dụng', color: 'blue' },
    Close: { code: 'CLOSE', name: 'Ngưng Sử Dụng', color: 'red' },
  },

  AssetDepreciationStatus: {
    Non: { code: 'NON', name: 'Chưa Khấu Hao', color: 'orange' },
    Active: { code: 'ACTIVE', name: 'Đã Khấu Hao', color: 'red' },
  },

  FinanceType: {
    Revenue: { code: 'REVENUE', name: 'Doanh Thu' },
    Cost: { code: 'COST', name: 'Chi Phí' },
    Profit: { code: 'PROFIT', name: 'Lợi Nhuận' },
  },

  SentBillStatus: {
    Complete: { code: 'COMPLETE', name: 'Gửi thành công', color: '#29a745' },
    Error: { code: 'ERROR', name: 'Gửi không thành công', color: '#FF0000' },
    Unsent: { code: 'UNSENT', name: 'Chưa gửi', color: '#1890ff' },
  },

  CharterCapitalType: {
    Payment: { code: 'PAYMENT', name: 'Tăng Vốn', color: '#0000FF' },
    Withdraw: { code: 'WITHDRAW', name: 'Giảm Vốn', color: '#FF0000' },
  },

  CharterCapitalStatus: {
    New: { code: 'NEW', name: 'Khởi Tạo', color: '#254261' },
    Approved: { code: 'APPROVED', name: 'Đã Duyệt', color: '#0000FF' },
    Cancel: { code: 'CANCEL', name: 'Đã Hủy', color: '#FF0000' },
  },

  JobCategory: {
    Electronic: { code: 'ELECTRONIC', name: 'Điện' },
    Water: { code: 'WATER', name: 'Nước' },
    SanitaryEquipment: { code: 'SANITARY_EQUIPMENT', name: ' Thiết bị vệ sinh' },
    Drain: { code: 'DRAIN', name: 'Thông cống' },
    Facilities: { code: 'FACILITIES', name: 'Cơ sở vật chất' },
    Cleaning: { code: 'CLEANING', name: 'Vệ sinh' },
    Other: { code: 'OTHER', name: 'Khác' },
  },

  ErrorCodeTableZalo: {
    A0: { code: -100, message: 'Phát sinh lỗi không xác định' },
    A1: { code: -101, message: 'Ứng dụng gửi ZNS không hợp lệ' },
    A2: { code: -102, message: 'Ứng dụng gửi ZNS không tồn tại' },
    A3: { code: -103, message: 'Ứng dụng gửi ZNS chưa được phê duyệt' },
    A4: { code: -104, message: 'Mã secret key không tồn tại' },
    A5: { code: -105, message: 'Ứng dụng gửi ZNS chưa liên kết với OA' },
    A6: { code: -106, message: 'Phương thức không được hỗ trợ' },
    A7: { code: -107, message: 'ID ZNS không hợp lệ' },
    A8: { code: -108, message: 'Số điện thoại không hợp lệ' },
    A9: { code: -109, message: 'ID mẫu ZNS không hợp lệ' },
    A10: { code: -110, message: 'Người dùng chưa cập nhật Zalo phiên bản mới' },
    A11: { code: -111, message: 'Mẫu ZNS không có dữ liệu' },
    A12: { code: -112, message: 'Dữ liệu mẫu ZNS không hợp lệ' },
    A13: { code: -113, message: 'Nút không hợp lệ' },
    A14: {
      code: -114,
      message:
        'Người dùng không nhận được ZNS vì các lý do: Trạng thái tài khoản, Tùy chọn nhận ZNS, Sử dụng Zalo phiên bản cũ, hoặc các lỗi nội bộ khác',
    },
    A15: { code: -115, message: 'Ví không đủ số dư' },
    A16: { code: -116, message: 'Nội dung không hợp lệ' },
    A17: { code: -117, message: 'OA hoặc ứng dụng gửi ZNS chưa được cấp quyền sử dụng mẫu ZNS này' },
    A18: {
      code: -118,
      message: 'Số điện thoại chưa đăng ký Zalo hoặc người dùng đã vô hiệu hóa tài khoản hơn 30 ngày',
    },
    A19: { code: -119, message: 'Tài khoản không thể nhận ZNS' },
    A20: { code: -120, message: 'OA chưa được cấp quyền sử dụng tính năng này' },
    A21: { code: -121, message: 'Mẫu ZNS không có nội dung' },
    A22: { code: -122, message: 'Nội dung mẫu ZNS không đúng định dạng json' },
    A23: { code: -123, message: 'Không giải mã được nội dung mẫu ZNS' },
    A24: { code: -124, message: 'Mã truy cập không hợp lệ' },
    A25: { code: -125, message: 'ID OA không hợp lệ' },
    A26: { code: -126, message: 'Ví (development mode) không đủ số dư' },
    A27: { code: -127, message: 'Template test chỉ có thể được gửi cho admin' },
    A28: { code: -128, message: 'Ứng dụng gửi ZNS chưa có mã encoding' },
    A29: { code: -129, message: 'Mã encoding không thể được tạo ra' },
    A30: { code: -130, message: 'Nội dung mẫu ZNS vượt giới hạn kí tự' },
    A31: { code: -131, message: 'Mẫu ZNS chưa được phê duyệt' },
    A32: { code: -132, message: 'Tham số không hợp lệ' },
    A33: { code: -133, message: 'Không hỗ trợ gửi ZNS trong khung giờ 22h đến 6h' },
    A34: { code: -134, message: 'Người dùng chưa phản hồi gợi ý nhận ZNS từ OA' },
    A35: { code: -135, message: 'OA chưa được cấp quyền gửi ZNS' },
    A36: { code: -136, message: 'Ứng dụng gửi ZNS cần được kết nối với ZBA để sử dụng các tính năng trả phí' },
    A37: {
      code: -137,
      message: 'ZBA kết nối với ứng dụng gửi ZNS này đã hết số dư tài khoản hoặc không thể thanh toán',
    },
    A38: { code: -138, message: 'Ứng dụng gửi ZNS chưa có quyền sử dụng tính năng này' },
    A39: { code: -139, message: 'Người dùng đã từ chối nhận loại ZNS này' },
    A40: { code: -140, message: 'OA chưa được cấp quyền gửi ZNS hậu mãi cho người dùng này' },
    A41: { code: -141, message: 'Người dùng từ chối nhận ZNS từ OA' },
    A42: { code: -142, message: 'OA chưa có RSA key, vui lòng gọi API tạo RSA key' },
    A43: { code: -143, message: 'OA đã có RSA key, vui lòng gọi API get RSA key' },
    A44: { code: -144, message: 'OA đã vượt quá số lượng gửi cho phép trong ngày hôm nay' },
    A45: { code: -145, message: 'OA không được phép gửi loại nội dung ZNS này' },
    A46: { code: -146, message: 'Mẫu ZNS này đã bị vô hiệu hóa do chất lượng thấp' },
    A47: { code: -147, message: 'OA đã vượt quá số lượng gửi cho phép của mẫu ZNS này trong ngày hôm nay' },
    A48: { code: -148, message: 'Không tìm thấy ZNS journey token' },
    A49: { code: -149, message: 'ZNS journey token không hợp lệ' },
    A50: { code: -150, message: 'ZNS journey token đã hết hạn' },
    A51: { code: -151, message: 'Lấy E2EE key thất bại, vui lòng thử lại sau' },
    A52: { code: -152, message: 'Mẫu ZNS này không phải mẫu E2EE' },
  },

  PublicRoomStatus: {
    Empty: { code: 'EMPTY', name: 'Chưa Có Phòng' },
    ComingSoon: { code: 'COMINGSOON', name: 'Sắp Trống' },
    Availble: { code: 'AVAILBLE', name: 'Còn Phòng' },
    Full: { code: 'FULL', name: 'Hết Phòng' },
  },

  AdvanceStatus: {
    Wait: { code: 'WAIT', name: 'Chờ Duyệt', color: '#ff4d4f' },
    Approved: { code: 'APPROVED', name: 'Duyệt', color: '#29a745' },
    Cancel: { code: 'CANCEL', name: 'Hủy', color: '#b2b3af' },
  },

  /** Trạng thái của phiếu đặt cọc */
  ResidentDepositStatus: {
    MoiCoc: { code: 'MoiCoc', name: 'Mới cọc', color: '#b2b3af' },
    DangO: { code: 'DangO', name: 'Đang ở', color: '#29a745' },
    HoanCoc: { code: 'HoanCoc', name: 'Hoàn cọc', color: '#29a745' },
    BoCoc: { code: 'BoCoc', name: 'Bỏ cọc', color: '#b2b3af' },
  },

  UtilityType: {
    Room: { code: 'Room', name: 'Phòng' },
    Apartment: { code: 'Apartment', name: 'Khu' },
  },
}
