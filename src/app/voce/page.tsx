"use client";

import Link from "next/link";
import { Bandage, Dumbbell, Info, Smartphone } from "lucide-react";
import { feelingLabel, useProgress } from "@/lib/progress";
import { getWorkoutById } from "@/lib/workouts";
import { weekdayName } from "@/lib/date";

export default function VocePage() {
  const progress = useProgress();

  const recent = [...progress.completions].reverse().slice(0, 8);

  return (
    <main className="flex flex-1 flex-col px-4 pb-8 pt-[max(1.25rem,env(safe-area-inset-top))]">
      <h1 className="font-heading text-3xl">O seu programa</h1>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        Montado para Fábio, 57 anos, 10 anos de Pilates: cerca de 30 minutos por dia, nível intermediário
        a avançado. Academia três vezes na semana já cuida de pernas e cintura escapular. Aqui entram o
        tórax, o centro e o tendão proximal dos isquiotibiais.
      </p>

      <section className="mt-6 rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
        <h2 className="flex items-center gap-2 font-heading text-xl">
          <Dumbbell className="size-5 text-primary" />
          Objetivo
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
          <li>Mat clássico mais forte: Hundred, série abdominal, swimming, prancha lateral, teaser na fase certa.</li>
          <li>Núcleo que segura a lombar em neutro — sem sit-up e sem crunch.</li>
          <li>Tórax e escápulas para a giba. O pescoço acompanha, com a cabeça apoiada.</li>
          <li>Carga progressiva do tendão isquiotibial, alinhada com o fisioterapeuta.</li>
        </ul>
      </section>

      <section className="mt-4 rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
        <h2 className="flex items-center gap-2 font-heading text-xl">
          <Bandage className="size-5 text-primary" />
          O que respeitamos
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
          <li>Osteoartrose lombar leve: nada de sit-up, crunch, Roll Over, Neck Pull ou extensão balística.</li>
          <li>Giba cervical: cabeça sempre apoiada no rolo. Retração pequena. Sem giro forçado do pescoço.</li>
          <li>Tendão proximal (8 meses): sem alongamento de posterior, sem sentado longo em flexão funda, sem rolo no ísquio.</li>
          <li>Em casa: banda elástica e rolo. Parede e cadeira entram quando fazem falta. Hip thrust e RDL pesados podem ser na academia.</li>
        </ul>
      </section>

      <section className="mt-4 rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
        <h2 className="flex items-center gap-2 font-heading text-xl">
          <Info className="size-5 text-primary" />
          Regras do tapete
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
          <li>Durante o exercício, dor no máximo 3/10. No tendão, ela precisa voltar ao basal em 24 h.</li>
          <li>Cabeça nunca fica pendurada no rolo. Toalha atrás da nuca se o queixo apontar para o teto.</li>
          <li>Não role a lombar óssea nem o ísquio. Rolo é para tórax, glúteo lateral, quadríceps e panturrilha.</li>
          <li>Material de apoio ao treino. Alinhe fases, volumes e critérios com o fisioterapeuta e o médico assistente.</li>
        </ul>
      </section>

      <section className="mt-4 rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
        <h2 className="flex items-center gap-2 font-heading text-xl">
          <Smartphone className="size-5 text-primary" />
          No Galaxy S23
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          Não vai para a Play Store. O ícone na tela inicial é um atalho para o site.
          Depois de instalar, abra o Eixo uma vez e deixe uns 15 segundos na tela —
          o celular guarda uma cópia dos treinos para usar no dia seguinte, mesmo se o
          endereço da internet cair.
        </p>
        <Link href="/instalar" className="mt-3 inline-flex h-11 items-center text-base font-medium text-primary">
          Ver o passo a passo →
        </Link>
        <Link href="/tendao" className="mt-1 inline-flex h-11 items-center text-base font-medium text-primary">
          Programa do tendão e diário de dor →
        </Link>
      </section>

      <section className="mt-6">
        <h2 className="font-heading text-xl">Sessões recentes</h2>
        {recent.length === 0 ? (
          <p className="mt-2 text-base text-muted-foreground">
            Ainda não há treino registrado neste aparelho. A primeira sessão aparece aqui.
          </p>
        ) : (
          <ul className="mt-3 divide-y rounded-2xl bg-card ring-1 ring-foreground/8">
            {recent.map((item) => {
              const workout = getWorkoutById(item.workoutId);
              return (
                <li key={item.date} className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className="font-medium">
                      {workout?.title ?? item.workoutId}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formatIso(item.date)}
                      {workout ? ` · ${weekdayName(workout.weekday)}` : ""}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.feeling ? feelingLabel[item.feeling] : "—"}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

function formatIso(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}
