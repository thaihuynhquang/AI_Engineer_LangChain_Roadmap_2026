# 🚀 Hướng Dẫn Lộ Trình Tự Học Agentic AI (2026)
## Agentic AI Systems: Build & Deploy with LangChain/LangGraph

Hướng dẫn này cung cấp khung lộ trình học tập được chuẩn hóa 100% theo khóa học **Agentic AI Systems: Build & Deploy with LangChain/LangGraph** (Packt Publishing). Lộ trình bao gồm **7 Module chuyên sâu** đi từ nền tảng đến sản xuất thực tế, kết hợp giữa **Lý thuyết bài giảng** $\rightarrow$ **Hands-on Demos & Bài tập** $\rightarrow$ **4 Dự án thực tế lớn (Projects)**.

---

## 🗺️ Bức Tranh Tổng Quan Lộ Trình (7 Modules)

```
[Module 1: LangChain Foundations] ──► [Module 2: Chain Patterns] ──► [Module 3: Loaders, Splitters & ChromaDB]
                                                                                      │
[Module 7: Production Deployment] ◄── [Module 6: Multi-Agent Systems] ◄── [Module 5: LangGraph Deep Dive] ◄── [Module 4: Advanced RAG & Memory]
```

---

## 📚 Hướng Dẫn Chi Tiết Theo 7 Module

### 🟢 Module 1: LangChain Foundations - A Deep Dive
> **Mục tiêu**: Nắm vững hệ sinh thái LangChain v1.0, kiến trúc LCEL, Runnable Chains, quản lý Multi-LLM provider, Prompt Templates và Output Parsers.

* **1. Nội dung Kiến thức Cần nạp**:
  * Tổng quan hệ sinh thái LangChain & Thiết lập môi trường phát triển (Python, API Keys OpenAI & Anthropic).
  * Kiến trúc LangChain V 1.0, LCEL (LangChain Expression Language) & Runnable Chains.
  * Thao tác: Batch execution, Realtime streaming output, Schema inspection, Pipe operator (`|`).
  * Cấu hình Đa nhà cung cấp LLM (Multi Providers), Prompt Templates, Structured Outputs & Output Parsers.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học chính**: [Overview & Chapter 1-2](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 📖 **LangChain Core Overview**: [https://python.langchain.com/docs/introduction/](https://python.langchain.com/docs/introduction/).
  * 📖 **LangChain Core Concepts**: [https://python.langchain.com/docs/concepts/](https://python.langchain.com/docs/concepts/).
* **3. Nhiệm vụ Thực hành & Dự án (Deliverables & Project)**:
  - Bài tập tự giải: *Build Your First Chain with LangChain* & *Create a Multi-model Setup*.
  - 🛠️ **Project 1: Smart Q&A Bot** — Xây dựng ứng dụng Hỏi-Đáp thông minh hỗ trợ đa mô hình và structured output.

---

### 🟡 Module 2: Chain Patterns
> **Mục tiêu**: Làm chủ các mẫu thiết kế chuỗi xử lý (Chain Patterns), chạy song song, truyền dữ liệu linh hoạt và kỹ thuật Debugging.

* **1. Nội dung Kiến thức Cần nạp**:
  * Basic Chains & Parallel Chains (Chạy song song nhiều nhánh LLM).
  * `RunnablePassthrough`: Truyền dữ liệu nguyên bản qua chuỗi xử lý.
  * Chain Branching: Phân nhánh điều kiện dựa trên dữ liệu đầu vào.
  * Debugging: Kỹ thuật kiểm thử và phát hiện lỗi trong chuỗi LangChain.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học chính**: [Chapter 3 - Chain Patterns](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 📖 **LCEL Concepts**: [https://python.langchain.com/docs/concepts/#lcel](https://python.langchain.com/docs/concepts/#lcel).
  * 📖 **LangChain How-To Guides**: [https://python.langchain.com/docs/how_to/](https://python.langchain.com/docs/how_to/).
* **3. Nhiệm vụ Thực hành (Deliverables)**:
  - Viết chuỗi xử lý đa nhánh kết hợp `RunnablePassthrough` và `RunnableParallel`.
  - Thiết lập cơ chế Debug log cho các chuỗi phức tạp.

---

### 🟠 Module 3: Document Loading, Chunking & Embeddings (Loaders, Splitters, Vector Stores)
> **Mục tiêu**: Xử lý đa dạng định dạng tài liệu, kỹ thuật cắt đoạn văn bản (Text Splitting) và lưu trữ vector với ChromaDB.

* **1. Nội dung Kiến thức Cần nạp**:
  * Document Loaders: `TextLoader`, `WebLoader`, `LazyLoader`, PDF Loader.
  * Text Splitting Deep Dive: `RecursiveCharacterTextSplitter`, Chunk Overlap, `MarkdownHeaderSplitter`, `CodeSplitter`.
  * Embeddings: OpenAI Embedding, Free Embedding models, Embedding Caching.
  * Vector Stores với **ChromaDB**: Setup, Similarity Search with Scores, Metadata Filtering, Persistence, VectorStore as Retriever.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học chính**: [Chapter 4 - Document Loading, Chunking & Embeddings](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 📖 **ChromaDB Official Docs**: [https://docs.trychroma.com/](https://docs.trychroma.com/).
  * 📖 **Document Loaders & Text Splitters How-To**: [https://python.langchain.com/docs/how_to/#document-loaders](https://python.langchain.com/docs/how_to/#document-loaders).
* **3. Nhiệm vụ Thực hành (Deliverables)**:
  - Bài tập tự giải: *Vector Stores Exercise & Solution*.
  - Xây dựng pipeline Ingestion trích xuất tài liệu từ Web/PDF, cắt nhỏ tối ưu và lưu vào ChromaDB với bộ lọc Metadata.

---

### 🔴 Module 4: RAG and Memory - A Comprehensive Dive
> **Mục tiêu**: Xây dựng hệ thống RAG nâng cao và tích hợp bộ nhớ hội thoại đa phiên (Conversation Memory).

* **1. Nội dung Kiến thức Cần nạp**:
  * RAG Pipeline Architecture: Basic RAG, RAG with Resources, RAG with Fallback, RAG with Structured Outputs.
  * Advanced RAG Strategies: Multi-Query Retriever, Contextual Compression, Hybrid Search, Parent Document Retriever, kết hợp Multi-Query & Compression.
  * Memory Patterns: Conversation Memory Basics, Multiple Sessions Memory, Message Trimming, Windowed Memory, Summary Memory, Persistent Memory.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học chính**: [Chapter 5 - RAG and Memory](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 📖 **LangChain RAG Tutorial**: [https://python.langchain.com/docs/tutorials/rag/](https://python.langchain.com/docs/tutorials/rag/).
  * 📖 **Retrieval Concepts**: [https://python.langchain.com/docs/concepts/#retrieval](https://python.langchain.com/docs/concepts/#retrieval).
  * 📖 **Memory Concepts**: [https://python.langchain.com/docs/concepts/#memory](https://python.langchain.com/docs/concepts/#memory).
* **3. Nhiệm vụ Thực hành & Dự án (Deliverables & Project)**:
  - Bài tập tự giải: *RAG Pipeline Exercise* & *Persistent Memory Exercise*.
  - 🛠️ **Project 2: AI Research Assistant** — Xây dựng trợ lý nghiên cứu AI hoàn chỉnh với Document Indexing, Memory đa phiên, Multi-Query Retrieval và Structured Output.

---

### 🔵 Module 5: LangGraph - A Full Deep Dive
> **Mục tiêu**: Chuyển đổi từ chuỗi tuyến tính sang đồ thị luồng điều khiển (StateGraph), quản lý trạng thái, vòng lặp tự sửa lỗi và can thiệp từ con người.

* **1. Nội dung Kiến thức Cần nạp**:
  * Trụ cột LangGraph: `StateGraph`, Reducers, Accumulating State, Message State (Chat pattern).
  * Multi-Node Pipelines & Routing: Edges, Conditional Edges, Literal Routing, Multipath Routing.
  * Vòng lặp & Tự sửa lỗi (Cycles & Loops): Self-Correcting Code Writer, Iterative Research Agent.
  * Human in the Loop & Persistence: Interrupt for Approval, Checkpointing Deep Dive, Checkpoint Internals.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học chính**: [Chapter 6 - LangGraph Full Deep Dive](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 📖 **LangGraph Official Docs**: [https://langchain-ai.github.io/langgraph/](https://langchain-ai.github.io/langgraph/).
  * 📖 **LangGraph How-To Guides**: [https://langchain-ai.github.io/langgraph/how-tos/](https://langchain-ai.github.io/langgraph/how-tos/).
* **3. Nhiệm vụ Thực hành (Deliverables)**:
  - Bài tập tự giải: *Build Your First Node*.
  - Xây dựng luồng Agent tự sửa mã nguồn (Self-Correcting Code Writer) với tính năng phê duyệt từ con người (Human Interrupt).

---

### 🟣 Module 6: Multi-Agent Systems with LangGraph and LangChain
> **Mục tiêu**: Thiết kế hệ thống Đa Agent phối hợp phân cấp, làm chủ các giao thức truyền tin và mô hình ReAct.

* **1. Nội dung Kiến thức Cần nạp**:
  * ReAct Pattern & Tool Calling Agent (Custom tools với Error Handling).
  * Điều phối Agent: Supervisor Agent, Agent Handoffs, Map-Reduce Strategy.
  * Giao tiếp giữa các Agent: Reducers, Message Passing Pattern, Shared Field State, Blackboard Iterative Refinement.
  * Hierarchical Architecture: Single Department Isolation, Hierarchical Routing, Tracing.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học chính**: [Chapter 7 - Multi-Agent Systems](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 📖 **LangGraph Multi-Agent Concepts**: [https://langchain-ai.github.io/langgraph/concepts/multi_agent/](https://langchain-ai.github.io/langgraph/concepts/multi_agent/).
* **3. Nhiệm vụ Thực hành & Dự án (Deliverables & Project)**:
  - 🛠️ **Project 3: Multi-Agent Research System** — Xây dựng hệ thống nghiên cứu đa agent từ con số 0 với State Schema custom và Send API.

---

### 🟤 Module 7: Production Deployment - Deploying AI Agents
> **Mục tiêu**: Bảo mật hệ thống, giám sát với LangSmith, kiểm thử tự động, tối ưu chi phí và triển khai API Production lên Cloud (Render).

* **1. Nội dung Kiến thức Cần nạp**:
  * Observability: LangSmith Setup & Testing Traces.
  * Security & Defense in Depth: PII Detection, Prompt Injection Attack Defense, LLM Guard (Smart Bouncer), Output Validator.
  * LLM Testing & Evaluation: Integration Testing, LLM-as-Judge Evaluation, Regression Testing, LangSmith Datasets, LLM Testing Pyramid.
  * Resilience & Error Handling: Retry Decorator, Circuit Breaker, Fallback Chain, Graph-Based Retry.
  * Cost Optimization: Model Router, Semantic Caching, Token Budgeting.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học chính**: [Chapter 8 - Production Deployment](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 📖 **LangSmith Official Docs**: [https://docs.smith.langchain.com/](https://docs.smith.langchain.com/).
  * 📖 **FastAPI Official Tutorial**: [https://fastapi.tiangolo.com/tutorial/](https://fastapi.tiangolo.com/tutorial/).
  * 📖 **Render Deployment Docs**: [https://render.com/docs/](https://render.com/docs/).
* **3. Nhiệm vụ Thực hành & Dự án (Deliverables & Project)**:
  - 🛠️ **Project 4: Production-Ready API (Final Project)** — Đóng gói hệ thống LangGraph Agent + FastAPI + Security Layer + Production Cache & Monitoring + Dockerization + Triển khai thành công lên Cloud **Render**.

---

## ⚡ Quy Trình Học & Gõ Code Hàng Ngày (Daily Execution Loop)

Mỗi ngày dành ra **1.5 - 2 tiếng** thực hành theo chu trình 3 bước:

```
┌────────────────────────────────┐    ┌────────────────────────────────┐    ┌────────────────────────────────┐
│  BƯỚC 1: NẠP LÝ THUYẾT (30m)   │ ──►│ BƯỚC 2: XEM CODE PATTERN (15m) │ ──►│  BƯỚC 3: GÕ CODE & TEST (75m)  │
│  Xem video bài giảng trong     │    │  Xem hướng dẫn code hands-on   │    │  Thực hành gõ code, giải bài   │
│  gói khóa học local.           │    │  và mẫu thiết kế chuẩn.        │    │  tập & hoàn thiện Project.     │
└────────────────────────────────┘    └────────────────────────────────┘    └────────────────────────────────┘
```
