"use client";

import { useState } from "react";
import { VideoLink } from "@/components/video-link";
import { todayKey } from "@/lib/date";
import {
  gymAdvice,
  painRule,
  painSignal,
  phaseGuides,
  redFlags,
  referenceVideos,
  references,
  retiredMoves,
  signalCopy,
  sittingAdvice,
} from "@/lib/tendon";
import {
  addPainLog,
  clearPainLogs,
  removePainLog,
  setTendonPhase,
  useTendonState,
} from "@/lib/tendon-store";
import type { PainSignal, TendonPhase } from "@/lib/types";
import { cn } from "@/lib/utils";

const signalClass: Record<PainSignal, string> = {
  verde: "bg-primary/10 ring-primary/25",
  amarelo: "bg-terracotta/15 ring-terracotta/30",
  vermelho: "bg-destructive/10 ring-destructive/25",
};

export default function TendaoPage() {
  const { phase, logs } = useTendonState();
  const [during, setDuring] = useState<number | null>(null);
  const [morning, setMorning] = useState<number | null>(null);
  const [baseline, setBaseline] = useState<boolean | null>(null);
  const [date, setDate] = useState(todayKey);
  const [note, setNote] = useState("");
  const [confirmClear, setConfirmClear] = useState(false);

  const preview =
    during === null
      ? null
      : painSignal({ during, morning, baseline });

  function save() {
    if (during === null) return;
    addPainLog({
      date,
      phase,
      during,
      morning,
      baseline,
      note: note.trim() || undefined,
    });
    setDuring(null);
    setMorning(null);
    setBaseline(null);
    setNote("");
    setDate(todayKey());
  }

  return (
    <main className="flex flex-1 flex-col px-4 pb-8 pt-[max(1.25rem,env(safe-area-inset-top))]">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">8 meses</p>
      <h1 className="font-heading mt-1 text-3xl leading-tight">Tendão isquiotibial</h1>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        Tendinopatia proximal crônica, perto do ísquio. Carga progressiva no estilo Goom, Malliaras e Purdam
        (JOSPT 2016): isometria, força lenta, flexão do quadril aos poucos, e só então energia para correr e jogar.
      </p>

      <section className="mt-5 rounded-2xl bg-secondary/80 p-4 text-sm leading-relaxed">
        <p className="font-medium">Aviso para alinhar com o fisioterapeuta</p>
        <p className="mt-2">
          Isto é um roteiro de treino, não uma avaliação. Confirme o diagnóstico e a fase com quem te acompanha
          — inclusive outros motivos de dor no ísquio (lombar, ciático, bursite, lesão parcial). Muitos quadros
          crônicos já toleram começar na fase 2; o app abre na fase 1, que é a mais protegida. A semana em si não
          decide a troca: decidem os critérios abaixo.
        </p>
      </section>

      <section className="mt-4">
        <h2 className="font-heading text-xl">Fase atual</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Fica salva neste aparelho. Todo dia mistura mobilidade, abdômen e quadril; o bloco do tendão sai
          desta fase. A segunda é o dia mais pesado, a quinta é a segunda sessão, o sábado só vira energia na
          fase 4. Nos outros dias a dose é leve.
        </p>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {phaseGuides.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTendonPhase(item.id)}
              className={cn(
                "h-14 rounded-2xl text-lg font-semibold ring-1",
                phase === item.id
                  ? "bg-primary text-primary-foreground ring-primary"
                  : "bg-card ring-foreground/10",
              )}
            >
              {item.id}
            </button>
          ))}
        </div>
        <PhaseCard active={phase} />
      </section>

      <section className="mt-6">
        <h2 className="font-heading text-xl">Regra da dor</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
          <li>{painRule.during}</li>
          <li>{painRule.after}</li>
          <li>{painRule.morning}</li>
        </ul>
        <div className="mt-3 grid gap-2">
          <p className={cn("rounded-2xl p-3 text-sm leading-relaxed ring-1", signalClass.verde)}>{painRule.green}</p>
          <p className={cn("rounded-2xl p-3 text-sm leading-relaxed ring-1", signalClass.amarelo)}>{painRule.yellow}</p>
          <p className={cn("rounded-2xl p-3 text-sm leading-relaxed ring-1", signalClass.vermelho)}>{painRule.red}</p>
        </div>
      </section>

      <section className="mt-6 rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
        <h2 className="font-heading text-xl">Diário do tendão</h2>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Só neste aparelho. Nada sai do celular.
        </p>

        <label className="mt-4 block text-sm font-medium">
          Data
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-base"
          />
        </label>

        <ScorePicker label="Dor durante (0–10)" value={during} onChange={setDuring} />
        <ScorePicker
          label="Teste da manhã (0–10)"
          value={morning}
          onChange={setMorning}
          optional
        />

        <p className="mt-4 text-sm font-medium">Voltou ao basal em 24 h?</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <Choice active={baseline === true} onClick={() => setBaseline(true)}>
            Sim
          </Choice>
          <Choice active={baseline === false} onClick={() => setBaseline(false)}>
            Não
          </Choice>
        </div>

        <label className="mt-4 block text-sm font-medium">
          Nota (opcional)
          <input
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Ex.: cadeira dura no consultório"
            className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-base"
          />
        </label>

        {preview && (
          <div className={cn("mt-4 rounded-2xl p-3 text-sm leading-relaxed ring-1", signalClass[preview.signal])}>
            <p className="font-medium">{signalCopy[preview.signal].title}</p>
            <p className="mt-1">{signalCopy[preview.signal].body}</p>
            {preview.provisional && (
              <p className="mt-2">Provisório: complete o teste da manhã e se a dor voltou ao basal.</p>
            )}
          </div>
        )}

        <button
          type="button"
          disabled={during === null}
          onClick={save}
          className="mt-4 h-12 w-full rounded-xl bg-primary text-base font-medium text-primary-foreground disabled:opacity-40"
        >
          Salvar registro
        </button>
      </section>

      <section className="mt-4">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-xl">Registros</h2>
          {logs.length > 0 && (
            <button
              type="button"
              className="text-sm text-muted-foreground"
              onClick={() => {
                if (!confirmClear) {
                  setConfirmClear(true);
                  return;
                }
                clearPainLogs();
                setConfirmClear(false);
              }}
            >
              {confirmClear ? "Confirmar apagar" : "Apagar tudo"}
            </button>
          )}
        </div>
        {logs.length === 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">Nenhum registro ainda.</p>
        ) : (
          <ul className="mt-3 flex flex-col gap-2">
            {logs.map((entry) => {
              const advice = painSignal(entry);
              return (
                <li key={entry.id} className={cn("rounded-2xl p-3 ring-1", signalClass[advice.signal])}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium">
                        {formatIso(entry.date)} · fase {entry.phase}
                      </p>
                      <p className="mt-1 text-sm">
                        Durante {entry.during}/10
                        {entry.morning === null ? " · manhã em aberto" : ` · manhã ${entry.morning}/10`}
                        {entry.baseline === null ? "" : entry.baseline ? " · voltou ao basal" : " · não voltou"}
                      </p>
                      <p className="mt-1 text-sm">{signalCopy[advice.signal].title}</p>
                      {entry.note && <p className="mt-1 text-sm text-muted-foreground">{entry.note}</p>}
                    </div>
                    <button
                      type="button"
                      className="text-sm text-muted-foreground"
                      onClick={() => removePainLog(entry.id)}
                    >
                      Tirar
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section className="mt-6">
        <h2 className="font-heading text-xl">O que saiu do plano</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Alongar o posterior não trata tendinopatia. Estes padrões comprimem a origem do tendão no ísquio, ou a
          lombar, e foram trocados.
        </p>
        <ul className="mt-3 flex flex-col gap-3">
          {retiredMoves.map((item) => (
            <li key={item.name} className="rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
              <p className="font-medium">{item.name}</p>
              <p className="mt-1 text-sm leading-relaxed">{item.why}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">No lugar: {item.instead}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-heading text-xl">Sentar, academia e alerta</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
          {sittingAdvice.map((item) => (
            <li key={item}>{item}</li>
          ))}
          {gymAdvice.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 font-medium">Procure reavaliação se aparecer:</p>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-base leading-relaxed">
          {redFlags.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-heading text-xl">Vídeos de referência</h2>
        <div className="mt-3 flex flex-col gap-2">
          {referenceVideos.map((video) => (
            <VideoLink key={video.url} video={video} className="w-full" />
          ))}
        </div>
        <ul className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground">
          {references.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function PhaseCard({ active }: { active: TendonPhase }) {
  const guide = phaseGuides.find((item) => item.id === active) ?? phaseGuides[0];
  return (
    <article className="mt-3 rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
      <p className="text-sm font-medium text-primary">Fase {guide.id}</p>
      <h3 className="font-heading mt-1 text-2xl leading-tight">{guide.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{guide.window}</p>
      <p className="mt-3 text-base leading-relaxed">{guide.goal}</p>
      <p className="mt-3 text-sm leading-relaxed">
        <span className="font-medium">Dose. </span>
        {guide.dose}
      </p>
      <p className="mt-3 text-sm font-medium">Exercícios</p>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed">
        {guide.exercises.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-3 text-sm leading-relaxed">
        <span className="font-medium">Corrida e tênis. </span>
        {guide.sport}
      </p>
      <p className="mt-3 text-sm font-medium">Para avançar</p>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed">
        {guide.advance.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function ScorePicker({
  label,
  value,
  onChange,
  optional,
}: {
  label: string;
  value: number | null;
  onChange: (value: number) => void;
  optional?: boolean;
}) {
  return (
    <div className="mt-4">
      <p className="text-sm font-medium">
        {label}
        {optional ? " · pode ficar para amanhã" : ""}
      </p>
      <div className="mt-2 grid grid-cols-6 gap-1.5">
        {Array.from({ length: 11 }, (_, score) => (
          <button
            key={score}
            type="button"
            onClick={() => onChange(score)}
            className={cn(
              "h-11 rounded-xl text-sm font-medium ring-1",
              value === score
                ? "bg-primary text-primary-foreground ring-primary"
                : "bg-background ring-foreground/10",
            )}
          >
            {score}
          </button>
        ))}
      </div>
    </div>
  );
}

function Choice({
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
        "h-11 rounded-xl text-sm font-medium ring-1",
        active ? "bg-primary text-primary-foreground ring-primary" : "bg-background ring-foreground/10",
      )}
    >
      {children}
    </button>
  );
}

function formatIso(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}
