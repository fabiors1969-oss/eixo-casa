import { useSyncExternalStore } from "react";

const STORAGE_KEY = "eixo-casa-gym-v1";

const listeners = new Set<() => void>();
let snapshot: number[] = [];

function normalize(value: unknown): number[] {
  if (!Array.isArray(value)) return [];
  const days = value.filter((item) => Number.isInteger(item) && item >= 0 && item <= 6) as number[];
  return [...new Set(days)].sort((a, b) => a - b);
}

function readStorage(): number[] {
  if (typeof window === "undefined") return [];
  try {
    return normalize(JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]"));
  } catch {
    return [];
  }
}

function emit(next: number[]) {
  snapshot = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const loaded = readStorage();
  if (loaded.join() !== snapshot.join()) {
    snapshot = loaded;
    queueMicrotask(listener);
  }
  return () => listeners.delete(listener);
}

export function useGymDays(): number[] {
  return useSyncExternalStore(subscribe, () => snapshot, () => []);
}

export function toggleGymDay(weekday: number) {
  const current = typeof window === "undefined" ? snapshot : readStorage();
  const next = current.includes(weekday)
    ? current.filter((day) => day !== weekday)
    : [...current, weekday];
  emit(normalize(next));
}
