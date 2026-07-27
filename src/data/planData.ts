import { SprintModule, DailyScheduleDay, TechStackLayer } from '../types/appState';

export interface ProjectMeta {
  title: string;
  subtitle: string;
  targetProject: string;
  totalWeeks: number;
  totalPomodoros: number;
  totalHours: number;
  hoursPerDay: number;
  principles: string[];
  systemArchitecture: {
    frontend: string;
    backend: string;
    database: string;
    llms: string;
    observability: string;
  };
}

export const META_DATA: ProjectMeta = {
  title: "Agentic AI Master Curriculum 2026",
  subtitle: "Combo 2 Khóa Học: LangChain/LangGraph + MCP & Autonomous Agents",
  targetProject: "Agentic AI Master Systems - 4 Projects (Smart Q&A Bot, AI Research Assistant, Multi-Agent System, Cloud Render API)",
  totalWeeks: 7,
  totalPomodoros: 210,
  totalHours: 175,
  hoursPerDay: 5,
  principles: [
    "Quy tắc Pomodoro 50/5/20: 50 phút Tập trung - 5 phút Nghỉ ngắn - 20 phút Nghỉ dài sau mỗi 2 Pomodoro.",
    "Học qua 2 Khóa Học Master local: Khóa 1 (Build & Deploy with LangChain/LangGraph) + Khóa 2 (MCP Protocol & Autonomous Agents).",
    "Hoàn thành 4 Dự án thực tế lớn: Smart Q&A Bot (Mod 1), AI Research Assistant (Mod 5), Multi-Agent System (Mod 7), Production API Cloud Render (Mod 8)."
  ],
  systemArchitecture: {
    frontend: "Next.js (React) + Tailwind CSS + Vercel AI SDK + Shadcn/ui",
    backend: "Python 3.11+ + FastAPI + LangChain v1.0 / LangGraph + Model Context Protocol (MCP / FastMCP)",
    database: "ChromaDB & PostgreSQL với extension pgvector (Hybrid Search & Indexing)",
    llms: "Anthropic Claude 3.5/3.7, Multi-provider LLMs (OpenAI, DeepSeek-R1, Google Gemini)",
    observability: "LangSmith Tracing, LLM Guard / Security Layer, LLM-as-Judge Evaluation & Cloud Render"
  }
};

export const SPRINT_MODULES: SprintModule[] = [
  {
    id: "mod-1",
    moduleNum: 1,
    title: "Module 1: LangChain & Agentic Foundations",
    subtitle: "Nền Tảng Agentic AI, LCEL, Multi-LLM Provider & Project 1: Smart Q&A Bot",
    statusColor: "#22c55e",
    duration: "5 Ngày (30 Pomodoros / 25h)",
    objectives: [
      "Phân biệt Agentic AI vs AI truyền thống & nắm vững các thành phần cốt lõi",
      "Cấu hình Đa nhà cung cấp LLM (OpenAI, Anthropic), Prompt Templates & Output Parsers",
      "Xây dựng chuỗi LCEL hỗ trợ Realtime Streaming, Schema Inspection và Batch execution",
      "Hoàn thành Project 1: Smart Q&A Bot hỗ trợ đa mô hình"
    ],
    knowledgeToLoad: [
      "Agentic AI Concepts & Architecture (Khóa 2 Chap 2-3)",
      "LangChain v1.0 Setup, LCEL Runnable Chains & Pipe operator | (Khóa 1 Chap 2)",
      "Multi-provider LLM Configuration, Prompt Templates & Structured Outputs"
    ],
    deliverables: [
      {
        id: "m1-t1",
        title: "Setup môi trường Python 3.11+ & API Keys",
        description: "Khởi tạo môi trường Python, cài đặt langchain, langchain-openai, langchain-anthropic và cấu hình API Keys.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Setup", "Python", "API Keys"]
      },
      {
        id: "m1-t2",
        title: "Thực hành LCEL & Runnable Chains",
        description: "Viết các chuỗi LCEL cơ bản, thử nghiệm batch execution, realtime streaming và schema inspection.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["LCEL", "Runnable", "Streaming"]
      },
      {
        id: "m1-t3",
        title: "Cấu hình Multi-Model & Prompt Templates",
        description: "Tạo Prompt Templates, Messages (User, System, Assistant) và cấu hình chuyển đổi giữa OpenAI & Anthropic.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Prompt", "MultiModel", "Parsers"]
      },
      {
        id: "m1-t4",
        title: "Xây dựng Project 1: Smart Q&A Bot (Core Logic)",
        description: "Dựng ứng dụng Hỏi-Đáp thông minh hỗ trợ Structured Output & Multi-model setup.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Project1", "QA-Bot", "Core"]
      },
      {
        id: "m1-t5",
        title: "Hoàn thiện Project 1 & Code Cleanup",
        description: "Kiểm thử các câu lệnh hỏi đáp, xử lý error handling và commit code Project 1.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Project1", "Testing", "Git"]
      }
    ],
    resources: [
      {
        id: "res-m1-1",
        title: "LangChain Python Core Overview",
        type: "docs",
        description: "Tài liệu chính thức giới thiệu về hệ sinh thái LangChain v1.0.",
        url: "https://python.langchain.com/docs/introduction/",
        moduleId: "mod-1",
        isFree: true
      },
      {
        id: "res-m1-2",
        title: "LangChain Core Concepts",
        type: "docs",
        description: "Khái niệm cốt lõi về Runnable, LCEL, Chat Models và Output Parsers.",
        url: "https://python.langchain.com/docs/concepts/",
        moduleId: "mod-1",
        isFree: true
      },
      {
        id: "res-m1-3",
        title: "Khóa 1: Agentic AI Systems (Chapter 1-2)",
        type: "course",
        description: "Bài giảng video Packt về LangChain Setup & LCEL Foundations.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-1",
        isFree: false
      },
      {
        id: "res-m1-4",
        title: "Khóa 2: Autonomous Agentic AI Systems (Chapter 2-3)",
        type: "course",
        description: "Bài giảng video Packt về Agentic AI Concepts & Architecture.",
        url: "https://www.packtpub.com/en-us/product/building-autonomous-agentic-ai-systems-for-beginners-handson-9781807609818",
        moduleId: "mod-1",
        isFree: false
      }
    ]
  },
  {
    id: "mod-2",
    moduleNum: 2,
    title: "Module 2: Chain Patterns & Lightweight Frameworks",
    subtitle: "Parallel Chains, Smolagents & Low-code n8n Integration",
    statusColor: "#eab308",
    duration: "3 Ngày (18 Pomodoros / 15h)",
    objectives: [
      "Làm chủ các mẫu thiết kế chuỗi xử lý: Parallel Chains, Passthrough & Branching",
      "Thực hành phát triển Agent bằng framework siêu nhẹ Smolagents (Hugging Face)",
      "Tìm hiểu và xây dựng Agent dạng Low-code/No-code với n8n"
    ],
    knowledgeToLoad: [
      "Basic & Parallel Chains with RunnablePassthrough, RunnableParallel (Khóa 1 Chap 3)",
      "Hugging Face Smolagents: Weather Agent & SQL Agent Demo (Khóa 2 Chap 4)",
      "Low-code Agentic Workflows với n8n (Khóa 2 Chap 4)"
    ],
    deliverables: [
      {
        id: "m2-t1",
        title: "Viết Parallel Chains & Branching Logic",
        description: "Thực hành chạy song song các nhánh LLM kết hợp RunnablePassthrough và Debugging chuỗi LangChain.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["LCEL", "Parallel", "Branching"]
      },
      {
        id: "m2-t2",
        title: "Thực hành Weather & SQL Agent với Smolagents",
        description: "Sử dụng framework Smolagents xây dựng Weather Agent và SQL Agent truy vấn dữ liệu.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Smolagents", "HuggingFace", "Agent"]
      },
      {
        id: "m2-t3",
        title: "Thực hành Low-code Agentic Workflow với n8n",
        description: "Thiết lập workflow tự động hóa Agent dạng Low-code trên n8n.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["n8n", "LowCode", "Workflow"]
      }
    ],
    resources: [
      {
        id: "res-m2-1",
        title: "LangChain Expression Language (LCEL) Docs",
        type: "docs",
        description: "Tài liệu chi tiết về Runnable Parallel, Passthrough và Branching.",
        url: "https://python.langchain.com/docs/concepts/#lcel",
        moduleId: "mod-2",
        isFree: true
      },
      {
        id: "res-m2-2",
        title: "Hugging Face Smolagents Documentation",
        type: "docs",
        description: "Framework Agent siêu nhẹ mã nguồn mở từ Hugging Face.",
        url: "https://huggingface.co/docs/smolagents/",
        moduleId: "mod-2",
        isFree: true
      },
      {
        id: "res-m2-3",
        title: "Khóa 1: Agentic AI Systems (Chapter 3 - Chain Patterns)",
        type: "course",
        description: "Video bài giảng Packt về Basic & Parallel Chains, RunnablePassthrough.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-2",
        isFree: false
      },
      {
        id: "res-m2-4",
        title: "Khóa 2: Autonomous Agentic AI Systems (Chapter 4 - Smolagents & n8n)",
        type: "course",
        description: "Video bài giảng Packt về Smolagents (Weather & SQL Agent) và Low-code n8n.",
        url: "https://www.packtpub.com/en-us/product/building-autonomous-agentic-ai-systems-for-beginners-handson-9781807609818",
        moduleId: "mod-2",
        isFree: false
      }
    ]
  },
  {
    id: "mod-3",
    moduleNum: 3,
    title: "Module 3: Model Context Protocol (MCP) Deep Dive",
    subtitle: "Chuẩn Giao Thức Kết Nối Tools 2026: FastMCP Server & Docker MCP",
    statusColor: "#3b82f6",
    duration: "4 Ngày (24 Pomodoros / 20h)",
    objectives: [
      "Nắm vững kiến trúc Client/Server của Model Context Protocol (MCP)",
      "Tự viết một FastMCP Server bằng Python cung cấp Custom Tools",
      "Kết nối Agent gọi MCP Tools qua giao thức Stdio/SSE Transport",
      "Đóng gói và triển khai Docker MCP với Agentic AI"
    ],
    knowledgeToLoad: [
      "MCP Architecture & Protocol Spec (Khóa 2 Chap 5)",
      "FastMCP Python SDK & Tool Decorator Pattern",
      "Dockerization cho MCP Server & Agent Connection"
    ],
    deliverables: [
      {
        id: "m3-t1",
        title: "Nghiên cứu Kiến trúc & Giao thức MCP",
        description: "Đọc specification MCP Client/Server, tìm hiểu Stdio & SSE Transport.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["MCP", "Protocol", "Architecture"]
      },
      {
        id: "m3-t2",
        title: "Tự viết FastMCP Server bằng Python",
        description: "Xây dựng MCP Server cung cấp Tool truy vấn dữ liệu / hệ thống bằng FastMCP SDK.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["FastMCP", "Python", "Server"]
      },
      {
        id: "m3-t3",
        title: "Kết nối AI Agent với FastMCP Server",
        description: "Viết Client Agent tự động kết nối và gọi Tools trên FastMCP Server qua Stdio/SSE.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["MCP-Client", "ToolCalling", "Agent"]
      },
      {
        id: "m3-t4",
        title: "Triển khai Docker MCP Server & Test E2E",
        description: "Đóng gói MCP Server thành Docker Container và kiểm thử kết nối với Agent.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Docker", "MCP", "Deployment"]
      }
    ],
    resources: [
      {
        id: "res-m3-1",
        title: "Model Context Protocol Official Specification",
        type: "docs",
        description: "Trang tài liệu chuẩn chính thức của MCP bởi Anthropic.",
        url: "https://modelcontextprotocol.io/",
        moduleId: "mod-3",
        isFree: true
      },
      {
        id: "res-m3-2",
        title: "FastMCP Python SDK GitHub",
        type: "repo",
        description: "SDK Python chính thức giúp dựng MCP Server cực nhanh.",
        url: "https://github.com/jlowin/fastmcp",
        moduleId: "mod-3",
        isFree: true
      },
      {
        id: "res-m3-3",
        title: "Khóa 2 (Chap 5 - Getting Started with MCP)",
        type: "course",
        description: "Video bài giảng chi tiết về MCP Server & Docker MCP.",
        url: "https://www.packtpub.com/en-us/product/building-autonomous-agentic-ai-systems-for-beginners-handson-9781807609818",
        moduleId: "mod-3",
        isFree: false
      }
    ]
  },
  {
    id: "mod-4",
    moduleNum: 4,
    title: "Module 4: Document Loading, Chunking & Embeddings",
    subtitle: "Xử Lý Tài Liệu PDF/Markdown, Text Splitting & ChromaDB Vector Store",
    statusColor: "#f97316",
    duration: "4 Ngày (24 Pomodoros / 20h)",
    objectives: [
      "Sử dụng các Document Loaders: TextLoader, WebLoader, LazyLoader, PDF Loader",
      "Làm chủ các chiến lược cắt đoạn (Chunking): RecursiveCharacterTextSplitter, Overlap, MarkdownHeaderSplitter",
      "Cấu hình Embedding Models & Embedding Caching",
      "Xây dựng Vector Store với ChromaDB: Similarity Search with Scores, Metadata Filtering & Persistence"
    ],
    knowledgeToLoad: [
      "Document Loading & Parsing (Khóa 1 Chap 4)",
      "Text Splitting Strategies & Overlap Tuning",
      "ChromaDB Architecture, Vector Retriever & Metadata Filtering"
    ],
    deliverables: [
      {
        id: "m4-t1",
        title: "Thực hành Document Loaders (PDF, Web, Text)",
        description: "Sử dụng TextLoader, WebBaseLoader, PyPDFLoader để trích xuất văn bản từ nhiều nguồn.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Loaders", "PDF", "Ingestion"]
      },
      {
        id: "m4-t2",
        title: "Thực hành Text Splitting & Chunk Overlap",
        description: "Thực nghiệm RecursiveCharacterTextSplitter, CodeSplitter và MarkdownHeaderSplitter.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Chunking", "Splitter", "Text"]
      },
      {
        id: "m4-t3",
        title: "Cấu hình Vector Store ChromaDB & Embeddings",
        description: "Khởi tạo ChromaDB, tạo Embeddings (OpenAI / Free models), lưu trữ persistent vector storage.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["ChromaDB", "Embeddings", "VectorStore"]
      },
      {
        id: "m4-t4",
        title: "Triển khai VectorStore Retriever & Metadata Filtering",
        description: "Viết query Similarity Search with Scores, áp dụng metadata filter và chuyển VectorStore thành Retriever.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Retriever", "SimilaritySearch", "Metadata"]
      }
    ],
    resources: [
      {
        id: "res-m4-1",
        title: "ChromaDB Official Documentation",
        type: "docs",
        description: "Tài liệu hướng dẫn sử dụng Chroma Vector Database.",
        url: "https://docs.trychroma.com/",
        moduleId: "mod-4",
        isFree: true
      },
      {
        id: "res-m4-2",
        title: "Document Loaders & Splitters How-To",
        type: "docs",
        description: "Hướng dẫn chọn và cấu hình Text Splitters chuẩn trong LangChain.",
        url: "https://python.langchain.com/docs/how_to/#document-loaders",
        moduleId: "mod-4",
        isFree: true
      },
      {
        id: "res-m4-3",
        title: "Khóa 1 (Chapter 4)",
        type: "course",
        description: "Video bài giảng về Document Ingestion, Chunking & ChromaDB.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-4",
        isFree: false
      }
    ]
  },
  {
    id: "mod-5",
    moduleNum: 5,
    title: "Module 5: Advanced RAG & Memory Systems",
    subtitle: "Multi-Query RAG, Contextual Compression, Memory & Project 2: AI Research Assistant",
    statusColor: "#ef4444",
    duration: "5 Ngày (30 Pomodoros / 25h)",
    objectives: [
      "Xây dựng Advanced RAG Pipeline: Multi-Query Retriever, Contextual Compression, Hybrid Search, Parent Doc",
      "Tích hợp Agentic RAG với CrewAI",
      "Làm chủ Memory Patterns: Multiple Sessions, Message Trimming, Summary & Persistent Memory",
      "Hoàn thành Project 2: AI Research Assistant"
    ],
    knowledgeToLoad: [
      "Advanced RAG Architecture (Khóa 1 Chap 5 & Khóa 2 Chap 7)",
      "Memory Systems: Conversation, Windowed, Summary, Persistent Memory",
      "Agentic RAG với CrewAI"
    ],
    deliverables: [
      {
        id: "m5-t1",
        title: "Thực hành Basic RAG, Fallback & Structured Output",
        description: "Xây dựng pipeline RAG cơ bản tích hợp fallback model và structured response.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["RAG", "Fallback", "StructuredOutput"]
      },
      {
        id: "m5-t2",
        title: "Triển khai Advanced RAG (Multi-Query & Hybrid Search)",
        description: "Cài đặt Multi-Query Retriever, Contextual Compression và Hybrid Search (Vector + Keyword).",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["MultiQuery", "Compression", "HybridSearch"]
      },
      {
        id: "m5-t3",
        title: "Xây dựng Memory System đa phiên hội thoại",
        description: "Tích hợp Conversation Summary Memory, Message Trimming và lưu giữ session history.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Memory", "Sessions", "Summary"]
      },
      {
        id: "m5-t4",
        title: "Xây dựng Project 2: AI Research Assistant (Phần 1)",
        description: "Khởi tạo ứng dụng Trợ lý nghiên cứu AI với Ingestion pipeline & Memory đa phiên.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Project2", "ResearchAssistant", "Core"]
      },
      {
        id: "m5-t5",
        title: "Hoàn thiện Project 2: AI Research Assistant (Phần 2)",
        description: "Đấu nối Multi-Query Retrieval, render báo cáo dạng Markdown và hoàn thành testing.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Project2", "Testing", "Git"]
      }
    ],
    resources: [
      {
        id: "res-m5-1",
        title: "LangChain RAG Tutorial",
        type: "docs",
        description: "Hướng dẫn toàn diện về RAG từ cơ bản đến nâng cao.",
        url: "https://python.langchain.com/docs/tutorials/rag/",
        moduleId: "mod-5",
        isFree: true
      },
      {
        id: "res-m5-2",
        title: "LangChain Retrieval & Memory Concepts",
        type: "docs",
        description: "Khái niệm nâng cao về Retrieval Compression và Conversation Memory.",
        url: "https://python.langchain.com/docs/concepts/#retrieval",
        moduleId: "mod-5",
        isFree: true
      },
      {
        id: "res-m5-3",
        title: "Khóa 1: Agentic AI Systems (Chapter 5 - Advanced RAG & Memory)",
        type: "course",
        description: "Video bài giảng Packt về Advanced RAG, Context Compression & Memory Patterns.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-5",
        isFree: false
      },
      {
        id: "res-m5-4",
        title: "Khóa 2: Autonomous Agentic AI Systems (Chapter 7 - Agentic RAG)",
        type: "course",
        description: "Video bài giảng Packt về Agentic RAG với CrewAI & Multiple Sessions Memory.",
        url: "https://www.packtpub.com/en-us/product/building-autonomous-agentic-ai-systems-for-beginners-handson-9781807609818",
        moduleId: "mod-5",
        isFree: false
      }
    ]
  },
  {
    id: "mod-6",
    moduleNum: 6,
    title: "Module 6: LangGraph - A Full Deep Dive",
    subtitle: "StateGraph, Conditional Edges, Self-Correcting Loops & Human-in-the-loop",
    statusColor: "#8b5cf6",
    duration: "4 Ngày (24 Pomodoros / 20h)",
    objectives: [
      "Làm chủ 3 trụ cột LangGraph: StateGraph, Reducers, Accumulating State & Message State",
      "Thiết kế Multi-Node Pipelines & Routing: Edges, Conditional Edges, Multipath Routing",
      "Xây dựng vòng lặp tự sửa lỗi (Cycles & Loops): Self-Correcting Code Writer",
      "Cấu hình Human-in-the-loop (Interrupt for Approval) & Postgres Checkpointer"
    ],
    knowledgeToLoad: [
      "StateGraph Architecture & State Reducers (Khóa 1 Chap 6)",
      "Control Flow: Routing, Cycles, Self-Correction Pattern",
      "Persistence Internals & Human Approval Interrupts"
    ],
    deliverables: [
      {
        id: "m6-t1",
        title: "Khởi tạo LangGraph StateGraph & Message State",
        description: "Định nghĩa Agent State, Reducers và tạo đồ thị đơn giản với Nodes và Edges.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["LangGraph", "StateGraph", "Reducers"]
      },
      {
        id: "m6-t2",
        title: "Triển khai Routing & Conditional Edges",
        description: "Xây dựng Router Node điều hướng luồng suy luận (Literal & Multipath Routing).",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Routing", "ConditionalEdges", "ControlFlow"]
      },
      {
        id: "m6-t3",
        title: "Xây dựng Self-Correcting Code Writer Loop",
        description: "Tạo vòng lặp tự sinh mã, chạy kiểm thử và tự động sửa lỗi code dựa trên error traceback.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["SelfCorrecting", "Loops", "Agent"]
      },
      {
        id: "m6-t4",
        title: "Tích hợp Human-in-the-loop & Checkpointing",
        description: "Thêm tính năng tạm dừng chờ con người phê duyệt (Interrupt) và lưu checkpoint trạng thái đồ thị.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["HumanInTheLoop", "Checkpointer", "Persistence"]
      }
    ],
    resources: [
      {
        id: "res-m6-1",
        title: "LangGraph Official Documentation",
        type: "docs",
        description: "Trang tài liệu chính thức của LangGraph framework.",
        url: "https://langchain-ai.github.io/langgraph/",
        moduleId: "mod-6",
        isFree: true
      },
      {
        id: "res-m6-2",
        title: "LangGraph How-To Guides",
        type: "docs",
        description: "Bộ hướng dẫn thực hành Persistence, Human-in-the-loop & Time-travel.",
        url: "https://langchain-ai.github.io/langgraph/how-tos/",
        moduleId: "mod-6",
        isFree: true
      },
      {
        id: "res-m6-3",
        title: "Khóa 1 (Chapter 6)",
        type: "course",
        description: "Video bài giảng chuyên sâu LangGraph Deep Dive.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-6",
        isFree: false
      }
    ]
  },
  {
    id: "mod-7",
    moduleNum: 7,
    title: "Module 7: Multi-Agent Architectures",
    subtitle: "CrewAI, Supervisor LangGraph, Cloud Agents & Project 3: Multi-Agent System",
    statusColor: "#ec4899",
    duration: "5 Ngày (30 Pomodoros / 25h)",
    objectives: [
      "Xây dựng hệ thống Multi-Agent với CrewAI (Role-playing & Tasks)",
      "Thiết kế Đa Agent trên LangGraph: Supervisor Pattern, Agent Handoffs, Map-Reduce & Shared State",
      "Khám phá Cloud Agents: AWS Monitoring Agent & Cross-Cloud Agent (AWS + GCP)",
      "Hoàn thành Project 3: Multi-Agent Research System"
    ],
    knowledgeToLoad: [
      "CrewAI Multi-Agent Setup & Execution (Khóa 2 Chap 6)",
      "LangGraph Multi-Agent Patterns: Supervisor, Handoffs, Blackboard (Khóa 1 Chap 7)",
      "Cloud Monitoring Agents & Agentic Design Patterns (Khóa 2 Chap 6 & 9)"
    ],
    deliverables: [
      {
        id: "m7-t1",
        title: "Xây dựng Multi-Agent System với CrewAI",
        description: "Cài đặt CrewAI, định nghĩa Agents (Researcher, Writer), Tasks và thực thi luồng làm việc.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["CrewAI", "MultiAgent", "Tasks"]
      },
      {
        id: "m7-t2",
        title: "Triển khai Supervisor Agent Pattern trên LangGraph",
        description: "Tạo Supervisor Node phân phối công việc cho các Worker Agents và nhận kết quả phản hồi.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["LangGraph", "Supervisor", "Handoffs"]
      },
      {
        id: "m7-t3",
        title: "Thực hành Cloud Agents (AWS & Google Cloud)",
        description: "Tìm hiểu mô hình AWS Monitoring Agent & Cross-Cloud Architecture.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["CloudAgents", "AWS", "GCP"]
      },
      {
        id: "m7-t4",
        title: "Xây dựng Project 3: Multi-Agent Research System (Phần 1)",
        description: "Thiết kế Custom State Schema, Router & Worker Nodes cho dự án nghiên cứu đa agent.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Project3", "MultiAgent", "Architecture"]
      },
      {
        id: "m7-t5",
        title: "Hoàn thiện Project 3: Multi-Agent Research System (Phần 2)",
        description: "Áp dụng Send API cho Map-Reduce strategy, kiểm thử tích hợp và hoàn thiện dự án.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Project3", "MapReduce", "Git"]
      }
    ],
    resources: [
      {
        id: "res-m7-1",
        title: "CrewAI Official Documentation",
        type: "docs",
        description: "Tài liệu chính thức về CrewAI framework.",
        url: "https://docs.crewai.com/",
        moduleId: "mod-7",
        isFree: true
      },
      {
        id: "res-m7-2",
        title: "LangGraph Multi-Agent Concepts",
        type: "docs",
        description: "Các mẫu kiến trúc Multi-Agent chuẩn trên LangGraph.",
        url: "https://langchain-ai.github.io/langgraph/concepts/multi_agent/",
        moduleId: "mod-7",
        isFree: true
      },
      {
        id: "res-m7-3",
        title: "Khóa 1: Agentic AI Systems (Chapter 7 - Multi-Agent LangGraph)",
        type: "course",
        description: "Video bài giảng Packt về Supervisor Pattern, Agent Handoffs & Map-Reduce.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-7",
        isFree: false
      },
      {
        id: "res-m7-4",
        title: "Khóa 2: Autonomous Agentic AI Systems (Chapter 6 & 9 - CrewAI & Cloud Agents)",
        type: "course",
        description: "Video bài giảng Packt về CrewAI, Cloud Agents (AWS/GCP) & Agentic Design Patterns.",
        url: "https://www.packtpub.com/en-us/product/building-autonomous-agentic-ai-systems-for-beginners-handson-9781807609818",
        moduleId: "mod-7",
        isFree: false
      }
    ]
  },
  {
    id: "mod-8",
    moduleNum: 8,
    title: "Module 8: Production Deployment, Security & LLMOps",
    subtitle: "LangSmith, LLM Guard Security, Testing & Project 4: Cloud Render API",
    statusColor: "#a855f7",
    duration: "5 Ngày (30 Pomodoros / 25h)",
    objectives: [
      "Cấu hình Observability: LangSmith Tracing & Testing Traces",
      "Thiết lập Security Layer: PII Detection, Prompt Injection Defense, LLM Guard (Smart Bouncer)",
      "Triển khai LLM Testing & Evaluation: LLM-as-Judge, Regression Testing & LangSmith Datasets",
      "Cấu hình Resilience: Circuit Breaker, Fallback Chain, Model Router & Semantic Caching",
      "Hoàn thành Project 4: Production LangGraph API + FastAPI + Docker + Cloud Render Deployment"
    ],
    knowledgeToLoad: [
      "LangSmith Tracing & Datasets (Khóa 1 Chap 8)",
      "Security Defense-in-Depth & LLM Guard (Khóa 1 Chap 8 & Khóa 2 Chap 8)",
      "FastAPI Integration, Multi-container Docker & Render Cloud Deployment"
    ],
    deliverables: [
      {
        id: "m8-t1",
        title: "Cấu hình LangSmith Tracing & Security Layer",
        description: "Gắn LangSmith Tracing, tích hợp PII Detection và Prompt Injection Defense (LLM Guard).",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["LangSmith", "Security", "LLMGuard"]
      },
      {
        id: "m8-t2",
        title: "Triển khai Evaluation & LLM-as-Judge Test Suite",
        description: "Viết bộ test tự động đánh giá chất lượng câu trả lời bằng LLM-as-Judge trên LangSmith Datasets.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Evaluation", "LLMasJudge", "Testing"]
      },
      {
        id: "m8-t3",
        title: "Xây dựng Resilience, Model Router & Semantic Cache",
        description: "Cài đặt Circuit Breaker, Fallback Chain, Semantic Caching để tối ưu chi phí và tăng độ tin cậy.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Resilience", "Cache", "CircuitBreaker"]
      },
      {
        id: "m8-t4",
        title: "Xây dựng Project 4: Production API Packaging (Phần 1)",
        description: "Đấu nối LangGraph Agent với FastAPI Server, viết Dockerfile & docker-compose.yml.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Project4", "FastAPI", "Docker"]
      },
      {
        id: "m8-t5",
        title: "Hoàn thiện Project 4: Triển khai Cloud Render & E2E Testing",
        description: "Deploy ứng dụng Production-Ready API lên Render Cloud, test public endpoint và hoàn thành khóa học!",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Project4", "RenderCloud", "FinalCommit"]
      }
    ],
    resources: [
      {
        id: "res-m8-1",
        title: "LangSmith Observability & Tracing Docs",
        type: "docs",
        description: "Trang tài liệu giám sát và đánh giá LLM của LangSmith.",
        url: "https://docs.smith.langchain.com/",
        moduleId: "mod-8",
        isFree: true
      },
      {
        id: "res-m8-2",
        title: "FastAPI Official Tutorial",
        type: "docs",
        description: "Hướng dẫn dựng API Server hiệu năng cao với Python FastAPI.",
        url: "https://fastapi.tiangolo.com/tutorial/",
        moduleId: "mod-8",
        isFree: true
      },
      {
        id: "res-m8-3",
        title: "Render Cloud Deployment Guides",
        type: "docs",
        description: "Hướng dẫn deploy ứng dụng Python & Docker lên đám mây Render.",
        url: "https://render.com/docs/",
        moduleId: "mod-8",
        isFree: true
      },
      {
        id: "res-m8-4",
        title: "Khóa 1: Agentic AI Systems (Chapter 8 - LangSmith, Security & Render Cloud)",
        type: "course",
        description: "Video bài giảng Packt về LangSmith Tracing, LLM Guard Security & Deploy Render.",
        url: "https://www.packtpub.com/en-us/product/agentic-ai-systems-build-deploy-with-langchainlanggraph-9781807780814",
        moduleId: "mod-8",
        isFree: false
      },
      {
        id: "res-m8-5",
        title: "Khóa 2: Autonomous Agentic AI Systems (Chapter 8 - Reflection & Safety)",
        type: "course",
        description: "Video bài giảng Packt về Reflection, Self-Improvement, Guardrails & Safety.",
        url: "https://www.packtpub.com/en-us/product/building-autonomous-agentic-ai-systems-for-beginners-handson-9781807609818",
        moduleId: "mod-8",
        isFree: false
      }
    ]
  }
];

// Generate 7 Weeks x 5 Days x 6 Pomodoros = 210 Pomodoros (35 Days)
export const generateDailySchedule = (): DailyScheduleDay[] => {
  const days: DailyScheduleDay[] = [];
  const dayNames = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6"];
  
  const dailyThemes: string[][] = [
    // Week 1 (Module 1 - 5 days)
    [
      "Agentic AI Concepts & Setup Python Environment",
      "LCEL, Runnable Chains & Realtime Streaming",
      "Multi-model Setup, Prompt Templates & Parsers",
      "Project 1: Smart Q&A Bot - Core Architecture",
      "Project 1: Testing & Refactoring - Commit GitHub"
    ],
    // Week 2 (Module 2: 3 days + Module 3: 2 days)
    [
      "Parallel Chains, Passthrough & Branching LCEL",
      "Smolagents Framework: Weather & SQL Agent",
      "Low-code Agentic Workflows với n8n",
      "Model Context Protocol Architecture & Spec",
      "Viết FastMCP Server với Python SDK"
    ],
    // Week 3 (Module 3: 2 days + Module 4: 3 days)
    [
      "Kết nối AI Agent với FastMCP Server",
      "Triển khai Docker MCP Server & Test E2E",
      "Document Loaders (PDF, Web, LazyLoader)",
      "Text Splitting & Chunk Overlap Deep Dive",
      "Vector Store ChromaDB & Embeddings Setup"
    ],
    // Week 4 (Module 4: 1 day + Module 5: 4 days)
    [
      "VectorStore Retriever & Metadata Filtering",
      "Basic RAG, Fallback & Structured Outputs",
      "Advanced RAG (Multi-Query, Hybrid Search)",
      "Memory Patterns (Summary & Persistent Memory)",
      "Project 2: AI Research Assistant - Ingestion & Memory"
    ],
    // Week 5 (Module 5: 1 day + Module 6: 4 days)
    [
      "Project 2: AI Research Assistant - Multi-Query & Export",
      "LangGraph StateGraph & Message State Core",
      "Routing & Conditional Edges trong LangGraph",
      "Cycles & Self-Correcting Code Writer Loop",
      "Human-in-the-loop & Checkpoint Persistence"
    ],
    // Week 6 (Module 7 - 5 days)
    [
      "CrewAI Multi-Agent System & Role-playing",
      "Supervisor Agent Pattern trên LangGraph",
      "Cloud Monitoring Agents (AWS & Google Cloud)",
      "Project 3: Multi-Agent Research - Custom State Schema",
      "Project 3: Send API Map-Reduce & Final Commit"
    ],
    // Week 7 (Module 8 - 5 days)
    [
      "LangSmith Tracing & Security LLM Guard Layer",
      "LLM Testing & Evaluation (LLM-as-Judge)",
      "Resilience, Model Router & Semantic Cache",
      "Project 4: Production LangGraph API + Docker",
      "Project 4: Triển khai Cloud Render & Final Certificate! 🚀"
    ]
  ];

  for (let w = 1; w <= 7; w++) {
    for (let d = 1; d <= 5; d++) {
      const dayName = dayNames[d - 1];
      const theme = dailyThemes[w - 1][d - 1];
      const dayId = `w${w}-d${d}`;

      days.push({
        id: dayId,
        weekNum: w,
        dayNum: d,
        dayName,
        theme,
        poms: [
          {
            id: `${dayId}-p1`,
            pomIndex: 1,
            timeSlot: "13:00 - 13:50",
            period: "afternoon",
            label: "P1: Nạp Lý Thuyết",
            details: "Xem video bài giảng trong gói 2 khóa học local (50 phút)"
          },
          {
            id: `${dayId}-p2`,
            pomIndex: 2,
            timeSlot: "13:55 - 14:45",
            period: "afternoon",
            label: "P2: Tra Cứu Pattern",
            details: "Xem hướng dẫn code hands-on & mẫu thiết kế chuẩn (50 phút)"
          },
          {
            id: `${dayId}-p3`,
            pomIndex: 3,
            timeSlot: "15:05 - 15:55",
            period: "afternoon",
            label: "P3: Heavy Coding 1",
            details: "Thực hành gõ code core & tự giải bài tập (50 phút)"
          },
          {
            id: `${dayId}-p4`,
            pomIndex: 4,
            timeSlot: "16:00 - 16:50",
            period: "afternoon",
            label: "P4: Heavy Coding 2",
            details: "Xây dựng 4 Projects & tích hợp tính năng (50 phút)"
          },
          {
            id: `${dayId}-p5`,
            pomIndex: 5,
            timeSlot: "22:00 - 22:50",
            period: "evening",
            label: "P5: Code Refactoring",
            details: "Integration, Testing & Debugging (50 phút)"
          },
          {
            id: `${dayId}-p6`,
            pomIndex: 6,
            timeSlot: "22:55 - 23:45",
            period: "evening",
            label: "P6: Clean & Git Commit",
            details: "Dọn dẹp code, nghiệm thu & Push GitHub Commit (50 phút)"
          }
        ]
      });
    }
  }

  return days;
};

export const DAILY_SCHEDULE = generateDailySchedule();

export const TECH_STACK_LAYERS: TechStackLayer[] = [
  {
    layerNum: 1,
    name: "1. UI & Application Layer",
    description: "Giao diện web người dùng, streaming response token-by-token, tự động hóa low-code và trải nghiệm tương tác.",
    items: [
      { name: "Next.js (React)", role: "Standard Full-stack Framework", usageShare: "44%", isPrimaryChoice: true },
      { name: "Vercel AI SDK", role: "React Hooks (useChat, streamText)", isPrimaryChoice: true },
      { name: "Tailwind CSS + Shadcn/ui", role: "Design System & Glassmorphism UI", isPrimaryChoice: true },
      { name: "n8n", role: "Low-code / No-code Agentic Automation Workflow", usageShare: "Low-code Standard", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 2,
    name: "2. Agent & Orchestration Layer",
    description: "Khung điều phối suy luận lặp, quản lý trạng thái, protocol giao tiếp và multi-agent ecosystem.",
    items: [
      { name: "LangGraph (StateGraph)", role: "Stateful Production Agents, Memory & Checkpoints", usageShare: "57% Enterprise", isPrimaryChoice: true },
      { name: "Model Context Protocol (MCP)", role: "Standard Protocol for Tool & DB Access (FastMCP)", isPrimaryChoice: true },
      { name: "CrewAI", role: "Role-playing Multi-Agent Framework", isPrimaryChoice: true },
      { name: "Smolagents", role: "Lightweight Agent Framework (Hugging Face)", isPrimaryChoice: true },
      { name: "LangChain Core", role: "LLM Chains & Prompt Templates", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 3,
    name: "3. LLMs & Inference Engine",
    description: "Mô hình ngôn ngữ lớn thương mại API và mô hình mã nguồn mở phục vụ suy luận.",
    items: [
      { name: "Anthropic Claude 3.5 / 3.7", role: "No.1 for Coding & Complex Instruction Following", isPrimaryChoice: true },
      { name: "DeepSeek-R1 / V3", role: "Leading Open Reasoning Model", isPrimaryChoice: true },
      { name: "Google Gemini 2.0 Flash / Pro", role: "1M-2M Large Context Window", isPrimaryChoice: true },
      { name: "OpenAI GPT-4o / o3-mini", role: "Multimodal & Complex Logic Reasoning", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 4,
    name: "4. Vector DB & Data Storage",
    description: "Cơ sở dữ liệu lưu trữ ngữ nghĩa Vector và tìm kiếm kết hợp Hybrid Search.",
    items: [
      { name: "ChromaDB", role: "Default Lightweight Open-Source Vector Database for RAG", isPrimaryChoice: true },
      { name: "PostgreSQL (pgvector)", role: "Enterprise Vector DB & Hybrid Search (HNSW Index)", isPrimaryChoice: true },
      { name: "Qdrant", role: "Dedicated High-Performance Vector DB (Rust)", usageShare: "Dedicated Option" }
    ]
  },
  {
    layerNum: 5,
    name: "5. LLMOps & Observability & Security",
    description: "Theo dõi luồng suy luận (Tracing), bảo mật LLM Guard, kiểm soát chi phí token và kiểm thử chất lượng.",
    items: [
      { name: "LangSmith", role: "Deep Tracing, Datasets & Latency / Token Cost Debugging", isPrimaryChoice: true },
      { name: "LLM Guard (Smart Bouncer)", role: "PII Detection & Prompt Injection Defense Layer", isPrimaryChoice: true },
      { name: "Ragas / LLM-as-Judge", role: "Automated Evaluation (Precision, Recall, Faithfulness)", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 6,
    name: "6. Data Ingestion & Document AI",
    description: "Xử lý, làm sạch và trích xuất tài liệu PDF/Markdown.",
    items: [
      { name: "LangChain Loaders & Splitters", role: "RecursiveCharacterTextSplitter, CodeSplitter, MarkdownSplitter", isPrimaryChoice: true },
      { name: "PyPDFLoader & WebBaseLoader", role: "Document Extraction & Lazy Loading", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 7,
    name: "7. Languages & Cloud Deployment",
    description: "Môi trường thực thi backend/frontend và hạ tầng triển khai Cloud.",
    items: [
      { name: "Python 3.11+", role: "Backend AI Engine & FastAPI", usageShare: "58% Dominant", isPrimaryChoice: true },
      { name: "TypeScript / Node 20+", role: "Frontend Web UI & Type Safety", usageShare: "44%", isPrimaryChoice: true },
      { name: "Docker & Docker MCP", role: "Containerization cho MCP & Multi-services", isPrimaryChoice: true },
      { name: "Render Cloud", role: "Production Web Service & API Cloud Hosting", isPrimaryChoice: true }
    ]
  }
];
