import { ROUTE_IDS, RouteId } from './constants';
import { getState, setActiveTabState } from './state/storage';
import { renderAll } from './renderer';

export const getRouteFromHash = (): RouteId => {
  const hash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
  const validRoutes = Object.values(ROUTE_IDS);
  if (validRoutes.includes(hash as RouteId)) {
    return hash as RouteId;
  }
  return ROUTE_IDS.DASHBOARD;
};

export const navigateTo = (routeId: RouteId): void => {
  window.location.hash = `#/${routeId}`;
};

export const initRouter = (): void => {
  const handleHashChange = () => {
    const route = getRouteFromHash();
    setActiveTabState(route);
    updateActiveViewDOM(route);
    renderAll();
  };

  window.addEventListener('hashchange', handleHashChange);

  // Initial load
  let initialRoute = getRouteFromHash();
  const state = getState();
  if (window.location.hash === '' && state.activeTab) {
    const savedRoute = state.activeTab as RouteId;
    if (Object.values(ROUTE_IDS).includes(savedRoute)) {
      initialRoute = savedRoute;
      window.location.hash = `#/${initialRoute}`;
    }
  }

  updateActiveViewDOM(initialRoute);
};

export const updateActiveViewDOM = (route: RouteId): void => {
  // Update Tab buttons
  document.querySelectorAll<HTMLButtonElement>('.nav-tab').forEach((tab) => {
    const targetRoute = tab.getAttribute('data-tab');
    if (targetRoute === route) {
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    } else {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    }
  });

  // Update View containers
  document.querySelectorAll<HTMLElement>('.view-container').forEach((view) => {
    const viewRoute = view.getAttribute('data-view');
    if (viewRoute === route) {
      view.classList.add('active');
      view.style.display = 'block';
    } else {
      view.classList.remove('active');
      view.style.display = 'none';
    }
  });
};
