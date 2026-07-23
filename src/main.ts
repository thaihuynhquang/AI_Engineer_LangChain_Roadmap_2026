// Import all custom element views to register them
import './views/roadmap-view-dashboard';
import './views/roadmap-view-roadmap';
import './views/roadmap-view-schedule';
import './views/roadmap-view-resources';
import './views/roadmap-view-techstack';

import { loadState, getState, setThemeState } from './state/storage';
import { initRouter, navigateTo } from './router';
import { registerRenderListener, renderAll } from './renderer';
import { handleExportBackup, handleImportBackup, handleResetProgress } from './actions/backup';
import { calculateProgress } from './progress';
import { RouteId } from './constants';

function bootstrap(): void {
  // 1. Load initial state
  const state = loadState();

  // 2. Set theme attribute
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeToggleIcon(state.theme);

  // 3. Register render listener for global badge update
  registerRenderListener(() => {
    const stats = calculateProgress();
    const badge = document.getElementById('badge-overall-pct');
    if (badge) {
      badge.textContent = `${stats.overallPercentage}%`;
    }
  });

  // 4. Bind Header Action Buttons
  const btnTheme = document.getElementById('btn-theme');
  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      const currentTheme = getState().theme;
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setThemeState(nextTheme);
      updateThemeToggleIcon(nextTheme);
    });
  }

  const btnExport = document.getElementById('btn-export');
  if (btnExport) {
    btnExport.addEventListener('click', handleExportBackup);
  }

  const btnImport = document.getElementById('btn-import');
  if (btnImport) {
    btnImport.addEventListener('click', handleImportBackup);
  }

  const btnReset = document.getElementById('btn-reset');
  if (btnReset) {
    btnReset.addEventListener('click', handleResetProgress);
  }

  // 5. Bind Navigation Tabs Click
  document.querySelectorAll<HTMLButtonElement>('.nav-tab').forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const targetRoute = (e.currentTarget as HTMLElement).getAttribute('data-tab') as RouteId;
      if (targetRoute) {
        navigateTo(targetRoute);
      }
    });
  });

  // 6. Init Router
  initRouter();

  // 7. Initial Render
  renderAll();
}

function updateThemeToggleIcon(theme: 'dark' | 'light'): void {
  const btnTheme = document.getElementById('btn-theme');
  if (btnTheme) {
    btnTheme.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// Run bootstrap when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
