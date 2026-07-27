# PRODUCT REQUIREMENT DOCUMENT (PRD): INTERACTIVE UI COMPONENTS & USER FLOW SPECIFICATIONS

Tài liệu này đóng vai trò là **Bản Đặc Tả Yêu Cầu Sản Phẩm (PRD - Product Requirement Document)** và Hướng dẫn Quy trình Tương tác Người dùng cho toàn bộ các tính năng tương tác (Interactive Features) trong ứng dụng **AI Engineer Roadmap & Focus Tracker**. 

Tài liệu được thiết kế nhằm mục đích hướng dẫn cho các AI Agent hoặc Lập trình viên khác nắm rõ chính xác yêu cầu chức năng (Functional Requirements), hợp đồng dữ liệu (State Contracts), luồng tương tác người dùng (User Flows) và tiêu chí nghiệm thu (Acceptance Criteria) khi triển khai hoặc mở rộng các tính năng này.

> [!NOTE]
> Tài liệu này tập trung vào khía cạnh Yêu cầu Chức năng & Tương tác Người dùng (PRD & UX Specs). Về chi tiết cấu trúc thư mục, sơ đồ kiến trúc hệ thống và mã nguồn mẫu, vui lòng tham khảo [architecture_guide.md](./architecture_guide.md) và [project_structure.md](./project_structure.md). Về quy chuẩn thiết kế UI, hệ thống Design Tokens và quy định dùng SVG Icons, vui lòng tham khảo [ui_system_design_guide.md](./ui_system_design_guide.md).

---

## 1. Mục Đích & Quy Tắc Thiết Kế Tương Tác (Design Principles)

1. **Phản hồi tức thì (Instant Reactive Feedback)**: Mọi thao tác tương tác của người dùng (Check, Switch Tab, Start Timer, Bookmark, Theme Toggle) phải lập tức phản hồi trên giao diện không có độ trễ và không cần nạp lại trang (Zero Page Reload).
2. **Đồng bộ dữ liệu hai chiều (State-Driven Persistence)**: Tất cả trạng thái tương tác phải được lưu vết ngay lập tức vào bộ nhớ tạm toàn cục (State Store) và tự động đồng bộ xuống lưu trữ cục bộ (Local Storage).
3. **Trọng số tiến độ minh bạch (Weighted Progress Model)**: Tiến độ hoàn thành ứng dụng được tính dựa trên 2 nguồn tương tác chính:
   - **60% Trọng số**: Việc tích chọn hoàn thành các nhiệm vụ thực hành (Deliverable Tasks).
   - **40% Trọng số**: Số lượng phiên tập trung Pomodoro đã hoàn thành tích lũy (Pomodoro Sessions).

---

## 2. Đặc Tả Chức Năng Toàn Cục & Navigation Bar (PRD-01)

### 2.1. Chức Năng Chuyển Đổi Giao Diện Sáng/Tối (Theme Switcher)
- **User Story**: Là một học viên, tôi muốn chuyển đổi giao diện giữa chế độ Tối (Dark) và Sáng (Light) để học tập thoải mái trong các điều kiện ánh sáng khác nhau.
- **Thành phần giao diện**: `Theme Toggle Component` nằm trên thanh Header.
- **Sự kiện kích hoạt (Trigger)**: Người dùng nhấn (Click) vào Nút Chuyển Đổi Theme.
- **Yêu cầu chức năng & Luồng xử lý**:
  1. Lấy trạng thái `theme` hiện tại từ `State Store` (`'dark'` hoặc `'light'`).
  2. Đổi giá trị theme sang trạng thái ngược lại.
  3. Gán thuộc tính `data-theme` trên thẻ gốc `<html>` của document.
  4. Đổi hình ảnh biểu tượng SVG (Biểu tượng SVG Mặt Trời khi ở chế độ Dark, SVG Mặt Trăng khi ở chế độ Light).
  5. Lưu giá trị theme mới vào `Local Storage`.
- **Tiêu chí nghiệm thu (Acceptance Criteria - AC)**:
  - [ ] Trạng thái Theme được duy trì chính xác sau khi reload trang (F5).
  - [ ] Các CSS Custom Properties tự động chuyển đổi mượt mà giữa Dark và Light mode.

### 2.2. Chức Năng Sao Lưu Tiến Độ (Export Backup)
- **User Story**: Là một học viên, tôi muốn xuất dữ liệu tiến độ học tập và lịch sử Pomodoro ra file sao lưu để cất giữ an toàn.
- **Thành phần giao diện**: `Export Action Component` trên Header bar.
- **Sự kiện kích hoạt (Trigger)**: Người dùng nhấn vào nút Export.
- **Yêu cầu chức năng & Luồng xử lý**:
  1. Đọc dữ liệu `AppState` hiện tại từ `State Store` và định dạng thành chuỗi JSON.
  2. Tạo đối tượng Blob tải xuống với tên file có định dạng: `ai-engineer-roadmap-backup-YYYY-MM-DD.json`.
  3. Tự động kích hoạt luồng tải xuống của trình duyệt.
  4. Hiển thị thông báo Toast thành công.
- **Tiêu chí nghiệm thu (AC)**:
  - [ ] File `.json` tải về có cấu trúc hợp lệ chứa đủ các trường `checked`, `resourceFlags`, `activeTab`, `theme`, `pomodoroSettings`, `pomodoroSessions`.

### 2.3. Chức Năng Khôi Phục Tiến Độ (Import Backup)
- **User Story**: Là một học viên, tôi muốn nhập file sao lưu JSON để khôi phục tiến độ học tập khi đổi thiết bị hoặc trình duyệt.
- **Thành phần giao diện**: `Import Action Component` trên Header bar.
- **Sự kiện kích hoạt (Trigger)**: Người dùng nhấn vào nút Import.
- **Yêu cầu chức năng & Luồng xử lý**:
  1. Hiển thị hộp thoại chọn file của hệ điều hành (chỉ chấp nhận `.json`).
  2. Đọc nội dung file và kiểm tra tính hợp lệ của cấu trúc JSON.
  3. **Nếu file hợp lệ**: Khôi phục dữ liệu vào `State Store`, cập nhật thuộc tính theme, ghi vào `Local Storage`, kích hoạt re-render toàn bộ giao diện và hiển thị Toast thông báo thành công.
  4. **Nếu file lỗi/hỏng**: Bắt lỗi và hiển thị Toast thông báo lỗi, giữ nguyên trạng thái hiện tại không làm hỏng ứng dụng.
- **Tiêu chí nghiệm thu (AC)**:
  - [ ] File hỏng hoặc không đúng định dạng JSON sẽ bị từ chối và không làm sập ứng dụng.

### 2.4. Chức Năng Đặt Lại Tiến Độ (Progress Reset)
- **User Story**: Là một học viên, tôi muốn xóa toàn bộ tiến độ cũ để bắt đầu lại lộ trình từ đầu.
- **Thành phần giao diện**: `Reset Action Component` trên Header bar.
- **Sự kiện kích hoạt (Trigger)**: Người dùng nhấn vào nút Reset.
- **Yêu cầu chức năng & Luồng xử lý**:
  1. Hiển thị cửa sổ cảnh báo xác nhận (Confirmation Dialog) để tránh thao tác nhầm.
  2. Nếu người dùng chọn **Đồng ý**: Xóa sạch danh sách nhiệm vụ đã check, xóa đánh dấu tài nguyên, xóa lịch sử phiên Pomodoro, đưa cài đặt Pomodoro về mặc định (`25/5`), lưu `Local Storage` và làm mới giao diện về 0%.
- **Tiêu chí nghiệm thu (AC)**:
  - [ ] Phần trăm tiến độ trên Navigation Badge và Dashboard ngay lập tức quay về 0%.

### 2.5. Chức Năng Điều Hướng Tab & Hiển Thị Tiến Độ Động (Hash Router & Navigation Badge)
- **User Story**: Là một học viên, tôi muốn chuyển đổi nhanh giữa các trang view và luôn nhìn thấy phần trăm tiến độ tổng thể của mình trên thanh điều hướng.
- **Thành phần giao diện**: `Navigation Bar Component`.
- **Sự kiện kích hoạt (Trigger)**: Người dùng nhấn vào các thẻ Tab hoặc thao tác nút Back/Forward của trình duyệt.
- **Yêu cầu chức năng & Luồng xử lý**:
  1. Cập nhật Hash URL dạng `#/view-name` (`dashboard`, `roadmap`, `schedule`, `resources`, `techstack`).
  2. Đánh dấu class active trên Tab được chọn và ẩn/hiển thị container view tương ứng.
  3. **Navigation Badge (`#badge-overall-pct`)**: Nằm trên Tab Dashboard, tự động tính toán và hiển thị % tiến độ tổng thể theo công thức trọng số (`Deliverables 60% + Pomodoros 40%`) mỗi khi có bất kỳ thay đổi trạng thái nào.
- **Tiêu chí nghiệm thu (AC)**:
  - [ ] Khi truy cập trực tiếp URL chứa Hash (ví dụ `#/schedule`), ứng dụng mở đúng trang Tab tương ứng.

---

## 3. Đặc Tả Tương Tác Trang Dashboard (PRD-02)

### 3.1. Chức Năng Đánh Dấu Nhanh Nhiệm Vụ Tiếp Theo (Quick Finish Next Task)
- **User Story**: Là một học viên, tôi muốn hoàn thành nhanh nhiệm vụ tiếp theo ngay tại trang chủ Dashboard mà không cần tìm kiếm trong lộ trình chi tiết.
- **Thành phần giao diện**: `Dashboard View Component` (Thẻ "Nhiệm Vụ Tiếp Theo Cần Làm").
- **Sự kiện kích hoạt (Trigger)**: Người dùng nhấn vào nút **"Đánh dấu hoàn thành task này"** (chứa biểu tượng SVG Check).
- **Yêu cầu chức năng & Luồng xử lý**:
  1. Thư viện tính toán tiến độ (`Progress Engine Module`) tự động tìm kiếm nhiệm vụ thực hành đầu tiên chưa hoàn thành trong danh sách 5 Sprints.
  2. Hiển thị thông tin tên nhiệm vụ và module tương ứng kèm một nút bấm mang thuộc tính `data-task-id`.
  3. Khi nhấp nút, gọi hàm thay đổi trạng thái `toggleChecked(taskId)` trong `State Store`.
  4. Giao diện Dashboard tự động cập nhật sang Task kế tiếp hoặc chuyển sang trạng thái thông báo hoàn thành 100%.
- **Tiêu chí nghiệm thu (AC)**:
  - [ ] Nhấn nút lập tức cập nhật trạng thái Task thành công và tính lại % tiến độ tổng thể.

---

## 4. Đặc Tả Tương Tác Trang Roadmap Sprints (PRD-03)

### 4.1. Danh Sách Checkbox Nhiệm Vụ Thực Hành (Deliverables Checklist)
- **User Story**: Là một học viên, tôi muốn tích chọn các nhiệm vụ thực hành (Deliverables) khi viết code xong để ghi nhận tiến độ.
- **Thành phần giao diện**: `Roadmap View Component` (Danh sách nhiệm vụ trong 5 Sprints).
- **Sự kiện kích hoạt (Trigger)**: Người dùng click vào Checkbox của một nhiệm vụ.
- **Yêu cầu chức năng & Luồng xử lý**:
  1. Mỗi checkbox được gán một `data-task-id` duy nhất và cố định.
  2. Bắt sự kiện `change`: Đảo ngược trạng thái boolean trong `checked[taskId]` thuộc `State Store`.
  3. Áp dụng hiệu ứng thị giác: Thêm hiệu ứng chữ gạch ngang, mờ nền cho nhiệm vụ đã hoàn thành.
  4. Cập nhật chỉ số nhiệm vụ đã xong (`completed/total`) trên header của Sprint tương ứng.
- **Tiêu chí nghiệm thu (AC)**:
  - [ ] Trạng thái tích chọn được lưu trữ bền vững trong `Local Storage`.
  - [ ] Tiến độ nhiệm vụ thực hành đóng góp đúng 60% vào tổng tiến độ ứng dụng.

---

## 5. Đặc Tả Tương Tác Bộ Đếm Giờ Pomodoro & Lịch Trình (PRD-04)

### 5.1. Bộ Chuyển Chế Độ Timer (Focus / Short Break / Long Break)
- **Thành phần giao diện**: `Schedule View Component` (Nhóm nút Chế độ Timer).
- **Yêu cầu**: Chuyển đổi giữa 3 chế độ: **Focus (Tập trung)**, **Short Break (Nghỉ ngắn)**, và **Long Break (Nghỉ dài)** (kèm biểu tượng SVG Target và SVG Clock).
- **Hành vi**: Tạm dừng timer nếu đang chạy, nạp thời gian đếm lùi tương ứng với cấu hình của chế độ được chọn, cập nhật vòng tròn tiến độ SVG và tiêu đề trình duyệt.

### 5.2. Bộ Chọn Preset & Tùy Chỉnh Thời Gian Custom
- **Thành phần giao diện**: `Schedule View Component` (Nhóm nút Preset & Khối Input Custom).
- **Các tùy chọn Preset**:
  - `25/5`: 25 phút Tập trung / 5 phút Nghỉ.
  - `50/5`: 50 phút Tập trung sâu / 5 phút Nghỉ.
  - `Custom`: Thời gian tự chọn.
- **Khối Input Custom**: Chỉ xuất hiện khi chọn preset `Custom`. Nhập số phút Tập trung (1-120 phút) và Nghỉ (1-60 phút), nhấn nút **"Áp dụng"** để ghi nhận vào `pomodoroSettings`.

### 5.3. Dropdown Liên Kết Phiên Pomodoro Với Nhiệm Vụ Học Tập
- **Thành phần giao diện**: `Schedule View Component` (Dropdown chọn Task).
- **Yêu cầu**: Cho phép người dùng gắn một nhiệm vụ cụ thể từ lộ trình vào phiên Pomodoro chuẩn bị chạy. Khi phiên kết thúc, thông tin Task này sẽ được lưu vào lịch sử nhật ký.

### 5.4. Bộ Đếm Ngược & Vòng Tròn Tiến Độ SVG (Timer Engine)
- **Thành phần giao diện**: `Schedule View Component` (Đồng hồ đếm ngược & SVG Progress Ring).
- **Bộ nút điều khiển**:
  - **Bắt Đầu / Tạm Dừng**: Chạy hoặc dừng bộ đếm `1000ms`. Đổi biểu tượng SVG Play/Pause.
  - **Đặt Lại**: Đưa thời gian đếm lùi về giá trị ban đầu.
  - **Bỏ Qua**: Chuyển sang phiên tiếp theo (Focus -> Break hoặc Break -> Focus).
- **Tối ưu hiển thị**:
  - Cập nhật trực tiếp DOM văn bản chữ số (`MM:SS`) và giá trị `strokeDashoffset` của vòng tròn SVG mỗi giây mà **không re-render lại trang**.
  - Tiêu đề tab trình duyệt tự động cập nhật liên tục: `(MM:SS) Focus` hoặc `(MM:SS) Break`.
- **Xử lý khi hoàn tất phiên Tập trung**:
  - Phát âm thanh chuông báo (nếu bật).
  - Gửi thông báo đẩy Web Notification (nếu được cấp quyền).
  - Tự động lưu 1 log vào `pomodoroSessions` (Mỗi phiên ghi nhận cộng điểm đóng góp vào **40% trọng số** tiến độ tổng).
  - Tự động chuyển sang nghỉ dài sau mỗi 4 phiên tập trung liên tiếp.

### 5.5. Cấu Hình Âm Thanh, Thông Báo & Tự Động Nghỉ
- **Thành phần giao diện**: `Schedule View Component` (Hàng Checkbox Cấu hình).
- **Âm thanh chuông báo**: Sử dụng bộ tổng hợp âm thanh Web Audio API (không cần file mp3 tĩnh).
- **Thông báo trình duyệt**: Xin quyền `Notification.requestPermission()`. Nếu bị từ chối, tự động bỏ tích checkbox và hiển thị cảnh báo Toast.
- **Tự động nghỉ**: Tự động kích hoạt timer đếm lùi giờ nghỉ ngay khi hết giờ tập trung.

### 5.6. Nhật Ký Lịch Sử Phiên & Nút Xóa Phiên
- **Thành phần giao diện**: `Schedule View Component` (Danh sách Nhật ký phiên).
- **Yêu cầu**: Hiển thị danh sách các phiên Pomodoro đã hoàn thành gần đây. Cho phép nhấn nút Xóa (chứa biểu tượng SVG Trash) để loại bỏ phiên khỏi lịch sử (tự động tính toán lại điểm tích lũy Pomodoro trên Dashboard).

---

## 6. Đặc Tả Tương Tác Trang Free Resources (PRD-05)

### 6.1. Bộ Lọc Tài Nguyên Theo Module
- **Thành phần giao diện**: `Resources View Component` (Thanh nút lọc).
- **Yêu cầu**: Nút "Tất Cả Modules" và các nút từ "Module 1" đến "Module 5". Khi nhấn nút nào, danh sách tài nguyên bên dưới chỉ hiển thị các tài liệu/khóa học thuộc Module đó.

### 6.2. Đánh Dấu Yêu Thích Tài Nguyên (Bookmark Star)
- **Thành phần giao diện**: `Resources View Component` (Nút ngôi sao SVG trên mỗi thẻ tài nguyên).
- **Yêu cầu**: Khi nhấn nút ngôi sao, đảo trạng thái lưu trong `resourceFlags[resourceId]`. Đổi biểu tượng giữa SVG Ngôi sao viền (`starOutline`) và SVG Ngôi sao vàng đặc (`starFilled`).

### 6.3. Mở Liên Kết Ngoại Khối
- **Thành phần giao diện**: `Resources View Component` (Nút Mở Link với SVG External Link).
- **Yêu cầu**: Mở URL tài liệu/khóa học trong tab trình duyệt mới an toàn với thuộc tính `target="_blank" rel="noopener noreferrer"`.

---

## 7. Ma Trận Tiêu Chí Nghiệm Thu & Tương Tác Component (Acceptance Matrix)

| Mã PRD | Chức Năng | Component / Module Quản Lý | Sự Kiện (Event) | Hợp Đồng Trạng Thái (State Contract) | Tiêu Chí Nghiệm Thu (AC) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PRD-01.1** | Theme Switcher | Theme Toggle Component | `click` | `setThemeState()` | Đổi attribute `data-theme`, cập nhật SVG Icon, lưu theme lâu dài. |
| **PRD-01.2** | Export Backup | Export Action Component | `click` | `exportStateJSON()` | Tải xuống file `.json` chứa chính xác dữ liệu state hiện tại. |
| **PRD-01.3** | Import Backup | Import Action Component | `click` | `importState()` | Validate JSON, khôi phục state thành công, báo Toast rõ ràng. |
| **PRD-01.4** | Progress Reset | Reset Action Component | `click` | `resetProgress()` | Hỏi xác nhận trước khi xóa, đưa tiến độ học & lịch sử về 0%. |
| **PRD-01.5** | Hash Router | Navigation Bar Component | `hashchange` | `setActiveTabState()` | Đồng bộ URL Hash `#/routeId`, bật active tab UI và cập nhật % badge. |
| **PRD-02.1** | Quick Finish Task | Dashboard View Component | `click` | `toggleChecked()` | Tích hoàn thành Task tiếp theo ngay tại Dashboard. |
| **PRD-03.1** | Task Checkbox | Roadmap View Component | `change` | `toggleChecked()` | Lưu vết hoàn thành Task (60% weight), đổi kiểu chữ gạch ngang. |
| **PRD-04.1** | Timer Mode Switch | Schedule View Component | `click` | `switchMode()` | Đổi chế độ Focus / Short Break / Long Break và thời lượng tương ứng. |
| **PRD-04.2** | Preset & Custom | Schedule View Component | `click` | `setProfile()` | Lưu cấu hình thời gian Pomodoro vào `pomodoroSettings`. |
| **PRD-04.3** | Task Selector | Schedule View Component | `change` | `selectedTaskId` | Gán Task ID vào phiên Pomodoro để lưu nhật ký. |
| **PRD-04.4** | Focus Timer Engine | Schedule View Component | `click` / `interval` | `addPomodoroSession()` | Chạy 1s/bước, cập nhật SVG ring, cộng điểm tích lũy Pomodoro (40% weight). |
| **PRD-04.5** | Audio & Notif | Schedule View Component | `click` / `change` | `updatePomodoroSettings()` | Phát chuông đếm giờ qua Web Audio API & gửi Web Notification. |
| **PRD-04.6** | Delete Session Log | Schedule View Component | `click` | `removePomodoroSession()` | Xóa phiên khỏi nhật ký, tính toán lại % tích lũy trên Dashboard. |
| **PRD-05.1** | Resource Filter | Resources View Component | `click` | `selectedModuleId` | Lọc các thẻ tài nguyên hiển thị theo từng Module. |
| **PRD-05.2** | Resource Bookmark | Resources View Component | `click` | `toggleResourceFlag()` | Đánh dấu/bỏ đánh dấu SVG ngôi sao vàng đặc yêu thích tài nguyên. |
