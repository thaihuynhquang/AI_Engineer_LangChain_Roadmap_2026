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
            <div class="section-title" style="display: flex; align-items: center; gap: 0.5rem;">
              ${ICONS.cpu} Báo Cáo Chuyên Sâu: AI Application Tech Stack 2026
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
              Bức tranh công nghệ chuẩn mực phát triển ứng dụng AI từ PoC/MVP đến Production.
            </div>
          </div>
        </div>

        <!-- Reference Architecture Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
          <div class="progress-card" style="border-top: 4px solid var(--primary);">
            <div style="font-size: 1.05rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
              ${ICONS.layers} Architecture A: Modern Full-Stack AI Web App (SaaS Product)
            </div>
            <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
              • <b>Frontend:</b> Next.js (TypeScript) + TailwindCSS + Shadcn/ui + Vercel AI SDK.<br/>
              • <b>Backend:</b> Python FastAPI Server.<br/>
              • <b>Agent Orchestration:</b> LangGraph StateGraph + MCP Protocol.<br/>
              • <b>LLM Models:</b> Anthropic Claude 3.5/3.7 + DeepSeek-R1.<br/>
              • <b>Database:</b> PostgreSQL với pgvector (Hybrid Search).<br/>
              • <b>Observability:</b> LangSmith / Langfuse Tracing.
            </div>
          </div>

          <div class="progress-card" style="border-top: 4px solid var(--accent-emerald);">
            <div style="font-size: 1.05rem; font-weight: 700; color: var(--accent-emerald); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
              ${ICONS.shield} Architecture B: Enterprise Private AI Stack (Bảo Mật Nội Bộ)
            </div>
            <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
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
        <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          ${ICONS.cpu} Chi Tiết 7 Tầng Hệ Sinh Thái AI (7-Layer Ecosystem)
        </div>

        ${TECH_STACK_LAYERS.map(
          (layer) => `
          <div class="tech-layer-card">
            <div class="tech-layer-title">${layer.name}</div>
            <div class="tech-layer-desc">${layer.description}</div>

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
                      <span style="font-weight: 700;">${item.name}</span>
                      ${item.isPrimaryChoice ? '<span style="margin-left: 0.4rem; font-size: 0.7rem; background: rgba(16, 185, 129, 0.2); color: #10b981; padding: 0.1rem 0.4rem; border-radius: 4px;">Primary</span>' : ''}
                    </td>
                    <td style="color: var(--text-secondary);">${item.role}</td>
                    <td><span class="task-tag">${item.usageShare || 'Standard'}</span></td>
                  </tr>
                `
                  )
                  .join('')}
              </tbody>
            </table>
          </div>
        `
        ).join('')}
      </div>
    `;
  }
}

customElements.define('roadmap-view-techstack', RoadmapViewTechstack);
