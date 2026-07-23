import { ICONS } from './utils/icons';

export const showToast = (message: string, type: 'info' | 'success' | 'warning' | 'error' = 'success'): void => {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const iconSvgMap = {
    success: ICONS.checkCircle,
    info: ICONS.info,
    warning: ICONS.warning,
    error: ICONS.error,
  };

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${iconSvgMap[type]}</span>
    <span class="toast-message">${escapeHTML(message)}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (container.contains(toast)) {
        container.removeChild(toast);
      }
    }, 300);
  }, 3000);
};

function escapeHTML(str: string): string {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
