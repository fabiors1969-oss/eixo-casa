import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { PhaseFit } from "@/components/phase-fit";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VideoLink } from "@/components/video-link";
import { withBase } from "@/lib/base-path";
import { exercises, equipmentLabel, getExercise } from "@/lib/exercises";

export function generateStaticParams() {
  return exercises.map((exercise) => ({ id: exercise.id }));
}

export default async function ExercisePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exercise = exercises.find((item) => item.id === id);
  if (!exercise) notFound();
  const data = getExercise(id);

  return (
    <main className="flex flex-1 flex-col pb-8 pt-[max(0.5rem,env(safe-area-inset-top))]">
      <div className="px-2">
        <Button variant="ghost" className="h-11 text-base" render={<Link href="/exercicios" />}>
          <ChevronLeft className="size-5" />
          Biblioteca
        </Button>
      </div>

      <div className="relative mx-4 aspect-[4/3] overflow-hidden rounded-2xl bg-muted ring-1 ring-foreground/10">
        <Image
          src={withBase(data.image)}
          alt={`Miniatura esquemática: ${data.name}`}
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 512px) 100vw, 512px"
        />
      </div>

      <div className="px-5 pt-5">
        <p className="text-sm font-medium text-primary">{data.region}</p>
        <h1 className="font-heading mt-1 text-3xl leading-tight">{data.name}</h1>
        {data.aka && <p className="mt-1 text-sm text-muted-foreground">{data.aka}</p>}
        <p className="mt-3 text-base leading-relaxed">{data.goal}</p>
        <div className="mt-4 flex flex-col gap-2">
          {data.videos.map((video, index) => (
            <VideoLink
              key={video.url}
              video={video}
              label={index === 0 ? "▶ Ver vídeo" : "▶ Ver outro vídeo"}
              className="w-full"
            />
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Dose de referência: {data.dose}. O vídeo abre no YouTube e mostra a técnica-base; vale o que está escrito aqui quando a fase do tendão pedir menos amplitude.
        </p>
        <PhaseFit minPhase={data.minPhase} />

        <div className="mt-4 flex flex-wrap gap-1.5">
          {data.equipment.map((item) => (
            <Badge key={item} variant="secondary">
              {equipmentLabel[item]}
            </Badge>
          ))}
        </div>

        <Section title="Montagem">
          {data.setup.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </Section>
        <Section title="Como fazer">
          {data.how.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </Section>

        <h2 className="font-heading mt-8 text-xl">Respiração</h2>
        <p className="mt-2 text-base leading-relaxed">{data.breathing}</p>

        <h2 className="font-heading mt-8 text-xl">Por que este</h2>
        <p className="mt-2 text-base leading-relaxed">{data.why}</p>

        <h2 className="font-heading mt-8 text-xl">Fique de olho</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-base leading-relaxed">
          {data.watch.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <h2 className="font-heading mt-8 text-xl">Não faça</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-base leading-relaxed">
          {data.avoid.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <div className="mt-8 grid gap-3">
          <div className="rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
            <p className="text-sm font-medium text-muted-foreground">Mais fácil</p>
            <p className="mt-1 text-base leading-relaxed">{data.easier}</p>
          </div>
          <div className="rounded-2xl bg-card p-4 ring-1 ring-foreground/8">
            <p className="text-sm font-medium text-muted-foreground">Um pouco mais</p>
            <p className="mt-1 text-base leading-relaxed">{data.harder}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h2 className="font-heading mt-8 text-xl">{title}</h2>
      <ol className="mt-2 list-decimal space-y-2 pl-5 text-base leading-relaxed">{children}</ol>
    </>
  );
}
