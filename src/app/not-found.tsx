import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-3xl">Não encontrei esta página</h1>
      <p className="mt-3 max-w-sm text-base text-muted-foreground">
        Volte para o treino de hoje. O tapete continua lá.
      </p>
      <Button className="mt-6 h-12 px-6 text-base" render={<Link href="/" />}>
        Ir para hoje
      </Button>
    </main>
  );
}
