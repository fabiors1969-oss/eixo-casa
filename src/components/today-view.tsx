"use client";

import Link from "next/link";
import { AlertTriangle, HeartPulse, Play, Smartphone } from "lucide-react";
import { WorkoutCard } from "@/components/workout-card";
import { Button } from "@/components/ui/button";
import { formatLongDate, greeting, todayKey, todayWeekday, formatMinutes } from "@/lib/date";
import { completionOn, currentStreak, thisWeekCount, useProgress } from "@/lib/progress";
import { usePlusBlock, useTendonState } from "@/lib/tendon-store";
import { getWorkoutByWeekday, resolveWorkout, workoutHasPlus, workoutTotalSeconds } from "@/lib/workouts";

export function TodayView() {
  const progress = useProgress();
  const { phase } = useTendonState();
  const plus = usePlusBlock();
  const weekday = todayWeekday();
  const template = getWorkoutByWeekday(weekday);
  const workout = resolveWorkout(template, phase, plus && workoutHasPlus(template));
  const date = todayKey();
  const done = Boolean(completionOn(date, progress));
  const streak = currentStreak(date, progress);
  const weekCount = thisWeekCount(date, progress);

  return (
    <main className="flex flex-1 flex-col px-4 pb-6 pt-[max(1.25rem,env(safe-area-inset-top))]">
      <header className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Eixo Casa</p>
        <h1 className="font-heading mt-1 text-[2.15rem] leading-tight">
          {greeting()}, Fábio.
        </h1>
        <p className="mt-2 text-base capitalize text-muted-foreground">{formatLongDate()}</p>
      </header>

      <div className="mb-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
          <p className="text-sm text-muted-foreground">Sequência</p>
          <p className="font-heading mt-1 text-3xl">
            {streak}
            <span className="ml-1 text-base font-sans text-muted-foreground">dias</span>
          </p>
        </div>
        <div className="rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
          <p className="text-sm text-muted-foreground">Nesta semana</p>
          <p className="font-heading mt-1 text-3xl">
            {weekCount}
            <span className="ml-1 text-base font-sans text-muted-foreground">/ 7</span>
          </p>
        </div>
      </div>

      <p className="mb-3 text-sm font-medium text-muted-foreground">Treino de hoje · {formatMinutes(workoutTotalSeconds(workout))}</p>
      <WorkoutCard workout={template} done={done} today />

      <Button
        className="mt-4 h-14 w-full text-base"
        render={<Link href={`/treino/${workout.id}/praticar`} />}
      >
        <Play className="size-5" />
        {done ? "Repetir o treino" : "Começar agora"}
      </Button>

      <Button
        variant="outline"
        className="mt-3 h-12 w-full text-base"
        render={<Link href="/tendao" />}
      >
        <HeartPulse className="size-5" />
        Tendão · fase {phase}
      </Button>

      <Button
        variant="ghost"
        className="mt-2 h-11 w-full text-base"
        render={<Link href="/instalar" />}
      >
        <Smartphone className="size-5" />
        Instalar no Galaxy S23
      </Button>

      <div className="mt-5 flex gap-3 rounded-2xl bg-secondary/80 p-4 text-sm leading-relaxed">
        <AlertTriangle className="mt-0.5 size-5 shrink-0 text-terracotta" />
        <p>
          Dor aguda, formigamento ou tontura: pare. No tendão, até 3/10 durante o exercício pode seguir, se
          a manhã seguinte voltar ao basal. Cabeça apoiada no rolo. Sem alongar o posterior.
        </p>
      </div>
    </main>
  );
}
