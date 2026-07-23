import { SPRINT_MODULES } from '../data/planData';
import { getState, toggleChecked } from '../state/storage';
import { registerRenderListener, unregisterRenderListener } from '../renderer';

export class RoadmapViewRoadmap extends HTMLElement {
  private boundRefresh = this.refresh.bind(this);

  connectedCallback(): void {
    registerRenderListener(this.boundRefresh);
    this.refresh();
  }

  disconnectedCallback(): void {
    unregisterRenderListener(this.boundRefresh);
  }

  refresh(): void {
    const { checked } = getState();

    this.innerHTML = `
      <div class="roadmap-container">
        <div class="section-header" style="margin-bottom: 1.5rem;">
          <div>
            <div class="section-title">🗺️ Lộ Trình Chi Tiết 5 Sprints (Deliverables & Tasks)</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
              Tích chọn từng nhiệm vụ thực hành khi bạn hoàn thành code & test thành công.
            </div>
          </div>
        </div>

        <div class="sprint-list">
          ${SPRINT_MODULES.map((sprint) => {
            const completedCount = sprint.deliverables.filter((t) => checked[t.id]).length;
            const totalCount = sprint.deliverables.length;
            const pct = Math.round((completedCount / totalCount) * 100);

            return `
              <div class="sprint-card" id="sprint-${sprint.id}">
                <div class="sprint-card-header">
                  <div class="sprint-title-group">
                    <span class="sprint-title">${sprint.title}</span>
                    <span class="sprint-subtitle">${sprint.subtitle} • ⏱️ ${sprint.duration}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <span style="font-weight: 700; font-size: 0.9rem; color: ${sprint.statusColor};">
                      ${completedCount}/${totalCount} (${pct}%)
                    </span>
                  </div>
                </div>

                <div class="sprint-card-body">
                  <!-- Objectives & Knowledge -->
                  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem;">
                    <div style="font-weight: 700; font-size: 0.85rem; color: var(--primary); margin-bottom: 0.5rem;">
                      🎓 Mục tiêu kiến thức & Kỹ năng nạp:
                    </div>
                    <ul style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.85rem; color: var(--text-secondary);">
                      ${sprint.knowledgeToLoad.map((k) => `<li>• ${k}</li>`).join('')}
                    </ul>
                  </div>

                  <!-- Tasks Checklist -->
                  <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.75rem;">
                    💻 Nhiệm Vụ Thực Hành (Deliverables):
                  </div>

                  <div class="task-list">
                    ${sprint.deliverables
                      .map((task) => {
                        const isChecked = !!checked[task.id];
                        return `
                          <div class="task-item ${isChecked ? 'checked' : ''}">
                            <input 
                              type="checkbox" 
                              class="task-checkbox" 
                              data-task-id="${task.id}" 
                              ${isChecked ? 'checked' : ''}
                            />
                            <div class="task-content">
                              <div class="task-title">${task.title}</div>
                              <div class="task-desc">${task.description}</div>
                              <div class="task-meta">
                                <span class="task-tag" style="background: var(--primary-glow); color: var(--primary);">⏱️ ${task.pomodoros} Poms (~${task.hoursEstimate}h)</span>
                                ${task.tags ? task.tags.map((t) => `<span class="task-tag">#${t}</span>`).join('') : ''}
                              </div>
                            </div>
                          </div>
                        `;
                      })
                      .join('')}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Attach checkbox handlers
    this.querySelectorAll<HTMLInputElement>('.task-checkbox').forEach((cb) => {
      cb.addEventListener('change', (e) => {
        const taskId = (e.target as HTMLInputElement).getAttribute('data-task-id');
        if (taskId) {
          toggleChecked(taskId);
        }
      });
    });
  }
}

customElements.define('roadmap-view-roadmap', RoadmapViewRoadmap);
