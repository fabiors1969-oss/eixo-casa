"use client";

import { usePathname } from "next/navigation";
import { BottomNav } from "@/components/bottom-nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const fullscreen = pathname.includes("/praticar");

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col bg-background shadow-[0_0_80px_rgba(60,50,30,0.08)] md:max-w-lg">
      <div className={fullscreen ? "flex min-h-dvh flex-col" : "flex min-h-dvh flex-col pb-nav"}>
        {children}
      </div>
      {!fullscreen && <BottomNav />}
    </div>
  );
}
