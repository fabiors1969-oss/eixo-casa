"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Check, Download, Share2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

function isStandalone() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in window.navigator &&
      Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone))
  );
}

function subscribeStandalone(onChange: () => void) {
  const media = window.matchMedia("(display-mode: standalone)");
  media.addEventListener("change", onChange);
  window.addEventListener("appinstalled", onChange);
  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener("appinstalled", onChange);
  };
}

export function InstallGuide() {
  const installed = useSyncExternalStore(
    subscribeStandalone,
    isStandalone,
    () => false,
  );
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(
    null,
  );

  useEffect(() => {
    const onPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  async function installNow() {
    if (!installEvent) return;
    await installEvent.prompt();
    const choice = await installEvent.userChoice;
    if (choice.outcome === "accepted") {
      setInstallEvent(null);
    }
  }

  if (installed) {
    return (
      <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8">
        <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-6" />
        </div>
        <h2 className="font-heading text-2xl">Já está no seu Galaxy</h2>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          O ícone do Eixo Casa está na tela inicial. Toque nele para treinar em tela
          cheia, como qualquer outro aplicativo.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {installEvent && (
        <Button className="h-14 w-full text-base" onClick={installNow}>
          <Download className="size-5" />
          Instalar no Galaxy S23
        </Button>
      )}

      <section className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8">
        <h2 className="flex items-center gap-2 font-heading text-xl">
          <Smartphone className="size-5 text-primary" />
          Internet Samsung (mais comum)
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-base leading-relaxed">
          <li>Abra este site no navegador do celular (o app azul da Samsung).</li>
          <li>
            Toque no menu de <strong>três risquinhos</strong>, embaixo da tela.
          </li>
          <li>
            Toque em <strong>Adicionar página a</strong>.
          </li>
          <li>
            Escolha <strong>Tela inicial</strong> e confirme.
          </li>
          <li>
            Volte para a tela inicial: o ícone <strong>Eixo</strong> aparece junto dos
            outros aplicativos. Toque nele para abrir.
          </li>
        </ol>
      </section>

      <section className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8">
        <h2 className="flex items-center gap-2 font-heading text-xl">
          <Share2 className="size-5 text-primary" />
          Se você estiver no Chrome
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-base leading-relaxed">
          <li>Toque nos <strong>três pontinhos</strong> no canto superior direito.</li>
          <li>
            Toque em <strong>Instalar aplicativo</strong> ou{" "}
            <strong>Adicionar à tela inicial</strong>.
          </li>
          <li>Confirme. O ícone do Eixo Casa entra na tela inicial do Galaxy.</li>
        </ol>
      </section>
    </div>
  );
}
