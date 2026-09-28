let audioContext: AudioContext | null = null;

function getAudioContext() {
  if (typeof window === "undefined") return null;
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

export async function unlockAudio() {
  const context = getAudioContext();
  if (!context) return;
  if (context.state === "suspended") {
    await context.resume();
  }
}

function tone(
  context: AudioContext,
  startAt: number,
  frequency: number,
  duration: number,
  volume = 0.22,
) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.02);
}

export function playCountdownTick() {
  const context = getAudioContext();
  if (!context) return;
  void context.resume();
  tone(context, context.currentTime, 640, 0.12, 0.14);
}

export function playExerciseEnd() {
  const context = getAudioContext();
  if (!context) return;
  void context.resume();
  const now = context.currentTime;
  tone(context, now, 523.25, 0.22, 0.24);
  tone(context, now + 0.2, 659.25, 0.22, 0.26);
  tone(context, now + 0.4, 783.99, 0.45, 0.28);
  try {
    navigator.vibrate?.([220, 80, 220, 80, 420]);
  } catch {
    // ignore
  }
}

export function playSessionEnd() {
  const context = getAudioContext();
  if (!context) return;
  void context.resume();
  const now = context.currentTime;
  tone(context, now, 523.25, 0.25, 0.24);
  tone(context, now + 0.24, 659.25, 0.25, 0.24);
  tone(context, now + 0.48, 783.99, 0.25, 0.24);
  tone(context, now + 0.72, 1046.5, 0.55, 0.28);
  try {
    navigator.vibrate?.([300, 100, 300, 100, 500]);
  } catch {
    // ignore
  }
}
