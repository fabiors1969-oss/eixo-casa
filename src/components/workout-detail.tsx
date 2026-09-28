"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VideoLink } from "@/components/video-link";
import { withBase } from "@/lib/base-path";
import { formatClock, formatMinutes, weekdayName } from "@/lib/date";
import { equipmentLabel, getExercise } from "@/lib/exercises";
import { phaseGuides, tendonLoadLabel } from "@/lib/tendon";
import { setPlusBlock, usePlusBlock, useTendonState } from "@/lib/tendon-store";
import { resolveWorkout, workoutHasPlus, workoutTotalSeconds } from "@/lib/workouts";
import type { WorkoutTemplate } from "@/lib/types";

export function WorkoutDetail({ template }: { template: WorkoutTemplate }) {
  const { phase } = useTendonState();
  const plus = usePlusBlock();
  const hasPlus = workoutHasPlus(template);
  const workout = resolveWorkout(template, phase, plus && hasPlus);
  const guide = phaseGuides.find((item) => item.id === phase);

  return (
    <main className="flex flex-1 flex-col pb-8 pt-[max(0.5rem,env(safe-area-inset-top))]">
      <div className="px-2">
        <Button variant="ghost" className="h-11 text-base" render={<Link href="/" />}>
          <ChevronLeft className="size-5" />
          Hoje
        </Button>
      </div>

      <div className="px-5">
        <p className="text-sm font-medium uppercase tracking-wide text-primary">
          {weekdayName(workout.weekday)} · {formatMinutes(workoutTotalSeconds(workout))}
        </p>
        <h1 className="font-heading mt-1 text-3xl">{workout.title}</h1>
        <p className="mt-3 text-base leading-relaxed">{workout.why}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Tendão na fase {phase}
          {guide ? ` · ${guide.title}` : ""}. Bloco de hoje: {tendonLoadLabel(template.tendon).toLowerCase()}.{" "}
          <Link href="/tendao" className="font-medium text-primary">
            Mudar a fase ou anotar a dor
          </Link>
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {workout.equipment.map((item) => (
            <Badge key={item} variant="secondary">
              {equipmentLabel[item]}
            </Badge>
          ))}
        </div>

        {hasPlus && (
          <button
            type="button"
            onClick={() => setPlusBlock(!plus)}
            className="mt-4 flex h-12 w-full items-center justify-center rounded-xl bg-secondary text-base font-medium"
          >
            {plus ? "Bloco extra ligado · cerca de +10 min" : "Incluir bloco extra · cerca de +10 min"}
          </button>
        )}

        <Button
          className="mt-3 h-14 w-full text-base"
          render={<Link href={`/treino/${workout.id}/praticar`} />}
        >
          <Play className="size-5" />
          Começar os {formatMinutes(workoutTotalSeconds(workout))}
        </Button>
      </div>

      <ol className="mt-6 flex flex-col gap-2 px-4">
        {workout.steps.map((item, index) => {
          const exercise = getExercise(item.exerciseId);
          return (
            <li
              key={`${item.exerciseId}-${index}`}
              className="rounded-2xl bg-card ring-1 ring-foreground/8"
            >
              <div className="flex items-center gap-3 p-2 pr-3">
                <Link href={`/exercicios/${exercise.id}`} className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={withBase(exercise.image)}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">
                      {index + 1} · {formatClock(item.seconds)}
                    </p>
                    <p className="truncate font-medium">{exercise.name}</p>
                    <p className="truncate text-sm text-muted-foreground">{item.note ?? exercise.cues[0]}</p>
                  </div>
                </Link>
                <VideoLink video={exercise.videos[0]} className="h-10 shrink-0 px-3 text-xs" />
              </div>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
