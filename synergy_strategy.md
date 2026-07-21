# 🎯 Chiến lược Kết hợp (Synergy Strategy): Sách vs. Tài nguyên Online

Hướng dẫn chi tiết phương pháp phối hợp giữa **Cuốn sách "Generative AI with LangChain (2nd Edition)"** và **Danh sách Tài nguyên Online (`resources.md`)** để hoàn thành **Roadmap Dự án AI Application 2026 (`AI_Engineer_LangChain_Roadmap_2026.md`)**.

---

## 💡 Triết lý Cốt lõi: Quy tắc 30 / 70

```
┌──────────────────────────────────────┐     ┌──────────────────────────────────────┐
│       📖 CUỐN SÁCH (30% TIME)        │     │     🌐 NGUỒN ONLINE (70% TIME)       │
├──────────────────────────────────────┤     ├──────────────────────────────────────┤
│ • Tư duy Kiến trúc & Design Patterns │ ──► │ • Cú pháp Code chuẩn năm 2026        │
│ • Cơ chế hoạt động của LangGraph     │     │ • Giao thức MCP (Model Context)      │
│ • Tư duy Đánh giá & Tracing LLM      │     │ • Fullstack Web (Vercel AI SDK)      │
└──────────────────────────────────────┘     └──────────────────────────────────────┘
```

* **Dùng Sách (30%)** để nắm **TƯ DUY & BỨC TRANH TỔNG THỂ**: Đọc hiểu cách các thành phần (Agents, RAG, State Graphs) phối hợp với nhau.
* **Dùng Nguồn Online (70%)** để **THỰC THI CODE & CẬP NHẬT CHUẨN 2026**: Tra cứu cú pháp mới nhất, sử dụng công cụ tiên tiến hơn (pgvector, FastMCP, Vercel AI SDK) và học qua tương tác (DeepLearning.AI).

---

## 🗺️ Hướng dẫn Tích hợp Chi tiết theo từng Sprint

### 🟢 Sprint 1: Dựng Khung Backend & Gọi LLM API Streaming
* **Sách (Đọc 30p)**: Read Chapter 1, 2, 3 để hiểu cơ chế Prompt Templates, Output Parsers và cách LangChain abstraction giao tiếp với LLM API.
* **Nguồn Online (Thực hành)**:
  - Xem [FastAPI Official Tutorial](https://fastapi.tiangolo.com/tutorial/) về `async/await` và Server-Sent Events (SSE).
* **Hành động (Execution)**: Dựng FastAPI server, gọi Claude 3.5/3.7 hoặc OpenAI API và stream response về qua SSE. Bỏ qua toàn bộ phần Streamlit/Gradio trong sách.

---

### 🟡 Sprint 2: Advanced RAG System (Hệ thống Tri thức)
* **Sách (Đọc 45p)**: Read các chương RAG để nắm tư duy về Text Chunking, Embeddings, Context Compression, Query Rewriting và Re-ranking.
* **Nguồn Online (Thực hành)**:
  - Học khóa ngắn *Building Agentic RAG* hoặc *Preprocessing Data for LLMs* trên [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/).
  - Tra cứu cú pháp SQL/Vector Index tại [`pgvector` Docs](https://github.com/pgvector/pgvector).
  - Tham khảo cách viết Retriever nâng cao tại [LangChain RAG Guides](https://python.langchain.com/docs/concepts/rag/).
* **Hành động (Execution)**: Thay thế ChromaDB trong sách bằng **`pgvector` (PostgreSQL)**. Viết RAG pipeline có Hybrid Search và Reranking.

---

### 🔴 Sprint 3: Agentic Workflow với LangGraph & MCP
* **Sách (Đọc 60p)**: Read các chương về **LangGraph** để hiểu khái niệm `StateGraph`, Nodes, Edges, State persistence và Multi-Agent Supervisor pattern.
* **Nguồn Online (Thực hành)**:
  - Học khóa *AI Agents in LangGraph* trên [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/).
  - Đọc [LangGraph Official Docs](https://langchain-ai.github.io/langgraph/) để lấy code pattern chuẩn nhất.
  - Đọc [Model Context Protocol Docs](https://modelcontextprotocol.io) và dùng thư viện [FastMCP](https://github.com/jlowin/fastmcp) để dựng MCP Server kết nối công cụ ngoại vi.
* **Hành động (Execution)**: Viết Stateful Agent bằng LangGraph. Thay thế Custom Tool kiểu cũ trong sách bằng kết nối chuẩn giao thức **MCP**.

---

### 🔵 Sprint 4: Đấu nối Web UI & Streaming Real-time
* **Sách**: *Không cần đọc sách ở Sprint này.*
* **Nguồn Online (Thực hành)**:
  - Đọc tài liệu [Vercel AI SDK Docs](https://sdk.vercel.ai/docs).
  - Tham khảo mẫu [Vercel AI SDK FastAPI Integration Guide](https://sdk.vercel.ai/docs/guides/frameworks/fastapi).
* **Hành động (Execution)**: Khởi tạo project Next.js + Tailwind CSS, dùng Vercel AI SDK (`useChat`) kết nối với API FastAPI từ Sprint 1 & 3 để render chat UI và trạng thái suy luận của Agent.

---

### 🟣 Sprint 5: LLMOps, Tracing & Đánh giá (Production-Ready)
* **Sách (Đọc 45p)**: Read các chương về **LangSmith** để hiểu cách tạo Evaluation Datasets, cách đo lường độ chính xác (Accuracy), độ khớp ngữ cảnh (Context Precision) và hiện tượng Hallucination.
* **Nguồn Online (Thực hành)**:
  - Xem cách cấu hình Tracing tại [LangSmith Docs](https://docs.smith.langchain.com/).
  - Hoặc triển khai giải pháp Self-hosted thay thế bằng [Langfuse Docs](https://langfuse.com/docs).
* **Hành động (Execution)**: Gắn Tracing SDK vào Backend FastAPI. Viết script kiểm thử tự động (Evaluation suite) cho hệ thống RAG và Agent. Đóng gói dự án bằng Docker Compose.

---

## ⚡ Quy trình Làm việc Hàng ngày (Daily 3-Step Execution)

Mỗi ngày dành ra **1.5 - 2 tiếng** thực hành theo 3 bước:

1. **Bước 1: Nạp Khái niệm (15-20 phút)**
   - Đọc lý thuyết trong sách hoặc xem video ngắn trên DeepLearning.AI để hiểu khái niệm feature cần làm.
2. **Bước 2: Kiểm tra Cú pháp Cập nhật (10-15 phút)**
   - Mở Official Docs (LangGraph, FastMCP, Vercel AI SDK) để copy mẫu code chuẩn năm 2026.
3. **Bước 3: Thực hành & Commit (60-90 phút)**
   - Viết code cho tính năng đó trong dự án local, test trực tiếp và commit lên GitHub.
