import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { AppShell } from "@/components/app-shell";
import { PwaRegister } from "@/components/pwa-register";
import { withBase } from "@/lib/base-path";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Eixo Casa — pilates misto em casa",
  description:
    "Treino diário misto de pilates em casa, com abdômen, quadril e carga progressiva para tendinopatia proximal dos isquiotibiais. Montado para Fábio.",
  applicationName: "Eixo Casa",
  appleWebApp: {
    capable: true,
    title: "Eixo Casa",
    statusBarStyle: "default",
  },
  manifest: withBase("/manifest.json"),
  icons: {
    icon: withBase("/icon-192.png"),
    apple: withBase("/apple-touch-icon.png"),
  },
};

export const viewport: Viewport = {
  themeColor: "#f3eee4",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${figtree.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <PwaRegister />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
