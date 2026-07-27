# UI SYSTEM DESIGN & COMPONENT LAYOUT GUIDE (HƯỚNG DẪN HỆ THỐNG GIAO DIỆN & BỐ CỤC UI)

Tài liệu này là **Bản quy chuẩn Thiết kế Giao diện (UI System Design Guide)** dành cho các AI Agent và lập trình viên. Mục đích của tài liệu là mô tả chi tiết ngôn ngữ thiết kế (Design Language), hệ thống Design Tokens, quy chuẩn bộ thành phần UI (Component Dictionary), **vị trí layout và cách các UI Components kết hợp với nhau trên từng Trang (Page/View)**.

Tài liệu này tập trung 100% vào khía cạnh **Giao diện người dùng (UI), Styling và Bố cục Layout**. Các phần liên quan tới Kiến trúc phần mềm, State Store và Data Flow được quy hoạch riêng tại [architecture_guide.md](./architecture_guide.md).

---

## 1. Triết lý Thiết kế Visual & Hệ thống Tokens (Visual Design Tokens)

### 1.1. Modern Dark-First Aesthetic with Light Mode Fallback
- **Chủ đạo**: Thiết kế tối hiện đại (Sleek Dark Mode) mang đậm chất công nghệ AI/Developer với nền tối sâu (`#0b0f19`), surface card nổi tương phản (`#111827`), viền bán trong suốt (`rgba(255, 255, 255, 0.1)`), hiệu ứng Glassmorphic blur và dải màu sắc (Gradients) tinh tế.
- **Hỗ trợ Light Mode**: Tự động chuyển đổi màu sắc mượt mà thông qua CSS Custom Properties khi thuộc tính `data-theme="light"` được thiết lập ở thẻ `<html>`.

### 1.2. Hệ thống Color Palette (`_tokens.css`)

Toàn bộ thông số màu sắc được khai báo dưới dạng CSS Custom Properties tại `src/styles/_tokens.css`:

| Tên Token Variable | Dark Mode (Default) | Light Mode | Ý nghĩa & Ngữ cảnh sử dụng Visual |
| :--- | :--- | :--- | :--- |
| `--bg-main` | `#0b0f19` | `#f8fafc` | Nền chính toàn trang (Body Background) |
| `--bg-card` | `#111827` | `#ffffff` | Nền các khối Surface (Card, Modal, Header, Container) |
| `--bg-card-hover` | `#1f2937` | `#f1f5f9` | Nền Surface khi hover chuột |
| `--bg-glass` | `rgba(17, 24, 39, 0.75)` | `rgba(255, 255, 255, 0.85)` | Nền Glassmorphism cho Sticky Header (`backdrop-filter: blur(12px)`) |
| `--border-color` | `rgba(255, 255, 255, 0.1)` | `rgba(0, 0, 0, 0.1)` | Viền thẻ Card, Input, Separator |
| `--border-color-strong` | `rgba(255, 255, 255, 0.2)` | `rgba(0, 0, 0, 0.18)` | Viền khi Hover hoặc Viền cho phần tử Active |
| `--text-primary` | `#f9fafb` | `#0f172a` | Chữ chính (Tiêu đề, Heading, Content) |
| `--text-secondary` | `#9ca3af` | `#475569` | Chữ phụ (Mô tả, Subtitle, Unactive Tab) |
| `--text-muted` | `#6b7280` | `#94a3b8` | Chữ mờ (Metadata, Footer, Timestamp) |
| `--primary` | `#6366f1` (Indigo) | `#4f46e5` | Màu chủ đạo (Brand, Active Tab Indicator, Primary Button) |
| `--primary-hover` | `#4f46e5` | `#4338ca` | Trạng thái Hover của Primary Button |
| `--primary-glow` | `rgba(99, 102, 241, 0.35)` | `rgba(79, 70, 229, 0.2)` | Hiệu ứng Box-shadow phát sáng |
| `--accent-emerald` | `#10b981` (Emerald) | `#059669` | Chỉ báo Tiến độ 100%, Hoàn thành (Checked task, Success Toast) |
| `--accent-amber` | `#f59e0b` (Amber) | `#d97706` | Chỉ báo Cảnh báo, Tiến độ trung bình, Pending status |
| `--accent-rose` | `#f43f5e` (Rose) | `#f43f5e` | Nút hành động nguy hiểm (Reset data, Danger Toast) |
| `--accent-sky` | `#0ea5e9` (Sky) | `#0ea5e9` | Chỉ báo thông tin (Info Toast, External Link) |
| `--accent-purple` | `#a855f7` (Purple) | `#a855f7` | Màu nhấn gradient kết hợp với Primary |

### 1.3. Bo góc, Bóng đổ & Hiệu ứng Chuyển động

```css
/* Radius Tokens */
--radius-sm: 6px;     /* Dùng cho Badge, Tag, Button nhỏ */
--radius-md: 12px;    /* Dùng cho Button chuẩn, Input, Action Icon */
--radius-lg: 18px;    /* Dùng cho Container Card, Sprint Card, Metric Card */
--radius-full: 9999px;/* Dùng cho Circular Progress, Status Badge pill */

/* Shadow Tokens */
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.4);

/* Transition Tokens */
--transition-fast: 0.15s ease;    /* Hover state, Button click */
--transition-normal: 0.25s ease;  /* Tab switch, Card translate, FadeIn */
```

---

## 2. Tổ chức Phân tầng Stylesheet (Layered CSS File Breakdown)

Toàn bộ CSS giao diện được phân tách thành các file chuyên biệt trong `src/styles/` và nhập vào `main.css` thông qua chỉ thị `@layer`:

```text
src/styles/
├── main.css        # Entry point khai báo order @layer (reset, base, components, views, utilities)
├── _tokens.css     # CSS Variables (Màu sắc, Font, Spacing, Radius, Shadows) -> @layer base
├── _reset-base.css # CSS Reset & Style cho body, typography -> @layer reset
├── _header.css     # Layout & Component styles cho Header Bar -> @layer components
├── _tabs.css       # Layout & Component styles cho Navigation Tab Bar -> @layer components
├── _main-layout.css# Styles cho Layout Container chính & Toast Notification -> @layer components
├── _views.css      # Styles chi tiết cho tất cả UI components ở các Views -> @layer views
└── _responsive.css # Breakpoints media queries cho Mobile & Tablet -> @layer utilities
```

---

## 3. Từ điển Thành phần Giao diện (UI Component Dictionary)

### 3.1. Header Bar Component (`.app-header`)
- **Vị trí**: Cố định ở đỉnh màn hình (`position: sticky; top: 0; z-index: 100;`).
- **Layout**: Flexbox hẹp 2 đầu (`justify-content: space-between`), padding `0.85rem 1.5rem`.
- **Thành phần con**:
  - `header-brand`: Khối Logo 38x38px gradient + Tiêu đề thương hiệu ("AI Engineer Roadmap 2026") và Phụ đề ("Enterprise Knowledge AI Assistant").
  - `header-actions`: Nhóm các nút thao tác nhanh (`.action-btn` Export, Import, `.action-btn-danger` Reset) và nút chuyển đổi giao diện Sáng/Tối (`.theme-toggle-btn`).

### 3.2. Navigation Tab Bar Component (`.nav-tabs-container`, `.nav-tab`)
- **Vị trí**: Ngay bên dưới Header Bar (`border-bottom: 1px solid var(--border-color)`).
- **Layout**: Cuộn ngang thanh thoát (`overflow-x: auto; scrollbar-width: none`). Khối `.nav-tabs` căn giữa `max-width: 1200px`.
- **Trạng thái Tab (`.nav-tab`)**:
  - Unactive: Màu chữ `--text-secondary`, nền trong suốt.
  - Active: Màu chữ `--primary`, xuất hiện thanh gạch dưới 3px (`border-bottom: 3px solid var(--primary)`).
  - Badge (`.tab-badge`): Nhãn pill hiển thị phần trăm tiến độ tổng thể, tự động phát sáng `var(--primary-glow)` khi tab active.

### 3.3. Metric Summary Card Component (`.metric-card`)
- **Layout**: Khối Flexbox (`align-items: center; gap: 1.25rem;`), padding `1.25rem 1.5rem`, nền `--bg-card`, viền `--border-color`, bo góc `--radius-lg`.
- **Thành phần con**:
  - `metric-icon`: Khối vuông bo tròn 48x48px chứa Icon SVG với nền tùy chỉnh theo loại chỉ số (Trophy, Target, Pomodoro, Clock).
  - `metric-info`: Chứa `metric-value` (Chữ đậm lớn 1.6rem) và `metric-label` (Chữ phụ 0.8rem).

### 3.4. Progress Overview Card Component (`.progress-card`)
- **Layout**: Card nền `--bg-card`, bo góc `--radius-lg`, padding `1.5rem`.
- **Thành phần con**:
  - `progress-header`: Tiêu đề tiến độ dự án + con số phần trăm màu xanh Emerald (`font-weight: 800; font-size: 1.25rem`).
  - `progress-bar-bg`: Thanh rãnh nền chiều cao 12px, bo góc tròn pill.
  - `progress-bar-fill`: Thanh tiến độ chạy đè phía trên với gradient từ Indigo `--primary` sang Emerald `--accent-emerald`, điều khiển độ dài mượt mượt qua thuộc tính CSS `--progress`.

### 3.5. Sprint Card & Task Checklist Component (`.sprint-card`, `.task-item`)
- **Sprint Card Layout**: Khối lớn chứa thông tin Sprint, gồm Header có Badge trạng thái ("Chưa Bắt Đầu", "Đang Học", "Đã Xong") và Body chứa mục tiêu kiến thức + checklist công việc.
- **Task Checklist Item (`.task-item`)**:
  - Dòng công việc với ô checkbox tùy chỉnh (`.task-checkbox`), tiêu đề task, mô tả ngắn, số phiên Pomodoro ước tính và danh sách Hashtag (`.task-tag`).
  - Khi được tích chọn (`.task-item.checked`): Chữ gạch ngang (`line-through`), độ mờ giảm xuống `0.7`, nền đổi sang dải màu xanh lá dịu nhẹ `rgba(16, 185, 129, 0.05)`.

### 3.6. Interactive Pomodoro Widget Component (`.pomodoro-card`)
- **Layout**: Khối widget đếm giờ 2 cột hoặc dạng Card tập trung.
- **Thành phần con**:
  - Đồng hồ số Kỹ thuật số chữ siêu lớn 3.5rem (`font-weight: 800`).
  - Vòng tròn tiến độ SVG (`svg.progress-ring`) ôm lấy số giây.
  - Hàng nút bấm điều khiển (Start, Pause, Reset) màu tương phản nổi bật.
  - Bộ thẻ chọn nhanh thời lượng (25/5 min, 50/10 min).
  - Bảng lịch sử các phiên Pomodoro đã hoàn thành.

### 3.7. Resource Card Grid Component (`.resource-card`)
- **Layout**: Khối thông tin tài liệu/khóa học với badge phân loại (`Video Course`, `Official Docs`, `Code Repo`), tiêu đề, mô tả và nút mở liên kết ngoài (`.btn-resource-primary`).
- **Star Bookmark Button (`.btn-flag-resource`)**: Nút ngôi sao ở góc trên bên phải để đánh dấu tài nguyên yêu thích.

### 3.8. Tech Stack Ecosystem Layer Cards (`.tech-layer-card`, `.tech-table`)
- **Layout**: Khối tổng hợp từng tầng công nghệ (7 Layers), chứa bảng danh sách công nghệ (`.tech-table`) với các cột: Công nghệ, Vai trò, Thị phần và Badge đánh dấu công nghệ khuyên dùng (`.badge-primary-choice`).

### 3.9. Toast Notification Widget Component (`.toast-container`, `.toast`)
- **Vị trí**: Cố định góc dưới bên phải màn hình (`position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 1000;`).
- **Visual**: Trượt nhẹ từ dưới lên (`translateY(0)`), phân loại màu viền trái 4px: Emerald (Success), Sky (Info), Amber (Warning), Rose (Error).

### 3.10. Quy chuẩn Icon SVG & Quy Định Cấm Dùng Emoji (`src/utils/icons.ts`)
- **Quy định cấm dùng Emoji cho Giao diện Web**: Mọi biểu tượng (Icons) và nhãn nút bấm (Button Labels) trên giao diện ứng dụng web **BẮT BUỘC** sử dụng hình vẽ SVG thuần từ Từ điển Icon (`src/utils/icons.ts`), tuyệt đối không dùng ký tự emoji hệ thống để đảm bảo tính đồng nhất thẩm mỹ, độ sắc nét và khả năng tùy chỉnh màu sắc qua CSS Variables trên mọi thiết bị và hệ điều hành.
- Tất cả Icon là chuỗi SVG chuẩn, sử dụng `stroke="currentColor"` (hoặc `fill="currentColor"`) để tự động đổi màu theo màu chữ CSS của phần tử cha, đi kèm thuộc tính `aria-hidden="true"`.

---

## 4. Bố cục Giao diện & Sự kết hợp Component tại từng Trang (Page-by-Page Layout Assembly)

Dưới đây là sơ đồ cấu trúc layout và cách sắp xếp các UI Components trên từng trang (View) của ứng dụng:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        APP HEADER BAR (.app-header)                     │
│  [Logo Brand]                                   [Export][Import][Theme]│
├────────────────────────────────────────────────────────────────────────┤
│                     NAVIGATION TAB BAR (.nav-tabs)                      │
│  [Dashboard (Active)]  [Roadmap Sprints]  [Schedule]  [Resources] [Tech]│
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│                      MAIN VIEW CONTAINER (.app-main)                   │
│                                                                        │
│  (Nội dung hiển thị thay đổi theo Tab được chọn bên dưới)             │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                    TOAST CONTAINER (#toast-container)                  │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.1. Trang 1: Dashboard View (`<roadmap-view-dashboard>`)

Trang Tổng quan cung cấp cái nhìn toàn cảnh về tiến độ học tập, các chỉ số chính và gợi ý hành động tiếp theo.

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. KEY METRICS GRID (.dashboard-grid: 4 cột responsive)                 │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│ │ % Tiến Độ    │ │ Nhiệm Vụ     │ │ Pomodoros    │ │ Thời Gian    │ │
│ │ (Trophy Icon)│ │ (Target Icon)│ │ (Poms Icon)  │ │ (Clock Icon) │ │
│ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 2. PROGRESS OVERVIEW CARD (.progress-card)                             │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Tiêu đề Dự Án Enterprise Knowledge AI Assistant             [ 45% ]│ │
│ │ [===== Progress Bar Fill (Gradient Indigo->Emerald) =============] │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 3. NEXT TASK RECOMMENDATION CARD (.progress-card--primary)             │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ 🚀 Nhiệm vụ tiếp theo cần làm: Dựng FastAPI Backend API Streaming   │ │
│ │ Thuộc: Sprint 1 - Core Backend & Streaming API                     │ │
│ │ [ Nút Đánh Dấu Hoàn Thành Task này ]                               │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 4. SPRINT PROGRESS OVERVIEW LIST (.sprint-list)                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Sprint 1: Core Backend                 [Đang Học] 60% Progress Bar │ │
│ ├────────────────────────────────────────────────────────────────────┤ │
│ │ Sprint 2: Advanced RAG System          [Chưa Bắt Đầu] 0% Progress │ │
│ ├────────────────────────────────────────────────────────────────────┤ │
│ │ Sprint 3: Agentic Workflows            [Chưa Bắt Đầu] 0% Progress │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.2. Trang 2: Roadmap Sprints View (`<roadmap-view-roadmap>`)

Trang Lộ trình chi tiết hiển thị toàn bộ 5 Sprints, danh sách mục tiêu kiến thức và Checklist các bài tập thực hành (Deliverables).

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION HEADER (Tiêu đề "Lộ Trình Chi Tiết 5 Sprints" + Subtitle mờ)    │
├────────────────────────────────────────────────────────────────────────┤
│ SPRINT LIST CONTAINER (.sprint-list: Xếp chồng 5 Sprint Cards)         │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ SPRINT CARD HEADER                                                 │ │
│ │ Tiêu đề Sprint 1 • ⏱️ 30 Pomodoros (30h)    Status: 3/5 Tasks (60%) │ │
│ ├────────────────────────────────────────────────────────────────────┤ │
│ │ SPRINT CARD BODY                                                   │ │
│ │ 🎓 Mục tiêu kiến thức & Kỹ năng nạp:                               │ │
│ │   • Prompt Engineering, LangChain Core, FastAPI SSE Streaming...   │ │
│ │                                                                    │ │
│ │ 💻 Nhiệm Vụ Thực Hành (Deliverables Checklist):                    │ │
│ │   [x] Task 1.1: Khởi tạo project Python & FastAPI [ 4 Poms ]       │ │
│ │   [x] Task 1.2: Dựng LangChain Prompt Template  [ 6 Poms ]       │ │
│ │   [ ] Task 1.3: Viết API Streaming Token SSE    [ 8 Poms ]       │ │
│ │   [ ] Task 1.4: Viết Dockerfile đóng gói backend [ 4 Poms ]       │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ SPRINT CARD 2 (Cấu trúc tương tự Sprint 1)                         │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.3. Trang 3: Pomodoro Schedule View (`<roadmap-view-schedule>`)

Trang Đồng hồ Pomodoro & Lịch trình học tập kết hợp bộ đếm giờ tương tác và kế hoạch phân bổ thời gian từng ngày.

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. TOP SECTION (Lưới 2 Cột: Left = Timer Widget, Right = Today Plan)   │
│ ┌──────────────────────────────────┐ ┌───────────────────────────────┐ │
│ │ INTERACTIVE POMODORO TIMER CARD  │ │ TODAY'S FOCUS SCHEDULE CARD   │ │
│ │                                  │ │                               │ │
│ │        🎯 Focus Session          │ │  📅 Lịch Trình Hôm Nay        │ │
│ │             25:00                │ │  • [x] S1-P1: FastAPI Setup   │ │
│ │     [ Start ]  [ Reset ]         │ │  • [ ] S1-P2: LangChain Core  │ │
│ │  Preset: (25/5 min) (50/10 min)  │ │  • [ ] S1-P3: SSE Streaming   │ │
│ └──────────────────────────────────┘ └───────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 2. WEEKLY SCHEDULE SECTION                                             │
│  [Tab Tuần 1]  [Tab Tuần 2]  [Tab Tuần 3] ...                           │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ DAYS GRID (.days-grid: Các thẻ đại diện cho Ngày 1, Ngày 2...)     │ │
│ │ ┌──────────────────────┐ ┌──────────────────────┐                  │ │
│ │ │ Ngày 1 (3 Pomodoros) │ │ Ngày 2 (3 Pomodoros) │ ...              │ │
│ │ │ • P1: Prompt Eng     │ │ • P1: RAG Vector DB  │                  │ │
│ │ └──────────────────────┘ └──────────────────────┘                  │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 3. HISTORY LOG & TIMER SETTINGS SECTION                                │
│ ┌──────────────────────────────────┐ ┌───────────────────────────────┐ │
│ │ POMODORO SESSIONS HISTORY TABLE  │ │ TIMER SETTINGS PANEL          │ │
│ │ Thời gian | Task | Loại | Thao tác│ │ Focus: [ 25 ]  Break: [ 5 ]   │ │
│ └──────────────────────────────────┘ └───────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.4. Trang 4: Free Resources View (`<roadmap-view-resources>`)

Trang Thư viện Tài nguyên Học tập miễn phí gồm Thanh lọc theo Module và Lưới bài học/Tài liệu tham khảo.

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION HEADER (Tiêu đề "Thư Viện Tài Nguyên Học Tập" + Subtitle)       │
├────────────────────────────────────────────────────────────────────────┤
│ 1. FILTER BAR CONTAINER (.filter-bar-container)                        │
│ [ Tất Cả Modules ] [ Module 1 ] [ Module 2 ] [ Module 3 ] ...         │
├────────────────────────────────────────────────────────────────────────┤
│ 2. RESOURCE CARDS GRID (.resources-grid: Lưới 3 cột responsive)         │
│ ┌──────────────────────────┐ ┌──────────────────────────┐             │
│ │ [Video Course]       [⭐]│ │ [Official Docs]      [⭐]│             │
│ │ DeepLearning.AI Agents   │ │ LangGraph Documentation  │             │
│ │ Khóa học miễn phí 100%   │ │ Tài liệu hướng dẫn chính │             │
│ │ 🏷️ Miễn phí 100%          │ │ 🏷️ Miễn phí 100%          │             │
│ │ [ Mở Link ↗ ]            │ │ [ Mở Link ↗ ]            │             │
│ └──────────────────────────┘ └──────────────────────────┘             │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.5. Trang 5: Tech Stack View (`<roadmap-view-techstack>`)

Trang Báo cáo Kiến trúc Công nghệ gồm các Thẻ Kiến trúc tham chiếu và Bảng phân tích 7 Tầng công nghệ AI.

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION HEADER (Tiêu đề "Báo Cáo AI Application Tech Stack 2026")      │
├────────────────────────────────────────────────────────────────────────┤
│ 1. REFERENCE ARCHITECTURE COMPARISON GRID (Lưới 2 Cột)                 │
│ ┌──────────────────────────────────┐ ┌───────────────────────────────┐ │
│ │ Architecture A: Modern Full-stack│ │ Architecture B: Private Stack │ │
│ │ Next.js + FastAPI + LangGraph... │ │ vLLM + Llama 3.3 + Qdrant...  │ │
│ └──────────────────────────────────┘ └───────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 2. 7-LAYER ECOSYSTEM CARDS (.tech-layer-card Stack)                    │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Layer 1: LLM Serving & Model Layer                                 │ │
│ │ BẢNG THÔNG TIN CÔNG NGHỆ (.tech-table):                            │ │
│ │  Công nghệ     │ Vai trò hệ thống        │ Thị phần / Đánh giá     │ │
│ │  Claude 3.7    │ Frontier Reasoning Model│ Primary Choice           │ │
│ │  DeepSeek-R1   │ Open-weights Reasoning  │ Trending                 │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Layer 2: Agent Orchestration Frameworks (Tương tự Layer 1)         │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Quy chuẩn Layout Responsive (Responsive Breakpoints)

Ứng dụng đáp ứng hoàn hảo trên mọi kích thước màn hình thông qua quy chuẩn breakpoints trong `src/styles/_responsive.css`:

### 5.1. Desktop Layout (`> 768px`)
- Layout tối đa `1200px` căn giữa màn hình.
- Metric Grid chia 4 cột.
- Resource Grid chia 3 cột.
- Schedule Section chia 2 cột song song.

### 5.2. Tablet Layout (`<= 768px`)
- Metric Grid tự động chuyển thành 2 cột (`grid-template-columns: 1fr 1fr`).
- Header Bar cho phép co giãn flex-wrap, ẩn bớt text label trên các nút Export/Import chỉ giữ lại Icon để tiết kiệm diện tích.
- Khung nội dung chính `app-main` giảm padding còn `1.25rem 1rem`.

### 5.3. Mobile Layout (`<= 480px`)
- Metric Grid chuyển thành 1 cột đơn (`grid-template-columns: 1fr`).
- Resource Grid chuyển thành 1 cột đơn.
- Schedule Days Grid chuyển thành 1 cột đơn.
- Font size tiêu đề bài viết và padding card giảm nhẹ để vừa vặn màn hình điện thoại.

---

## 6. Quy chuẩn Visual Styling Best Practices & Lỗi Cần Tránh

Để đảm bảo chất lượng giao diện luôn đạt tiêu chuẩn cao nhất, AI Agent **BẮT BUỘC** tuân thủ các quy tắc visual sau:

1. **Không Hardcode Mã Màu**: Luôn dùng `var(--bg-main)`, `var(--text-primary)`, `var(--border-color)` thay vì dùng các giá trị màu tĩnh như `#111827` hay `#ffffff`.
2. **Kiểm tra Tương phản Cả 2 Theme**: Đảm bảo tất cả chữ và icon đều hiển thị rõ ràng trên cả Theme Tối (`data-theme="dark"`) và Theme Sáng (`data-theme="light"`).
3. **Bao bọc Khối Cuộn cho Bảng & Thanh Tab**: Luôn khai báo `overflow-x: auto` cho `.nav-tabs-container` và `.table-wrapper` để tránh làm vỡ khung màn hình ngang di động.
4. **Giữ Tính Đồng Nhất Cho Icon SVG**: Luôn dùng `stroke="currentColor"` hoặc `fill="currentColor"` trong file `src/utils/icons.ts` để Icon ăn theo màu chữ của phần tử chứa nó.
5. **Hiệu Ứng Hover Nhẹ Nhàng**: Chỉ sử dụng `transform: translateY(-1px)` hoặc `translateY(-2px)` đi kèm `transition: all var(--transition-fast)` để tạo cảm giác phản hồi tự nhiên, tránh hiệu ứng chuyển động quá mạnh gây xao nhãng.
6. **Cấm Dùng Emoji Cho Web Icons**: Mọi biểu tượng (Icons) và nhãn nút bấm trên giao diện ứng dụng web **BẮT BUỘC** sử dụng hình vẽ SVG thuần trong từ điển `src/utils/icons.ts`, tuyệt đối không sử dụng ký tự emoji hệ thống.

---

*Tài liệu này định hình chuẩn mực thiết kế UI & Bố cục Layout chính thức cho repo AI Engineer LangChain Roadmap 2026. Mọi bổ sung hoặc chỉnh sửa giao diện giao diện cần tuân thủ nghiêm ngặt theo tài liệu này.*
