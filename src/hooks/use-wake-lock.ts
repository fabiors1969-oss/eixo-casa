"use client";

import { useEffect } from "react";

export function useWakeLock(active: boolean) {
  useEffect(() => {
    if (!active || typeof navigator === "undefined" || !("wakeLock" in navigator)) {
      return;
    }

    let cancelled = false;
    let wakeLock: WakeLockSentinel | null = null;

    async function request() {
      try {
        wakeLock = await navigator.wakeLock.request("screen");
      } catch {
        wakeLock = null;
      }
    }

    function onVisibility() {
      if (document.visibilityState === "visible" && !cancelled) {
        void request();
      }
    }

    void request();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisibility);
      void wakeLock?.release();
    };
  }, [active]);
}
