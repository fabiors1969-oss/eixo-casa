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
import { useGymDays } from "@/lib/gym-store";
import { getExercise, miniLabel } from "@/lib/exercises";
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
  const gymDays = useGymDays();
  const gymDay = gymDays.includes(template.weekday);
  const hasPlus = workoutHasPlus(template);
  const resolved = useMemo(
    () => resolveWorkout(template, tendonPhase, plus && hasPlus, gymDay),
    [gymDay, hasPlus, plus, template, tendonPhase],
  );
  const [locked, setLocked] = useState<Workout | null>(null);
  const workout = locked ?? resolved;
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("ready");
  const [remaining, setRemaining] = useState(TRANSITION_SECONDS + 4);
  const [paused, setPaused] = useState(false);
  const [repCount, setRepCount] = useState(0);
  const [startedAt] = useState(() => Date.now());
  const [feelingOpen, setFeelingOpen] = useState(false);

  const signature = resolved.steps
    .map((item) => `${item.exerciseId}:${item.reps ?? "t"}:${item.seconds}`)
    .join("|");
  const [seenSignature, setSeenSignature] = useState(signature);
  if (!locked && phase === "ready" && seenSignature !== signature) {
    setSeenSignature(signature);
    setIndex(0);
    setRemaining(TRANSITION_SECONDS + 4);
  }

  useWakeLock(phase !== "done");

  const step = workout.steps[Math.min(index, workout.steps.length - 1)];
  const exercise = getExercise(step.exerciseId);

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

  const beginWork = useCallback(() => {
    setLocked(workout);
    setPhase("work");
    setRepCount(0);
    setRemaining(step.reps ? 0 : step.seconds);
  }, [step.reps, step.seconds, workout]);

  const skip = useCallback(() => {
    void unlockAudio();
    if (phase === "ready" || phase === "transition") {
      beginWork();
      return;
    }
    goNext(Boolean(step.reps));
  }, [beginWork, goNext, phase, step.reps]);

  const goPrev = useCallback(() => {
    if (phase === "work" && step.reps && repCount > 0) {
      setRepCount(0);
      return;
    }
    if (phase === "work" && !step.reps && remaining < step.seconds - 2) {
      setRemaining(step.seconds);
      return;
    }
    if (index === 0) {
      setPhase("ready");
      setRepCount(0);
      setRemaining(TRANSITION_SECONDS + 4);
      return;
    }
    const prev = workout.steps[Math.max(0, index - 1)];
    setIndex((value) => Math.max(0, value - 1));
    setPhase("work");
    setRepCount(0);
    setRemaining(prev.reps ? 0 : prev.seconds);
  }, [index, phase, remaining, repCount, step.reps, step.seconds, workout.steps]);

  function countRep() {
    if (!step.reps || phase !== "work") return;
    void unlockAudio();
    setRepCount((value) => Math.min(step.reps ?? value, value + 1));
  }

  useEffect(() => {
    if (paused || phase === "done") return;
    if (phase === "work" && step.reps) return;
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
          setRepCount(0);
          return step.reps ? 0 : step.seconds;
        }
        if (phase === "work") {
          goNext(true);
        }
        return 0;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [goNext, paused, phase, step.reps, step.seconds, workout]);

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

  const isPrep = phase === "ready" || phase === "transition";
  const repMode = Boolean(step.reps) && phase === "work";
  const stepFraction = repMode
    ? Math.min(1, repCount / (step.reps ?? 1))
    : phase === "work" && step.seconds > 0
      ? Math.min(1, (step.seconds - remaining) / step.seconds)
      : 0;
  const progress = Math.min(100, Math.round(((index + stepFraction) / workout.steps.length) * 100));
  const sideNote = sideRunCue(workout.steps, index);
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
        {phase === "ready" && gymDay && (
          <p className="mt-3 text-sm font-medium text-primary">
            Dia de musculação: mobilidade e tendão leve. O bloco extra fica de fora.
          </p>
        )}
        {phase === "ready" && hasPlus && !gymDay && (
          <button
            type="button"
            onClick={() => setPlusBlock(!plus)}
            className="mt-3 text-left text-sm font-medium text-primary"
          >
            {plus ? "Bloco extra de mobilidade ligado" : "Incluir bloco extra de mobilidade"}
          </button>
        )}
        {step.note && (
          <p className="mt-1 text-base font-medium leading-snug">{step.note}</p>
        )}
        {step.mini && (
          <p className="mt-1 text-sm font-medium text-terracotta">{miniLabel[step.mini]}</p>
        )}
        {sideNote && <p className="mt-1 text-sm font-medium text-primary">{sideNote}</p>}
        {!isPrep && (
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">{shown.goal}</p>
        )}

        <div className="mt-3 flex items-end justify-between gap-4">
          {repMode ? (
            <button
              type="button"
              onClick={countRep}
              className={cn(
                "font-heading text-left text-6xl tabular-nums leading-none tracking-tight",
                repCount >= (step.reps ?? 0) && "text-primary",
              )}
            >
              {repCount}
              <span className="sr-only">repetições feitas, toque para contar</span>
            </button>
          ) : (
            <p
              className={cn(
                "font-heading text-6xl tabular-nums leading-none tracking-tight",
                !step.reps && remaining <= 5 && phase === "work" && "text-terracotta",
              )}
            >
              {formatClock(shownDuration)}
            </p>
          )}
          <p className="mb-1 max-w-[11rem] text-right text-sm text-muted-foreground">
            {blockHint(step, paused, isPrep, repCount)}
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
            {isPrep ? "Começar" : repMode ? "Feito" : "Pular"}
            {repMode ? <Check className="size-5" /> : <ChevronRight className="size-5" />}
          </Button>
        </div>
      </div>

      <FeelingDialog open={feelingOpen} onOpenChange={setFeelingOpen} onPick={finish} />
    </div>
  );
}

function blockHint(
  step: { seconds: number; reps?: number },
  paused: boolean,
  prep: boolean,
  repCount = 0,
): string {
  if (prep && step.reps) return `${step.reps} repetições. Sem relógio — você encerra em Feito.`;
  if (prep) return "Sustentação de 30 segundos. Leia a montagem.";
  if (step.reps) {
    if (repCount >= step.reps) return `${step.reps} feitas. Toque em Feito.`;
    return `de ${step.reps}. Toque o número a cada repetição.`;
  }
  if (paused) return "Pausado — a tela permanece acesa";
  return `${step.seconds} segundos neste bloco`;
}

function sideRunCue(steps: { exerciseId: string; note?: string }[], index: number): string | null {
  const current = steps[index];
  if (!current) return null;
  let start = index;
  while (start > 0 && steps[start - 1]?.exerciseId === current.exerciseId) start -= 1;
  let end = index;
  while (end + 1 < steps.length && steps[end + 1]?.exerciseId === current.exerciseId) end += 1;
  if (end - start !== 1) return null;
  const first = steps[start]?.note ?? "";
  const second = steps[end]?.note ?? "";
  if (!first || first === second || first.includes("série") || second.includes("série")) return null;
  const sideWord = /direit|esquerd|lado/i;
  if (!sideWord.test(first) || !sideWord.test(second)) return null;
  return index === start ? "Em seguida: o outro lado." : "Agora o outro lado.";
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
