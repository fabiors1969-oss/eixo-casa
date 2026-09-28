import { useSyncExternalStore } from "react";
import type { Completion, Feeling } from "./types";

const STORAGE_KEY = "eixo-casa-progress-v1";

export type ProgressState = {
  completions: Completion[];
};

const empty: ProgressState = { completions: [] };
const listeners = new Set<() => void>();
let snapshot: ProgressState = empty;

function emit(next: ProgressState) {
  snapshot = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }
  listeners.forEach((listener) => listener());
}

function readStorage(): ProgressState {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as ProgressState;
    if (!Array.isArray(parsed.completions)) return empty;
    return parsed;
  } catch {
    return empty;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const loaded = readStorage();
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

export function useProgress(): ProgressState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function recordCompletion(entry: Completion): ProgressState {
  const current = typeof window === "undefined" ? snapshot : readStorage();
  const completions = current.completions.filter((item) => item.date !== entry.date);
  completions.push(entry);
  completions.sort((a, b) => a.date.localeCompare(b.date));
  const next = { completions };
  emit(next);
  return next;
}

export function completionOn(date: string, state: ProgressState): Completion | undefined {
  return state.completions.find((item) => item.date === date);
}

export function currentStreak(today: string, state: ProgressState): number {
  const set = new Set(state.completions.map((item) => item.date));
  let streak = 0;
  const cursor = new Date(`${today}T12:00:00`);
  while (set.has(isoDate(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function thisWeekCount(today: string, state: ProgressState): number {
  const todayDate = new Date(`${today}T12:00:00`);
  const weekday = todayDate.getDay();
  const mondayOffset = weekday === 0 ? -6 : 1 - weekday;
  const monday = new Date(todayDate);
  monday.setDate(todayDate.getDate() + mondayOffset);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return state.completions.filter((item) => item.date >= isoDate(monday) && item.date <= isoDate(sunday))
    .length;
}

export const feelingLabel: Record<Feeling, string> = {
  leve: "Leve",
  bom: "No ponto",
  exigente: "Exigente",
};

function isoDate(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}
