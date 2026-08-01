# 🚀 Applied AI Engineer Roadmap 2026: Agentic AI Master Curriculum & Web Tracker

Lộ trình học tập toàn diện biến lập trình viên thành **AI Engineer** thực chiến thông qua 14 Master Modules (12 Module Cốt Lõi + 2 Module Tùy Chọn), 4 dự án thực tế lớn, quy trình quản lý chi phí chìm Quit Criteria và ứng dụng **Interactive Web Tracker SPA**.

---

## 💻 Interactive Web Tracker (Quick Start)

Dự án tích hợp ứng dụng Web (Vite + TypeScript) giúp theo dõi tiến độ học tập, đếm Pomodoro, quản lý danh sách việc cần làm và ma trận Quit Criteria.

```bash
# Cài đặt dependencies
npm install

# Khởi chạy giao diện phát triển (Dev Server)
npm run dev

# Build sản phẩm Production
npm run build
```

---

## 🗺️ Tóm Tắt 14 Master Modules & 4 Dự Án

| Module | Tên Module | Dự Án / Trọng Tâm |
| :--- | :--- | :--- |
| **M0** | Python AsyncIO Foundations | Coroutine (`async/await`), Event Loop, `asyncio.run()`, GC Task Safety & Free-threaded GIL ([Async Python Guide](docs/content/async_python_guide.md)) |
| **M1** | LangChain & Agentic Foundations | 🛠️ **Project 1: Smart Q&A Bot** |
| **M2** | Chain Patterns & Advanced LCEL | LCEL, Parallel Chains, Branching & Debugging |
| **M3** | Docker & Containerization Essentials | 🐋 Docker Engine, Images, Named Volumes, Bind Mounts, Custom Networks & Docker Compose |
| **M4** | Data Ingestion & Vector Stores | LlamaParse, Complex Document AI, ChromaDB |
| **M5** | Advanced RAG & Memory Systems | 🛠️ **Project 2: AI Research Assistant** (`pgvector`) |
| **M6** | LangGraph Deep Dive | StateGraph, HITL, Self-Correcting Code Loop |
| **M7** | Multi-Agent Architectures | 🛠️ **Project 3: Multi-Agent Research System** (CrewAI + LangGraph) |
| **M8** | Production Deployment & LLMOps | 🛠️ **Project 4: Production LangGraph API** (Render Cloud) |
| **M9** | Model Context Protocol (MCP) Quick | MCP Protocol & FastMCP Integration |
| **M10**| Open-Source LLMs & High-Throughput Serving | vLLM, Ollama, Quantization (GGUF/AWQ) |
| **M11**| Full-Stack Web AI & Edge | Next.js App Router, Vercel AI SDK, Generative UI |
| **M12**| *(Tùy chọn)* MCP Advanced Masterclass | Deep Dive MCP Protocol & Anthropic Specs |
| **M13**| *(Tùy chọn)* Advanced Async Python | Low-level Futures, Synchronization Primitives, TaskGroup, Timeout & Queue Shutdown |

---

## 📚 Thư Mục Tài Liệu Chi Tiết (`docs/`)

Để tránh trùng lặp thông tin, toàn bộ nội dung chi tiết được lưu trữ trong thư mục `docs/`:

### 📂 Nội Dung Học Tập (`docs/content/`)
- 📖 [Lộ Trình Học Chi Tiết (14 Modules)](docs/content/online_learning_guide.md) — Chi tiết bài học, tài nguyên tra cứu & flashcards.
- ⚡ [Hướng Dẫn Async Python Hiện Đại (Up-to-Date)](docs/content/async_python_guide.md) — Kiến thức bất đồng bộ Python chuẩn 3.11-3.14+ (Phần A: Module 0 Chap 1-2; Phần B: Module 13 Optional Chap 3-6).
- ⏱️ [Lịch Học & Kế Hoạch 13 Tuần](docs/content/schedule.md) — Phân bổ 389 sessions Pomodoro (Quy tắc 50/5/20).
- 🛠️ [Phân Tích 7 Tầng Công Nghệ AI 2026](docs/content/tech_stack.md) — Model Layer, LangGraph, pgvector, LLM Guard, v.v.
- 🛑 [Hướng Dẫn Quit Criteria & Chi Phí Chìm](docs/content/quit_criteria_guide.md) — Ma trận quyết định & quy trình 4 bước tránh sa lầy.
- 🔗 [Danh Mục Tài Nguyên Học Miễn Phí](docs/content/resources.md) — Tổng hợp cheat sheets, docs & repos.


### 📂 Hướng Dẫn Kỹ Thuật (`docs/guides/`)
- 🏛️ [Architecture Guide](docs/guides/architecture_guide.md) — Kiến trúc hệ thống Web App & Data layer.
- 🗂️ [Project Structure Spec](docs/guides/project_structure.md) — Sơ đồ cây thư mục & trách nhiệm từng file.
- 🎨 [UI System Design Guide](docs/guides/ui_system_design_guide.md) — Design system CSS, tokens & SVG icons.
- 🧩 [Interactive Components Guide](docs/guides/interactive_components_guide.md) — PRD & luồng tương tác Web Components.
- 🚀 [GitHub Pages Deployment Guide](docs/guides/github_pages_deployment_guide.md) — Cấu hình CI/CD GitHub Actions.
