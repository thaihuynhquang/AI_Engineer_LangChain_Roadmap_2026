# 🚀 Hướng Dẫn Lộ Trình Tự Học Agentic AI Master Curriculum (2026)
## Combo 2 Khóa Học: LangChain/LangGraph + MCP & Autonomous Agents

Hướng dẫn này cung cấp khung lộ trình học tập Master Curriculum được tích hợp 100% từ **2 Khóa Học Trọng Tâm**:
1. 📹 **Khóa 1 (Core Engine & Production)**: [Agentic AI Systems: Build & Deploy with LangChain/LangGraph](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html)
2. 📹 **Khóa 2 (MCP Protocol & Multi-Framework Expansion)**: [Building Autonomous Agentic AI Systems for Beginners HandsOn](file:///Users/thaihuynhquang/Desktop/learning/Building_Autonomous_Agentic_AI_Systems_for_Beginners_HandsOn/video_zip/package/overview.html)

Lộ trình bao gồm **8 Module chuyên sâu**, kết hợp giữa **Lý thuyết bài giảng** $\rightarrow$ **Hands-on Demos & Bài tập** $\rightarrow$ **4 Dự án thực tế lớn (Projects)**.

---

## 🗺️ Bức Tranh Tổng Quan Lộ Trình (8 Master Modules)

```
[Module 1: LangChain Foundations] ──► [Module 2: Chain Patterns & Smolagents] ──► [Module 3: Model Context Protocol (MCP)]
                                                                                                 │
[Module 6: LangGraph Deep Dive]   ◄── [Module 5: Advanced RAG & Memory]       ◄── [Module 4: Document Loaders & ChromaDB]
         │
         ▼
[Module 7: Multi-Agent Systems (CrewAI + LangGraph)] ──► [Module 8: Production Deployment, Security & Render Cloud]
```

---

## 📚 Hướng Dẫn Chi Tiết Theo 8 Module

### 🟢 Module 1: LangChain & Agentic Foundations
> **Mục tiêu**: Nắm vững các khái niệm cơ bản về Agentic AI, hệ sinh thái LangChain v1.0, kiến trúc LCEL, Runnable Chains, quản lý Multi-LLM provider, Prompt Templates và Output Parsers.

* **1. Nội dung Kiến thức Cần nạp**:
  * Khái niệm Agentic AI khác biệt gì so với AI truyền thống & Các thành phần cốt lõi (*Khóa 2 - Chapter 2*).
  * Tổng quan hệ sinh thái LangChain v1.0 & Thiết lập môi trường phát triển (Python, API Keys OpenAI & Anthropic) (*Khóa 1 - Chapter 2*).
  * Kiến trúc LCEL (LangChain Expression Language) & Runnable Chains: Batch execution, Realtime streaming, Schema inspection, Pipe operator (`|`).
  * Cấu hình Đa nhà cung cấp LLM (Multi Providers), Prompt Templates, Structured Outputs & Output Parsers.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học**: [Khóa 1 Overview](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html) (Chapter 1-2) & [Khóa 2 Overview](file:///Users/thaihuynhquang/Desktop/learning/Building_Autonomous_Agentic_AI_Systems_for_Beginners_HandsOn/video_zip/package/overview.html) (Chapter 2-3).
  * 📖 **LangChain Overview**: [https://python.langchain.com/docs/introduction/](https://python.langchain.com/docs/introduction/).
* **3. Nhiệm vụ Thực hành & Dự án**:
  - Bài tập tự giải: *Build Your First Chain* & *Create a Multi-model Setup*.
  - 🛠️ **Project 1: Smart Q&A Bot** — Xây dựng ứng dụng Hỏi-Đáp thông minh hỗ trợ đa mô hình và structured output.

---

### 🟡 Module 2: Chain Patterns & Lightweight Agent Frameworks
> **Mục tiêu**: Làm chủ các mẫu thiết kế chuỗi xử lý (Parallel Chains, Passthrough, Branching) và làm quen với framework siêu nhẹ Smolagents (Hugging Face) & n8n.

* **1. Nội dung Kiến thức Cần nạp**:
  * Basic Chains & Parallel Chains (Chạy song song nhiều nhánh LLM) (*Khóa 1 - Chapter 3*).
  * `RunnablePassthrough`, Chain Branching & Debugging chuỗi LangChain.
  * Giới thiệu **Smolagents** (Hugging Face) & Demo Weather Agent, SQL Agent bằng Smolagents (*Khóa 2 - Chapter 4*).
  * Tạo Agent dạng Low-code/No-code với **n8n** (*Khóa 2 - Chapter 4*).
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học**: [Khóa 1 Chapter 3](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html) & [Khóa 2 Chapter 4](file:///Users/thaihuynhquang/Desktop/learning/Building_Autonomous_Agentic_AI_Systems_for_Beginners_HandsOn/video_zip/package/overview.html).
  * 📖 **LCEL Concepts**: [https://python.langchain.com/docs/concepts/#lcel](https://python.langchain.com/docs/concepts/#lcel).
* **3. Nhiệm vụ Thực hành**:
  - Viết chuỗi xử lý đa nhánh kết hợp `RunnablePassthrough` và `RunnableParallel`.
  - Thực hành tạo 1 Weather Agent bằng Smolagents.

---

### 🔌 Module 3: Model Context Protocol (MCP) Deep Dive
> **Mục tiêu**: Bù đắp 100% chuẩn giao thức kết nối công cụ mới nhất 2026 — làm chủ Model Context Protocol (MCP Client/Server Architecture).

* **1. Nội dung Kiến thức Cần nạp**:
  * Khái niệm & Cơ chế hoạt động của Model Context Protocol (MCP) (*Khóa 2 - Chapter 5*).
  * Thực hành: **Tự viết một MCP Server** bằng Python (*FastMCP*).
  * Thực hành: Xây dựng AI Agent chạy trên nền MCP Server.
  * Triển khai: **Docker MCP với Agentic AI**.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học**: [Khóa 2 Chapter 5 - Getting Started with MCP](file:///Users/thaihuynhquang/Desktop/learning/Building_Autonomous_Agentic_AI_Systems_for_Beginners_HandsOn/video_zip/package/overview.html).
  * 🔌 **Model Context Protocol Docs**: [https://modelcontextprotocol.io/](https://modelcontextprotocol.io/).
* **3. Nhiệm vụ Thực hành**:
  - Viết 1 FastMCP Server cung cấp Tool truy vấn dữ liệu hoặc hệ thống.
  - Kết nối Agent gọi MCP Tool qua giao thức MCP (Stdio/SSE Transport).

---

### 🟠 Module 4: Document Loading, Chunking & Embeddings (Vector Stores)
> **Mục tiêu**: Xử lý đa dạng định dạng tài liệu, kỹ thuật cắt đoạn văn bản (Text Splitting) và lưu trữ vector với ChromaDB.

* **1. Nội dung Kiến thức Cần nạp**:
  * Document Loaders: `TextLoader`, `WebLoader`, `LazyLoader`, PDF Loader (*Khóa 1 - Chapter 4*).
  * Text Splitting Deep Dive: `RecursiveCharacterTextSplitter`, Chunk Overlap, `MarkdownHeaderSplitter`, `CodeSplitter`.
  * Embeddings: OpenAI Embedding, Free Embedding models, Embedding Caching.
  * Vector Stores với **ChromaDB**: Setup, Similarity Search with Scores, Metadata Filtering, Persistence, VectorStore as Retriever.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học**: [Khóa 1 Chapter 4](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 📖 **ChromaDB Docs**: [https://docs.trychroma.com/](https://docs.trychroma.com/).
* **3. Nhiệm vụ Thực hành**:
  - Bài tập tự giải: *Vector Stores Exercise & Solution*.
  - Viết pipeline Ingestion trích xuất tài liệu từ Web/PDF và lưu vào ChromaDB.

---

### 🔴 Module 5: Advanced RAG and Memory Systems
> **Mục tiêu**: Xây dựng hệ thống RAG nâng cao (Multi-Query, Compression, Hybrid, Parent Doc) và tích hợp bộ nhớ hội thoại đa phiên.

* **1. Nội dung Kiến thức Cần nạp**:
  * RAG Pipeline Architecture: Basic RAG, RAG with Resources, RAG with Fallback, RAG with Structured Outputs (*Khóa 1 - Chapter 5* & *Khóa 2 - Chapter 7*).
  * Advanced RAG Strategies: Multi-Query Retriever, Contextual Compression, Hybrid Search, Parent Document Retriever.
  * Agentic RAG với CrewAI (*Khóa 2 - Chapter 7*).
  * Memory Patterns: Conversation Memory, Multiple Sessions Memory, Message Trimming, Windowed Memory, Summary Memory, Persistent Memory.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học**: [Khóa 1 Chapter 5](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html) & [Khóa 2 Chapter 7](file:///Users/thaihuynhquang/Desktop/learning/Building_Autonomous_Agentic_AI_Systems_for_Beginners_HandsOn/video_zip/package/overview.html).
  * 📖 **LangChain RAG Tutorial**: [https://python.langchain.com/docs/tutorials/rag/](https://python.langchain.com/docs/tutorials/rag/).
* **3. Nhiệm vụ Thực hành & Dự án**:
  - 🛠️ **Project 2: AI Research Assistant** — Xây dựng trợ lý nghiên cứu AI hoàn chỉnh với Document Indexing, Memory đa phiên, Multi-Query Retrieval và Structured Output.

---

### 🔵 Module 6: LangGraph - A Full Deep Dive
> **Mục tiêu**: Chuyển đổi từ chuỗi tuyến tính sang đồ thị luồng điều khiển (StateGraph), quản lý trạng thái, vòng lặp tự sửa lỗi và can thiệp từ con người.

* **1. Nội dung Kiến thức Cần nạp**:
  * Trụ cột LangGraph: `StateGraph`, Reducers, Accumulating State, Message State (*Khóa 1 - Chapter 6*).
  * Multi-Node Pipelines & Routing: Edges, Conditional Edges, Literal Routing, Multipath Routing.
  * Vòng lặp & Tự sửa lỗi (Cycles & Loops): Self-Correcting Code Writer, Iterative Research Agent.
  * Human in the Loop & Persistence: Interrupt for Approval, Checkpointing Deep Dive, Checkpoint Internals.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học**: [Khóa 1 Chapter 6](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 📖 **LangGraph Official Docs**: [https://langchain-ai.github.io/langgraph/](https://langchain-ai.github.io/langgraph/).
* **3. Nhiệm vụ Thực hành**:
  - Bài tập tự giải: *Build Your First Node*.
  - Xây dựng luồng Agent tự sửa mã nguồn (Self-Correcting Code Writer) với tính năng Human Interrupt.

---

### 🟣 Module 7: Multi-Agent Architectures (CrewAI + LangGraph + Cloud Agents)
> **Mục tiêu**: Thiết kế hệ thống Đa Agent linh hoạt — so sánh giữa CrewAI (phân vai nhanh) và LangGraph (đồ thị điều khiển chi tiết), kết hợp tự động hóa đám mây (AWS/GCP).

* **1. Nội dung Kiến thức Cần nạp**:
  * Multi-Agent với **CrewAI**: Cài đặt, xây dựng Simple & Advanced Multi-Agent System (*Khóa 2 - Chapter 6*).
  * Đa Agent với LangGraph: Supervisor Agent, Agent Handoffs, Map-Reduce Strategy, Message Passing, Shared Field State, Blackboard Refinement (*Khóa 1 - Chapter 7*).
  * Kiến trúc phân cấp (Hierarchical Architecture) & Tracing.
  * Cloud & Cross-Cloud Agents: AWS Monitoring Multi-Agent & Cross-Cloud Agent với AWS + Google Cloud (*Khóa 2 - Chapter 6*).
  * Agentic Design Patterns: Single-agent & Multi-agent patterns (*Khóa 2 - Chapter 9*).
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học**: [Khóa 1 Chapter 7](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html) & [Khóa 2 Chapter 6 & 9](file:///Users/thaihuynhquang/Desktop/learning/Building_Autonomous_Agentic_AI_Systems_for_Beginners_HandsOn/video_zip/package/overview.html).
  * 📖 **LangGraph Multi-Agent Concepts**: [https://langchain-ai.github.io/langgraph/concepts/multi_agent/](https://langchain-ai.github.io/langgraph/concepts/multi_agent/).
* **3. Nhiệm vụ Thực hành & Dự án**:
  - 🛠️ **Project 3: Multi-Agent Research System** — Xây dựng hệ thống nghiên cứu đa agent từ con số 0 với State Schema custom và Send API.

---

### 🟤 Module 8: Production Deployment, Security & LLMOps
> **Mục tiêu**: Bảo mật hệ thống, giám sát với LangSmith, kiểm thử tự động, tối ưu chi phí và triển khai API Production lên Cloud (Render).

* **1. Nội dung Kiến thức Cần nạp**:
  * Observability: LangSmith Setup & Testing Traces (*Khóa 1 - Chapter 8*).
  * Security & Defense in Depth: PII Detection, Prompt Injection Attack Defense, LLM Guard (Smart Bouncer), Output Validator.
  * Reflection, Self-Improvement, Guardrails & Safety (*Khóa 2 - Chapter 8*).
  * LLM Testing & Evaluation: Integration Testing, LLM-as-Judge Evaluation, Regression Testing, LangSmith Datasets.
  * Resilience & Error Handling: Circuit Breaker, Fallback Chain, Graph-Based Retry, Model Router, Semantic Caching.
* **2. Tài nguyên Tra cứu Chuẩn**:
  * 📹 **Khóa học**: [Khóa 1 Chapter 8](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html) & [Khóa 2 Chapter 8](file:///Users/thaihuynhquang/Desktop/learning/Building_Autonomous_Agentic_AI_Systems_for_Beginners_HandsOn/video_zip/package/overview.html).
  * 📖 **LangSmith Docs**: [https://docs.smith.langchain.com/](https://docs.smith.langchain.com/).
  * 📖 **FastAPI Tutorial**: [https://fastapi.tiangolo.com/tutorial/](https://fastapi.tiangolo.com/tutorial/).
  * 📖 **Render Deployment Docs**: [https://render.com/docs/](https://render.com/docs/).
* **3. Nhiệm vụ Thực hành & Dự án**:
  - 🛠️ **Project 4: Production-Ready API (Final Project)** — Đóng gói hệ thống LangGraph Agent + FastAPI + Security Layer + Production Cache & Monitoring + Dockerization + Triển khai thành công lên Cloud **Render**.

---

## ⚡ Quy Trình Học & Gõ Code Hàng Ngày (Daily Execution Loop)

Mỗi ngày dành ra **1.5 - 2 tiếng** thực hành theo chu trình 3 bước:

```
┌────────────────────────────────┐    ┌────────────────────────────────┐    ┌────────────────────────────────┐
│  BƯỚC 1: NẠP LÝ THUYẾT (30m)   │ ──►│ BƯỚC 2: XEM CODE PATTERN (15m) │ ──►│  BƯỚC 3: GÕ CODE & TEST (75m)  │
│  Xem video bài giảng trong     │    │  Xem hướng dẫn code hands-on   │    │  Thực hành gõ code, giải bài   │
│  gói 2 khóa học local.         │    │  và mẫu thiết kế chuẩn.        │    │  tập & hoàn thiện Project.     │
└────────────────────────────────┘    └────────────────────────────────┘    └────────────────────────────────┘
```
