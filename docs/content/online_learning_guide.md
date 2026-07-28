# 🚀 Hướng Dẫn Lộ Trình Tự Học Agentic AI Master Curriculum (2026)
## Khóa Packt LangChain/LangGraph + Các Khóa Học Bổ Sung Miễn Phí (100% Free)

Hướng dẫn này cung cấp khung lộ trình học tập **Master Curriculum 10 Module** được tích hợp hoàn chỉnh giữa:
1. 📹 **Khóa Packt (Core Engine & Production)**: [Agentic AI Systems: Build & Deploy with LangChain/LangGraph](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html) (Packt Publishing).
2. 🆓 **Các Khóa Học Miễn Phí Bổ Sung (Free Supplemental Courses)** từ **DeepLearning.AI**, **Vercel**, **freeCodeCamp**, **Hugging Face**, **Neon Postgres**, và **MCP Official Docs** để bù đắp các khoảng trống công nghệ (Web UI, `pgvector`, vLLM, LlamaParse, RAG Evals).

Lộ trình bao gồm **10 Module chuyên sâu**, kết hợp giữa **Lý thuyết bài giảng** $\rightarrow$ **Hands-on Demos & Bài tập** $\rightarrow$ **4 Dự án thực tế lớn (Projects)**.

---

## 🗺️ Bức Tranh Tổng Quan Lộ Trình (10 Master Modules)

```
[Module 1: LangChain Foundations] ──► [Module 2: Chain Patterns & LCEL] ──► [Module 3: Model Context Protocol (MCP)]
                                                                                                  │
[Module 6: Open-Source Models & vLLM] ◄── [Module 5: Advanced RAG & pgvector] ◄── [Module 4: Data Ingestion & LlamaParse]
         │
         ▼
[Module 7: LangGraph Deep Dive]   ──► [Module 8: Multi-Agent Systems (CrewAI)] ──► [Module 9: Full-Stack Web AI (Next.js)]
                                                                                                  │
                                                                                                  ▼
                                                                     [Module 10: Production & LLMOps]
```

---

## 📚 Hướng Dẫn Chi Tiết Theo 10 Module

### 🟢 Module 1: LangChain & Agentic Foundations
> **Mục tiêu**: Nắm vững kiến trúc LangChain v1.0, LCEL, Runnable Chains, quản lý Multi-LLM provider, Prompt Templates và Output Parsers.

* **1. Nội dung Kiến thức Cần nạp**:
  * Tổng quan hệ sinh thái LangChain v1.0 & Thiết lập môi trường phát triển (Python, API Keys OpenAI & Anthropic) (*Khóa Packt - Chapter 1-2*).
  * Kiến trúc LCEL (LangChain Expression Language) & Runnable Chains: Batch execution, Realtime streaming, Schema inspection, Pipe operator (`|`).
  * Cấu hình Đa nhà cung cấp LLM (Multi Providers), Prompt Templates, Structured Outputs & Output Parsers.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Overview](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html) (Chapter 1-2).
  * 📖 **LangChain Overview**: [https://python.langchain.com/docs/introduction/](https://python.langchain.com/docs/introduction/).
* **3. Nhiệm vụ Thực hành & Dự án**:
  - Bài tập tự giải: *Build Your First Chain* & *Create a Multi-model Setup*.
  - 🛠️ **Project 1: Smart Q&A Bot** — Xây dựng ứng dụng Hỏi-Đáp thông minh hỗ trợ đa mô hình và structured output.

---

### 🟡 Module 2: Chain Patterns & Advanced LCEL
> **Mục tiêu**: Làm chủ các mẫu thiết kế chuỗi xử lý phức tạp (Parallel Chains, Passthrough, Branching) và kỹ thuật Debugging chuỗi.

* **1. Nội dung Kiến thức Cần nạp**:
  * Basic Chains & Parallel Chains (Chạy song song nhiều nhánh LLM) (*Khóa Packt - Chapter 3*).
  * `RunnablePassthrough`, Chain Branching & Kỹ thuật Debugging chuỗi LangChain.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Chapter 3](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 📖 **LCEL Concepts**: [https://python.langchain.com/docs/concepts/#lcel](https://python.langchain.com/docs/concepts/#lcel).
* **3. Nhiệm vụ Thực hành**:
  - Viết chuỗi xử lý đa nhánh kết hợp `RunnablePassthrough` và `RunnableParallel`.

---

### 🔌 Module 3: Model Context Protocol (MCP) Deep Dive
> **Mục tiêu**: Làm chủ chuẩn giao thức kết nối công cụ mở Model Context Protocol (MCP Client/Server Architecture).

* **1. Nội dung Kiến thức Cần nạp**:
  * Khái niệm & Cơ chế hoạt động của Model Context Protocol (MCP Host, Client, Server).
  * Thực hành: **Tự viết một MCP Server** bằng Python với FastMCP SDK.
  * Kết nối Agent gọi MCP Tool qua Stdio và SSE Transports.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 🆓 **Khóa học / Documentation miễn phí**: [Model Context Protocol Official Specification & Tutorials](https://modelcontextprotocol.io/).
  * 🐍 **FastMCP Python SDK**: [https://github.com/jlowin/fastmcp](https://github.com/jlowin/fastmcp).
  * 🆓 **Khóa học bổ sung miễn phí**: Hugging Face — [The Context Course (Unit 2: MCP)](https://huggingface.co/learn/context-course/unit2/introduction) (Thực hành kết nối công cụ qua Model Context Protocol).
* **3. Nhiệm vụ Thực hành**:
  - Viết 1 FastMCP Server cung cấp Tool truy vấn dữ liệu hoặc hệ thống.
  - Kết nối Agent gọi MCP Tool qua giao thức MCP.

---

### 🟠 Module 4: Data Ingestion, Complex Document AI & Vector Stores
> **Mục tiêu**: Xử lý đa dạng định dạng tài liệu (bao gồm PDF/Tables phức tạp với LlamaParse), kỹ thuật Text Splitting và lưu trữ vector với ChromaDB.

* **1. Nội dung Kiến thức Cần nạp**:
  * Document Loaders: `TextLoader`, `WebLoader`, `LazyLoader`, PDF Loader (*Khóa Packt - Chapter 4*).
  * Parse tài liệu phức tạp: Sử dụng **LlamaParse** trích xuất bảng biểu, dạng scan/PDF nhiều cột sang Markdown.
  * Text Splitting Deep Dive: `RecursiveCharacterTextSplitter`, Chunk Overlap, `MarkdownHeaderSplitter`, `CodeSplitter`.
  * Embeddings & Vector Store: OpenAI Embedding, Free Embeddings, ChromaDB (Similarity Search with Scores, Metadata Filtering, Persistence).
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Chapter 4](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 🆓 **Khóa học bổ sung miễn phí**: DeepLearning.AI — [Building Agentic RAG with LlamaIndex](https://learn.deeplearning.ai/courses/building-agentic-rag-with-llamaindex) (Dạy LlamaParse & Complex Document Parsing).
* **3. Nhiệm vụ Thực hành**:
  - Bài tập tự giải: *Vector Stores Exercise & Solution*.
  - Viết pipeline Ingestion trích xuất bảng từ PDF bằng LlamaParse và lưu vào Vector Database.

---

### 🔴 Module 5: Advanced RAG, Production `pgvector` & Memory Systems
> **Mục tiêu**: Xây dựng hệ thống RAG nâng cao (Multi-Query, Compression, Hybrid, Parent Doc), tích hợp CSDL Vector Production `pgvector` và quản lý bộ nhớ.

* **1. Nội dung Kiến thức Cần nạp**:
  * RAG Pipeline Architecture: Basic RAG, Fallback, Structured Outputs (*Khóa Packt - Chapter 5*).
  * Advanced RAG Strategies: Multi-Query Retriever, Contextual Compression, Hybrid Search, Parent Document Retriever.
  * **Production Vector DB (`pgvector`)**: Cấu hình PostgreSQL với extension `pgvector`, HNSW/IVFFlat Indexing, kết hợp SQL & Vector search.
  * Memory Patterns: Conversation Memory, Multiple Sessions Memory, Message Trimming, Windowed Memory, Summary Memory, Persistent Memory.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Chapter 5](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 📹 **Khóa học bổ sung miễn phí**: BugBytes — [LangChain and PGVector - Retrieval Augmented Generation](https://youtu.be/GYwhDkwCdt8) & [Tài liệu hướng dẫn kèm Code](https://bugbytes.io/posts/retrieval-augmented-generation-with-langchain-and-pgvector/).
* **3. Nhiệm vụ Thực hành & Dự án**:
  - 🛠️ **Project 2: AI Research Assistant** — Xây dựng trợ lý nghiên cứu AI hoàn chỉnh với Document Indexing, Memory đa phiên, Multi-Query Retrieval và `pgvector` backend.

---

### ⚡ Module 6: Open-Source LLMs & High-Throughput Serving (vLLM & Ollama)
> **Mục tiêu**: Làm chủ các mô hình AI mã nguồn mở (Llama 3.3, DeepSeek-R1), tự phục vụ local với Ollama và triển khai high-throughput server với vLLM.

* **1. Nội dung Kiến thức Cần nạp**:
  * Chạy mô hình mã nguồn mở dưới Local/Offline với **Ollama**.
  * Kiến trúc **vLLM (PagedAttention, Continuous Batching)**: Phục vụ inference thông lượng gấp 6 lần cho môi trường production.
  * Tích hợp mô hình mã nguồn mở vào chuỗi LangChain/LangGraph.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 🆓 **Khóa học bổ sung miễn phí**: DeepLearning.AI & Red Hat — [Fast & Efficient LLM Inference with vLLM](https://www.deeplearning.ai/courses/fast-and-efficient-llm-inference-with-vllm) & [vLLM Docs](https://docs.vllm.ai/).
  * 🆓 **Khóa học bổ sung miễn phí**: Hugging Face — [AI Agents Course: smolagents](https://huggingface.co/learn/agents-course/unit2/smolagents/introduction) (Làm chủ framework smolagents) & [Bonus Unit 1: Fine-tuning for Function Calling](https://huggingface.co/learn/agents-course/bonus-unit1/introduction).
* **3. Nhiệm vụ Thực hành**:
  - Cài đặt Ollama chạy mô hình DeepSeek/Llama local.
  - Cấu hình vLLM Server và tạo LangChain LLM Client kết nối vLLM endpoint.

---

### 🔵 Module 7: LangGraph - A Full Deep Dive
> **Mục tiêu**: Chuyển đổi từ chuỗi tuyến tính sang đồ thị luồng điều khiển (StateGraph), quản lý trạng thái, vòng lặp tự sửa lỗi và can thiệp từ con người.

* **1. Nội dung Kiến thức Cần nạp**:
  * Trụ cột LangGraph: `StateGraph`, Reducers, Accumulating State, Message State (*Khóa Packt - Chapter 6*).
  * Multi-Node Pipelines & Routing: Edges, Conditional Edges, Literal Routing, Multipath Routing.
  * Vòng lặp & Tự sửa lỗi (Cycles & Loops): Self-Correcting Code Writer, Iterative Research Agent.
  * Human in the Loop & Persistence: Interrupt for Approval, Checkpointing Deep Dive, Checkpoint Internals.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Chapter 6](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 📖 **LangGraph Official Docs**: [https://langchain-ai.github.io/langgraph/](https://langchain-ai.github.io/langgraph/).
* **3. Nhiệm vụ Thực hành**:
  - Bài tập tự giải: *Build Your First Node*.
  - Xây dựng luồng Agent tự sửa mã nguồn (Self-Correcting Code Writer) với tính năng Human Interrupt.

---

### 🟣 Module 8: Multi-Agent Architectures (CrewAI + LangGraph Multi-Agent)
> **Mục tiêu**: Thiết kế hệ thống Đa Agent linh hoạt — so sánh giữa CrewAI (phân vai tác nhiệm nhanh) và LangGraph Multi-Agent (đồ thị phân cấp chi tiết).

* **1. Nội dung Kiến thức Cần nạp**:
  * Đa Agent với **CrewAI**: Agents, Tasks, Crew, Sequential & Hierarchical Processes.
  * Đa Agent với **LangGraph**: Supervisor Agent, Agent Handoffs, Map-Reduce Strategy, Message Passing, Shared Field State, Blackboard Refinement (*Khóa Packt - Chapter 7*).
  * Kiến trúc phân cấp (Hierarchical Architecture) & Tracing.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Chapter 7](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 🆓 **Khóa học bổ sung miễn phí**: DeepLearning.AI — [Multi AI Agent Systems with crewAI](https://learn.deeplearning.ai/courses/multi-ai-agent-systems-with-crewai) (giảng dạy trực tiếp bởi João Moura - Sáng lập CrewAI).
  * 🆓 **Khóa học bổ sung miễn phí**: Hugging Face — [The Context Course (Unit 4: Sub-agents)](https://huggingface.co/learn/context-course/unit4/introduction) (Thiết kế và điều phối sub-agents chuyên biệt).
* **3. Nhiệm vụ Thực hành & Dự án**:
  - 🛠️ **Project 3: Multi-Agent Research System** — Xây dựng hệ thống nghiên cứu đa agent từ con số 0 với State Schema custom và Send API.

---

### 🌐 Module 9: Full-Stack Web AI Interface (Next.js & Vercel AI SDK)
> **Mục tiêu**: Xây dựng giao diện Web AI hiện đại, hỗ trợ HTTP Streaming Response (stream từng token), Chat UI, Generative UI và Tool Calling UI.

* **1. Nội dung Kiến thức Cần nạp**:
  * Khởi tạo dự án Web AI với Next.js 15 (App Router, TypeScript, TailwindCSS, Shadcn/ui).
  * Tích hợp **Vercel AI SDK**: Hooks (`useChat`, `useCompletion`), Streaming text & Data streams.
  * Kết nối Frontend Next.js với Backend Agent FastAPI / LangGraph.
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa freeCodeCamp**: [Build a Support Agent with Vercel AI SDK](https://www.youtube.com/watch?v=WKIjkxxNH0c) (Hướng dẫn tự dựng AI Support Agent với RAG, Tool Calling và Web Search).
  * 📹 **Khóa 2 (Developers Digest)**: [Agents 101: Build and Deploy Anything with AI Agents](https://www.developersdigest.tech/tutorials/eWs50bhFvMY) (Hướng dẫn dựng Full-stack Next.js AI App + Vercel AI Gateway + CI/CD Deployment).
  * 📖 **Docs Tra cứu**: [Vercel AI SDK Docs](https://sdk.vercel.ai/docs).
* **3. Nhiệm vụ Thực hành**:
  - Dựng giao diện Chatbot UI chuyên nghiệp với luồng Streaming Response thời gian thực kết nối với Agent Backend.

---

### 🟤 Module 10: Production Deployment, LLMOps, Security & Evaluation
> **Mục tiêu**: Bảo mật hệ thống, đánh giá chất lượng RAG/Agent (Ragas/Arize), giám sát với LangSmith, tối ưu chi phí và triển khai API Production (FastAPI + Docker + Render).

* **1. Nội dung Kiến thức Cần nạp**:
  * Observability: LangSmith Setup & Testing Traces (*Khóa Packt - Chapter 8*).
  * Security & Defense in Depth: PII Detection, Prompt Injection Attack Defense, LLM Guard (Smart Bouncer), Output Validator.
  * **RAG & Agent Evaluation**: Sử dụng **Arize AI / Ragas / TruLens** đánh giá Faithfulness, Answer Relevance, Context Recall và LLM-as-a-Judge.
  * Resilience & Error Handling: Circuit Breaker, Fallback Chain, Graph-Based Retry, Model Router, Semantic Caching.
  * Triển khai API Production: Đóng gói FastAPI + LangGraph Agent với Docker và deploy lên Cloud (Render).
* **2. Tài nguyên Tra cứu & Bài giảng**:
  * 📹 **Khóa học chính**: [Packt Chapter 8](file:///Users/thaihuynhquang/Desktop/learning/Agentic-AI-Systems-Build-Deploy-with-LangChain-LangGraph/video_zip/package/overview.html).
  * 🆓 **Khóa học bổ sung miễn phí**: DeepLearning.AI — [Evaluating AI Agents](https://learn.deeplearning.ai/courses/evaluating-ai-agents) (với Arize AI).
  * 🆓 **Khóa học bổ sung miễn phí**: Hugging Face — [The Context Course (Unit 5: Hooks)](https://huggingface.co/learn/context-course/unit5/introduction) (Tự động hóa & giám sát vòng đời Agent) & [AI Agents Course (Bonus Unit 2: Agent Observability)](https://huggingface.co/learn/agents-course/bonus-unit2/introduction).
* **3. Nhiệm vụ Thực hành & Dự án**:
  - 🛠️ **Project 4: Production-Ready Full-Stack AI System (Final Project)** — Đóng gói LangGraph Agent + FastAPI + Security Layer + Next.js UI + Dockerization + Triển khai thành công lên Cloud **Render**.

---

## ⚡ Quy Trình Học & Gõ Code Hàng Ngày (Daily Execution Loop)

Mỗi ngày dành ra **1.5 - 2 tiếng** thực hành theo chu trình 3 bước:

```
┌────────────────────────────────┐    ┌────────────────────────────────┐    ┌────────────────────────────────┐
│  BƯỚC 1: NẠP LÝ THUYẾT (30m)   │ ──►│ BƯỚC 2: XEM CODE PATTERN (15m) │ ──►│  BƯỚC 3: GÕ CODE & TEST (75m)  │
│  Xem video bài giảng trong     │    │  Xem hướng dẫn code hands-on   │    │  Thực hành gõ code, giải bài   │
│  khóa học local & khóa free.   │    │  và mẫu thiết kế chuẩn.        │    │  tập & hoàn thiện Project.     │
└────────────────────────────────┘    └────────────────────────────────┘    └────────────────────────────────┘
```
