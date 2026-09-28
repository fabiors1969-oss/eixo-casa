"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VideoLink } from "@/components/video-link";
import { useWakeLock } from "@/hooks/use-wake-lock";
import { withBase } from "@/lib/base-path";
import { todayKey } from "@/lib/date";
import { getExercise } from "@/lib/exercises";
import { feelingLabel, recordCompletion } from "@/lib/progress";
import { formatClock } from "@/lib/date";
import {
  playCountdownTick,
  playExerciseEnd,
  playSessionEnd,
  unlockAudio,
} from "@/lib/sound";
import { setPlusBlock, usePlusBlock, useTendonState } from "@/lib/tendon-store";
import { resolveWorkout, TRANSITION_SECONDS, workoutHasPlus } from "@/lib/workouts";
import type { Feeling, Workout, WorkoutTemplate } from "@/lib/types";
import { cn } from "@/lib/utils";

type Phase = "ready" | "work" | "transition" | "done";

export function WorkoutPlayer({ template }: { template: WorkoutTemplate }) {
  const router = useRouter();
  const { phase: tendonPhase } = useTendonState();
  const plus = usePlusBlock();
  const hasPlus = workoutHasPlus(template);
  const resolved = useMemo(
    () => resolveWorkout(template, tendonPhase, plus && hasPlus),
    [hasPlus, plus, template, tendonPhase],
  );
  const [locked, setLocked] = useState<Workout | null>(null);
  const workout = locked ?? resolved;
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("ready");
  const [remaining, setRemaining] = useState(TRANSITION_SECONDS + 4);
  const [paused, setPaused] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const [feelingOpen, setFeelingOpen] = useState(false);

  const signature = resolved.steps.map((item) => `${item.exerciseId}:${item.seconds}`).join("|");
  const [seenSignature, setSeenSignature] = useState(signature);
  if (!locked && phase === "ready" && seenSignature !== signature) {
    setSeenSignature(signature);
    setIndex(0);
    setRemaining(TRANSITION_SECONDS + 4);
  }

  useWakeLock(phase !== "done");

  const step = workout.steps[Math.min(index, workout.steps.length - 1)];
  const exercise = getExercise(step.exerciseId);

  const totalWork = useMemo(
    () => workout.steps.reduce((sum, item) => sum + item.seconds, 0),
    [workout],
  );

  const elapsedWork = useMemo(() => {
    const done = workout.steps.slice(0, index).reduce((sum, item) => sum + item.seconds, 0);
    if (phase === "work") return done + (step.seconds - remaining);
    return done;
  }, [index, phase, remaining, step.seconds, workout.steps]);

  const goNext = useCallback(
    (fromTimer = false) => {
      const last = index >= workout.steps.length - 1;
      if (last) {
        if (fromTimer) playSessionEnd();
        setPhase("done");
        setFeelingOpen(true);
        return;
      }
      if (phase === "work" && fromTimer) {
        playExerciseEnd();
      }
      setIndex((value) => value + 1);
      setPhase("transition");
      setRemaining(TRANSITION_SECONDS);
    },
    [index, phase, workout.steps.length],
  );

  const skip = useCallback(() => {
    void unlockAudio();
    if (phase === "ready" || phase === "transition") {
      setLocked(workout);
      setPhase("work");
      setRemaining(step.seconds);
      return;
    }
    goNext(false);
  }, [goNext, phase, step.seconds, workout]);

  const goPrev = useCallback(() => {
    if (phase === "work" && remaining < step.seconds - 2) {
      setRemaining(step.seconds);
      return;
    }
    if (index === 0) {
      setPhase("ready");
      setRemaining(TRANSITION_SECONDS + 4);
      return;
    }
    setIndex((value) => Math.max(0, value - 1));
    setPhase("work");
    const prev = workout.steps[Math.max(0, index - 1)];
    setRemaining(prev.seconds);
  }, [index, phase, remaining, step.seconds, workout.steps]);

  useEffect(() => {
    if (paused || phase === "done") return;
    const id = window.setInterval(() => {
      setRemaining((value) => {
        if (value > 1) {
          if (phase === "work" && (value === 4 || value === 3 || value === 2)) {
            playCountdownTick();
          }
          return value - 1;
        }
        if (phase === "ready" || phase === "transition") {
          setLocked(workout);
          setPhase("work");
          return step.seconds;
        }
        if (phase === "work") {
          goNext(true);
        }
        return 0;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [goNext, paused, phase, step.seconds, workout]);

  function finish(feeling?: Feeling) {
    recordCompletion({
      date: todayKey(),
      workoutId: workout.id,
      durationSec: Math.round((Date.now() - startedAt) / 1000),
      feeling,
    });
    setFeelingOpen(false);
    router.push("/");
  }

  const progress = Math.min(100, Math.round((elapsedWork / totalWork) * 100));
  const isPrep = phase === "ready" || phase === "transition";
  const shown = exercise;
  const shownDuration = phase === "done" ? 0 : remaining;
  const instructions = isPrep ? shown.setup : shown.how;

  if (phase === "done") {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-8" />
        </div>
        <h1 className="font-heading text-3xl">Sessão completa</h1>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-muted-foreground">
          {workout.title} no tapete. Se o tendão passou de 3/10, anote no diário antes de esquecer.
        </p>
        <Button className="mt-8 h-12 min-w-48 text-base" onClick={() => setFeelingOpen(true)}>
          Registrar e sair
        </Button>
        <Button variant="outline" className="mt-3 h-12 min-w-48 text-base" render={<Link href="/tendao" />}>
          Anotar a dor
        </Button>
        <FeelingDialog
          open={feelingOpen}
          onOpenChange={setFeelingOpen}
          onPick={finish}
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <header className="flex items-center justify-between px-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <Button variant="ghost" size="icon-lg" render={<Link href={`/treino/${workout.id}`} />}>
          <X className="size-5" />
          <span className="sr-only">Fechar</span>
        </Button>
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {index + 1} de {workout.steps.length}
          </p>
          <p className="text-sm font-medium">{workout.shortTitle}</p>
        </div>
        <Button
          variant="ghost"
          size="icon-lg"
          onClick={() => {
            void unlockAudio();
            setPaused((value) => !value);
          }}
        >
          {paused ? <Play className="size-5" /> : <Pause className="size-5" />}
          <span className="sr-only">{paused ? "Continuar" : "Pausar"}</span>
        </Button>
      </header>

      <div className="px-4 pt-2">
        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="relative mx-4 mt-3 aspect-[4/3] overflow-hidden rounded-2xl bg-muted ring-1 ring-foreground/10">
        <Image
          src={withBase(shown.image)}
          alt={`Miniatura: ${shown.name}`}
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 512px) 100vw, 512px"
        />
        {isPrep && (
          <div className="absolute inset-0 flex items-end bg-black/25">
            <p className="w-full bg-black/45 px-4 py-3 text-center text-lg font-medium text-white">
              {phase === "ready" ? "Prepare-se" : "Próximo"}
            </p>
          </div>
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-5 pb-6 pt-4">
        <p className="text-sm font-medium text-terracotta">
          {isPrep ? "Como se posicionar" : shown.region}
        </p>
        <h1 className="font-heading text-[1.7rem] leading-tight">{shown.name}</h1>
        <div className="mt-2">
          <VideoLink video={shown.videos[0]} className="h-10" />
        </div>
        {phase === "ready" && hasPlus && (
          <button
            type="button"
            onClick={() => setPlusBlock(!plus)}
            className="mt-3 text-left text-sm font-medium text-primary"
          >
            {plus ? "Bloco extra ligado" : "Incluir bloco extra (+10 min)"}
          </button>
        )}
        {step.note && (
          <p className="mt-1 text-base font-medium leading-snug">{step.note}</p>
        )}
        {!isPrep && (
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">{shown.goal}</p>
        )}

        <div className="mt-3 flex items-end justify-between gap-4">
          <p
            className={cn(
              "font-heading text-6xl tabular-nums leading-none tracking-tight",
              remaining <= 5 && phase === "work" && "text-terracotta",
            )}
          >
            {formatClock(shownDuration)}
          </p>
          <p className="mb-1 max-w-[10rem] text-right text-sm text-muted-foreground">
            {blockHint(step.seconds, paused, isPrep)}
          </p>
        </div>

        <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-1">
          <ol className="space-y-2.5">
            {instructions.map((line, instructionIndex) => (
              <li key={`${instructionIndex}-${line.slice(0, 24)}`} className="flex gap-2.5 text-[1.05rem] leading-snug">
                <span className="mt-0.5 w-5 shrink-0 text-sm font-medium text-primary">
                  {instructionIndex + 1}.
                </span>
                {line}
              </li>
            ))}
          </ol>
          {!isPrep && (
            <p className="mt-3 text-base leading-relaxed">
              <span className="font-medium">Respiração: </span>
              {shown.breathing}
            </p>
          )}
          {!isPrep && shown.watch[0] && (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Atenção: {shown.watch[0]}
            </p>
          )}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Button variant="outline" className="h-14 flex-1 text-base" onClick={goPrev}>
            <ChevronLeft className="size-5" />
            Voltar
          </Button>
          <Button className="h-14 flex-1 text-base" onClick={skip}>
            {isPrep ? "Começar" : "Pular"}
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>

      <FeelingDialog open={feelingOpen} onOpenChange={setFeelingOpen} onPick={finish} />
    </div>
  );
}

function blockHint(seconds: number, paused: boolean, prep: boolean): string {
  if (prep) return "Leia a montagem e entre na pose.";
  if (paused) return "Pausado — a tela permanece acesa";
  if (seconds >= 60 && seconds % 60 === 0) {
    const minutes = seconds / 60;
    return minutes === 1 ? "1 minuto neste bloco" : `${minutes} minutos neste bloco`;
  }
  return `${seconds} segundos neste bloco`;
}

function FeelingDialog({
  open,
  onOpenChange,
  onPick,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPick: (feeling?: Feeling) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Como foi hoje?</DialogTitle>
          <DialogDescription className="text-base">
            Só para você lembrar o ritmo. Nada disso vai para lugar nenhum — fica no aparelho.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          {(Object.keys(feelingLabel) as Feeling[]).map((feeling) => (
            <Button
              key={feeling}
              variant="outline"
              className="h-12 justify-start text-base"
              onClick={() => onPick(feeling)}
            >
              {feelingLabel[feeling]}
            </Button>
          ))}
          <Button variant="ghost" className="h-11 text-base" onClick={() => onPick()}>
            Pular
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
