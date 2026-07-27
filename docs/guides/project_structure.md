# CẤU TRÚC THƯ MỤC DỰ ÁN (PROJECT DIRECTORY STRUCTURE)

Tài liệu này mô tả chi tiết sơ đồ tổ chức cây thư mục, vai trò của từng tập tin, mô-đun và quy chuẩn phân chia mã nguồn trong dự án **AI Engineer Roadmap 2026 Tracker**. Dữ liệu được cập nhật đầy đủ và chính xác với toàn bộ các tập tin hiện có trong repository.

---

## 1. Sơ đồ Cây Thư mục Tổng quan (Directory Tree)

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml              # Workflow GitHub Actions tự động build & deploy ứng dụng lên GitHub Pages
├── docs/                           # Thư mục tài liệu kỹ thuật, hướng dẫn & nội dung ứng dụng (Markdown)
│   ├── content/                    # Tài liệu lưu trữ nội dung dữ liệu của các trang Web (Web Page Content)
│   │   ├── online_learning_guide.md# Tài liệu lộ trình khóa học online miễn phí chi tiết theo 5 Modules
│   │   ├── resources.md            # Danh mục chi tiết các tài nguyên, công cụ & tài liệu tham khảo miễn phí
│   │   ├── schedule.md             # Lịch trình học tập mẫu & phân bổ thời gian Pomodoro theo tuần/ngày
│   │   └── tech_stack.md           # Sơ đồ & phân tích 5 lớp công nghệ AI Engineer chuẩn 2026
│   └── guides/                     # Tài liệu hướng dẫn phát triển & tái tạo repo cho AI Agent / Developer
│       ├── architecture_guide.md   # Hướng dẫn kiến trúc tổng thể, tech stack, design patterns & blueprint tái tạo
│       ├── interactive_components_guide.md # Tài liệu Yêu cầu Chức năng (PRD) & Quy chuẩn Tương tác UX
│       ├── project_structure.md    # File sơ đồ & giải thích chi tiết cấu trúc thư mục dự án (File này)
│       └── ui_system_design_guide.md # Quy chuẩn thiết kế hệ thống UI, CSS Layers, Tokens & SVG Icons
├── public/                         # Thư mục tài nguyên tĩnh (Static Assets - không qua bundler compilation)
│   └── favicon.svg                 # Biểu tượng Favicon SVG của ứng dụng Web
├── src/                            # Mã nguồn ứng dụng TypeScript
│   ├── actions/                    # Các tác vụ xử lý nghiệp vụ người dùng (User Actions)
│   │   └── backup.ts               # Xử lý Export JSON sao lưu, Import JSON khôi phục & Reset tiến độ
│   ├── data/                       # Dữ liệu tĩnh nghiệp vụ (Pure Data Layer)
│   │   └── planData.ts             # Data model chứa 100% nội dung lộ trình (Sprints, Schedule, Resources, Tech Stack)
│   ├── state/                      # Quản lý Trạng thái ứng dụng (State Management)
│   │   └── storage.ts              # State Store singleton - Quản lý AppState, localStorage & Pomodoro logs
│   ├── styles/                     # Hệ thống CSS Layered với CSS Custom Properties (Tokens)
│   │   ├── main.css                # CSS Entry point import các partials theo chỉ thị @layer
│   │   ├── _tokens.css             # Định nghĩa CSS Custom Properties (Colors, Light/Dark theme, Spacing, Fonts)
│   │   ├── _reset-base.css         # CSS Reset & Styling quy chuẩn các phần tử cơ bản HTML
│   │   ├── _header.css             # Style cho Header ứng dụng & Brand bar
│   │   ├── _tabs.css               # Style cho thanh Navigation Tab bar
│   │   ├── _main-layout.css        # Style cho khung bố cục chính Main layout container
│   │   ├── _views.css              # Style chi tiết cho tất cả Custom Element Views
│   │   └── _responsive.css         # Media queries tối ưu hiển thị trên các thiết bị Mobile/Tablet
│   ├── types/                      # Định nghĩa kiểu dữ liệu (TypeScript Interfaces & Types)
│   │   └── appState.ts             # Interfaces toàn bộ ứng dụng (Task, Module, Schedule, AppState, Logs...)
│   ├── utils/                      # Thư viện tiện ích thuần (Pure Utilities)
│   │   ├── audio.ts                # Bộ tổng hợp âm thanh thông báo Pomodoro bằng Web Audio API (không dùng mp3)
│   │   ├── icons.ts                # Từ điển chứa toàn bộ mã SVG Icons giao diện UI
│   │   └── notification.ts         # Utility gửi thông báo đẩy qua Web Notification API
│   ├── views/                      # Các thành phần giao diện (Native Web Components / Light DOM Views)
│   │   ├── roadmap-view-dashboard.ts  # <roadmap-view-dashboard> - View tổng quan tiến độ, stats & next task
│   │   ├── roadmap-view-roadmap.ts    # <roadmap-view-roadmap> - View chi tiết 5 Sprints, tasks & resources
│   │   ├── roadmap-view-schedule.ts   # <roadmap-view-schedule> - View đếm giờ Pomodoro & lịch trình học tập
│   │   ├── roadmap-view-resources.ts  # <roadmap-view-resources> - View danh mục tài nguyên học tập & lọc theo loại
│   │   └── roadmap-view-techstack.ts  # <roadmap-view-techstack> - View sơ đồ 5 lớp công nghệ AI Engineer 2026
│   ├── constants.ts                # Khai báo hằng số dùng chung (STORAGE_KEY, THEME_KEY, ROUTE_IDS)
│   ├── main.ts                     # Application Bootstrap - Khởi tạo theme, router, event listeners & render loop
│   ├── progress.ts                 # Pure Domain Logic - Engine tính toán % tiến độ, tổng giờ học & next task
│   ├── renderer.ts                 # Central Observer Renderer - Đăng ký listener & kích hoạt renderAll()
│   ├── router.ts                   # Hash Router - Điều hướng hash (#/route), chuyển tab & lưu tab active
│   └── toast.ts                    # Utility hiển thị thông báo Toast nhanh trên màn hình UI
├── .gitignore                      # Danh sách các tập tin/thư mục bỏ qua không lưu trữ trong Git (node_modules, dist)
├── index.html                      # HTML Shell chính của ứng dụng SPA (Header, Nav Tabs, Views & Toast container)
├── package.json                    # Khai báo thông tin dự án, npm scripts (dev, build, preview) & devDependencies
├── package-lock.json               # Lockfile lưu chính xác phiên bản các gói phụ thuộc npm
├── README.md                       # Tài liệu tổng quan giới thiệu dự án & lộ trình học tập AI Engineer 2026
├── tsconfig.json                   # Cấu hình trình biên dịch TypeScript (Strict mode, target ES2022)
└── vite.config.ts                  # Cấu hình Vite bundler (khai báo base: './' phục vụ GitHub Pages deployment)
```

---

## 2. Chi tiết Vai trò & Chức năng Cụ thể Của Từng Thư Mục

### 2.1. Thư mục `.github/`
- **`.github/workflows/deploy.yml`**: Tự động hóa luồng CI/CD với GitHub Actions. Mỗi khi `push` code lên branch `main`, workflow sẽ chạy `npm ci`, `npm run build` và deploy thư mục `dist/` lên GitHub Pages.

### 2.2. Thư mục `docs/`
Được chia thành 2 thư mục con rõ ràng theo mục đích sử dụng:

#### 📂 `docs/guides/` (Tài liệu hướng dẫn phát triển & tái tạo repo cho AI Agent / Developer)
- **`architecture_guide.md`**: Bản thiết kế chi tiết (Master Blueprint) về kiến trúc ứng dụng, tech stack, các thiết kế mẫu (Design Patterns) và checklist tái tạo dự án.
- **`interactive_components_guide.md`**: Tài liệu PRD & UX Specs chi tiết mô tả cơ chế tương tác, state machine và trải nghiệm người dùng trên các thành phần UI.
- **`project_structure.md`**: Tài liệu hiện tại, cung cấp sơ đồ cây thư mục và vai trò chi tiết của từng tập tin.
- **`ui_system_design_guide.md`**: Cẩm nang thiết kế UI, hệ thống biến CSS (Tokens), cấu trúc CSS Layers và từ điển SVG Icons.

#### 📂 `docs/content/` (Tài liệu nội dung dữ liệu của các trang Web)
- **`online_learning_guide.md`**: Hướng dẫn chi tiết 5 Module học tập miễn phí online, danh sách video khóa học & bài tập thực hành.
- **`resources.md`**: Danh mục tài nguyên miễn phí phục vụ học tập (Cheat sheets, repositories, documentation links).
- **`schedule.md`**: Chi tiết lịch học mẫu 4 tuần, phân bổ các phiên đếm giờ Pomodoro theo từng ngày.
- **`tech_stack.md`**: Phân tích chuyên sâu 5 lớp công nghệ AI Engineer chuẩn 2026 (Model Layer, Agent Framework, RAG & Vector DB, LLMOps, Client Integration).

### 2.3. Thư mục `public/`
Chứa các tập tin tài nguyên tĩnh giữ nguyên cấu trúc khi build, không bị Vite gom nhóm hoặc nén mã nguồn:
- **`favicon.svg`**: Logo biểu tượng SVG hiển thị trên tab trình duyệt của người dùng.

### 2.4. Thư mục `src/` (Mã nguồn ứng dụng)

#### `src/actions/`
Nơi chứa mã xử lý các tác vụ phức tạp liên quan đến nhập/xuất dữ liệu:
- **`backup.ts`**: Cung cấp các hàm `exportBackup()`, `importBackup()`, `resetProgress()` giúp người dùng sao lưu trạng thái ra file JSON hoặc khôi phục/xóa tiến độ.

#### `src/data/`
- **`planData.ts`**: Nơi duy nhất lưu trữ 100% dữ liệu nghiệp vụ của ứng dụng (Single Source of Truth). Bao gồm thông tin các Sprints (`SPRINT_MODULES`), Lịch Pomodoro (`POMODORO_SCHEDULE`), Tài nguyên (`FREE_RESOURCES`) và Tech Stack (`TECH_STACK_LAYERS`).

#### `src/state/`
- **`storage.ts`**: Quản lý bộ nhớ ứng dụng (State Store). Đọc và lưu dữ liệu người dùng (`checked`, `activeTab`, `theme`, `pomodoroSessions`) vào `localStorage`.

#### `src/styles/`
Hệ thống CSS mô-đun hóa được chia theo từng mối quan tâm và kết nối qua `@layer`:
- **`main.css`**: Entry point nhập tất cả các CSS partials và khai báo thứ tự ưu tiên `@layer reset, base, components, views, utilities;`.
- **`_tokens.css`**: Khai báo các CSS Custom Properties toàn cục cho màu sắc, bảng màu Dark/Light mode, spacing, font family, z-index.
- **`_reset-base.css`**: Chuẩn hóa CSS reset và style chung cho thẻ body, scrollbar, headings...
- **`_header.css`**: Quy định giao diện cho Header bar và nút chuyển đổi Theme.
- **`_tabs.css`**: Quy định giao diện thanh tab điều hướng (Navigation Bar).
- **`_main-layout.css`**: Cấu hình bố cục khung chứa (Container layout & View wrappers).
- **`_views.css`**: Style cho từng Custom Element view (Dashboard, Roadmap, Schedule, Resources, Tech Stack).
- **`_responsive.css`**: Quy định kiểu dáng theo kích thước màn hình (Responsive Design cho Mobile và Tablet).

#### `src/types/`
- **`appState.ts`**: Chứa toàn bộ các TypeScript interfaces và type definitions đảm bảo tính Type Safety trong toàn bộ dự án.

#### `src/utils/`
Các mô-đun tiện ích không chứa state nghiệp vụ:
- **`audio.ts`**: Sử dụng Web Audio API để phát ra âm thanh báo hiệu khi hoàn thành phiên Pomodoro mà không cần file `.mp3` bên ngoài.
- **`icons.ts`**: Chứa từ điển các chuỗi SVG String cho mọi icon được dùng trên giao diện.
- **`notification.ts`**: Quản lý xin quyền và phát Notification của trình duyệt khi đếm giờ Pomodoro kết thúc.

#### `src/views/`
Thư mục chứa 5 Custom Elements (Light-DOM Web Components) tương ứng với 5 tab giao diện:
- **`roadmap-view-dashboard.ts`**: Dashboard tổng quan tiến độ %, thanh chỉ số stats, Sprint đang thực hiện và gợi ý Next Task.
- **`roadmap-view-roadmap.ts`**: Lộ trình chi tiết 5 Sprints, danh sách công việc (Deliverables) hỗ trợ tương tác tích chọn (Checklist).
- **`roadmap-view-schedule.ts`**: Trình đếm giờ Pomodoro tương tác (Start, Pause, Reset, Adjust time) và lịch trình học theo ngày/tuần.
- **`roadmap-view-resources.ts`**: Danh mục tài nguyên online miễn phí hỗ trợ tìm kiếm và lọc theo danh mục.
- **`roadmap-view-techstack.ts`**: Sơ đồ trực quan các lớp công nghệ AI Engineer 2026.

#### Root Files của `src/`
- **`constants.ts`**: Định nghĩa hằng số hệ thống (`STORAGE_KEY`, `THEME_KEY`, `ROUTE_IDS`).
- **`main.ts`**: Entry point TypeScript của ứng dụng, chịu trách nhiệm khởi chạy App: load state, apply theme, init router, gán event listeners và kích hoạt render ban đầu.
- **`progress.ts`**: Logic thuần tính toán tiến độ hoàn thành (Trọng số 60% Deliverables + 40% Pomodoros), tổng số giờ học và xác định task tiếp theo.
- **`renderer.ts`**: Observer pattern renderer đăng ký các listener re-render và phát tín hiệu `renderAll()` cập nhật UI khi state thay đổi.
- **`router.ts`**: Điều hướng Hash router (`#/dashboard`, `#/roadmap`, `#/schedule`, `#/resources`, `#/techstack`), quản lý hash thay đổi và đồng bộ vào state.
- **`toast.ts`**: Tiện ích hiển thị thông báo nổi Toast nhỏ gọn góc màn hình.

---

## 3. Quy chuẩn Đặt tên & Tổ chức Mô-đun (Architectural Conventions)

1. **Mô-đun Hóa giao diện (Component Isolation)**:
   - Các file view giao diện được đặt tên dạng `roadmap-view-[name].ts` nằm trong `src/views/`.
   - Mỗi file định nghĩa 1 Custom Element native đăng ký với tên thẻ `<roadmap-view-[name]>`.
2. **Quy hoạch Style (CSS Layering)**:
   - Tất cả mã CSS đặt trong `src/styles/` theo tiền tố `_[name].css` ngoại trừ file chính `main.css`.
   - Luôn sử dụng biến CSS từ `_tokens.css` thay vì gán cứng giá trị màu sắc hex/rgb.
3. **Data Protection & Primary Keys**:
   - Dữ liệu `src/data/planData.ts` không chứa logic giao diện hay state người dùng.
   - Các `id` phần tử trong `planData.ts` tuyệt đối không thay đổi vì ảnh hưởng trực tiếp đến dữ liệu lưu trữ trong `localStorage`.
