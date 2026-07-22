# 🎯 Chiến Lược Tự Học 100% Online (Pure Online Execution Strategy)

Hướng dẫn chi tiết phương pháp học tập và xây dựng dự án **Enterprise Knowledge AI Assistant** hoàn toàn bằng **Tài nguyên Online miễn phí (`online_learning_guide.md` & `resources.md`)**, loại bỏ sự phụ thuộc vào sách giấy hay giáo trình lỗi thời.

---

## 💡 Triết Lý Cốt Lõi: Quy Tắc 25 / 15 / 60

```
┌──────────────────────────────────────┐     ┌──────────────────────────────────────┐     ┌──────────────────────────────────────┐
│   🎓 1. NẠP KHÁI NIỆM (25% TIME)     │ ──► │   📖 2. TRA CUỐI DOCS (15% TIME)     │ ──► │  💻 3. THỰC THI & COMMIT (60% TIME)  │
├──────────────────────────────────────┤     ├──────────────────────────────────────┤     ├──────────────────────────────────────┤
│ Xem video ngắn DeepLearning.AI hoặc  │     │ Tra cứu cú pháp code mới nhất 2026   │     │ Lập trình tính năng thực tế trên     │
│ học bài giảng LangGraph Academy.     │     │ từ Official Docs (LangGraph, FastMCP)│     │ dự án local & push code lên GitHub.  │
└──────────────────────────────────────┘     └──────────────────────────────────────┘     └──────────────────────────────────────┘
```

1. **25% Thời gian (Nạp Lý Thuyết)**: Học qua các khóa video trực quan 1-2 tiếng trên DeepLearning.AI hoặc LangGraph Academy để nắm bản chất khái niệm.
2. **15% Thời gian (Chuẩn hóa Code)**: Đọc Official Docs năm 2026 của từng thư viện để copy code patterns chuẩn mực nhất.
3. **60% Thời gian (Thực hành Thực chiến)**: Tự tay viết code, xử lý lỗi và đóng gói sản phẩm.

---

## 🗺️ Hướng Dẫn Tích Hợp Chi Tiết Theo Từng Module & Sprint

### 🟢 Sprint 1 / Module 1: Dựng Khung Backend & Stream LLM API
* **Nguồn Lý thuyết**:
  - Xem video [DeepLearning.AI: Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/).
* **Nguồn Tra cứu Code**:
  - Tra cứu `async` & `SSE` streaming tại [FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/).
  - Tra cứu `langchain-anthropic` / `langchain-openai` tại [LangChain Quickstart](https://python.langchain.com/docs/introduction/).
* **Hành động (Execution)**: Dựng FastAPI server, gọi API mô hình LLM và stream kết quả SSE về client.

---

### 🟡 Sprint 2 / Module 2: Advanced RAG System (`pgvector`)
* **Nguồn Lý thuyết**:
  - Học khóa [DeepLearning.AI: Building Agentic RAG](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/) và [Preprocessing Data for LLMs](https://www.deeplearning.ai/short-courses/preprocessing-data-for-llms/).
* **Nguồn Tra cứu Code**:
  - Cú pháp HNSW Index & Hybrid Search tại [`pgvector` Docs](https://github.com/pgvector/pgvector).
  - Cách thiết kế Query Rewriting & Rerank tại [LangChain RAG Guides](https://python.langchain.com/docs/concepts/rag/).
* **Hành động (Execution)**: Khởi tạo PostgreSQL `pgvector` qua Docker. Viết pipeline đọc PDF, split text, embed và truy vấn Hybrid Search + Reranking.

---

### 🔴 Sprint 3 / Module 3: Agentic Workflows với LangGraph & MCP
* **Nguồn Lý thuyết**:
  - Học khóa [DeepLearning.AI: AI Agents in LangGraph](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/) và [LangGraph Academy](https://academy.langchain.com/).
* **Nguồn Tra cứu Code**:
  - Cấu trúc `StateGraph` & Checkpointers tại [LangGraph Official Docs](https://langchain-ai.github.io/langgraph/).
  - Chuẩn giao thức MCP tại [Model Context Protocol Docs](https://modelcontextprotocol.io) và SDK [FastMCP](https://github.com/jlowin/fastmcp).
* **Hành động (Execution)**: Viết Stateful Agent bằng LangGraph. Dựng FastMCP Server cung cấp Tool cho Agent kết nối gọi dữ liệu.

---

### 🔵 Sprint 4 / Module 4: Đấu Nối Web UI Real-time (Next.js + Vercel AI SDK)
* **Nguồn Lý thuyết & Code**:
  - Đọc tài liệu [Vercel AI SDK Docs](https://sdk.vercel.ai/docs) và xem bài viết hướng dẫn [FastAPI Integration Guide](https://sdk.vercel.ai/docs/guides/frameworks/fastapi).
* **Hành động (Execution)**: Khởi tạo project Next.js + Tailwind CSS, dùng `useChat` từ Vercel AI SDK đấu nối với Backend FastAPI từ Sprint 1 & 3 để hiển thị giao diện Chat thời gian thực.

---

### 🟣 Sprint 5 / Module 5: LLMOps, Tracing & Đánh Giá (Production-Ready)
* **Nguồn Lý thuyết & Code**:
  - Xem khóa học [DeepLearning.AI: Evaluating & Debugging Generative AI Models](https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/).
  - Tra cứu cách tạo Evaluation Datasets và Tracing tại [LangSmith Docs](https://docs.smith.langchain.com/) hoặc [Langfuse Docs](https://langfuse.com/docs).
* **Hành động (Execution)**: Gắn Tracing vào Backend, viết script đo đạc độ chính xác của RAG/Agent và đóng gói toàn bộ ứng dụng bằng Docker Compose.

---

## ⚡ Quy Trình Làm Việc Hàng Ngày (Daily 3-Step Execution)

Mỗi ngày dành ra **1.5 - 2 tiếng** thực hành theo 3 bước:

1. **Bước 1: Nạp Khái niệm (30 phút)**
   - Xem video ngắn trên DeepLearning.AI hoặc đọc conceptual docs để hiểu bản chất tính năng cần làm.
2. **Bước 2: Kiểm tra Cú pháp Cập nhật (15 phút)**
   - Mở Official Docs (LangGraph, FastMCP, Vercel AI SDK) để lấy mẫu code chuẩn 2026.
3. **Bước 3: Thực hành & Commit (60-75 phút)**
   - Viết code cho tính năng đó trong dự án local, test trực tiếp và commit kết quả lên GitHub.
