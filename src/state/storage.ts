import { AppState } from '../types/appState';
import { STORAGE_KEY, THEME_KEY, ROUTE_IDS } from '../constants';
import { renderAll } from '../renderer';

const defaultState: AppState = {
  checked: {},
  resourceFlags: {},
  activeTab: ROUTE_IDS.DASHBOARD,
  theme: 'dark',
};

let state: AppState = { ...defaultState };

export const getInitialTheme = (): 'dark' | 'light' => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const normalizeState = (raw: Partial<AppState> | null): AppState => {
  if (!raw || typeof raw !== 'object') {
    return { ...defaultState, theme: getInitialTheme() };
  }

  return {
    checked: raw.checked && typeof raw.checked === 'object' ? raw.checked : {},
    resourceFlags: raw.resourceFlags && typeof raw.resourceFlags === 'object' ? raw.resourceFlags : {},
    activeTab: raw.activeTab && typeof raw.activeTab === 'string' ? raw.activeTab : ROUTE_IDS.DASHBOARD,
    theme: raw.theme === 'light' || raw.theme === 'dark' ? raw.theme : getInitialTheme(),
  };
};

export const loadState = (): AppState => {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    if (!item) {
      state = normalizeState(null);
      return state;
    }
    const parsed = JSON.parse(item);
    state = normalizeState(parsed);
    return state;
  } catch (err) {
    console.error('Failed to load state from localStorage', err);
    state = normalizeState(null);
    return state;
  }
};

export const saveState = (): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    localStorage.setItem(THEME_KEY, state.theme);
  } catch (err) {
    console.error('Failed to save state to localStorage', err);
  }
};

export const getState = (): AppState => state;

export const toggleChecked = (id: string): void => {
  state.checked[id] = !state.checked[id];
  saveState();
  renderAll();
};

export const setChecked = (id: string, value: boolean): void => {
  state.checked[id] = value;
  saveState();
  renderAll();
};

export const toggleResourceFlag = (id: string): void => {
  state.resourceFlags[id] = !state.resourceFlags[id];
  saveState();
  renderAll();
};

export const setActiveTabState = (tabId: string): void => {
  state.activeTab = tabId;
  saveState();
};

export const setThemeState = (theme: 'dark' | 'light'): void => {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  saveState();
  renderAll();
};

export const resetProgress = (): void => {
  state.checked = {};
  state.resourceFlags = {};
  saveState();
  renderAll();
};

export const importState = (newState: Partial<AppState>): void => {
  state = normalizeState(newState);
  document.documentElement.setAttribute('data-theme', state.theme);
  saveState();
  renderAll();
};

export const exportStateJSON = (): string => {
  return JSON.stringify(state, null, 2);
};
