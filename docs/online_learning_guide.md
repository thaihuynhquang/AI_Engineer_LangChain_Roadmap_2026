# 🚀 Hướng Dẫn Lộ Trình Tự Học & Thực Hành 100% Online (2026)
## Enterprise Knowledge AI Assistant Project

Bộ hướng dẫn này **thay thế hoàn toàn cuốn sách** *Generative AI with LangChain*, cung cấp cho bạn một **Pedagogical Framework (Khung lộ trình sư phạm)** được cấu trúc mạch lạc từ cơ bản đến nâng cao. Mỗi Module kết hợp chính xác giữa **Lý thuyết/Video bài giảng miễn phí** $\rightarrow$ **Tài liệu chuẩn (Docs 2026)** $\rightarrow$ **Nhiệm vụ gõ code thực tế (Deliverables)**.

---

## 🗺️ Bức Tranh Tổng Quan Lộ Trình (Unified Curriculum)

```
[Module 1: LLM APIs & Async Backend] ──► [Module 2: Advanced RAG & pgvector]
                                                      │
[Module 5: LLMOps & Production]      ◄── [Module 4: Fullstack Web UI] ◄── [Module 3: LangGraph & MCP Agents]
```

---

## 📚 Hướng Dẫn Chi Tiết Theo Từng Module

### 🟢 Module 1: Core LLM APIs, Prompting & FastAPI Async Backend
> **Mục tiêu**: Nắm vững cơ chế gọi LLM API, quản lý Prompt Template, Output Parsing và phát dòng dữ liệu (Streaming Response - SSE) bằng Python Backend.

* **1. Nội dung Kiến thức Cần nạp**:
  * Cơ chế hoạt động của Chat Models (User, System, Assistant Messages).
  * Prompt Templates & Few-shot Prompting.
  * Server-Sent Events (SSE) & Async IO trong Python.
* **2. Tài nguyên Học thay thế Sách (Miễn phí)**:
  * 📹 **Khóa học**: [DeepLearning.AI: ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) *(Nắm tư duy prompt chuẩn)*.
  * 📖 **Tài liệu tra cứu**: [FastAPI Tutorial: Async & Streaming Responses](https://fastapi.tiangolo.com/tutorial/) *(Cú pháp SSE backend)*.
  * 📖 **Tài liệu LangChain**: [LangChain Python API Quickstart](https://python.langchain.com/docs/introduction/) *(Tạo prompt & stream tokens)*.
* **3. Nhiệm vụ Thực hành (Sprint 1 Deliverables)**:
  - Khởi tạo project Python (`pyproject.toml` hoặc `requirements.txt`), dùng `langchain-core` và `langchain-anthropic` / `langchain-openai`.
  - Dựng API Endpoint với FastAPI: `POST /api/chat/stream`.
  - Trả về kết quả streaming token-by-token về client qua SSE (`StreamingResponse`).

---

### 🟡 Module 2: Advanced RAG System & PostgreSQL (`pgvector`)
> **Mục tiêu**: Xây dựng hệ thống tra cứu tri thức doanh nghiệp từ file PDF/Markdown với kỹ thuật RAG tự sửa lỗi, Hybrid Search và Reranking.

* **1. Nội dung Kiến thức Cần nạp**:
  * Chunking Strategies (`RecursiveCharacterTextSplitter`).
  * Vector Embeddings & Similarity Search (Cosine, Inner Product).
  * **pgvector**: HNSW Index & Full-Text Search của PostgreSQL.
  * Advanced RAG: Query Rewriting, Hybrid Search (Vector + BM25), Cross-Encoder Reranking.
* **2. Tài nguyên Học thay thế Sách (Miễn phí)**:
  * 📹 **Khóa học 1**: [DeepLearning.AI: Building Agentic RAG with LlamaIndex](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/) *(RAG tự sửa lỗi & routing)*.
  * 📹 **Khóa học 2**: [DeepLearning.AI: Preprocessing Unstructured Data for LLM Applications](https://www.deeplearning.ai/short-courses/preprocessing-unstructured-data-for-llm-applications/) *(Xử lý & chunking tài liệu)*.
  * 📖 **Tài liệu tra cứu**: [LangChain RAG Conceptual Guide](https://python.langchain.com/docs/concepts/rag/) *(Mẫu thiết kế Retriever)*.
  * 📖 **DB Docs**: [pgvector GitHub & Documentation](https://github.com/pgvector/pgvector) *(Cú pháp HNSW index & SQL vector)*.
* **3. Nhiệm vụ Thực hành (Sprint 2 Deliverables)**:
  - Chạy PostgreSQL với `pgvector` extension bằng Docker Compose.
  - Viết pipeline Ingestion: Đọc file PDF/Markdown $\rightarrow$ Split text $\rightarrow$ Embed $\rightarrow$ Lưu vào `pgvector`.
  - Viết pipeline Retrieval:
    1. **Query Rewriter**: Dùng LLM viết lại câu hỏi gốc để tìm kiếm rộng hơn.
    2. **Hybrid Search**: Kết hợp Vector Search + Full-text search Postgres.
    3. **Reranker**: Dùng mô hình Rerank (ví dụ: Cohere / Flashrank) lọc lấy Top-K đoạn văn bản phù hợp nhất.

---

### 🔴 Module 3: Stateful Agentic Workflows với LangGraph & MCP
> **Mục tiêu**: Biến RAG đơn thuần thành AI Agent có khả năng lập kế hoạch (Planning), gọi công cụ qua chuẩn giao thức Model Context Protocol (MCP) và duy trì trạng thái.

* **1. Nội dung Kiến thức Cần nạp**:
  * Khái niệm Graph-based Control Flow: Nodes, Edges, `StateGraph`, Conditional Edges.
  * State Management & Persistence (Checkpointer / Memory).
  * Model Context Protocol (MCP): Server/Client architecture, Tools, Resources, Prompts.
  * Human-in-the-loop (Tạm dừng luồng để con người phê duyệt).
* **2. Tài nguyên Học thay thế Sách (Miễn phí)**:
  * 📹 **Khóa học 1**: [DeepLearning.AI: AI Agents in LangGraph](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/) *(Xây dựng Stateful Agents)*.
  * 🎓 **Khóa học 2**: [LangGraph Academy](https://academy.langchain.com/) *(Khóa video chính thức của LangChain)*.
  * 📖 **Tài liệu LangGraph**: [LangGraph Official Documentation](https://langchain-ai.github.io/langgraph/) *(Design Patterns chuẩn)*.
  * 🔌 **Tài liệu MCP**: [Model Context Protocol Docs](https://modelcontextprotocol.io) & [FastMCP Python SDK](https://github.com/jlowin/fastmcp).
* **3. Nhiệm vụ Thực hành (Sprint 3 Deliverables)**:
  - Dựng 1 **FastMCP Server** độc lập cung cấp Tool (ví dụ: Tool truy vấn database SQL hoặc gọi GitHub API).
  - Viết LangGraph `StateGraph` Agent trong Backend Python:
    - Node 1: Plan & Decide (Xác định cần tra cứu RAG hay gọi MCP Tool).
    - Node 2: Execute Tool (Kết nối MCP Server qua SSE/Stdio transport để gọi Tool).
    - Node 3: Synthesize Response (Tổng hợp câu trả lời cuối cùng).
  - Tích hợp Checkpointer để ghi nhớ lịch sử hội thoại dạng State.

---

### 🔵 Module 4: Real-time Web UI & Integration (Next.js + Vercel AI SDK)
> **Mục tiêu**: Thiết kế giao diện Web hiện đại, mượt mà, hỗ trợ render Markdown, hiển thị trạng thái suy luận từng bước của Agent và câu trả lời Real-time.

* **1. Nội dung Kiến thức Cần nạp**:
  * Next.js App Router (React Server Components, Client Components).
  * Vercel AI SDK (`useChat`, `streamText`).
  * CSS Styling với Tailwind CSS & Shadcn/ui.
* **2. Tài nguyên Học thay thế Sách (Miễn phí)**:
  * 📖 **Tài liệu 1**: [Vercel AI SDK Official Documentation](https://sdk.vercel.ai/docs).
  * 📖 **Tài liệu 2**: [Vercel AI SDK Stream Protocol](https://sdk.vercel.ai/docs/ai-sdk-ui/stream-protocol).
  * 📖 **Tài liệu 3**: [Next.js Official Documentation](https://nextjs.org/docs).
* **3. Nhiệm vụ Thực hành (Sprint 4 Deliverables)**:
  - Khởi tạo Web Client với Next.js 14+ (App Router) + Tailwind CSS + Shadcn/ui.
  - Sử dụng React Hook `useChat` kết nối với API Streaming từ FastAPI Backend.
  - UI Components:
    - Chat Message bubble với Markdown Syntax Highlighting.
    - Status Badge hiển thị hành động Agent (VD: *"🔍 Agent đang truy vấn pgvector..."*, *"🛠️ Agent đang gọi FastMCP Tool..."*).

---

### 🟣 Module 5: Production LLMOps, Tracing, Evaluation & Deployment
> **Mục tiêu**: Giám sát hiệu năng, theo dõi token/chi phí, kiểm thử tự động chất lượng câu trả lời và đóng gói hệ thống sản xuất.

* **1. Nội dung Kiến thức Cần nạp**:
  * Tracing & Observability (Span, Latency, Token Usage).
  * Evaluation Metrics: Context Precision, Context Recall, Answer Faithfulness (phát hiện Hallucination).
  * Containerization với Docker Compose.
* **2. Tài nguyên Học thay thế Sách (Miễn phí)**:
  * 📹 **Khóa học**: [DeepLearning.AI: Evaluating and Debugging Generative AI](https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/) *(Đánh giá mô hình)*.
  * 📖 **Tài liệu Tracing**: [LangSmith Documentation](https://docs.smith.langchain.com/) hoặc [Langfuse Open-source Docs](https://langfuse.com/docs).
* **3. Nhiệm vụ Thực hành (Sprint 5 Deliverables)**:
  - Gắn Tracing SDK (`langsmith` hoặc `langfuse`) vào FastAPI backend.
  - Xây dựng Test Suite (Dataset 20-30 câu hỏi mẫu) để đánh giá tự động chỉ số RAG accuracy và Hallucination rate.
  - Viết file `docker-compose.yml` khởi chạy đồng thời: Frontend Next.js + Backend FastAPI + Postgres pgvector + Langfuse.

---

## ⚡ Quy Trình Học & Gõ Code Hàng Ngày (Daily Execution Loop)

Mỗi ngày dành ra **1.5 - 2 tiếng** thực hành theo chu trình 3 bước:

```
┌────────────────────────────────┐    ┌────────────────────────────────┐    ┌────────────────────────────────┐
│  BƯỚC 1: NẠP LÝ THUYẾT (30m)   │ ──►│ BƯỚC 2: XEM CODE PATTERN (15m) │ ──►│  BƯỚC 3: GÕ CODE & TEST (75m)  │
│  Xem video short course hoặc   │    │  Đọc Official Docs để lấy mẫu  │    │  Viết code vào dự án local và  │
│  đọc tài liệu conceptual docs.  │    │  code chuẩn năm 2026.          │    │  commit kết quả lên GitHub.    │
└────────────────────────────────┘    └────────────────────────────────┘    └────────────────────────────────┘
```
