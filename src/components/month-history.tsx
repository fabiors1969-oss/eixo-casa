"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shiftMonthKey, todayKey, weekdayOfIso } from "@/lib/date";
import { feelingLabel, monthAdherence, useProgress } from "@/lib/progress";
import { getWorkoutById } from "@/lib/workouts";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export function MonthHistory() {
  const progress = useProgress();
  const today = todayKey();
  const [monthKey, setMonthKey] = useState(() => today.slice(0, 7));
  const [selected, setSelected] = useState<string | null>(today);
  const summary = monthAdherence(today, progress, monthKey);
  const canNext = monthKey < today.slice(0, 7);

  const cells = useMemo(() => {
    const first = weekdayOfIso(`${monthKey}-01`);
    const offset = (first + 6) % 7;
    const blanks = Array.from({ length: offset }, () => null);
    const days = Array.from({ length: summary.daysInMonth }, (_, index) => {
      const day = index + 1;
      return `${monthKey}-${String(day).padStart(2, "0")}`;
    });
    return [...blanks, ...days];
  }, [monthKey, summary.daysInMonth]);

  const trained = new Set(summary.trainedDates);
  const selectedCompletion = selected
    ? progress.completions.find((item) => item.date === selected)
    : undefined;
  const selectedWorkout = selectedCompletion ? getWorkoutById(selectedCompletion.workoutId) : undefined;

  function move(delta: number) {
    const next = shiftMonthKey(monthKey, delta);
    if (delta > 0 && next > today.slice(0, 7)) return;
    setMonthKey(next);
    setSelected(next === today.slice(0, 7) ? today : null);
  }

  return (
    <div className="rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
      <div className="flex items-center justify-between gap-2">
        <Button variant="ghost" size="icon-lg" className="size-11" onClick={() => move(-1)} aria-label="Mês anterior">
          <ChevronLeft className="size-5" />
        </Button>
        <h2 className="font-heading text-xl capitalize">{summary.label}</h2>
        <Button
          variant="ghost"
          size="icon-lg"
          className="size-11"
          onClick={() => move(1)}
          disabled={!canNext}
          aria-label="Próximo mês"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div>
          <p className="text-sm text-muted-foreground">Dias treinados</p>
          <p className="font-heading text-3xl">{summary.trainedCount}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Adesão</p>
          <p className="font-heading text-3xl">
            {summary.adherencePercent}
            <span className="ml-1 text-base font-sans text-muted-foreground">%</span>
          </p>
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {summary.trainedCount} {summary.trainedCount === 1 ? "dia com treino" : "dias com treino"} em{" "}
        {summary.elapsedDays} {summary.elapsedDays === 1 ? "dia decorrido" : "dias decorridos"}. Cada dia conta uma
        sessão, salva só neste aparelho.
      </p>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-muted-foreground">
        {WEEKDAYS.map((label) => (
          <div key={label} className="py-1">
            {label}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((iso, index) => {
          if (!iso) return <div key={`blank-${index}`} />;
          const day = Number(iso.slice(8, 10));
          const future = iso > today;
          const done = trained.has(iso);
          const isToday = iso === today;
          const isSelected = iso === selected;
          return (
            <button
              key={iso}
              type="button"
              disabled={future}
              onClick={() => setSelected(iso)}
              className={cn(
                "flex h-11 items-center justify-center rounded-xl text-sm font-medium",
                done && "bg-primary text-primary-foreground",
                !done && !future && "bg-secondary text-foreground",
                future && "text-muted-foreground/50",
                isToday && !done && "ring-2 ring-primary",
                isSelected && "ring-2 ring-terracotta",
              )}
              aria-label={`${day}${done ? ", treino feito" : future ? "" : ", sem treino"}`}
              aria-pressed={isSelected}
            >
              {day}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm leading-relaxed">
        {selected && selected <= today ? (
          selectedCompletion ? (
            <>
              <span className="font-medium">{formatDay(selected)}</span>
              {" · "}
              {selectedWorkout?.title ?? "Treino"} feito
              {selectedCompletion.feeling ? ` · ${feelingLabel[selectedCompletion.feeling]}` : ""}.
            </>
          ) : (
            <>
              <span className="font-medium">{formatDay(selected)}</span>
              {" · sem treino registrado."}
            </>
          )
        ) : (
          "Toque um dia para ver se houve sessão."
        )}
      </p>
    </div>
  );
}

function formatDay(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${Number(day)}/${month}/${year}`;
}
