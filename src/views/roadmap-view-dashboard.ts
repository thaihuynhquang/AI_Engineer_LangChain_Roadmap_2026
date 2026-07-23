import { calculateProgress } from '../progress';
import { registerRenderListener, unregisterRenderListener } from '../renderer';
import { META_DATA, SPRINT_MODULES } from '../data/planData';
import { toggleChecked } from '../state/storage';

export class RoadmapViewDashboard extends HTMLElement {
  private boundRefresh = this.refresh.bind(this);

  connectedCallback(): void {
    registerRenderListener(this.boundRefresh);
    this.refresh();
  }

  disconnectedCallback(): void {
    unregisterRenderListener(this.boundRefresh);
  }

  refresh(): void {
    const stats = calculateProgress();

    this.innerHTML = `
      <div class="dashboard-container">
        <!-- Key Metrics Cards -->
        <div class="dashboard-grid">
          <div class="metric-card">
            <div class="metric-icon" style="background: rgba(16, 185, 129, 0.15); color: #10b981;">🏆</div>
            <div class="metric-info">
              <span class="metric-value">${stats.overallPercentage}%</span>
              <span class="metric-label">Tổng Tiến Độ Lộ Trình</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon" style="background: rgba(99, 102, 241, 0.15); color: #6366f1;">🎯</div>
            <div class="metric-info">
              <span class="metric-value">${stats.completedDeliverablesCount}/${stats.totalDeliverablesCount}</span>
              <span class="metric-label">Nhiệm Vụ Thực Hành</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b;">🍅</div>
            <div class="metric-info">
              <span class="metric-value">${stats.completedPomodorosCount}/${stats.totalPomodorosCount}</span>
              <span class="metric-label">Pomodoro Đã Hoàn Thành</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon" style="background: rgba(14, 165, 233, 0.15); color: #0ea5e9;">⏳</div>
            <div class="metric-info">
              <span class="metric-value">${stats.completedHours}h / ${META_DATA.totalHours}h</span>
              <span class="metric-label">Thời Gian Học Thực Tế</span>
            </div>
          </div>
        </div>

        <!-- Progress Overview Bar Card -->
        <div class="progress-card">
          <div class="progress-header">
            <div>
              <div class="progress-title">Tiến Độ Dự Án Enterprise Knowledge AI Assistant</div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.2rem;">
                Mục tiêu: Tuần 1-5 (150 Pomodoro thực chiến, 100% Online Free Resources)
              </div>
            </div>
            <div class="progress-percentage">${stats.overallPercentage}%</div>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${stats.overallPercentage}%;"></div>
          </div>
        </div>

        <!-- Next Task & Current Focus -->
        ${
          stats.nextTask
            ? `
            <div class="progress-card" style="border-left: 4px solid var(--primary);">
              <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary); text-transform: uppercase; margin-bottom: 0.35rem;">
                🚀 Nhiệm Vụ Tiếp Theo Cần Làm
              </div>
              <div style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.35rem;">
                ${stats.nextTask.title}
              </div>
              <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
                Thuộc: ${stats.nextTask.sprintTitle}
              </div>
              <button class="action-btn" id="btn-quick-do-task" data-task-id="${stats.nextTask.id}" style="background: var(--primary); color: white; border: none;">
                ✓ Đánh dấu hoàn thành task này
              </button>
            </div>
          `
            : `
            <div class="progress-card" style="border-left: 4px solid var(--accent-emerald);">
              <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent-emerald);">
                🎉 Thật tuyệt vời! Bạn đã hoàn thành 100% lộ trình AI Engineer!
              </div>
            </div>
          `
        }

        <!-- Sprint Progress Overview List -->
        <div class="section-header">
          <div class="section-title">🗺️ Tiến Độ Từng Sprint (5 Modules)</div>
        </div>

        <div class="sprint-list">
          ${SPRINT_MODULES.map((sprint, idx) => {
            const spStat = stats.sprintProgresses[idx];
            return `
              <div class="sprint-card">
                <div class="sprint-card-header">
                  <div class="sprint-title-group">
                    <span class="sprint-title">${sprint.title}</span>
                    <span class="sprint-subtitle">${sprint.subtitle}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 1rem;">
                    <span style="font-weight: 700; font-size: 0.95rem; color: ${sprint.statusColor};">
                      ${spStat.completedCount}/${spStat.totalCount} Tasks (${spStat.percentage}%)
                    </span>
                    <span class="sprint-badge" style="background: ${sprint.statusColor}20; color: ${sprint.statusColor}; border: 1px solid ${sprint.statusColor}40;">
                      ${spStat.percentage === 100 ? 'Đã Xong' : spStat.percentage > 0 ? 'Đang Học' : 'Chưa Bắt Đầu'}
                    </span>
                  </div>
                </div>
                <div class="sprint-card-body" style="padding: 1rem 1.5rem;">
                  <div class="progress-bar-bg" style="height: 8px;">
                    <div class="progress-bar-fill" style="width: ${spStat.percentage}%; background: ${sprint.statusColor};"></div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Attach Event Handler
    const quickBtn = this.querySelector('#btn-quick-do-task');
    if (quickBtn) {
      quickBtn.addEventListener('click', (e) => {
        const taskId = (e.currentTarget as HTMLElement).getAttribute('data-task-id');
        if (taskId) {
          toggleChecked(taskId);
        }
      });
    }
  }
}

customElements.define('roadmap-view-dashboard', RoadmapViewDashboard);
