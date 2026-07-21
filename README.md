# Generative AI with LangChain 2026

Dành cho lập trình viên muốn chuyển mình sang **AI Engineer** thông qua việc xây dựng sản phẩm thực tế (Production-ready AI Application) kết hợp kiến thức từ cuốn sách *Generative AI with LangChain (2nd Edition)* và hệ sinh thái công nghệ cập nhật tháng 7/2026.

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

## 🗺️ Chi tiết Lộ trình Thực hành theo Sprint

```
[Sprint 1: Core Backend & API Setup] ──► [Sprint 2: Advanced RAG System]
                                                   │
[Sprint 5: LLMOps & Evaluation]     ◄── [Sprint 4: UI & Streaming] ◄── [Sprint 3: Agentic Workflow]
```

---

### 🟢 Sprint 1: Dựng Khung Backend & Gọi LLM API Streaming
* **Mục tiêu**: Xây dựng Backend Python cơ bản bằng FastAPI, kết nối API LLM và truyền dữ liệu dạng Stream (token-by-token) về Client.
* **Chương trong sách cần đọc**:
  - **Chapter 1**: The Rise of Generative AI (Đọc lướt khái niệm)
  - **Chapter 2 & 3**: Prompts, Chains, Output Parsers & Model APIs
* **Nhiệm vụ thực hành**:
  1. Khởi tạo dự án Python (khuyên dùng Python 3.11+) và cài đặt FastAPI, `langchain-core`, `langchain-anthropic` / `langchain-openai`.
  2. Dùng LangChain để dựng Prompt Templates và kết nối API mô hình.
  3. Viết API Endpoint nhận câu hỏi từ Client và trả kết quả dạng **Streaming (Server-Sent Events - SSE)**.
* **❌ Bỏ qua trong sách**: Toàn bộ các phần hướng dẫn dựng giao diện bằng Streamlit hoặc Gradio.

---

### 🟡 Sprint 2: Xây dựng Hệ thống Tri thức Doanh nghiệp (Advanced RAG)
* **Mục tiêu**: Đọc tài liệu (PDF, Markdown), lưu trữ Vector Embeddings và tra cứu ngữ nghĩa chính xác cao.
* **Chương trong sách cần đọc**:
  - Các chương về Document Loaders, Text Splitters, Embeddings & Vector Databases.
  - Các chương về Advanced Retrieval (Query Transformation, Context Compression, Reranking).
* **Nhiệm vụ thực hành**:
  1. Sử dụng LangChain Document Loaders đọc file PDF/Markdown.
  2. Áp dụng kỹ thuật chia nhỏ văn bản `RecursiveCharacterTextSplitter`.
  3. Khởi tạo **PostgreSQL với `pgvector`** (dùng Docker) làm Vector Database chính (thay cho Chroma trong sách).
  4. Viết Pipeline RAG nâng cao:
     - **Query Rewriting**: Viết lại câu hỏi của người dùng để tìm kiếm tốt hơn.
     - **Hybrid Search**: Kết hợp Vector Search + Full-text Search của Postgres.
     - **Reranking**: Dùng Reranker model để lọc lấy Top-K ngữ cảnh chính xác nhất trước khi gửi cho LLM.

---

### 🔴 Sprint 3: Xây dựng AI Agent nâng cao với LangGraph & MCP
* **Mục tiêu**: Biến ứng dụng từ "trả lời câu hỏi" thành "hệ thống AI tự động hóa tác vụ" (Agentic Workflows).
* **Chương trong sách cần đọc**:
  - Các chương về **LangGraph**, State Management (`StateGraph`), Multi-Agent Systems và Human-in-the-loop.
* **Nhiệm vụ thực hành**:
  1. Đọc kỹ phần **LangGraph** trong sách để thiết kế luồng xử lý dạng đồ thị có trạng thái.
  2. Tạo Agent có khả năng lập kế hoạch (Planning), gọi công cụ (Tool Execution) và tự sửa lỗi khi kết quả tra cứu chưa đủ.
  3. **Cập nhật công nghệ 2026**:
     - Dựng 1 **MCP Server (`FastMCP`)** nhỏ (ví dụ: Tool truy vấn DB hoặc GitHub API).
     - Cho LangGraph Agent kết nối và gọi Tool thông qua chuẩn giao thức **Model Context Protocol (MCP)** thay vì dùng Custom Tool cũ của LangChain.

---

### 🔵 Sprint 4: Đấu nối Web UI & Streaming Real-time (Frontend Integration)
* **Mục tiêu**: Dựng giao diện Web thương mại mượt mà, hiển thị phản hồi token-by-token và trạng thái suy luận của Agent.
* **Tài liệu tra cứu**: *Dùng Vercel AI SDK Docs và Next.js Docs (không dùng sách).*
* **Nhiệm vụ thực hành**:
  1. Khởi tạo dự án Web bằng **Next.js (App Router)** + Tailwind CSS.
  2. Kết nối API Backend FastAPI thông qua **Vercel AI SDK** / SSE client.
  3. Xây dựng UI Chat hỗ trợ:
     - Render định dạng Markdown & Syntax Highlighting cho Code Block.
     - Hiển thị trạng thái hoạt động của Agent (ví dụ: *"Agent đang tìm kiếm tài liệu..."*, *"Agent đang gọi MCP Tool..."*).

---

### 🟣 Sprint 5: LLMOps, Tracing & Đánh giá Chất lượng (Production-Ready)
* **Mục tiêu**: Giám sát hiệu năng, kiểm soát chi phí token, phát hiện lỗi hallucination và đóng gói ứng dụng.
* **Chương trong sách cần đọc**:
  - Các chương về **LangSmith**, Debugging, Tracing, Evaluation Datasets & Benchmarking.
* **Nhiệm vụ thực hành**:
  1. Tích hợp **LangSmith** (hoặc Langfuse self-hosted) vào Backend Python.
  2. Tracing toàn bộ luồng suy luận của LangGraph Agent để phân tích độ trễ (Latency) và chi phí Token từng bước.
  3. Viết bộ kiểm thử tự động (Evaluation Test Suite) để đo độ chính xác của RAG và Agent.
  4. Đóng gói ứng dụng Fullstack (Next.js + FastAPI + Postgres) bằng **Docker Compose** sẵn sàng triển khai lên Cloud.

---

## 📑 Bảng Tra cứu: Sách (May 2025) vs Thực tế Thị trường (July 2026)

| Thành phần | Nội dung trong Sách (Nên đọc 📖) | Chuẩn Thực tế 2026 (Nâng cấp 🚀) |
| :--- | :--- | :--- |
| **Agent Control** | Sử dụng **LangGraph** (StateGraph) | **LangGraph StateGraph** + Async Execution |
| **Tool Calling** | LangChain Custom `@tool` / `BaseTool` | **Model Context Protocol (MCP)** via FastMCP |
| **Vector DB** | ChromaDB, FAISS, Pinecone | **PostgreSQL (`pgvector`)** & Hybrid Search |
| **LLM Inference** | GPT-4o, Claude 3.5 Sonnet | **Claude 3.7, DeepSeek-R1/V3, Gemini 2.0** |
| **LLMOps / Tracing**| **LangSmith** Tracing & Datasets | **LangSmith** hoặc **Langfuse** |
| **User Interface** | Streamlit / Gradio | **Next.js + Tailwind + Vercel AI SDK** |

---

## 💡 Nguyên tắc "Learn by Doing" Duy trì Tiến độ

1. **Quy tắc 30 phút reading**: Chỉ đọc sách tối đa 30 phút cho phần lý thuyết/mẫu code liên quan trực tiếp đến tính năng đang làm, sau đó gấp sách và gõ code ngay.
2. **Xây dựng GitHub Portfolio**: Commit code sau mỗi Sprint hoàn thành. Đây sẽ là dự án thực tế ấn tượng nhất trong Portfolio ứng tuyển AI Engineer của bạn.
