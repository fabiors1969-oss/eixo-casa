"use client";

import { useEffect } from "react";
import { basePath, withBase } from "@/lib/base-path";

export function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const scope = `${basePath}/`;
    navigator.serviceWorker.register(`${withBase("/sw.js")}?v=5`, { scope }).catch(() => {
      // Sem service worker o atalho da tela inicial ainda funciona.
    });
  }, []);

  return null;
}
