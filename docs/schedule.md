# ⏱️ Thời Khóa Biểu Custom Pomodoro (50m Focus - 5m Short Break - 20m Long Break)
## Enterprise Knowledge AI Assistant Project

- **Quy tắc Pomodoro**:
  - **Mỗi Pomodoro**: 50 phút Tập Trung (Focus).
  - **Nghỉ ngắn (Short Break)**: 5 phút sau mỗi lượt 50 phút.
  - **Nghỉ dài (Long Break)**: 20 phút sau mỗi 2 lượt Pomodoro (Sau P2 và sau P4/P6).
- **Khung giờ làm việc**: Thứ 2 – Thứ 6 (Weekdays).
  - **Ca Chiều**: 1:00 PM – 5:00 PM (4 Pomodoros | 240 phút).
  - **Ca Tối**: 10:00 PM – 12:00 AM (2 Pomodoros | 120 phút).
- **Tổng dung lượng công việc**: **6 Pomodoros / ngày** (5 tiếng tập trung + 1 tiếng nghỉ/wrap-up) $\rightarrow$ **30 Pomodoros / tuần**.
- **Tổng thời lượng dự án**: **5 Tuần** (150 Pomodoros thực hành thực chiến).

---

## 🍅 Lịch Trình Chi Tiết Khớp Từng Phút Hàng Ngày (Daily Schedule)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ 🌞 CA CHIỀU (13:00 - 17:00 | 4 POMODOROS): FOCUS LEARNING & HEAVY CODING                     │
├──────────────────┬───────────────────────────────────────────────────────────────────────────┤
│ 🍅 Pomodoro 1    │ 13:00 - 13:50 (50m) | 🎓 Nạp Lý Thuyết (Video DeepLearning.AI / Docs)     │
│ ☕ Short Break 1 │ 13:50 - 13:55 (5m)  | Nghỉ ngắn (thư giãn mắt, uống nước)                │
├──────────────────┼───────────────────────────────────────────────────────────────────────────┤
│ 🍅 Pomodoro 2    │ 13:55 - 14:45 (50m) | 📖 Tra Cứu Code Pattern 2026 & Architecture         │
│ 🛑 LONG BREAK 1  │ 14:45 - 15:05 (20m) | 🌿 NGHỈ GIẢI LAO DÀI (Đứng dậy vận động, ăn nhẹ)     │
├──────────────────┼───────────────────────────────────────────────────────────────────────────┤
│ 🍅 Pomodoro 3    │ 15:05 - 15:55 (50m) | 💻 Heavy Coding 1 (Core Backend / DB / Agent Graph)  │
│ ☕ Short Break 2 │ 15:55 - 16:00 (5m)  | Nghỉ ngắn                                         │
├──────────────────┼───────────────────────────────────────────────────────────────────────────┤
│ 🍅 Pomodoro 4    │ 16:00 - 16:50 (50m) | 🛠️ Heavy Coding 2 & Test API Endpoints               │
│ 🌆 Afternoon End │ 16:50 - 17:00 (10m) | Tổng kết ca chiều & chuẩn bị nghỉ ca tối           │
├──────────────────┴───────────────────────────────────────────────────────────────────────────┤
│ 🌙 CA TỐI (22:00 - 24:00 | 2 POMODOROS): UI INTEGRATION, REFACTORING & GIT COMMIT            │
├──────────────────┬───────────────────────────────────────────────────────────────────────────┤
│ 🍅 Pomodoro 5    │ 22:00 - 22:50 (50m) | 🔧 UI Integration & Debugging (Next.js / SSE Chat)   │
│ ☕ Short Break 3 │ 22:50 - 22:55 (5m)  | Nghỉ ngắn giữa ca tối                             │
├──────────────────┼───────────────────────────────────────────────────────────────────────────┤
│ 🍅 Pomodoro 6    │ 22:55 - 23:45 (50m) | 🧹 Refactoring, Test Suite & Write Clean Code         │
│ 🚀 Night Wrap-up │ 23:45 - 24:00 (15m) | Push Git Commit lên GitHub & tắt máy nghỉ ngơi 💤    │
└──────────────────┴───────────────────────────────────────────────────────────────────────────┘
```

---

## 🗓️ Lộ Trình Phân Chịu 150 Pomodoros Trong 5 Tuần (5-Week Master Plan)

---

### 🟢 TUẦN 1: SPRINT 1 / MODULE 1 – FastAPI Backend & LLM API Streaming (30 Pomodoros)
* **Thứ 2**:
  - 🍅 *P1*: Học khái niệm API Chat Models & System/User Prompts.
  - 🍅 *P2*: Setup môi trường Python 3.11+ với `uv`/`poetry`, cài đặt FastAPI & `langchain-core`.
  - 🍅 *P3-P4*: Viết Prompt Templates & giao tiếp thử với API Claude 3.5/3.7 hoặc OpenAI.
  - 🍅 *P5-P6*: Viết Unit test đơn giản & commit code cơ bản.
* **Thứ 3**:
  - 🍅 *P1*: Đọc tài liệu Async IO & Server-Sent Events (SSE) trong FastAPI.
  - 🍅 *P2*: Nghiên cứu class `StreamingResponse` của FastAPI.
  - 🍅 *P3-P4*: Viết API Endpoint `POST /api/chat/stream` trả dòng dữ liệu token-by-token.
  - 🍅 *P5-P6*: Test API bằng Postman/curl và xử lý các ngoại lệ (Timeout, Rate limit).
* **Thứ 4**:
  - 🍅 *P1-P2*: Tối ưu hóa memory & connection pooling cho FastAPI server.
  - 🍅 *P3-P4*: Thêm middleware CORS, logging và quản lý API Keys bằng `.env`.
  - 🍅 *P5-P6*: Chạy stress-test nhẹ cho streaming response.
* **Thứ 5**:
  - 🍅 *P1-P2*: Viết Pydantic Models kiểm soát dữ liệu đầu vào/đầu ra (Output Parsers).
  - 🍅 *P3-P4*: Chuẩn hóa format JSON trả về client.
  - 🍅 *P5-P6*: Review code & refactor backend logic.
* **Thứ 6**:
  - 🍅 *P1-P4*: Kiểm thử toàn bộ Sprint 1 backend & viết tài liệu API docs (Swagger).
  - 🍅 *P5-P6*: Commit Tuần 1 lên GitHub (`feat: complete fastapi streaming backend`).

---

### 🟡 TUẦN 2: SPRINT 2 / MODULE 2 – Advanced RAG & PostgreSQL (`pgvector`) (30 Pomodoros)
* **Thứ 2**:
  - 🍅 *P1*: Đọc khóa *Preprocessing Data for LLMs*.
  - 🍅 *P2*: Setup PostgreSQL với `pgvector` extension bằng Docker Compose.
  - 🍅 *P3-P4*: Khởi tạo bảng SQL và tạo chỉ mục `HNSW` tối ưu hóa Vector Search.
  - 🍅 *P5-P6*: Test kết nối SQLAlchemy / asyncpg từ FastAPI tới Postgres.
* **Thứ 3**:
  - 🍅 *P1*: Đọc tài liệu `RecursiveCharacterTextSplitter` và Document Loaders.
  - 🍅 *P2-P4*: Viết pipeline Ingestion: Đọc file PDF/Markdown $\rightarrow$ Split text $\rightarrow$ Embed $\rightarrow$ Lưu `pgvector`.
  - 🍅 *P5-P6*: Test lưu thử 10-20 tài liệu mẫu và kiểm tra số lượng vector trong DB.
* **Thứ 4**:
  - 🍅 *P1*: Đọc khóa *Building Agentic RAG*.
  - 🍅 *P2-P4*: Viết module **Query Rewriter** dùng LLM tối ưu câu hỏi người dùng trước khi truy vấn.
  - 🍅 *P5-P6*: Test thử nghiệm kết quả trước và sau khi rewrite query.
* **Thứ 5**:
  - 🍅 *P1-P2*: Thiết kế **Hybrid Search** (kết hợp Vector Similarity + Postgres Full-Text Search).
  - 🍅 *P3-P4*: Tích hợp mô hình Rerank (Flashrank/Cohere) lọc lấy Top-K đoạn ngữ cảnh chính xác nhất.
  - 🍅 *P5-P6*: Đấu nối RAG pipeline vào FastAPI endpoint.
* **Thứ 6**:
  - 🍅 *P1-P4*: Benchmark đo độ trễ (Latency) và độ chính xác của RAG retrieval.
  - 🍅 *P5-P6*: Commit Tuần 2 lên GitHub (`feat: add pgvector hybrid search and reranking RAG`).

---

### 🔴 TUẦN 3: SPRINT 3 / MODULE 3 – LangGraph & Model Context Protocol (MCP) (30 Pomodoros)
* **Thứ 2**:
  - 🍅 *P1*: Học khóa *AI Agents in LangGraph*. Đọc tài liệu `StateGraph`, Nodes, Edges.
  - 🍅 *P2-P4*: Khởi tạo luồng suy luận LangGraph cơ bản (State definition, Router node).
  - 🍅 *P5-P6*: Test chạy thử nghiệm một vòng lặp Agent đơn giản.
* **Thứ 3**:
  - 🍅 *P1*: Đọc [Model Context Protocol Docs](https://modelcontextprotocol.io).
  - 🍅 *P2-P4*: Dựng một **FastMCP Server** bằng Python cung cấp Tool truy vấn SQL DB hoặc GitHub API.
  - 🍅 *P5-P6*: Test chạy độc lập MCP Server qua Transport (Stdio/SSE).
* **Thứ 4**:
  - 🍅 *P1-P2*: Kết nối LangGraph Agent với MCP Server qua giao thức MCP.
  - 🍅 *P3-P4*: Cho phép Agent tự động chọn Tool (RAG Search vs MCP Tool Execution).
  - 🍅 *P5-P6*: Xử lý trường hợp Tool gọi bị lỗi (Tool Execution Error Handling).
* **Thứ 5**:
  - 🍅 *P1-P2*: Tích hợp Checkpointer (Postgres Memory) cho phép lưu giữ trạng thái hội thoại (State Persistence).
  - 🍅 *P3-P4*: Thêm tính năng Human-in-the-loop (Tạm dừng luồng xin phê duyệt từ người dùng).
  - 🍅 *P5-P6*: Test hội thoại nhiều lượt (Multi-turn conversations).
* **Thứ 6**:
  - 🍅 *P1-P4*: Refactor toàn bộ luồng Agent Graph & dọn dẹp MCP Client interface.
  - 🍅 *P5-P6*: Commit Tuần 3 lên GitHub (`feat: build langgraph agent with fastmcp tool integration`).

---

### 🔵 TUẦN 4: SPRINT 4 / MODULE 4 – Web UI Real-time (Next.js + Vercel AI SDK) (30 Pomodoros)
* **Thứ 2**:
  - 🍅 *P1*: Đọc Vercel AI SDK Docs & Next.js App Router Docs.
  - 🍅 *P2-P4*: Khởi tạo Next.js 14+ với Tailwind CSS & Shadcn/ui. Dựng khung Chat Interface.
  - 🍅 *P5-P6*: Thêm các UI components cơ bản (Sidebar, Chat window, Input bar).
* **Thứ 3**:
  - 🍅 *P1-P2*: Cấu hình React Hook `useChat` từ Vercel AI SDK.
  - 🍅 *P3-P4*: Đấu nối API SSE từ FastAPI Backend (Tuần 1 & 3) vào Next.js Frontend.
  - 🍅 *P5-P6*: Test streaming phản hồi câu chữ hiển thị thời gian thực trên màn hình.
* **Thứ 4**:
  - 🍅 *P1-P2*: Tích hợp Markdown Renderer (`react-markdown` + `remark-gfm`).
  - 🍅 *P3-P4*: Thêm Syntax Highlighting cho các khối code và nút Copy Code Block.
  - 🍅 *P5-P6*: Test hiển thị bảng biểu, danh sách và định dạng văn bản phức tạp.
* **Thứ 5**:
  - 🍅 *P1-P2*: Xây dựng UI Status Indicator hiển thị trạng thái của Agent (VD: *"Agent đang tìm kiếm tài liệu..."*, *"Agent đang gọi MCP Tool..."*).
  - 🍅 *P3-P4*: Thêm hỗ trợ tải lên file PDF/Markdown trực tiếp từ giao diện Chat UI.
  - 🍅 *P5-P6*: Tối ưu hóa UI Autoscroll & Mobile Responsive layout.
* **Thứ 6**:
  - 🍅 *P1-P4*: Kiểm thử toàn bộ trải nghiệm người dùng (UX/UI testing & Edge cases).
  - 🍅 *P5-P6*: Commit Tuần 4 lên GitHub (`feat: complete nextjs chat interface with vercel ai sdk`).

---

### 🟣 TUẦN 5: SPRINT 5 / MODULE 5 – LLMOps, Tracing & Production Deployment (30 Pomodoros)
* **Thứ 2**:
  - 🍅 *P1*: Đọc LangSmith Docs / Langfuse Docs.
  - 🍅 *P2-P4*: Tích hợp Tracing SDK vào FastAPI Backend để đo Latency, Span & Token cost.
  - 🍅 *P5-P6*: Kiểm tra Dashboard hiển thị Trace log của Agent.
* **Thứ 3**:
  - 🍅 *P1*: Đọc khóa *Evaluating & Debugging Generative AI Models*.
  - 🍅 *P2-P4*: Viết Evaluation Test Suite (20-30 câu hỏi) đo Context Recall, Answer Faithfulness và Hallucination rate bằng Ragas / DeepEval.
  - 🍅 *P5-P6*: Chạy tự động test suite và xuất báo cáo chất lượng.
* **Thứ 4**:
  - 🍅 *P1-P2*: Viết `Dockerfile` cho Frontend (Next.js) và Backend (FastAPI).
  - 🍅 *P3-P4*: Viết `docker-compose.yml` ghép nối Frontend + Backend + Postgres `pgvector` + Langfuse.
  - 🍅 *P5-P6*: Test khởi chạy toàn bộ hệ thống bằng 1 lệnh `docker compose up`.
* **Thứ 5**:
  - 🍅 *P1-P4*: Chạy End-to-End testing trên Docker environment, khắc phục các lỗi mạng/biến môi trường.
  - 🍅 *P5-P6*: Tối ưu hóa dung lượng Docker images & build time.
* **Thứ 6**:
  - 🍅 *P1-P4*: Cập nhật tài liệu `README.md` chính của dự án, chụp ảnh màn hình & quay video ngắn demo sản phẩm.
  - 🍅 *P5-P6*: Push Commit hoàn thành dự án (`feat: complete enterprise knowledge ai assistant v1.0`) 🚀.
