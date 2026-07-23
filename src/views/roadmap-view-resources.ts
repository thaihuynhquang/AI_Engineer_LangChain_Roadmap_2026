import { SPRINT_MODULES } from '../data/planData';
import { getState, toggleResourceFlag } from '../state/storage';
import { registerRenderListener, unregisterRenderListener } from '../renderer';

export class RoadmapViewResources extends HTMLElement {
  private boundRefresh = this.refresh.bind(this);
  private selectedModuleId: string = 'all';

  connectedCallback(): void {
    registerRenderListener(this.boundRefresh);
    this.refresh();
  }

  disconnectedCallback(): void {
    unregisterRenderListener(this.boundRefresh);
  }

  refresh(): void {
    const { resourceFlags } = getState();

    // Flatten all resources
    const allResources = SPRINT_MODULES.flatMap((s) => s.resources);
    const filteredResources =
      this.selectedModuleId === 'all'
        ? allResources
        : allResources.filter((r) => r.moduleId === this.selectedModuleId);

    this.innerHTML = `
      <div class="resources-container">
        <div class="section-header">
          <div>
            <div class="section-title">📚 Thư Viện Tài Nguyên Học Tập & Tra Cứu (100% Online Free)</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
              Danh sách khóa học video miễn phí từ DeepLearning.AI & tài liệu official docs 2026.
            </div>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
          <button class="action-btn btn-res-filter ${this.selectedModuleId === 'all' ? 'active' : ''}" data-mod="all"
            style="${this.selectedModuleId === 'all' ? 'background: var(--primary); color: white;' : ''}">
            Tất Cả Modules
          </button>
          ${SPRINT_MODULES.map(
            (s) => `
            <button class="action-btn btn-res-filter ${this.selectedModuleId === s.id ? 'active' : ''}" data-mod="${s.id}"
              style="${this.selectedModuleId === s.id ? 'background: var(--primary); color: white;' : ''}">
              Module ${s.moduleNum}
            </button>
          `
          ).join('')}
        </div>

        <!-- Resource Cards Grid -->
        <div class="resources-grid">
          ${filteredResources
            .map((res) => {
              const isFlagged = !!resourceFlags[res.id];
              const badgeBg =
                res.type === 'course'
                  ? 'rgba(16, 185, 129, 0.15)'
                  : res.type === 'docs'
                  ? 'rgba(99, 102, 241, 0.15)'
                  : 'rgba(245, 158, 11, 0.15)';
              const badgeColor =
                res.type === 'course' ? '#10b981' : res.type === 'docs' ? '#6366f1' : '#f59e0b';
              const typeText =
                res.type === 'course'
                  ? '📹 Video Course'
                  : res.type === 'docs'
                  ? '📖 Official Docs'
                  : '🐍 Code Repo';

              return `
                <div class="resource-card">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                      <span class="resource-type-badge" style="background: ${badgeBg}; color: ${badgeColor};">
                        ${typeText}
                      </span>
                      <button 
                        class="action-btn btn-flag-resource" 
                        data-res-id="${res.id}"
                        title="Đánh dấu tài nguyên này"
                        style="padding: 0.2rem 0.4rem; font-size: 0.9rem;"
                      >
                        ${isFlagged ? '⭐' : '☆'}
                      </button>
                    </div>

                    <div class="resource-title">${res.title}</div>
                    <div class="resource-desc">${res.description}</div>
                  </div>

                  <div class="resource-footer">
                    <span style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 600;">
                      ${res.isFree ? '🎓 Miễn phí 100%' : 'Trả phí'}
                    </span>
                    <a 
                      href="${res.url}" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="action-btn"
                      style="background: var(--primary-glow); color: var(--primary); border-color: rgba(99, 102, 241, 0.3);"
                    >
                      Mở Link 🔗
                    </a>
                  </div>
                </div>
              `;
            })
            .join('')}
        </div>
      </div>
    `;

    // Filter listener
    this.querySelectorAll<HTMLButtonElement>('.btn-res-filter').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const modId = (e.currentTarget as HTMLElement).getAttribute('data-mod');
        if (modId) {
          this.selectedModuleId = modId;
          this.refresh();
        }
      });
    });

    // Bookmark flag listener
    this.querySelectorAll<HTMLButtonElement>('.btn-flag-resource').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const resId = (e.currentTarget as HTMLElement).getAttribute('data-res-id');
        if (resId) {
          toggleResourceFlag(resId);
        }
      });
    });
  }
}

customElements.define('roadmap-view-resources', RoadmapViewResources);
