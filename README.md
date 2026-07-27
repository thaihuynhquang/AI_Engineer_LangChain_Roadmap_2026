# AI Engineer Roadmap 2026: Agentic AI Master Curriculum

Dành cho lập trình viên muốn chuyển mình sang **AI Engineer** thông qua việc xây dựng sản phẩm thực tế (Production-ready AI Application) dựa trên **lộ trình Master Curriculum 8 Modules (`docs/content/online_learning_guide.md`)** và hệ sinh thái công nghệ Agentic AI cập nhật mới nhất 2026.

---

## 🎓 Combo 2 Khóa Học Trọng Tâm (Packt Publishing)

1. 📹 **Khóa 1 (Core Engine & Production)**: [Agentic AI Systems: Build & Deploy with LangChain/LangGraph](https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814)
2. 📹 **Khóa 2 (MCP Protocol & Multi-Framework Expansion)**: [Building Autonomous Agentic AI Systems for Beginners HandsOn](https://www.packtpub.com/en-us/product/building-autonomous-agentic-ai-systems-for-beginners-handson-9781807609818)

---

## 🎯 4 Dự Án Thực Tế Lớn (Projects)

- 🛠️ **Project 1: Smart Q&A Bot** (Module 1) — Xây dựng ứng dụng Hỏi-Đáp thông minh hỗ trợ đa mô hình và structured output.
- 🛠️ **Project 2: AI Research Assistant** (Module 5) — Xây dựng trợ lý nghiên cứu AI hoàn chỉnh với Document Indexing, Memory đa phiên, Multi-Query Retrieval.
- 🛠️ **Project 3: Multi-Agent Research System** (Module 7) — Xây dựng hệ thống nghiên cứu đa agent từ con số 0 với State Schema custom và Send API.
- 🛠️ **Project 4: Production-Ready Cloud API** (Module 8) — Đóng gói hệ thống LangGraph Agent + FastAPI + Security Layer + Dockerization + Triển khai Cloud Render.

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

## 📚 Chi Tiết Nội Dung 8 Master Modules

### 🟢 Module 1: LangChain & Agentic Foundations & Project 1: Smart Q&A Bot
- **Thời lượng**: 5 Ngày (30 Pomodoros / 25h)
- **Kiến thức**: Nền tảng Agentic AI, LCEL, Runnable Chains, Đa nhà cung cấp LLM (OpenAI, Anthropic), Prompt Templates & Output Parsers.
- **Dự án**: **Project 1 - Smart Q&A Bot**.

### 🟡 Module 2: Chain Patterns & Lightweight Frameworks
- **Thời lượng**: 3 Ngày (18 Pomodoros / 15h)
- **Kiến thức**: Parallel Chains, RunnablePassthrough, Branching logic, Hugging Face Smolagents (Weather & SQL Agent) và Low-code n8n workflows.

### 🔌 Module 3: Model Context Protocol (MCP) Deep Dive
- **Thời lượng**: 4 Ngày (24 Pomodoros / 20h)
- **Kiến thức**: Kiến trúc MCP Client/Server, tự viết FastMCP Server bằng Python, kết nối Agent gọi MCP Tools qua Stdio/SSE Transport & Docker MCP.

### 🟠 Module 4: Document Loading, Chunking & Embeddings
- **Thời lượng**: 4 Ngày (24 Pomodoros / 20h)
- **Kiến thức**: Document Loaders (PDF, Web, Text), Text Splitting (RecursiveCharacter, MarkdownHeader, CodeSplitters), Embeddings Caching & Vector Store ChromaDB.

### 🔴 Module 5: Advanced RAG & Memory Systems & Project 2: AI Research Assistant
- **Thời lượng**: 5 Ngày (30 Pomodoros / 25h)
- **Kiến thức**: Advanced RAG (Multi-Query, Contextual Compression, Hybrid Search), Agentic RAG với CrewAI, Memory Patterns (Session, Windowed, Summary Memory).
- **Dự án**: **Project 2 - AI Research Assistant**.

### 🔵 Module 6: LangGraph - A Full Deep Dive
- **Thời lượng**: 4 Ngày (24 Pomodoros / 20h)
- **Kiến thức**: StateGraph, State Reducers, Conditional Edges, Routing, Self-Correcting Code Writer Loop, Human-in-the-loop & Checkpointing.

### 🟣 Module 7: Multi-Agent Architectures & Project 3: Multi-Agent Research System
- **Thời lượng**: 5 Ngày (30 Pomodoros / 25h)
- **Kiến thức**: Multi-Agent với CrewAI, Supervisor Agent Pattern trên LangGraph, Agent Handoffs, Map-Reduce, Cloud Agents (AWS & Google Cloud).
- **Dự án**: **Project 3 - Multi-Agent Research System**.

### 🟤 Module 8: Production Deployment, Security & LLMOps & Project 4: Cloud Render API
- **Thời lượng**: 5 Ngày (30 Pomodoros / 25h)
- **Kiến thức**: LangSmith Tracing, Security Layer (PII Detection, Prompt Injection Defense, LLM Guard), LLM-as-Judge Evaluation, Resilience (Circuit Breaker, Caching), FastAPI & Render Cloud.
- **Dự án**: **Project 4 - Production LangGraph API on Render Cloud**.

---

## 📑 Bảng Đối Chiếu Nguồn Học & Công Nghệ Chuẩn 2026

| Thành phần | Khóa Học & Nguồn Tra Cứu (Tài Nguyên 🎓) | Chuẩn Thực Tế 2026 (Công Nghệ 🚀) |
| :--- | :--- | :--- |
| **Agent Orchestration** | Khóa 1 (Chap 6-7) & LangGraph Official Docs | **LangGraph StateGraph** + Checkpointer |
| **Tool Protocol** | Khóa 2 (Chap 5) & Model Context Protocol Spec | **Model Context Protocol (MCP / FastMCP)** |
| **Multi-Agent** | Khóa 2 (Chap 6) & CrewAI Official Docs | **CrewAI** + **Supervisor LangGraph** |
| **Lightweight Agent** | Khóa 2 (Chap 4) & Smolagents Docs | **Smolagents (Hugging Face)** & **n8n** |
| **Vector DB** | Khóa 1 (Chap 4) & ChromaDB Docs | **ChromaDB** & **PostgreSQL (`pgvector`)** |
| **LLM Inference** | Packt Courses & Official Provider Docs | **Claude 3.7, DeepSeek-R1, Gemini 2.0, GPT-4o** |
| **LLMOps & Security** | Khóa 1 (Chap 8) & LangSmith Docs | **LangSmith Tracing** & **LLM Guard** |
| **Cloud Deployment** | Khóa 1 (Chap 8) & Render Cloud Docs | **FastAPI + Docker + Render Cloud** |

---

## 💡 Quy Trình Học "Learn by Doing" & Pomodoro 50/5/20

1. **Quy tắc Pomodoro 50/5/20**: 50 phút Tập trung - 5 phút Nghỉ ngắn - 20 phút Nghỉ dài sau mỗi 2 Pomodoro (6 Pomodoros / ngày = 5 tiếng focus).
2. **Quy tắc 30 phút Nạp Kiến Thức**: Dành 30 phút xem video khóa học hoặc đọc conceptual docs, sau đó chuyển sang gõ code thực hành ngay.
3. **Xây dựng GitHub Portfolio**: Commit code sau mỗi Module/Project hoàn thành.
