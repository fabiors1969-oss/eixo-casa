"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { VideoLink } from "@/components/video-link";
import { withBase } from "@/lib/base-path";
import { categoryLabel, categoryOrder, exercises } from "@/lib/exercises";
import { useTendonState } from "@/lib/tendon-store";
import type { ExerciseCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

type Filter = "todos" | ExerciseCategory;

export default function ExerciciosPage() {
  const { phase } = useTendonState();
  const [filter, setFilter] = useState<Filter>("todos");
  const [onlyPhase, setOnlyPhase] = useState(false);

  const visible = useMemo(
    () =>
      exercises.filter((exercise) => {
        if (filter !== "todos" && exercise.category !== filter) return false;
        if (onlyPhase && exercise.minPhase > phase) return false;
        return true;
      }),
    [filter, onlyPhase, phase],
  );

  return (
    <main className="flex flex-1 flex-col px-4 pb-6 pt-[max(1.25rem,env(safe-area-inset-top))]">
      <h1 className="font-heading text-3xl">Como fazer</h1>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        Cada exercício tem vídeo. A miniatura é só um lembrete — a técnica está no YouTube e no texto.
      </p>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        <FilterChip active={filter === "todos"} onClick={() => setFilter("todos")}>
          Todos
        </FilterChip>
        {categoryOrder.map((category) => (
          <FilterChip
            key={category}
            active={filter === category}
            onClick={() => setFilter(category)}
          >
            {categoryLabel[category]}
          </FilterChip>
        ))}
      </div>

      <label className="mt-3 flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={onlyPhase}
          onChange={(event) => setOnlyPhase(event.target.checked)}
          className="size-4 accent-primary"
        />
        Só os liberados na fase {phase}
      </label>

      <ul className="mt-4 flex flex-col gap-3">
        {visible.map((exercise) => (
          <li key={exercise.id} className="overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/8">
            <Link href={`/exercicios/${exercise.id}`} className="flex gap-3 p-2">
              <div className="relative h-[5.5rem] w-[6.5rem] shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={withBase(exercise.image)}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="120px"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center py-1 pr-1">
                <p className="line-clamp-2 text-base font-medium leading-snug">{exercise.name}</p>
                <p className="text-sm text-muted-foreground">{exercise.region}</p>
                {exercise.minPhase > 1 && (
                  <p className="mt-1 text-xs font-medium text-primary">Fase {exercise.minPhase}+</p>
                )}
              </div>
            </Link>
            <div className="px-2 pb-2">
              <VideoLink video={exercise.videos[0]} className="w-full" />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full px-3 py-1.5 text-sm font-medium",
        active ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground ring-1 ring-foreground/10",
      )}
    >
      {children}
    </button>
  );
}
