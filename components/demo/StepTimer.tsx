"use client";

import { useEffect, useState } from "react";

export function StepTimer({ startedAt }: { startedAt: number | null }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!startedAt) return;
    const tick = () => setElapsed(Date.now() - startedAt);
    tick();
    const id = window.setInterval(tick, 100);
    return () => window.clearInterval(id);
  }, [startedAt]);

  if (!startedAt) return null;

  const seconds = (elapsed / 1000).toFixed(1);
  return <span className="step-timer">{seconds}s</span>;
}
