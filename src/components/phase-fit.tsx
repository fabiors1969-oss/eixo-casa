"use client";

import Link from "next/link";
import { useTendonState } from "@/lib/tendon-store";
import type { TendonPhase } from "@/lib/types";

export function PhaseFit({ minPhase }: { minPhase: TendonPhase }) {
  const { phase } = useTendonState();
  if (minPhase <= 1) return null;
  const open = phase >= minPhase;
  return (
    <p
      className={
        open
          ? "mt-3 rounded-2xl bg-primary/10 px-4 py-3 text-sm leading-relaxed"
          : "mt-3 rounded-2xl bg-terracotta/15 px-4 py-3 text-sm leading-relaxed"
      }
    >
      {open
        ? `A sua fase atual é a ${phase}. Este exercício está liberado.`
        : `A sua fase atual é a ${phase}. Este exercício entra na fase ${minPhase}. Até lá, use a versão anterior do mesmo padrão.`}{" "}
      <Link href="/tendao" className="font-medium text-primary">
        Trocar a fase
      </Link>
    </p>
  );
}
