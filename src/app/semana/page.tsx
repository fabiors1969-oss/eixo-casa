"use client";

import { WorkoutCard } from "@/components/workout-card";
import { todayKey, todayWeekday } from "@/lib/date";
import { completionOn, useProgress } from "@/lib/progress";
import { workouts } from "@/lib/workouts";

export default function SemanaPage() {
  const progress = useProgress();
  const weekday = todayWeekday();
  const date = todayKey();

  const ordered = [...workouts].sort((a, b) => {
    const av = a.weekday === 0 ? 7 : a.weekday;
    const bv = b.weekday === 0 ? 7 : b.weekday;
    return av - bv;
  });

  return (
    <main className="flex flex-1 flex-col px-4 pb-6 pt-[max(1.25rem,env(safe-area-inset-top))]">
      <h1 className="font-heading text-3xl">A semana no tapete</h1>
      <p className="mt-2 mb-6 text-base leading-relaxed text-muted-foreground">
        Sete sessões de cerca de 30 minutos, com bloco extra opcional. O tendão entra todo dia na fase
        que você escolheu: clássico, carga, tórax, tênis, pescoço, força e restauração.
      </p>
      <div className="flex flex-col gap-4">
        {ordered.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            today={workout.weekday === weekday}
            done={workout.weekday === weekday && Boolean(completionOn(date, progress))}
          />
        ))}
      </div>
    </main>
  );
}
