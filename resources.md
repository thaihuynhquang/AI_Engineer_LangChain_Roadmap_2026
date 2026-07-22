# 📚 Thư Viện Tài Nguyên Học Tập & Tra Cứu Chuẩn 2026
## Enterprise Knowledge AI Assistant Project

Tập hợp đầy đủ và cập nhật 100% theo lộ trình 5 Module trong tệp [online_learning_guide.md](file:///Users/thaihuynhquang/Desktop/learning/AI_Engineer_LangChain_Roadmap_2026/online_learning_guide.md). Các tài nguyên được phân loại trực tiếp theo từng giai đoạn phát triển dự án.

---

## 🟢 Module 1: Core LLM APIs, Prompting & FastAPI Async Backend

* 🎓 **[Khóa học Video Miễn phí] ChatGPT Prompt Engineering for Developers**:
  * *Nội dung*: Nắm vững tư duy viết Prompt chuẩn, Few-shot Prompting và Structured Output cho LLM.
  * *URL*: [deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
* ⚡ **[Docs Tra Cứu] FastAPI Official Tutorial (Async & Streaming)**:
  * *Nội dung*: Hướng dẫn lập trình Python Async/Await và phát dòng dữ liệu qua `StreamingResponse` (Server-Sent Events - SSE).
  * *URL*: [fastapi.tiangolo.com/tutorial/](https://fastapi.tiangolo.com/tutorial/)
* 🦜 **[Docs Tra Cứu] LangChain Python Core Quickstart**:
  * *Nội dung*: Cú pháp kết nối API OpenAI/Anthropic, khởi tạo Prompt Templates và Output Parsers.
  * *URL*: [python.langchain.com/docs/introduction/](https://python.langchain.com/docs/introduction/)

---

## 🟡 Module 2: Advanced RAG System & PostgreSQL (`pgvector`)

* 🎓 **[Khóa học Video Miễn phí 1] Building Agentic RAG with LlamaIndex / LangChain**:
  * *Nội dung*: Kỹ thuật RAG tự sửa lỗi (Self-Corrective RAG), Query Rewriting và Document Routing.
  * *URL*: [deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/)
* 🎓 **[Khóa học Video Miễn phí 2] Preprocessing Data for LLMs**:
  * *Nội dung*: Phương pháp parse, làm sạch và chia nhỏ văn bản (Chunking Strategies) từ PDF/Markdown.
  * *URL*: [deeplearning.ai/short-courses/preprocessing-data-for-llms/](https://www.deeplearning.ai/short-courses/preprocessing-data-for-llms/)
* 🐘 **[Docs Tra Cứu] `pgvector` Extension Documentation**:
  * *Nội dung*: Cú pháp SQL tạo bảng Vector, đánh chỉ mục HNSW/IVFFlat và thực hiện Hybrid Search trên PostgreSQL.
  * *URL*: [github.com/pgvector/pgvector](https://github.com/pgvector/pgvector)
* 📖 **[Docs Tra Cứu] LangChain RAG Conceptual & How-To Guides**:
  * *Nội dung*: Mẫu thiết kế Retriever nâng cao (Context Compression, Multi-query Retriever, Cross-encoder Reranking).
  * *URL*: [python.langchain.com/docs/concepts/rag/](https://python.langchain.com/docs/concepts/rag/)

---

## 🔴 Module 3: Stateful Agentic Workflows với LangGraph & MCP

* 🎓 **[Khóa học Video Miễn phí 1] AI Agents in LangGraph (by Harrison Chase)**:
  * *Nội dung*: Xây dựng Agentic Workflows có trạng thái (Stateful Agents), quản lý Memory và Human-in-the-loop.
  * *URL*: [deeplearning.ai/short-courses/ai-agents-in-langgraph/](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/)
* 🎓 **[Khóa học Video Miễn phí 2] LangGraph Academy**:
  * *Nội dung*: Chương trình đào tạo video chính thức của LangChain về kiến trúc đồ thị `StateGraph` từ cơ bản đến nâng cao.
  * *URL*: [academy.langchain.com](https://academy.langchain.com/)
* 🔌 **[Docs Tra Cứu] Model Context Protocol (MCP) Official Docs**:
  * *Nội dung*: Chuẩn giao thức của Anthropic giúp Agent kết nối an toàn với Tools, Databases và APIs ngoại vi.
  * *URL*: [modelcontextprotocol.io](https://modelcontextprotocol.io)
* 🐍 **[Docs Tra Cứu] FastMCP Python SDK GitHub**:
  * *Nội dung*: Thư viện Python giúp dựng MCP Server cực nhanh chỉ với cú pháp Decorator tương tự FastAPI.
  * *URL*: [github.com/jlowin/fastmcp](https://github.com/jlowin/fastmcp)
* 📘 **[Docs Tra Cứu] LangGraph Official Documentation**:
  * *Nội dung*: Các Mẫu kiến trúc Agent chuẩn (Supervisor pattern, State persistence, Time-travel debugging).
  * *URL*: [langchain-ai.github.io/langgraph/](https://langchain-ai.github.io/langgraph/)

---

## 🔵 Module 4: Real-time Web UI & Integration (Next.js + Vercel AI SDK)

* 🚀 **[Docs Tra Cứu] Vercel AI SDK Documentation**:
  * *Nội dung*: Thư viện React Hooks chuẩn (`useChat`, `streamText`) để kết nối Next.js với LLM Streaming backend.
  * *URL*: [sdk.vercel.ai/docs](https://sdk.vercel.ai/docs)
* 🔗 **[Docs Tra Cứu] Vercel AI SDK FastAPI Integration Guide**:
  * *Nội dung*: Hướng dẫn đấu nối giao diện Next.js với Python FastAPI Server qua SSE.
  * *URL*: [sdk.vercel.ai/docs/guides/frameworks/fastapi](https://sdk.vercel.ai/docs/guides/frameworks/fastapi)
* 🌐 **[Docs Tra Cứu] Next.js Official Documentation**:
  * *Nội dung*: Hướng dẫn sử dụng App Router, React Server Components và Server Actions.
  * *URL*: [nextjs.org/docs](https://nextjs.org/docs)

---

## 🟣 Module 5: Production LLMOps, Tracing, Evaluation & Deployment

* 🎓 **[Khóa học Video Miễn phí] Evaluating & Debugging Generative AI Models**:
  * *Nội dung*: Đo đạc độ chính xác của RAG, phát hiện Hallucination và kiểm thử tự động với Weights & Biases / Ragas.
  * *URL*: [deeplearning.ai/short-courses/evaluating-debugging-generative-ai/](https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/)
* 🔍 **[Docs Tra Cứu] LangSmith Documentation**:
  * *Nội dung*: Tracing toàn bộ luồng suy luận của LangChain/LangGraph, theo dõi chi phí Token và Latency.
  * *URL*: [docs.smith.langchain.com](https://docs.smith.langchain.com/)
* 🛡️ **[Docs Tra Cứu] Langfuse Open-Source LLMOps Docs**:
  * *Nội dung*: Giải pháp Tracing & Observability mã nguồn mở có thể tự host (Self-hosted) bằng Docker Compose.
  * *URL*: [langfuse.com/docs](https://langfuse.com/docs)
* 🐳 **[Docs Tra Cứu] Docker Compose Documentation**:
  * *Nội dung*: Đóng gói multi-container ứng dụng Fullstack (Next.js + FastAPI + Postgres + Langfuse).
  * *URL*: [docs.docker.com/compose/](https://docs.docker.com/compose/)
