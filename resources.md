# 📚 Danh sách Nguồn Tài nguyên Học tập cho AI Application Project (2026)

Tập hợp các tài nguyên học tập chất lượng cao, miễn phí và cập nhật theo xu hướng công nghệ tháng 7/2026. Các nguồn này phục vụ trực tiếp cho việc học và hoàn thành dự án **Enterprise Knowledge AI Assistant** (Next.js + FastAPI + LangGraph + MCP + pgvector).

---

## 🛠️ 1. Khóa học ngắn Hands-on (Interactive Courses)

### 🎓 DeepLearning.AI Short Courses
* **Mô tả**: Các khóa học video ngắn (1–2 tiếng) với môi trường thực hành code trực tiếp trên Jupyter Notebook.
* **Các khóa nên học**:
  - *AI Agents in LangGraph*: Xây dựng Agentic Workflows có trạng thái (Stateful Agents).
  - *Building Agentic RAG with LlamaIndex / LangChain*: Thiết kế RAG nâng cao có khả năng tự sửa lỗi.
  - *Preprocessing Data for LLMs*: Xử lý và làm sạch dữ liệu trước khi đưa vào RAG.
* **URL**: [https://www.deeplearning.ai/short-courses/](https://www.deeplearning.ai/short-courses/)

---

## 🤖 2. Framework Agent & Control Flow (LangGraph & LangChain)

### 📘 LangGraph Documentation (Official)
* **Mô tả**: Trang tài liệu chính thức của LangGraph. Cung cấp các Mẫu kiến trúc (Design Patterns) tiêu chuẩn như *Human-in-the-loop, Multi-agent Supervisor, State Persistence* cùng ví dụ code Python hoàn chỉnh.
* **URL**: [https://langchain-ai.github.io/langgraph/](https://langchain-ai.github.io/langgraph/)

### 📙 LangChain RAG Conceptual & How-To Guides
* **Mô tả**: Tài liệu hướng dẫn chuyên sâu các kỹ thuật Advanced RAG (Query Rewriting, Document Compression, Context Re-ranking).
* **URL**: [https://python.langchain.com/docs/concepts/rag/](https://python.langchain.com/docs/concepts/rag/)

---

## 🔌 3. Giao thức Kết nối Tools (Model Context Protocol - MCP)

### 🌐 Model Context Protocol (MCP) Official Docs
* **Mô tả**: Trang tài liệu chuẩn do Anthropic khởi xướng về kiến trúc MCP Server/Client. Hướng dẫn cách tạo các Server đọc Database, File System hoặc kết nối API ngoại vi.
* **URL**: [https://modelcontextprotocol.io](https://modelcontextprotocol.io)

### 🐍 FastMCP Python SDK (GitHub)
* **Mô tả**: Thư viện Python giúp dựng MCP Server cực nhanh chỉ trong vài dòng code với cú pháp Decorator tương tự FastAPI.
* **URL**: [https://github.com/jlowin/fastmcp](https://github.com/jlowin/fastmcp)

---

## 🗄️ 4. Vector Database & Backend (PostgreSQL & FastAPI)

### 🐘 `pgvector` Extension Documentation
* **Mô tả**: Hướng dẫn chính thức về cú pháp SQL, cách tạo chỉ mục (HNSW, IVFFlat) để tối ưu hóa truy vấn Vector Search trực tiếp trên cơ sở dữ liệu PostgreSQL.
* **URL**: [https://github.com/pgvector/pgvector](https://github.com/pgvector/pgvector)

### ⚡ FastAPI Official Tutorial (Streaming & Async)
* **Mô tả**: Tài liệu học viết Backend Python không đồng bộ (Async) và phát dữ liệu thời gian thực qua Server-Sent Events (SSE).
* **URL**: [https://fastapi.tiangolo.com/tutorial/](https://fastapi.tiangolo.com/tutorial/)

---

## 💻 5. Frontend & Streaming Real-time (Vercel AI SDK & Next.js)

### 🚀 Vercel AI SDK Docs
* **Mô tả**: Bộ thư viện chuẩn dành cho Frontend Developer để đấu nối Next.js/React với LLM Backend. Hỗ trợ sẵn các React Hooks như `useChat`, `useCompletion` và xử lý Stream UI mượt mà.
* **URL**: [https://sdk.vercel.ai/docs](https://sdk.vercel.ai/docs)

### 🔗 Vercel AI SDK Guide: FastAPI / Python Integration
* **Mô tả**: Hướng dẫn tích hợp giao diện Next.js với Backend AI viết bằng Python (FastAPI / LangChain).
* **URL**: [https://sdk.vercel.ai/docs/guides/frameworks/fastapi](https://sdk.vercel.ai/docs/guides/frameworks/fastapi)

---

## 📊 6. LLMOps, Tracing & Evaluation (LangSmith & Langfuse)

### 🔍 LangSmith Docs
* **Mô tả**: Hướng dẫn cấu hình Tracing toàn bộ luồng suy luận của LangChain/LangGraph, theo dõi chi phí Token và xây dựng Dataset kiểm thử tự động.
* **URL**: [https://docs.smith.langchain.com/](https://docs.smith.langchain.com/)

### 🛡️ Langfuse Documentation (Open-Source LLMOps)
* **Mô tả**: Giải pháp LLMOps mã nguồn mở có thể tự host (Self-hosted) bằng Docker Compose, giúp quản lý Prompt, Trace log và phân tích Latency.
* **URL**: [https://langfuse.com/docs](https://langfuse.com/docs)
