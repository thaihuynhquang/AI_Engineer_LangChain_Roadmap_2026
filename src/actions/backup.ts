import { exportStateJSON, importState, resetProgress } from '../state/storage';
import { showToast } from '../toast';

export const handleExportBackup = (): void => {
  const jsonStr = exportStateJSON();
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const dateStr = new Date().toISOString().slice(0, 10);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ai-engineer-roadmap-backup-${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Đã tải xuống file sao lưu tiến độ (.json)', 'success');
};

export const handleImportBackup = (): void => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';

  input.onchange = (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const parsed = JSON.parse(content);
        if (parsed && typeof parsed === 'object') {
          importState(parsed);
          showToast('Khôi phục tiến độ thành công!', 'success');
        } else {
          showToast('File backup không hợp lệ!', 'error');
        }
      } catch (err) {
        console.error(err);
        showToast('Lỗi đọc file JSON!', 'error');
      }
    };
    reader.readAsText(file);
  };

  input.click();
};

export const handleResetProgress = (): void => {
  const confirmed = window.confirm(
    'Bạn có chắc chắn muốn đặt lại (Reset) toàn bộ tiến độ học tập về 0% không?\nThao tác này không thể hoàn tác trừ khi bạn có file sao lưu.'
  );
  if (confirmed) {
    resetProgress();
    showToast('Đã đặt lại tiến độ về 0%', 'info');
  }
};
