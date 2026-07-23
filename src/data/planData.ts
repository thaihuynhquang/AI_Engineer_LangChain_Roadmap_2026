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
  title: "AI Engineer Roadmap 2026",
  subtitle: "Enterprise Knowledge AI Assistant Project",
  targetProject: "Enterprise Knowledge AI Assistant - Web Fullstack RAG & Stateful Agent",
  totalWeeks: 5,
  totalPomodoros: 150,
  totalHours: 125,
  hoursPerDay: 5,
  principles: [
    "Quy tắc 30 phút Nạp Kiến Thức: Dành 30 phút xem video / đọc conceptual docs, sau đó gõ code ngay.",
    "Xây dựng GitHub Portfolio: Commit code sau mỗi Sprint hoàn thành để có sản phẩm thực tế ấn tượng.",
    "Tự học 100% qua tài nguyên online miễn phí chuẩn 2026 (LangGraph, MCP, pgvector, Vercel AI SDK)."
  ],
  systemArchitecture: {
    frontend: "Next.js (React) + Tailwind CSS + Vercel AI SDK (Streaming SSE UI)",
    backend: "Python 3.11+ + FastAPI + LangGraph + Model Context Protocol (MCP)",
    database: "PostgreSQL với extension pgvector (Hybrid Search + HNSW Index)",
    llms: "Anthropic Claude 3.5/3.7, DeepSeek-R1, Google Gemini 2.0 / OpenAI",
    observability: "LangSmith / Langfuse (Tracing, Latency, Token Cost & Evaluation)"
  }
};

export const SPRINT_MODULES: SprintModule[] = [
  {
    id: "mod-1",
    moduleNum: 1,
    title: "Sprint 1: Core Backend & LLM Streaming",
    subtitle: "Dựng Khung Backend FastAPI & Gọi LLM API Streaming",
    statusColor: "#22c55e", // Green
    duration: "Tuần 1 (30 Pomodoros / 25h)",
    objectives: [
      "Nắm vững cơ chế gọi Chat Models API (User, System, Assistant messages)",
      "Quản lý Prompt Templates và Structured Output",
      "Xây dựng API Endpoint FastAPI hỗ trợ Server-Sent Events (SSE) streaming token-by-token"
    ],
    knowledgeToLoad: [
      "Cơ chế hoạt động Chat Models & Prompt Engineering",
      "Server-Sent Events (SSE) & Async IO trong Python FastAPI",
      "LangChain Core Prompt Templates & Output Parsers"
    ],
    deliverables: [
      {
        id: "m1-t1",
        title: "Setup môi trường Python 3.11+ & FastAPI",
        description: "Khởi tạo pyproject.toml / requirements.txt, cài đặt fastapi, langchain-core, langchain-anthropic / langchain-openai.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Setup", "FastAPI", "Python"]
      },
      {
        id: "m1-t2",
        title: "Tạo Prompt Templates & Kết nối API Mô hình",
        description: "Dùng LangChain dựng Prompt Templates, Few-shot Prompting và cấu hình API Key với .env.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["LangChain", "Prompt", "LLM API"]
      },
      {
        id: "m1-t3",
        title: "Viết API Endpoint Streaming POST /api/chat/stream",
        description: "Tạo endpoint trả kết quả token-by-token cho Client qua StreamingResponse (Server-Sent Events).",
        hoursEstimate: 8,
        pomodoros: 10,
        tags: ["SSE", "Streaming", "FastAPI"]
      },
      {
        id: "m1-t4",
        title: "Xử lý Error Handling, Middleware CORS & Pydantic Validation",
        description: "Thêm CORS middleware, Pydantic Output Parsers, xử lý Timeout & Rate Limit.",
        hoursEstimate: 7,
        pomodoros: 8,
        tags: ["CORS", "Pydantic", "Refactor"]
      }
    ],
    resources: [
      {
        id: "res-m1-1",
        title: "ChatGPT Prompt Engineering for Developers",
        type: "course",
        description: "Khóa học miễn phí DeepLearning.AI về tư duy viết prompt chuẩn và Few-shot.",
        url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
        moduleId: "mod-1",
        isFree: true
      },
      {
        id: "res-m1-2",
        title: "FastAPI Official Tutorial (Async & Streaming)",
        type: "docs",
        description: "Hướng dẫn lập trình Async Python và StreamingResponse SSE.",
        url: "https://fastapi.tiangolo.com/tutorial/",
        moduleId: "mod-1",
        isFree: true
      },
      {
        id: "res-m1-3",
        title: "LangChain Python Core Quickstart",
        type: "docs",
        description: "Cú pháp kết nối API LLM và khởi tạo Prompt Templates.",
        url: "https://python.langchain.com/docs/introduction/",
        moduleId: "mod-1",
        isFree: true
      }
    ]
  },
  {
    id: "mod-2",
    moduleNum: 2,
    title: "Sprint 2: Advanced RAG & PostgreSQL (pgvector)",
    subtitle: "Xây dựng Hệ thống Tri thức Doanh nghiệp Advanced RAG",
    statusColor: "#eab308", // Yellow
    duration: "Tuần 2 (30 Pomodoros / 25h)",
    objectives: [
      "Đọc & chia nhỏ tài liệu PDF/Markdown bằng RecursiveCharacterTextSplitter",
      "Khởi chạy PostgreSQL với pgvector bằng Docker Compose và chỉ mục HNSW",
      "Xây dựng pipeline RAG nâng cao: Query Rewriting, Hybrid Search & Reranking"
    ],
    knowledgeToLoad: [
      "Chunking Strategies & Vector Embeddings (Cosine / Inner Product)",
      "pgvector HNSW Index & Full-Text Search của PostgreSQL",
      "Advanced RAG: Query Rewriting, Hybrid Search (BM25 + Vector), Cross-Encoder Reranking"
    ],
    deliverables: [
      {
        id: "m2-t1",
        title: "Setup Docker PostgreSQL với extension pgvector",
        description: "Tạo docker-compose.yml khởi tạo Postgres + pgvector, tạo bảng SQL và chỉ mục HNSW.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["Docker", "Postgres", "pgvector"]
      },
      {
        id: "m2-t2",
        title: "Viết Document Ingestion Pipeline",
        description: "Sử dụng LangChain Loaders đọc PDF/Markdown -> Split text bằng RecursiveCharacterTextSplitter -> Embed -> Lưu pgvector.",
        hoursEstimate: 7,
        pomodoros: 8,
        tags: ["Ingestion", "Embedding", "Chunking"]
      },
      {
        id: "m2-t3",
        title: "Xây dựng Module Query Rewriter",
        description: "Dùng LLM viết lại câu hỏi người dùng trước khi tìm kiếm để tăng tỷ lệ tìm trúng tài nguyên.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["QueryRewriter", "RAG"]
      },
      {
        id: "m2-t4",
        title: "Triển khai Hybrid Search & Reranking Pipeline",
        description: "Kết hợp Vector Similarity + Postgres Full-Text Search, qua mô hình Rerank (Flashrank/Cohere) lọc lấy Top-K ngữ cảnh.",
        hoursEstimate: 8,
        pomodoros: 10,
        tags: ["HybridSearch", "Reranker", "FastAPI"]
      }
    ],
    resources: [
      {
        id: "res-m2-1",
        title: "Building Agentic RAG with LlamaIndex / LangChain",
        type: "course",
        description: "Khóa học miễn phí về RAG tự sửa lỗi, Query Rewriting & Routing.",
        url: "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/",
        moduleId: "mod-2",
        isFree: true
      },
      {
        id: "res-m2-2",
        title: "Preprocessing Data for LLMs",
        type: "course",
        description: "Phương pháp parse, làm sạch và chunking văn bản từ PDF/Markdown.",
        url: "https://www.deeplearning.ai/short-courses/preprocessing-data-for-llms/",
        moduleId: "mod-2",
        isFree: true
      },
      {
        id: "res-m2-3",
        title: "pgvector Extension Documentation",
        type: "docs",
        description: "Cú pháp SQL tạo bảng Vector, chỉ mục HNSW và Hybrid Search.",
        url: "https://github.com/pgvector/pgvector",
        moduleId: "mod-2",
        isFree: true
      },
      {
        id: "res-m2-4",
        title: "LangChain RAG Conceptual Guide",
        type: "docs",
        description: "Mẫu thiết kế Retriever nâng cao (Context Compression, Reranking).",
        url: "https://python.langchain.com/docs/concepts/rag/",
        moduleId: "mod-2",
        isFree: true
      }
    ]
  },
  {
    id: "mod-3",
    moduleNum: 3,
    title: "Sprint 3: LangGraph & Model Context Protocol (MCP)",
    subtitle: "Xây dựng AI Agent Nâng Cao với LangGraph StateGraph & MCP",
    statusColor: "#ef4444", // Red
    duration: "Tuần 3 (30 Pomodoros / 25h)",
    objectives: [
      "Thiết kế luồng suy luận lặp dạng đồ thị có trạng thái (StateGraph)",
      "Xây dựng FastMCP Server độc lập cung cấp Tools",
      "Tích hợp Checkpointer lưu trữ conversation state & Human-in-the-loop"
    ],
    knowledgeToLoad: [
      "Graph-based Control Flow: Nodes, Edges, StateGraph, Conditional Edges",
      "Model Context Protocol (MCP): Client/Server Architecture, FastMCP Python SDK",
      "State Management & Memory Persistence (Postgres Checkpointer)"
    ],
    deliverables: [
      {
        id: "m3-t1",
        title: "Khởi tạo LangGraph StateGraph Core Workflow",
        description: "Định nghĩa Agent State, Router Node, và các conditional edges xử lý luồng suy luận.",
        hoursEstimate: 6,
        pomodoros: 7,
        tags: ["LangGraph", "StateGraph", "Agent"]
      },
      {
        id: "m3-t2",
        title: "Dựng FastMCP Server cung cấp Custom Tools",
        description: "Viết MCP Server bằng Python (FastMCP) cho phép Agent truy vấn Database SQL hoặc GitHub API.",
        hoursEstimate: 7,
        pomodoros: 8,
        tags: ["MCP", "FastMCP", "Tools"]
      },
      {
        id: "m3-t3",
        title: "Đấu nối LangGraph Agent với MCP Server",
        description: "Kết nối Agent đến MCP Server qua giao thức chuẩn, tự động chọn Tool (RAG vs MCP Tool Execution).",
        hoursEstimate: 6,
        pomodoros: 7,
        tags: ["MCP Integration", "Tool Calling"]
      },
      {
        id: "m3-t4",
        title: "Tích hợp Postgres Checkpointer & Human-in-the-loop",
        description: "Lưu giữ hội thoại đa lượt (Multi-turn), cho phép tạm dừng luồng xin phê duyệt từ người dùng.",
        hoursEstimate: 6,
        pomodoros: 8,
        tags: ["Persistence", "Checkpointer", "Memory"]
      }
    ],
    resources: [
      {
        id: "res-m3-1",
        title: "AI Agents in LangGraph (by Harrison Chase)",
        type: "course",
        description: "Khóa học miễn phí về xây dựng Stateful Agents & Memory.",
        url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/",
        moduleId: "mod-3",
        isFree: true
      },
      {
        id: "res-m3-2",
        title: "LangGraph Academy",
        type: "course",
        description: "Chương trình đào tạo chính thức của LangChain về kiến trúc StateGraph.",
        url: "https://academy.langchain.com/",
        moduleId: "mod-3",
        isFree: true
      },
      {
        id: "res-m3-3",
        title: "Model Context Protocol Official Docs",
        type: "docs",
        description: "Chuẩn giao thức mở của Anthropic giúp Agent kết nối an toàn với Tools & DBs.",
        url: "https://modelcontextprotocol.io",
        moduleId: "mod-3",
        isFree: true
      },
      {
        id: "res-m3-4",
        title: "FastMCP Python SDK GitHub",
        type: "repo",
        description: "Thư viện Python dựng MCP Server cực nhanh với cú pháp decorator.",
        url: "https://github.com/jlowin/fastmcp",
        moduleId: "mod-3",
        isFree: true
      }
    ]
  },
  {
    id: "mod-4",
    moduleNum: 4,
    title: "Sprint 4: Web UI Real-time & Vercel AI SDK",
    subtitle: "Đấu Nối Web UI Next.js & Streaming Real-time",
    statusColor: "#3b82f6", // Blue
    duration: "Tuần 4 (30 Pomodoros / 25h)",
    objectives: [
      "Dựng giao diện Web thương mại bằng Next.js (App Router) + Tailwind CSS + Shadcn/ui",
      "Kết nối API FastAPI Backend thông qua Vercel AI SDK (useChat hook)",
      "Hiển thị render Markdown, Syntax Highlighting & Badges trạng thái Agent"
    ],
    knowledgeToLoad: [
      "Next.js App Router (Client & Server Components)",
      "Vercel AI SDK (useChat, streamText, SSE client)",
      "Shadcn/ui & Tailwind CSS layout"
    ],
    deliverables: [
      {
        id: "m4-t1",
        title: "Setup Next.js (App Router) + Tailwind CSS + Shadcn/ui",
        description: "Khởi tạo Web frontend, thiết kế Chat layout (Sidebar, Chat area, Input bar).",
        hoursEstimate: 6,
        pomodoros: 7,
        tags: ["Next.js", "Tailwind", "Shadcn"]
      },
      {
        id: "m4-t2",
        title: "Tích hợp Vercel AI SDK (useChat hook)",
        description: "Kết nối UI Chat với FastAPI SSE Streaming Endpoint từ Backend.",
        hoursEstimate: 6,
        pomodoros: 7,
        tags: ["Vercel AI SDK", "useChat", "SSE"]
      },
      {
        id: "m4-t3",
        title: "Render Markdown, Code Highlighting & File Upload UI",
        description: "Thêm react-markdown, syntax highlight, copy button và giao diện upload file PDF.",
        hoursEstimate: 7,
        pomodoros: 8,
        tags: ["Markdown", "SyntaxHighlight", "Upload"]
      },
      {
        id: "m4-t4",
        title: "Xây dựng Agent Status Badges & Responsive UX",
        description: "Hiển thị Badge trạng thái suy luận ('Agent đang tra cứu RAG...', 'Agent gọi MCP Tool...'), autoscroll và mobile layout.",
        hoursEstimate: 6,
        pomodoros: 8,
        tags: ["StatusBadges", "UX", "Responsive"]
      }
    ],
    resources: [
      {
        id: "res-m4-1",
        title: "Vercel AI SDK Documentation",
        type: "docs",
        description: "Thư viện React Hooks chuẩn (useChat, streamText) kết nối LLM Streaming.",
        url: "https://sdk.vercel.ai/docs",
        moduleId: "mod-4",
        isFree: true
      },
      {
        id: "res-m4-2",
        title: "Vercel AI SDK FastAPI Integration Guide",
        type: "docs",
        description: "Hướng dẫn đấu nối Next.js với Python FastAPI qua SSE.",
        url: "https://sdk.vercel.ai/docs/guides/frameworks/fastapi",
        moduleId: "mod-4",
        isFree: true
      },
      {
        id: "res-m4-3",
        title: "Next.js Official Documentation",
        type: "docs",
        description: "Hướng dẫn App Router, React Server Components.",
        url: "https://nextjs.org/docs",
        moduleId: "mod-4",
        isFree: true
      }
    ]
  },
  {
    id: "mod-5",
    moduleNum: 5,
    title: "Sprint 5: Production LLMOps & Deployment",
    subtitle: "LLMOps, Tracing, Evaluation & Đóng Gói Docker",
    statusColor: "#a855f7", // Purple
    duration: "Tuần 5 (30 Pomodoros / 25h)",
    objectives: [
      "Gắn LangSmith / Langfuse Tracing vào FastAPI Backend để đo Latency & Token cost",
      "Xây dựng Evaluation Test Suite (20-30 câu hỏi) đo Context Recall & Faithfulness",
      "Đóng gói ứng dụng Fullstack bằng Docker Compose sẵn sàng triển khai Cloud"
    ],
    knowledgeToLoad: [
      "Tracing & Observability (Spans, Latency, Token Usage)",
      "Evaluation Metrics (Ragas / DeepEval: Precision, Recall, Faithfulness)",
      "Containerization với Docker Compose multi-container"
    ],
    deliverables: [
      {
        id: "m5-t1",
        title: "Tích hợp LangSmith / Langfuse Tracing",
        description: "Gắn Tracing SDK vào FastAPI backend, theo dõi luồng suy luận và token cost trên Dashboard.",
        hoursEstimate: 5,
        pomodoros: 6,
        tags: ["LangSmith", "Langfuse", "Tracing"]
      },
      {
        id: "m5-t2",
        title: "Viết Evaluation Test Suite tự động",
        description: "Tạo dataset 20-30 câu hỏi, dùng Ragas/DeepEval đo đạc Context Recall & phát hiện Hallucination.",
        hoursEstimate: 7,
        pomodoros: 8,
        tags: ["Evaluation", "Ragas", "Test"]
      },
      {
        id: "m5-t3",
        title: "Viết Dockerfile & docker-compose.yml",
        description: "Đóng gói Frontend Next.js + Backend FastAPI + Postgres pgvector + Langfuse.",
        hoursEstimate: 7,
        pomodoros: 8,
        tags: ["Docker", "Docker Compose", "Deployment"]
      },
      {
        id: "m5-t4",
        title: "End-to-End Testing & Hoàn thiện Repository Documentation",
        description: "Test khởi chạy fullstack bằng 1 lệnh docker compose up, cập nhật README.md & demo video.",
        hoursEstimate: 6,
        pomodoros: 8,
        tags: ["E2E Testing", "README", "Portfolio"]
      }
    ],
    resources: [
      {
        id: "res-m5-1",
        title: "Evaluating & Debugging Generative AI Models",
        type: "course",
        description: "Khóa học DeepLearning.AI về đo đạc chất lượng RAG và phát hiện Hallucination.",
        url: "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/",
        moduleId: "mod-5",
        isFree: true
      },
      {
        id: "res-m5-2",
        title: "LangSmith Documentation",
        type: "docs",
        description: "Tracing toàn bộ luồng suy luận LangChain/LangGraph.",
        url: "https://docs.smith.langchain.com/",
        moduleId: "mod-5",
        isFree: true
      },
      {
        id: "res-m5-3",
        title: "Langfuse Open-Source LLMOps Docs",
        type: "docs",
        description: "Giải pháp Observability mã nguồn mở tự host bằng Docker.",
        url: "https://langfuse.com/docs",
        moduleId: "mod-5",
        isFree: true
      },
      {
        id: "res-m5-4",
        title: "Docker Compose Documentation",
        type: "docs",
        description: "Đóng gói multi-container cho hệ thống AI Fullstack.",
        url: "https://docs.docker.com/compose/",
        moduleId: "mod-5",
        isFree: true
      }
    ]
  }
];

// Generate 5 Weeks x 5 Days x 6 Pomodoros = 150 Pomodoros
export const generateDailySchedule = (): DailyScheduleDay[] => {
  const days: DailyScheduleDay[] = [];
  const dayNames = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6"];
  
  const weekThemes = [
    [
      "API Chat Models & Setup Environment",
      "Async IO & Server-Sent Events (SSE)",
      "Memory & Connection Pooling FastAPI",
      "Pydantic Output Parsers & Data Model",
      "Kiểm thử Sprint 1 & Commit GitHub"
    ],
    [
      "Setup Postgres pgvector với Docker",
      "Document Loaders & Text Chunking",
      "Building Agentic RAG & Query Rewriter",
      "Hybrid Search & Reranking Pipeline",
      "Benchmark Latency & Commit Sprint 2"
    ],
    [
      "StateGraph & Router Node LangGraph",
      "Model Context Protocol & FastMCP Server",
      "Agent Tool Selection (RAG vs MCP)",
      "Checkpointer Persistence & Human-in-the-loop",
      "Refactor Graph Agent & Commit Sprint 3"
    ],
    [
      "Setup Next.js 14+ & Chat Layout",
      "Vercel AI SDK & SSE Integration",
      "Markdown Renderer & Code Highlighting",
      "Agent Status Badges & File Upload UI",
      "UX/UI Edge Cases & Commit Sprint 4"
    ],
    [
      "LangSmith / Langfuse Tracing Integration",
      "Ragas Evaluation Test Suite & Metrics",
      "Dockerfile & docker-compose.yml Multi-container",
      "End-to-End Docker Compose Test",
      "Update README, Demo Video & Final Commit"
    ]
  ];

  for (let w = 1; w <= 5; w++) {
    for (let d = 1; d <= 5; d++) {
      const dayName = dayNames[d - 1];
      const theme = weekThemes[w - 1][d - 1];
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
            details: "Xem video DeepLearning.AI / Đọc Conceptual Docs (50 phút)"
          },
          {
            id: `${dayId}-p2`,
            pomIndex: 2,
            timeSlot: "13:55 - 14:45",
            period: "afternoon",
            label: "P2: Tra Cứu Pattern",
            details: "Nghiên cứu Official Docs & Code Pattern 2026 (50 phút)"
          },
          {
            id: `${dayId}-p3`,
            pomIndex: 3,
            timeSlot: "15:05 - 15:55",
            period: "afternoon",
            label: "P3: Heavy Coding 1",
            details: "Viết code core Backend / DB / Agent Graph (50 phút)"
          },
          {
            id: `${dayId}-p4`,
            pomIndex: 4,
            timeSlot: "16:00 - 16:50",
            period: "afternoon",
            label: "P4: Heavy Coding 2",
            details: "Hoàn thiện logic & Test API Endpoints (50 phút)"
          },
          {
            id: `${dayId}-p5`,
            pomIndex: 5,
            timeSlot: "22:00 - 22:50",
            period: "evening",
            label: "P5: UI & Debugging",
            details: "Đấu nối Frontend / Debugging / Edge Cases (50 phút)"
          },
          {
            id: `${dayId}-p6`,
            pomIndex: 6,
            timeSlot: "22:55 - 23:45",
            period: "evening",
            label: "P6: Refactor & Git Commit",
            details: "Dọn dẹp code, chạy Test Suite & Push Commit lên GitHub (50 phút)"
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
    description: "Giao diện web người dùng, streaming response token-by-token và trải nghiệm chat tương tác.",
    items: [
      { name: "Next.js (React)", role: "Standard Full-stack Framework", usageShare: "44%", isPrimaryChoice: true },
      { name: "Vercel AI SDK", role: "React Hooks (useChat, streamText)", isPrimaryChoice: true },
      { name: "Tailwind CSS + Shadcn/ui", role: "Design System & Glassmorphism UI", isPrimaryChoice: true },
      { name: "Streamlit / Gradio", role: "Python Internal Demo & Data Apps", usageShare: "Alternative" }
    ]
  },
  {
    layerNum: 2,
    name: "2. Agent & Orchestration Layer",
    description: "Khung điều phối suy luận lặp, quản lý trạng thái và giao tiếp qua chuẩn giao thức.",
    items: [
      { name: "LangGraph (StateGraph)", role: "Stateful Production Agents & Memory", usageShare: "57% Enterprise", isPrimaryChoice: true },
      { name: "Model Context Protocol (MCP)", role: "Standard Protocol for Tool & DB Access", isPrimaryChoice: true },
      { name: "LangChain Core", role: "LLM Chains & Prompt Templates", isPrimaryChoice: true },
      { name: "LlamaIndex", role: "Deep Indexing & Complex RAG Retrieval", usageShare: "Alternative" }
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
      { name: "PostgreSQL (pgvector)", role: "Default Choice for RAG & Hybrid Search (HNSW Index)", isPrimaryChoice: true },
      { name: "Qdrant", role: "Dedicated High-Performance Vector DB (Rust)", usageShare: "Dedicated Option" },
      { name: "Pinecone", role: "Managed SaaS Vector DB", usageShare: "SaaS Option" }
    ]
  },
  {
    layerNum: 5,
    name: "5. LLMOps & Observability",
    description: "Theo dõi luồng suy luận (Tracing), kiểm soát chi phí token, latency và kiểm thử chất lượng.",
    items: [
      { name: "LangSmith", role: "Deep Tracing & Latency / Token Cost Debugging", isPrimaryChoice: true },
      { name: "Langfuse", role: "Open-Source Self-Hosted LLMOps via Docker", isPrimaryChoice: true },
      { name: "Ragas / DeepEval", role: "Automated Evaluation (Precision, Recall, Faithfulness)", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 6,
    name: "6. Data Ingestion & Document AI",
    description: "Xử lý, làm sạch và trích xuất bảng biểu từ PDF/Markdown.",
    items: [
      { name: "LangChain Loaders & Splitters", role: "RecursiveCharacterTextSplitter", isPrimaryChoice: true },
      { name: "Docling / Unstructured.io", role: "Open-source Document Parsing (PDF, Docx, PPTX)", isPrimaryChoice: true }
    ]
  },
  {
    layerNum: 7,
    name: "7. Languages & Runtimes",
    description: "Môi trường thực thi backend và frontend.",
    items: [
      { name: "Python 3.11+", role: "Backend AI Engine & FastAPI", usageShare: "58% Dominant", isPrimaryChoice: true },
      { name: "TypeScript / Node 20+", role: "Frontend Web UI & Type Safety", usageShare: "44%", isPrimaryChoice: true },
      { name: "Docker Compose", role: "Multi-container Production Packaging", isPrimaryChoice: true }
    ]
  }
];
