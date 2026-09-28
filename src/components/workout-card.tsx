"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { withBase } from "@/lib/base-path";
import { equipmentLabel } from "@/lib/exercises";
import { formatMinutes, weekdayName } from "@/lib/date";
import { usePlusBlock, useTendonState } from "@/lib/tendon-store";
import { resolveWorkout, workoutHasPlus, workoutTotalSeconds } from "@/lib/workouts";
import type { WorkoutTemplate } from "@/lib/types";
import { cn } from "@/lib/utils";

export function WorkoutCard({
  workout,
  done,
  today,
}: {
  workout: WorkoutTemplate;
  done?: boolean;
  today?: boolean;
}) {
  const { phase } = useTendonState();
  const plus = usePlusBlock();
  const resolved = resolveWorkout(workout, phase, plus && workoutHasPlus(workout));

  return (
    <Link href={`/treino/${workout.id}`} className="block">
      <Card className={cn("relative gap-0 py-0 ring-foreground/8", today && "ring-2 ring-primary/40")}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={withBase(workoutCover(workout.id))}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 512px) 100vw, 512px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3 text-white">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/80">
                {weekdayName(workout.weekday)}
              </p>
              <h3 className="font-heading text-2xl leading-tight">{workout.title}</h3>
            </div>
            <span className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
              {formatMinutes(workoutTotalSeconds(resolved))}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-4 py-4">
          <p className="text-sm leading-relaxed text-muted-foreground">{workout.focus}</p>
          <p className="text-xs font-medium text-primary">Fase {phase} do tendão neste treino</p>
          <div className="flex flex-wrap gap-1.5">
            {workout.equipment.map((item) => (
              <Badge key={item} variant="secondary">
                {equipmentLabel[item]}
              </Badge>
            ))}
            {done && <Badge>Feito hoje</Badge>}
          </div>
        </div>
      </Card>
    </Link>
  );
}

function workoutCover(id: string): string {
  const covers: Record<string, string> = {
    segunda: "/exercises/ex-mcgill.webp",
    terca: "/exercises/ex-ponte.webp",
    quarta: "/exercises/ex-rolo-torax.webp",
    quinta: "/exercises/ex-pallof.webp",
    sexta: "/exercises/ex-retracao.webp",
    sabado: "/exercises/ex-prancha-lado.webp",
    domingo: "/exercises/ex-rolo-gluteo.webp",
  };
  return covers[id] ?? "/exercises/ex-respiracao.webp";
}
