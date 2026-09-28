"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, CalendarDays, HeartPulse, Home, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Hoje", icon: Home },
  { href: "/semana", label: "Semana", icon: CalendarDays },
  { href: "/tendao", label: "Tendão", icon: HeartPulse },
  { href: "/exercicios", label: "Exercícios", icon: BookOpen },
  { href: "/voce", label: "Você", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-card/95 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto grid max-w-lg grid-cols-5 px-1 pt-1">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-xl px-0.5 text-[11px] font-medium leading-none",
                active ? "text-primary" : "text-muted-foreground",
              )}
            >
              <Icon className={cn("size-5", active && "stroke-[2.4]")} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
