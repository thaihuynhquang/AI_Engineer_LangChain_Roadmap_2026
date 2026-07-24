# AI Engineer Roadmap 2026: Enterprise Knowledge AI Assistant

Dành cho lập trình viên muốn chuyển mình sang **AI Engineer** thông qua việc xây dựng sản phẩm thực tế (Production-ready AI Application) dựa trên **lộ trình tự học 100% bằng tài nguyên online miễn phí (`docs/online_learning_guide.md`)** và hệ sinh thái công nghệ cập nhật tháng 7/2026.

---

## 🎯 Đề tài Dự án Thực hành: Enterprise Knowledge AI Assistant

> **Mục tiêu**: Xây dựng một ứng dụng Web Fullstack cho phép người dùng tải lên các tài liệu kỹ thuật/dự án, tra cứu thông tin thông minh (Advanced RAG) và tự động hóa tác vụ quy trình công việc qua các AI Agent độc lập.

### 📐 Mô hình Kiến trúc Hệ thống (System Architecture)

- **Frontend**: Next.js (React) + Tailwind CSS + Vercel AI SDK (Xử lý UI, Chat Interface & Streaming)
- **Backend AI Engine**: Python + FastAPI + LangGraph + Model Context Protocol (MCP)
- **Database & Vector Search**: PostgreSQL với extension `pgvector`
- **Mô hình LLM**: Anthropic Claude 3.5/3.7, DeepSeek-R1, Google Gemini 2.0 / OpenAI
- **LLMOps & Observability**: LangSmith / Langfuse (Tracing, Debugging & Evaluation)

---

## 🗺️ Chi tiết Lộ trình Thực hành theo Sprint & Module Online

```
[Sprint 1 / Module 1: Core Backend] ──► [Sprint 2 / Module 2: Advanced RAG System]
                                                   │
[Sprint 5 / Module 5: LLMOps]        ◄── [Sprint 4 / Module 4: Web UI] ◄── [Sprint 3 / Module 3: Agentic Workflows]
```

---

### 🟢 Sprint 1: Dựng Khung Backend & Gọi LLM API Streaming
* **Mục tiêu**: Xây dựng Backend Python cơ bản bằng FastAPI, kết nối API LLM và truyền dữ liệu dạng Stream (token-by-token) về Client.
* **Module tự học Online**: **Module 1 trong `docs/online_learning_guide.md`**
  - Khóa học DeepLearning.AI Prompt Engineering & FastAPI Async Docs.
* **Nhiệm vụ thực hành**:
  1. Khởi tạo dự án Python (khuyên dùng Python 3.11+) và cài đặt FastAPI, `langchain-core`, `langchain-anthropic` / `langchain-openai`.
  2. Dùng LangChain để dựng Prompt Templates và kết nối API mô hình.
  3. Viết API Endpoint nhận câu hỏi từ Client và trả kết quả dạng **Streaming (Server-Sent Events - SSE)**.

---

### 🟡 Sprint 2: Xây dựng Hệ thống Tri thức Doanh nghiệp (Advanced RAG)
* **Mục tiêu**: Đọc tài liệu (PDF, Markdown), lưu trữ Vector Embeddings và tra cứu ngữ nghĩa chính xác cao.
* **Module tự học Online**: **Module 2 trong `docs/online_learning_guide.md`**
  - Khóa học DeepLearning.AI Agentic RAG, Preprocessing Data & `pgvector` Docs.
* **Nhiệm vụ thực hành**:
  1. Sử dụng LangChain Document Loaders đọc file PDF/Markdown.
  2. Áp dụng kỹ thuật chia nhỏ văn bản `RecursiveCharacterTextSplitter`.
  3. Khởi tạo **PostgreSQL với `pgvector`** (dùng Docker) làm Vector Database chính.
  4. Viết Pipeline RAG nâng cao:
     - **Query Rewriting**: Viết lại câu hỏi của người dùng để tìm kiếm tốt hơn.
     - **Hybrid Search**: Kết hợp Vector Search + Full-text Search của Postgres.
     - **Reranking**: Dùng Reranker model để lọc lấy Top-K ngữ cảnh chính xác nhất trước khi gửi cho LLM.

---

### 🔴 Sprint 3: Xây dựng AI Agent nâng cao với LangGraph & MCP
* **Mục tiêu**: Biến ứng dụng từ "trả lời câu hỏi" thành "hệ thống AI tự động hóa tác vụ" (Agentic Workflows).
* **Module tự học Online**: **Module 3 trong `docs/online_learning_guide.md`**
  - Khóa học DeepLearning.AI LangGraph, LangGraph Academy, Model Context Protocol (MCP) Docs.
* **Nhiệm vụ thực hành**:
  1. Đọc tài liệu **LangGraph** để thiết kế luồng xử lý dạng đồ thị có trạng thái (`StateGraph`).
  2. Tạo Agent có khả năng lập kế hoạch (Planning), gọi công cụ (Tool Execution) và tự sửa lỗi khi kết quả tra cứu chưa đủ.
  3. **Tích hợp giao thức chuẩn 2026**:
     - Dựng 1 **MCP Server (`FastMCP`)** nhỏ (ví dụ: Tool truy vấn DB hoặc GitHub API).
     - Cho LangGraph Agent kết nối và gọi Tool thông qua chuẩn giao thức **Model Context Protocol (MCP)**.

---

### 🔵 Sprint 4: Đấu nối Web UI & Streaming Real-time (Frontend Integration)
* **Mục tiêu**: Dựng giao diện Web thương mại mượt mà, hiển thị phản hồi token-by-token và trạng thái suy luận của Agent.
* **Module tự học Online**: **Module 4 trong `docs/online_learning_guide.md`**
  - Vercel AI SDK Docs & Next.js Docs.
* **Nhiệm vụ thực hành**:
  1. Khởi tạo dự án Web bằng **Next.js (App Router)** + Tailwind CSS.
  2. Kết nối API Backend FastAPI thông qua **Vercel AI SDK** / SSE client.
  3. Xây dựng UI Chat hỗ trợ:
     - Render định dạng Markdown & Syntax Highlighting cho Code Block.
     - Hiển thị trạng thái hoạt động của Agent (ví dụ: *"Agent đang tìm kiếm tài liệu..."*, *"Agent đang gọi MCP Tool..."*).

---

### 🟣 Sprint 5: LLMOps, Tracing & Đánh giá Chất lượng (Production-Ready)
* **Mục tiêu**: Giám sát hiệu năng, kiểm soát chi phí token, phát hiện lỗi hallucination và đóng gói ứng dụng.
* **Module tự học Online**: **Module 5 trong `docs/online_learning_guide.md`**
  - LangSmith Docs / Langfuse Docs & Khóa học Evaluating Generative AI Models.
* **Nhiệm vụ thực hành**:
  1. Tích hợp **LangSmith** (hoặc Langfuse self-hosted) vào Backend Python.
  2. Tracing toàn bộ luồng suy luận của LangGraph Agent để phân tích độ trễ (Latency) và chi phí Token từng bước.
  3. Viết bộ kiểm thử tự động (Evaluation Test Suite) để đo độ chính xác của RAG và Agent.
  4. Đóng gói ứng dụng Fullstack (Next.js + FastAPI + Postgres) bằng **Docker Compose** sẵn sàng triển khai lên Cloud.

---

## 📑 Bảng Đối Chiếu Nguồn Học & Công Nghệ Chuẩn 2026

| Thành phần | Nguồn Tự Học Online (Tài Nguyên Miễn Phí 🎓) | Chuẩn Thực tế 2026 (Công Nghệ 🚀) |
| :--- | :--- | :--- |
| **Agent Control** | DeepLearning.AI AI Agents in LangGraph & Docs | **LangGraph StateGraph** + Async Execution |
| **Tool Calling** | MCP Docs & FastMCP Python SDK | **Model Context Protocol (MCP)** via FastMCP |
| **Vector DB** | `pgvector` Documentation & DeepLearning.AI RAG | **PostgreSQL (`pgvector`)** & Hybrid Search |
| **LLM Inference** | Anthropic / Google Gemini / DeepSeek Docs | **Claude 3.7, DeepSeek-R1/V3, Gemini 2.0** |
| **LLMOps / Tracing**| LangSmith Docs & Langfuse Open-source Docs | **LangSmith** hoặc **Langfuse** |
| **User Interface** | Vercel AI SDK Docs & Next.js Tutorials | **Next.js + Tailwind + Vercel AI SDK** |

---

## 💡 Nguyên Tắc Tự Học "Learn by Doing"

1. **Quy tắc 30 phút Nạp Kiến Thức**: Dành 30 phút xem video khóa học hoặc đọc conceptual docs của tính năng sắp làm, sau đó chuyển sang gõ code ngay.
2. **Xây dựng GitHub Portfolio**: Commit code sau mỗi Sprint hoàn thành. Đây sẽ là dự án thực tế ấn tượng nhất trong Portfolio ứng tuyển AI Engineer của bạn.

