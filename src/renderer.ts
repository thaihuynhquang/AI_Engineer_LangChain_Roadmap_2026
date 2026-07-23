type RenderCallback = () => void;
const renderListeners: Set<RenderCallback> = new Set();

export const registerRenderListener = (cb: RenderCallback): void => {
  renderListeners.add(cb);
};

export const unregisterRenderListener = (cb: RenderCallback): void => {
  renderListeners.delete(cb);
};

export const renderAll = (): void => {
  renderListeners.forEach((cb) => {
    try {
      cb();
    } catch (err) {
      console.error('Error executing render listener:', err);
    }
  });
};
