import { QUIT_CRITERIA_DATA } from '../data/planData';
import { registerRenderListener, unregisterRenderListener } from '../renderer';
import { ICONS } from '../utils/icons';

export class RoadmapViewQuitCriteria extends HTMLElement {
  private boundRefresh = this.refresh.bind(this);
  private searchQuery = '';

  connectedCallback(): void {
    registerRenderListener(this.boundRefresh);
    this.refresh();
  }

  disconnectedCallback(): void {
    unregisterRenderListener(this.boundRefresh);
  }

  private attachListeners(): void {
    const searchInput = this.querySelector<HTMLInputElement>('#quit-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = (e.target as HTMLInputElement).value.toLowerCase().trim();
        this.renderCards();
      });
    }
  }

  private renderCards(): void {
    const gridContainer = this.querySelector('#matrix-cards-grid');
    if (!gridContainer) return;

    const filteredModules = QUIT_CRITERIA_DATA.decisionMatrix.filter((item) => {
      if (!this.searchQuery) return true;
      return (
        item.moduleName.toLowerCase().includes(this.searchQuery) ||
        item.trigger.toLowerCase().includes(this.searchQuery) ||
        item.pivotAction.toLowerCase().includes(this.searchQuery)
      );
    });

    if (filteredModules.length === 0) {
      gridContainer.innerHTML = `
        <div class="quit-empty-state">
          ${ICONS.info} Không tìm thấy Module phù hợp với từ khóa "${this.searchQuery}".
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filteredModules
      .map(
        (item) => `
        <div class="quit-module-card ${item.isOptional ? 'card-optional' : ''}">
          <div class="quit-card-header">
            <div class="quit-module-info">
              <span class="quit-module-name">${item.moduleName}</span>
              ${item.isOptional ? '<span class="badge-optional-tag">Optional Module</span>' : ''}
            </div>
            <span class="quit-poms-badge">${ICONS.pomodoro} ${item.quotaPoms} Poms</span>
          </div>

          <div class="quit-card-body">
            <!-- Trigger Condition -->
            <div class="quit-box quit-box--trigger">
              <div class="quit-box-label">
                ${ICONS.warning} Ngưỡng Cảnh Báo (Trigger Kích Hoạt)
              </div>
              <div class="quit-box-content">${item.trigger}</div>
            </div>

            <!-- Pivot Action -->
            <div class="quit-box quit-box--pivot">
              <div class="quit-box-label">
                ${ICONS.cornerUpRight} Hành Động Xoay Trục (Pivot Action)
              </div>
              <div class="quit-box-content">${item.pivotAction}</div>
            </div>
          </div>
        </div>
      `
      )
      .join('');
  }

  refresh(): void {
    this.innerHTML = `
      <div class="quitcriteria-container">
        <!-- Compact Section Header -->
        <div class="section-header">
          <div>
            <div class="section-title section-title-flex">
              ${ICONS.quitcriteria} ${QUIT_CRITERIA_DATA.title}
            </div>
            <div class="section-subtitle-muted">
              ${QUIT_CRITERIA_DATA.subtitle}
            </div>
          </div>
        </div>

        <!-- 4-Step Protocol Ribbon -->
        <div class="stepper-ribbon-card">
          <div class="ribbon-title">
            ${ICONS.clipboardCheck} <b>Quy Trình 4 Bước Thực Thi Hàng Ngày:</b>
          </div>
          <div class="stepper-ribbon-steps">
            ${QUIT_CRITERIA_DATA.dailyProcess
              .map(
                (step) => `
              <div class="ribbon-step">
                <span class="ribbon-step-num">${step.stepNum}</span>
                <div class="ribbon-step-text">
                  <span class="ribbon-step-title">${step.title}</span>
                  <span class="ribbon-step-desc">${step.description}</span>
                </div>
              </div>
            `
              )
              .join('<div class="ribbon-arrow">➔</div>')}
          </div>
        </div>

        <!-- Control Bar: Search Input Only -->
        <div class="quit-control-bar">
          <div class="quit-search-wrapper">
            <input 
              type="text" 
              id="quit-search-input" 
              placeholder="Tìm kiếm Module, lỗi Trigger hoặc Pivot Action..." 
              value="${this.searchQuery}"
              class="quit-search-input"
            />
          </div>
        </div>

        <!-- Grid of 11 Decision Cards -->
        <div class="quit-matrix-grid" id="matrix-cards-grid">
        </div>
      </div>
    `;

    this.renderCards();
    this.attachListeners();
  }
}

customElements.define('roadmap-view-quitcriteria', RoadmapViewQuitCriteria);
