# 🛑 Hướng Dẫn Lập Tiêu Chí Từ Bỏ & Quản Trị Chi Phí Chìm (Quit Criteria & Sunk Cost Management)
## Dành Cho Lộ Trình Agentic AI Master Curriculum (2026)

Tài liệu này hướng dẫn cách áp dụng **Phương pháp Lập Tiêu chí Từ bỏ (Quit Criteria / Kill Criteria)** nhằm nhận diện sớm rủi ro, kiểm soát tâm lý tiếc công sức/thời gian đã bỏ ra (**Sunk Cost Fallacy**), và chủ động xoay trục (pivot) để đảm bảo hoàn thành lộ trình tự học AI Engineer 2026 một cách tối ưu và thực tế nhất.

---

## 📖 1. Đặt Vấn Đề & Bản Chất Lý Thuyết

### 1.1 Bẫy Chi Phí Chìm (Sunk Cost Fallacy) Trong Tự Học AI
* **Khái niệm:** Xu hướng tâm lý tiếp tục tiêu tốn thêm thời gian, năng lượng và tiền bạc vào một chủ đề/bài tập/dự án không còn hiệu quả hoặc vượt quá khả năng hiện tại, chỉ vì tiếc nguồn lực đã lỡ bỏ ra trước đó (vốn không thể thu hồi).
* **Biểu hiện thực tế:** 
  - Mắc kẹt 2–3 ngày ở khâu setup môi trường (PostgreSQL `pgvector`, Docker, vLLM local) nhưng không chịu chuyển sang giải pháp thay thế đơn giản hơn vì "đã lỡ mất cả buổi chiều gõ lệnh".
  - Dự án thực hành (Project 2/3/4) bị phình to phạm vi (Scope Creep), làm quá số Pomodoros định mức nhưng vẫn cố "cày" xuyên đêm thay vì cắt giảm tính năng (descoping).

### 1.2 Nguyên Lý "Cầu Chì Tự Ngắt" (Tripwire Mechanism)
* **Tiêu chí từ bỏ (Quit Criteria):** Là tập hợp các quy tắc định lượng & định tính được thiết lập **trước khi học**, đóng vai trò như một "cầu chì tự ngắt". 
* **Tác dụng:** Khi các điều kiện tiêu cực chạm ngưỡng kích hoạt (Trigger), quyết định dừng lại, lùi bước hoặc cắt giảm phạm vi sẽ diễn ra **tự động**, loại bỏ hoàn toàn yếu tố cảm xúc (tiếc nuối, sợ thất bại, sợ mất mặt).

---

## 📊 2. Phân Tích Độ Phức Tạp Lộ Trình & Các Điểm Gãy (Choke Points)

Lộ trình **Agentic AI Master Curriculum** gồm **12 Master Modules** (Module 0 Nền Tảng + 10 Module Cốt Lõi + 1 Module Tùy Chọn), **363 Pomodoros** ($\approx 181.5$ giờ tập trung), **4 Projects lớn**, kéo dài **12 tuần** với cường độ **6 Pomodoros/ngày (30 Poms/tuần)**.

```
[Tuần 1-2: Nền tảng] ──► 🚨 CHOKE POINT 1 ──► 🚨 CHOKE POINT 2 ──► 🚨 CHOKE POINT 3
  (LCEL & Ingestion)     (Tuần 3-4: RAG & pgvector) (Tuần 6-8: Multi-Agent & LLMOps) (Tuần 9-11: Full-stack Web AI)
```

### 🚨 Choke Point 1: Tuần 3–4 | Module 4 & Project 2 (Advanced RAG & `pgvector`)
* **Định mức:** 43 Pomodoros (Module lớn thứ 2 trong lộ trình).
* **Rủi ro sa lầy:** Chuyển đổi từ ChromaDB local sang CSDL PostgreSQL + `pgvector` (HNSW/IVFFlat indexing, Hybrid Search).
* **Bẫy chi phí chìm:** Dành hơn 20 Pomodoros chỉ để debug SQL/Docker container thay vì tập trung xây dựng logic RAG Retrieval.

### 🚨 Choke Point 2: Tuần 6–8 | Module 6, 7 & Project 3, Project 4 (Multi-Agent, LLMOps, Security, Cloud Deploy)
* **Định mức:** 118 Pomodoros (Chiếm $> 1/3$ tổng khối lượng cả khóa).
* **Rủi ro sa lầy:** Độ phức tạp hệ thống tăng vọt với `Supervisor Agent`, `Agent Handoffs`, `Blackboard Pattern`, đóng gói `FastAPI` + `Docker`, đánh giá RAG bằng `Arize/Ragas` và deploy Cloud lên `Render`.
* **Bẫy chi phí chìm:** Bị ngợp giữa quá nhiều công cụ phụ trợ. Học viên nản chí khi Project 3/4 kéo dài quá 2 tuần nhưng tiếc công sức 50% chặng đường đã đi qua nên cố học đối phó (chỉ đọc code mà không chạy được app).

### 🚨 Choke Point 3: Tuần 10–11 | Module 9, 10 & 11 (Open-Source LLMs vLLM/Ollama & Full-Stack Next.js 15 AI)
* **Định mức:** 81 Pomodoros.
* **Rủi ro sa lầy:** Dịch chuyển ngôn ngữ & công nghệ từ Python Backend sang TypeScript / Next.js 15 / Tailwind / Vercel AI SDK.
* **Bẫy chi phí chìm:** Mắc kẹt ở phần giao diện Web UI (CSS, React State) khiến xao nhãng khỏi kiến thức cốt lõi là AI Engineering.

---

## 🎯 3. Khung 4 Bộ Tiêu Chí Từ Bỏ (Quit Criteria Framework)

Để đảm bảo tiến độ và sức bền tâm lý, học viên bắt buộc phải kích hoạt 4 Bộ Tiêu chí Từ bỏ sau đây khi chạm ngưỡng:

### 3.1 Ngưỡng 1: Ngưỡng Vận Tốc Thời Gian (Time & Velocity Tripwire)
* **Quy tắc:** Mỗi Module có số Pomodoros quy định tại [schedule.md](./schedule.md).
* **Trigger:** Khi thời gian thực tế tiêu tốn cho 1 Module vượt quá **$150\%$ số Pomodoros định mức** mà chưa hoàn thành $70\%$ bài tập.
* **Hành động Từ bỏ (Pivot Action):** 
  - **Tắt chế độ tự viết code từ đầu (Kill Self-coding from scratch).**
  - Chuyển sang chiến thuật **"Read & Refactor Code Sample"**: Clone code mẫu hoàn chỉnh từ repo Packt hoặc tài liệu chính thức, đọc hiểu luồng, chạy debug và chuyển ngay sang Module tiếp theo.

### 3.2 Ngưỡng 2: Ngưỡng Phạm Vi Dự Án (Project Descoping Trigger)
* **Quy tắc Ngân sách Pomodoro Dự án:** Project 1 (10 Poms), Project 2 (16 Poms), Project 3 (20 Poms), Project 4 (32 Poms).
* **Trigger:** Khi đã tiêu tốn **$60\%$ ngân sách Pomodoro của Project** nhưng chưa chạy được luồng Input $\rightarrow$ Output cơ bản (MVP).
* **Hành động Từ bỏ (Pivot Action):**
  - **Thực hiện Cắt giảm Tính năng (Feature Descoping) ngay lập tức:**
    * *Project 2 (AI Research Assistant):* Loại bỏ Hybrid Search và `pgvector` HNSW, lùi về dùng ChromaDB + Standard Vector Search.
    * *Project 3 (Multi-Agent System):* Loại bỏ Blackboard Pattern, lùi về dùng cấu trúc 2-Agent Supervisor đơn giản.
    * *Project 4 (Final Full-Stack):* Loại bỏ Next.js UI phức tạp, lùi về dùng FastAPI Swagger UI / Streamlit UI.

### 3.3 Ngưỡng 3: Ngưỡng Cường Độ & Sức Bền (Energy & Burnout Tripwire)
* **Quy tắc:** Chuẩn 30 Pomodoros/tuần (6 Pomodoros/ngày).
* **Trigger:** Hoàn thành thực tế **$< 15$ Pomodoros/tuần trong 2 tuần liên tiếp** (Hiệu suất giảm dưới $50\%$).
* **Hành động Từ bỏ (Pivot Action):**
  - **HỦY BỎ KHUNG THỜI GIAN 12 TUẦN (Kill 12-week deadline).**
  - Tái cấu trúc lịch: Bỏ ca Tối (22:00–24:00), chỉ duy trì ca Chiều (4 Pomodoros/ngày). Giãn toàn bộ lộ trình từ 12 tuần thành **18–20 tuần**.

### 3.4 Ngưỡng 4: Ngưỡng Cắt Giảm Module Tùy Chọn (Optional Scope Kill Criteria)
* **Quy tắc:** Module 11 (MCP Masterclass - Anthropic) đã được gắn nhãn **Optional** tại [online_learning_guide.md](./online_learning_guide.md#module-11).
* **Trigger:** Khi bắt đầu Tuần 10 nhưng tổng thời gian thực tế đã mất $> 10$ tuần (do bị chậm ở các Module trước).
* **Hành động Từ bỏ (Pivot Action):**
  - **HỦY BỎ HOÀN TOÀN MODULE 11 (Kill Module 11).**
  - Sử dụng kiến thức MCP cơ bản ở Module 8 làm chuẩn. Dành trọn 34 Pomodoros tiết kiệm được để tập trung hoàn thiện Project 4 và tốt nghiệp với 11 Module (Module 0 Nền Tảng + 10 Module Cốt Lõi).

---

## 🔮 4. Kỹ Thuật Phân Tích Pre-Mortem & Chi Phí Cơ Hội

### 4.1 Kịch Bản Phân Tích Pre-Mortem (Phân Tích Tử Thi Trước Trận Đấu)
* **Giả định thất bại:** *"Giả sử sau 3 tháng, học viên bỏ dở lộ trình ở Tuần 6 và không có sản phẩm nào đưa vào Portfolio."*
* **Nguyên nhân cốt lõi phát hiện được:**
  1. Thiếu kỷ luật ở ca tối (22:00 - 24:00) do cơ thể quá mệt mỏi sau ngày làm việc.
  2. Sa lầy vào cấu hình môi trường phức tạp (PostgreSQL, Docker Compose, vLLM).
  3. Ảo tưởng tiến độ: Đọc docs/xem video nhiều nhưng không gõ code thực hành.
* **Giải pháp phòng ngừa chủ động:**
  - Chuẩn bị sẵn môi trường Docker pre-configured hoặc dùng Google Colab / Neon Postgres Cloud thay vì setup local.
  - Luôn tuân thủ ca Tối là ca nhẹ nhàng: Refactoring, viết Unit Test và học Flashcards trên Gemini Notebook.

### 4.2 Phân Tích Chi Phí Cơ Hội (Opportunity Cost)
* **363 Pomodoros ($\approx 181.5$ giờ focus):** Bằng thời gian xây dựng 1 ứng dụng SaaS AI hoàn chỉnh đưa ra thị trường hoặc viết 15 bài blog phân tích chuyên sâu.
* **Nguyên tắc hành động:** Mỗi Pomodoro chi ra phải thu về **Artifacts chạy được (Working Code / Commits)**. Nếu qua 2 Pomodoros mà không viết được dòng code hay ghi chú nào, lập tức DỪNG xem video và chuyển sang viết bài tập thực hành.

---

## 📋 5. Ma Trận Quyết Định Từ Bỏ Theo Chi Tiết 12 Modules

| Module | Tên Module | Định mức (Poms) | Trigger Kích Hoạt Từ Bỏ | Hành động Xoay Trục (Pivot Action) |
| :--- | :--- | :---: | :--- | :--- |
| **Module 0** | Python AsyncIO Foundations | 12 Poms | Mắc kẹt syntax async/await / Event Loop > 3 Poms | Đọc tóm tắt [async_python_guide.md](./async_python_guide.md) & học tập trung code mẫu trên Async Python Playground, bỏ qua tự viết từ đầu |
| **Module 1** | LangChain Foundations | 24 Poms | Mắc kẹt setup API Keys/LCEL > 4 Poms | Chuyển sang dùng OpenAI/Anthropic SDK thuần hoặc Colab |
| **Module 2** | Chain Patterns & LCEL | 16 Poms | Lỗi chuỗi đa nhánh `RunnableParallel` > 3 Poms | Dùng code mẫu Runnable Sequence tuyến tính đơn giản |
| **Module 3** | Data Ingestion & LlamaParse | 23 Poms | LlamaParse API lỗi parse PDF > 3 Poms | Dùng `PyPDFLoader` mặc định, bỏ qua parse bảng phức tạp |
| **Module 4** | Advanced RAG & `pgvector` | 43 Poms | Lỗi CSDL PostgreSQL/`pgvector` > 6 Poms | Dùng **Neon Postgres Cloud** hoặc quay lại **ChromaDB** |
| **Module 5** | LangGraph Deep Dive | 30 Poms | Lỗi State Schema / Reducers > 5 Poms | Dùng `MessageState` mặc định của LangGraph |
| **Module 6** | Multi-Agent Architectures | 52 Poms | Supervisor Agent bị lặp vô tận > 6 Poms | Giảm số Worker Agents xuống 2, bỏ Blackboard Pattern |
| **Module 7** | Production LLMOps & Security | 66 Poms | Docker / Render Cloud deploy lỗi > 8 Poms | Triển khai FastAPI Local + ngrok demo, bỏ Render |
| **Module 8** | MCP Quickstart | 16 Poms | FastMCP Transport SSE lỗi > 3 Poms | Chỉ dùng Stdio Transport đơn giản |
| **Module 9** | Open-Source LLMs (vLLM) | 20 Poms | Máy local không đủ VRAM chạy vLLM > 3 Poms | Dùng Ollama local hoặc Groq API (Free Cloud Inference) |
| **Module 10** | Full-Stack Web AI (Next.js) | 27 Poms | Next.js App Router / Tailwind lỗi > 5 Poms | Dùng **Streamlit** hoặc **FastAPI HTML UI** |
| **Module 11** | MCP Masterclass (Anthropic) | 34 Poms | Bị chậm tiến độ tổng hợp > 1 tuần | **HỦY BỎ MODULE 11 (OPTIONAL)** |

---

## 🛠️ 6. Quy Trình 4 Bước Áp Dụng Thực Tế Hàng Ngày

```
[Bước 1: Rà soát Đầu Ca] ──► [Bước 2: Đo đạc Pomodoro] ──► [Bước 3: Đối chiếu Trigger] ──► [Bước 4: Thực thi Pivot]
```

1. **Bước 1 (Rà soát đầu ca):** Kiểm tra mục tiêu Pomodoro của ca học tại [schedule.md](./schedule.md).
2. **Bước 2 (Đo đạc Pomodoro):** Đếm chính xác số Pomodoro tiêu tốn cho bài tập/task hiện tại.
3. **Bước 3 (Đối chiếu Trigger):** Nếu phát hiện số Pomodoro chạm mốc $150\%$ định mức hoặc phát sinh lỗi blocked quá 3 Poms $\rightarrow$ Kích hoạt trạng thái cảnh báo.
4. **Bước 4 (Thực thi Pivot):** Tra cứu **Ma trận Quyết định tại Mục 5** và thực hiện ngay hành động xoay trục không do dự.

---
*Tài liệu này là bộ khung nguyên tắc bắt buộc kết hợp cùng [online_learning_guide.md](./online_learning_guide.md), [schedule.md](./schedule.md), và [resources.md](./resources.md) để đảm bảo hoàn thành khóa học thành công.*
