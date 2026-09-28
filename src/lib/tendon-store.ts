import { useSyncExternalStore } from "react";
import type { PainLogEntry, TendonPhase } from "./types";

const STORAGE_KEY = "eixo-casa-tendao-v1";

export type TendonState = {
  phase: TendonPhase;
  logs: PainLogEntry[];
};

const empty: TendonState = { phase: 1, logs: [] };
const listeners = new Set<() => void>();
let snapshot: TendonState = empty;
let hydrated = false;

function emit(next: TendonState) {
  snapshot = next;
  hydrated = true;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }
  listeners.forEach((listener) => listener());
}

function isPhase(value: unknown): value is TendonPhase {
  return value === 1 || value === 2 || value === 3 || value === 4;
}

function readStorage(): TendonState {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as Partial<TendonState>;
    const phase = isPhase(parsed.phase) ? parsed.phase : 1;
    const logs = Array.isArray(parsed.logs)
      ? parsed.logs.filter((item): item is PainLogEntry => {
          if (!item || typeof item !== "object") return false;
          const entry = item as PainLogEntry;
          return typeof entry.date === "string" && typeof entry.during === "number" && isPhase(entry.phase);
        })
      : [];
    return { phase, logs };
  } catch {
    return empty;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const loaded = readStorage();
  hydrated = true;
  if (JSON.stringify(loaded) !== JSON.stringify(snapshot)) {
    snapshot = loaded;
    queueMicrotask(listener);
  }
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return snapshot;
}

function getServerSnapshot() {
  return empty;
}

export function useTendonState(): TendonState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useTendonHydrated(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => hydrated,
    () => false,
  );
}

export function setTendonPhase(phase: TendonPhase) {
  const current = typeof window === "undefined" ? snapshot : readStorage();
  emit({ ...current, phase });
}

export function addPainLog(entry: Omit<PainLogEntry, "id">) {
  const current = typeof window === "undefined" ? snapshot : readStorage();
  const nextEntry: PainLogEntry = {
    ...entry,
    id: `${entry.date}-${Date.now()}`,
  };
  const logs = [nextEntry, ...current.logs].slice(0, 180);
  emit({ ...current, logs });
}

export function removePainLog(id: string) {
  const current = typeof window === "undefined" ? snapshot : readStorage();
  emit({ ...current, logs: current.logs.filter((item) => item.id !== id) });
}

export function clearPainLogs() {
  const current = typeof window === "undefined" ? snapshot : readStorage();
  emit({ ...current, logs: [] });
}

const PLUS_KEY = "eixo-casa-plus-v1";
const plusListeners = new Set<() => void>();
let plusSnapshot = false;

function readPlus(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(PLUS_KEY) === "1";
}

function subscribePlus(listener: () => void) {
  plusListeners.add(listener);
  const loaded = readPlus();
  if (loaded !== plusSnapshot) {
    plusSnapshot = loaded;
    queueMicrotask(listener);
  }
  return () => plusListeners.delete(listener);
}

export function usePlusBlock(): boolean {
  return useSyncExternalStore(subscribePlus, () => plusSnapshot, () => false);
}

export function setPlusBlock(enabled: boolean) {
  plusSnapshot = enabled;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(PLUS_KEY, enabled ? "1" : "0");
  }
  plusListeners.forEach((listener) => listener());
}
