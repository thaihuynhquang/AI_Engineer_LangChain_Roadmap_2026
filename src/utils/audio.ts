// Web Audio API Sound Utility for Pomodoro Chimes

let audioCtx: AudioContext | null = null;

const getAudioContext = (): AudioContext => {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const playSessionCompleteSound = (): void => {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Pleasant two-tone chime (E5 -> A5)
    const notes = [659.25, 880.0]; // E5, A5
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.2);

      gain.gain.setValueAtTime(0.001, now + index * 0.2);
      gain.gain.exponentialRampToValueAtTime(0.3, now + index * 0.2 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.2 + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + index * 0.2);
      osc.stop(now + index * 0.2 + 0.65);
    });
  } catch (err) {
    console.warn('Could not play AudioContext sound:', err);
  }
};

export const playBreakCompleteSound = (): void => {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Soft triple chime (C5 -> E5 -> G5)
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.15);

      gain.gain.setValueAtTime(0.001, now + index * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.25, now + index * 0.15 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.15 + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + index * 0.15);
      osc.stop(now + index * 0.15 + 0.55);
    });
  } catch (err) {
    console.warn('Could not play AudioContext sound:', err);
  }
};
