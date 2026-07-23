import { DAILY_SCHEDULE } from '../data/planData';
import { getState, toggleChecked } from '../state/storage';
import { registerRenderListener, unregisterRenderListener } from '../renderer';

export class RoadmapViewSchedule extends HTMLElement {
  private boundRefresh = this.refresh.bind(this);
  private selectedWeek = 1;

  connectedCallback(): void {
    registerRenderListener(this.boundRefresh);
    this.refresh();
  }

  disconnectedCallback(): void {
    unregisterRenderListener(this.boundRefresh);
  }

  refresh(): void {
    const { checked } = getState();

    // Group days by week
    const weekDays = DAILY_SCHEDULE.filter((d) => d.weekNum === this.selectedWeek);

    // Count checked pomodoros in this week
    let weekCheckedPoms = 0;
    const weekTotalPoms = 30; // 5 days x 6 poms
    weekDays.forEach((day) => {
      day.poms.forEach((p) => {
        if (checked[p.id]) weekCheckedPoms++;
      });
    });

    this.innerHTML = `
      <div class="schedule-container">
        <!-- Pomodoro Rule Info Header -->
        <div class="progress-card" style="margin-bottom: 1.5rem; background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(16, 185, 129, 0.05)); border: 1px solid var(--border-color-strong);">
          <div style="font-weight: 700; font-size: 1.1rem; color: var(--primary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            ⏱️ Quy Tắc Pomodoro 50m Focus - 5m Short Break - 20m Long Break
          </div>
          <div style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
            • <b>Ca Chiều</b> (13:00 - 17:00 | 4 Pomodoros): Nạp lý thuyết, tra cứu pattern & Heavy Coding.<br/>
            • <b>Ca Tối</b> (22:00 - 24:00 | 2 Pomodoros): UI Integration, Debugging, Refactoring & Commit GitHub.<br/>
            • <b>Định lượng</b>: 6 Pomodoro/ngày = 30 Pomodoro/tuần = 150 Pomodoro toàn dự án (5 Tuần).
          </div>
        </div>

        <!-- Week Selector Tabs -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; gap: 0.5rem;">
            ${[1, 2, 3, 4, 5]
              .map(
                (w) => `
              <button 
                class="action-btn btn-week-tab ${this.selectedWeek === w ? 'active' : ''}" 
                data-week="${w}"
                style="${this.selectedWeek === w ? 'background: var(--primary); color: white; border-color: var(--primary);' : ''}"
              >
                Tuần ${w}
              </button>
            `
              )
              .join('')}
          </div>

          <div style="font-weight: 700; font-size: 0.95rem; color: var(--accent-emerald);">
            Tiến độ Tuần ${this.selectedWeek}: ${weekCheckedPoms}/${weekTotalPoms} Poms (${Math.round((weekCheckedPoms / weekTotalPoms) * 100)}%)
          </div>
        </div>

        <!-- Daily Grid for Selected Week -->
        <div class="schedule-week-block">
          <div class="days-grid">
            ${weekDays
              .map((day) => {
                const dayCheckedPoms = day.poms.filter((p) => checked[p.id]).length;
                return `
                  <div class="day-card">
                    <div class="day-header">
                      <span>${day.dayName}</span>
                      <span style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 600;">
                        ${dayCheckedPoms}/6 Poms
                      </span>
                    </div>
                    <div class="day-theme">${day.theme}</div>

                    <div class="pom-slots-list">
                      ${day.poms
                        .map((pom) => {
                          const isChecked = !!checked[pom.id];
                          return `
                            <label class="pom-slot-item ${isChecked ? 'checked' : ''}">
                              <input 
                                type="checkbox" 
                                class="pom-checkbox" 
                                data-pom-id="${pom.id}"
                                ${isChecked ? 'checked' : ''} 
                              />
                              <div style="flex: 1; display: flex; flex-direction: column;">
                                <span style="font-weight: 600; font-size: 0.78rem;">${pom.label}</span>
                                <span style="font-size: 0.7rem; color: var(--text-muted);">${pom.timeSlot}</span>
                              </div>
                            </label>
                          `;
                        })
                        .join('')}
                    </div>
                  </div>
                `;
              })
              .join('')}
          </div>
        </div>
      </div>
    `;

    // Attach week tab listeners
    this.querySelectorAll<HTMLButtonElement>('.btn-week-tab').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const wStr = (e.currentTarget as HTMLElement).getAttribute('data-week');
        if (wStr) {
          this.selectedWeek = parseInt(wStr, 10);
          this.refresh();
        }
      });
    });

    // Attach pomodoro checkbox listeners
    this.querySelectorAll<HTMLInputElement>('.pom-checkbox').forEach((cb) => {
      cb.addEventListener('change', (e) => {
        const pomId = (e.target as HTMLInputElement).getAttribute('data-pom-id');
        if (pomId) {
          toggleChecked(pomId);
        }
      });
    });
  }
}

customElements.define('roadmap-view-schedule', RoadmapViewSchedule);
