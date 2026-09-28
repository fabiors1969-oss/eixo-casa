export type Equipment = "nada" | "banda" | "rolo" | "parede" | "cadeira";

export type ExerciseCategory = "toracica" | "core" | "quadril" | "tendao" | "recuperacao";

export type TendonPhase = 1 | 2 | 3 | 4;

export type VideoLink = {
  url: string;
  title: string;
  author: string;
};

export type Exercise = {
  id: string;
  name: string;
  aka?: string;
  image: string;
  equipment: Equipment[];
  category: ExerciseCategory;
  region: string;
  goal: string;
  setup: string[];
  how: string[];
  cues: [string, string, string];
  breathing: string;
  dose: string;
  /** Menor fase do tendão em que o exercício entra no plano. */
  minPhase: TendonPhase;
  videos: VideoLink[];
  watch: string[];
  avoid: string[];
  easier: string;
  harder: string;
  why: string;
};

export type WorkoutStep = {
  exerciseId: string;
  seconds: number;
  note?: string;
};

export type StepOption = {
  minPhase: TendonPhase;
  exerciseId: string;
  note?: string;
};

export type StepTemplate = {
  exerciseId: string;
  seconds: number;
  note?: string;
  plus?: boolean;
  /** A opção de maior minPhase ainda ≤ fase atual substitui exerciseId. */
  options?: StepOption[];
};

export type TendonLoad = "analgesic" | "strength" | "second" | "sport" | "recovery";

export type WorkoutTemplate = {
  id: string;
  weekday: number;
  title: string;
  shortTitle: string;
  focus: string;
  why: string;
  equipment: Equipment[];
  tendon: TendonLoad;
  /** Onde inserir o bloco do tendão, entre os passos principais (sem o bloco extra). */
  tendonAt?: number;
  steps: StepTemplate[];
};

export type Workout = {
  id: string;
  weekday: number;
  title: string;
  shortTitle: string;
  focus: string;
  why: string;
  equipment: Equipment[];
  tendon: TendonLoad;
  steps: WorkoutStep[];
};

export type Feeling = "leve" | "bom" | "exigente";

export type Completion = {
  date: string;
  workoutId: string;
  durationSec: number;
  feeling?: Feeling;
};

export type PainSignal = "verde" | "amarelo" | "vermelho";

export type PainLogEntry = {
  id: string;
  date: string;
  phase: TendonPhase;
  during: number;
  morning: number | null;
  baseline: boolean | null;
  note?: string;
};
