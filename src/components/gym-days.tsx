"use client";

import { toggleGymDay, useGymDays } from "@/lib/gym-store";
import { cn } from "@/lib/utils";

const days = [
  { weekday: 1, label: "Seg" },
  { weekday: 2, label: "Ter" },
  { weekday: 3, label: "Qua" },
  { weekday: 4, label: "Qui" },
  { weekday: 5, label: "Sex" },
  { weekday: 6, label: "Sáb" },
  { weekday: 0, label: "Dom" },
];

export function GymDays() {
  const selected = useGymDays();

  return (
    <div className="rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
      <h2 className="font-heading text-xl">Dias de musculação</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        A força fica na academia. Nos dias marcados, o pilates vira mobilidade e o tendão entra só na dose
        leve, para não somar com a perna.
      </p>
      <div className="mt-3 grid grid-cols-7 gap-1">
        {days.map((day) => {
          const on = selected.includes(day.weekday);
          return (
            <button
              key={day.weekday}
              type="button"
              aria-pressed={on}
              onClick={() => toggleGymDay(day.weekday)}
              className={cn(
                "h-11 rounded-xl text-sm font-medium ring-1",
                on ? "bg-primary text-primary-foreground ring-primary" : "bg-secondary ring-foreground/10",
              )}
            >
              {day.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
