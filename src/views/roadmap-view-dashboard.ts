import { calculateProgress } from '../progress';
import { registerRenderListener, unregisterRenderListener } from '../renderer';
import { META_DATA, SPRINT_MODULES } from '../data/planData';
import { toggleChecked } from '../state/storage';
import { ICONS } from '../utils/icons';

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
            <div class="metric-icon metric-icon--trophy">${ICONS.trophy}</div>
            <div class="metric-info">
              <span class="metric-value">${stats.overallPercentage}%</span>
              <span class="metric-label">Tổng Tiến Độ Lộ Trình</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon metric-icon--target">${ICONS.target}</div>
            <div class="metric-info">
              <span class="metric-value">${stats.completedDeliverablesCount}/${stats.totalDeliverablesCount}</span>
              <span class="metric-label">Nhiệm Vụ Thực Hành</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon metric-icon--pomodoro">${ICONS.pomodoro}</div>
            <div class="metric-info">
              <span class="metric-value">${stats.completedPomodorosCount}/${stats.totalPomodorosCount}</span>
              <span class="metric-label">Pomodoro Đã Hoàn Thành</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon metric-icon--clock">${ICONS.clock}</div>
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
              <div class="metric-subtitle">
                Mục tiêu: Tuần 1-5 (150 Pomodoro thực chiến, 100% Online Free Resources)
              </div>
            </div>
            <div class="progress-percentage">${stats.overallPercentage}%</div>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill progress-bar-fill-dynamic" style="--progress: ${stats.overallPercentage}%;"></div>
          </div>
        </div>

        <!-- Next Task & Current Focus -->
        ${
          stats.nextTask
            ? `
            <div class="progress-card progress-card--primary">
              <div class="progress-card-tag">
                ${ICONS.rocket} Nhiệm Vụ Tiếp Theo Cần Làm
              </div>
              <div class="progress-card-header-title">
                ${stats.nextTask.title}
              </div>
              <div class="progress-card-desc">
                Thuộc: ${stats.nextTask.sprintTitle}
              </div>
              <button class="action-btn action-btn--primary" id="btn-quick-do-task" data-task-id="${stats.nextTask.id}">
                ${ICONS.check} <span class="btn-label">Đánh dấu hoàn thành task này</span>
              </button>
            </div>
          `
            : `
            <div class="progress-card progress-card--emerald">
              <div class="progress-card-header-title--emerald">
                ${ICONS.checkCircle} Thật tuyệt vời! Bạn đã hoàn thành 100% lộ trình AI Engineer!
              </div>
            </div>
          `
        }

        <!-- Sprint Progress Overview List -->
        <div class="section-header">
          <div class="section-title section-title-flex">
            ${ICONS.roadmap} Tiến Độ Từng Sprint (5 Modules)
          </div>
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
                  <div class="sprint-header-left">
                    <span class="sprint-status-text" style="--status-color: ${sprint.statusColor};">
                      ${spStat.percentage}%
                    </span>
                    <span class="sprint-badge sprint-badge-dynamic" style="--status-color: ${sprint.statusColor};">
                      ${spStat.percentage === 100 ? 'Đã Xong' : spStat.percentage > 0 ? 'Đang Học' : 'Chưa Bắt Đầu'}
                    </span>
                  </div>
                </div>
                <div class="sprint-card-body">
                  <div class="sprint-card-meta">
                    <span class="sprint-meta-item">${ICONS.clock} ${sprint.duration}</span>
                    <span class="sprint-meta-item">${ICONS.target} ${spStat.completedCount}/${spStat.totalCount} Nhiệm vụ</span>
                  </div>
                  <div class="progress-bar-bg progress-bar-bg--sm">
                    <div class="progress-bar-fill progress-bar-fill-dynamic" style="--progress: ${spStat.percentage}%; --status-color: ${sprint.statusColor};"></div>
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
