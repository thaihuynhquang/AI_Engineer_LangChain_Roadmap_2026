import { TECH_STACK_LAYERS } from '../data/planData';
import { registerRenderListener, unregisterRenderListener } from '../renderer';
import { ICONS } from '../utils/icons';

export class RoadmapViewTechstack extends HTMLElement {
  private boundRefresh = this.refresh.bind(this);

  connectedCallback(): void {
    registerRenderListener(this.boundRefresh);
    this.refresh();
  }

  disconnectedCallback(): void {
    unregisterRenderListener(this.boundRefresh);
  }

  refresh(): void {
    this.innerHTML = `
      <div class="techstack-container">
        <div class="section-header">
          <div>
            <div class="section-title section-title-flex">
              ${ICONS.cpu} Báo Cáo Chuyên Sâu: AI Application Tech Stack 2026
            </div>
            <div class="section-subtitle-muted">
              Bức tranh công nghệ chuẩn mực phát triển ứng dụng AI từ PoC/MVP đến Production.
            </div>
          </div>
        </div>

        <!-- Reference Architecture Cards -->
        <div class="techstack-grid">
          <div class="progress-card progress-card--top-primary">
            <div class="roadmap-summary-title">
              ${ICONS.layers} Architecture A: Modern Full-Stack AI Web App (SaaS Product)
            </div>
            <div class="progress-card-desc--lineheight">
              • <b>Frontend:</b> Next.js (TypeScript) + TailwindCSS + Shadcn/ui + Vercel AI SDK.<br/>
              • <b>Backend:</b> Python FastAPI Server.<br/>
              • <b>Agent Orchestration:</b> LangGraph StateGraph + MCP Protocol.<br/>
              • <b>LLM Models:</b> Anthropic Claude 3.5/3.7 + DeepSeek-R1.<br/>
              • <b>Database:</b> PostgreSQL với pgvector (Hybrid Search).<br/>
              • <b>Observability:</b> LangSmith / Langfuse Tracing.
            </div>
          </div>

          <div class="progress-card progress-card--top-emerald">
            <div class="progress-card-header-title--emerald">
              ${ICONS.shield} Architecture B: Enterprise Private AI Stack (Bảo Mật Nội Bộ)
            </div>
            <div class="progress-card-desc--lineheight">
              • <b>Serving Layer:</b> vLLM Cluster (Chạy trên On-Premise GPU).<br/>
              • <b>Open-Source Model:</b> Llama 3.3 70B / DeepSeek-V3.<br/>
              • <b>Vector DB:</b> Qdrant hoặc Milvus (Rust/Go engine).<br/>
              • <b>Orchestration:</b> LangGraph + FastMCP Server.<br/>
              • <b>Document Parsing:</b> Docling / Unstructured.io.<br/>
              • <b>Observability:</b> Langfuse Self-hosted (Docker).
            </div>
          </div>
        </div>

        <!-- 7 Layers Breakdown -->
        <div class="techstack-heading">
          ${ICONS.cpu} Chi Tiết 7 Tầng Hệ Sinh Thái AI (7-Layer Ecosystem)
        </div>

        ${TECH_STACK_LAYERS.map(
          (layer) => `
          <div class="tech-layer-card">
            <div class="tech-layer-title">${layer.name}</div>
            <div class="tech-layer-desc">${layer.description}</div>

            <div class="table-wrapper">
              <table class="tech-table">
                <thead>
                  <tr>
                    <th>Công nghệ</th>
                    <th>Vai trò trong hệ thống</th>
                    <th>Xu hướng / Thị phần</th>
                  </tr>
                </thead>
                <tbody>
                  ${layer.items
                    .map(
                      (item) => `
                    <tr>
                      <td>
                        <span class="techstack-item-name">${item.name}</span>
                        ${item.isPrimaryChoice ? '<span class="badge-primary-choice">Primary</span>' : ''}
                      </td>
                      <td class="tech-table-cell-muted">${item.role}</td>
                      <td><span class="task-tag" title="${item.usageShare || 'Standard'}">${item.usageShare || 'Standard'}</span></td>
                    </tr>
                  `
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </div>
        `
        ).join('')}
      </div>
    `;
  }
}

customElements.define('roadmap-view-techstack', RoadmapViewTechstack);
