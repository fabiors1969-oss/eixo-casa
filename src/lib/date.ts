const TIME_ZONE = "America/Sao_Paulo";

export function saoPauloParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  }).formatToParts(date);

  const read = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  return {
    year: read("year"),
    month: read("month"),
    day: read("day"),
    weekday: weekdayMap[read("weekday")] ?? 0,
  };
}

export function todayKey(date = new Date()): string {
  const { year, month, day } = saoPauloParts(date);
  return `${year}-${month}-${day}`;
}

export function todayWeekday(date = new Date()): number {
  return saoPauloParts(date).weekday;
}

export function greeting(date = new Date()): string {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Sao_Paulo",
      hour: "numeric",
      hourCycle: "h23",
    }).format(date),
  );
  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
}

export function formatLongDate(date = new Date()): string {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: TIME_ZONE,
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}

export function weekdayName(weekday: number): string {
  return ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"][weekday] ?? "";
}

export function weekdayShort(weekday: number): string {
  return ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][weekday] ?? "";
}

/** Dia da semana em America/Sao_Paulo para uma data YYYY-MM-DD. */
export function weekdayOfIso(iso: string): number {
  return saoPauloParts(new Date(`${iso}T15:00:00Z`)).weekday;
}

export function shiftMonthKey(monthKey: string, delta: number): string {
  const [yearText, monthText] = monthKey.split("-");
  const date = new Date(Date.UTC(Number(yearText), Number(monthText) - 1 + delta, 1));
  const year = date.getUTCFullYear();
  const month = `${date.getUTCMonth() + 1}`.padStart(2, "0");
  return `${year}-${month}`;
}

export function formatMonthLabel(monthKey: string): string {
  const [yearText, monthText] = monthKey.split("-");
  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(Number(yearText), Number(monthText) - 1, 1)));
}

export function daysInMonth(monthKey: string): number {
  const [yearText, monthText] = monthKey.split("-");
  return new Date(Date.UTC(Number(yearText), Number(monthText), 0)).getUTCDate();
}

export function formatClock(totalSeconds: number): string {
  const safe = Math.max(0, Math.round(totalSeconds));
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function formatMinutes(totalSeconds: number): string {
  return `${Math.round(totalSeconds / 60)} min`;
}
