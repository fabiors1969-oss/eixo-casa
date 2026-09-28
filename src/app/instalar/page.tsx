import { InstallGuide } from "@/components/install-guide";

export default function InstalarPage() {
  return (
    <main className="flex flex-1 flex-col px-4 pb-8 pt-[max(1.25rem,env(safe-area-inset-top))]">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
        Galaxy S23
      </p>
      <h1 className="font-heading mt-1 text-3xl leading-tight">
        Colocar na tela inicial
      </h1>
      <p className="mt-3 mb-6 text-base leading-relaxed text-muted-foreground">
        O Eixo Casa não vai para a Play Store. No Galaxy S23 ele vira um ícone na tela
        inicial. Abra esta página <strong>no celular</strong>, instale, e deixe o app
        aberto cerca de 15 segundos — ele grava uma cópia no aparelho para não depender
        do link do dia seguinte.
      </p>
      <InstallGuide />
    </main>
  );
}
