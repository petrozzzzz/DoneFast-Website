"use client";

import { useEffect, useRef, useState } from "react";
import type { DemoStep } from "@/lib/demos";
import { StepTimer } from "./StepTimer";

export type StepStatus = "pending" | "running" | "complete" | "error";

export function PipelineStep({
  step,
  index,
  status,
  isSelected,
  onSelect,
}: {
  step: DemoStep;
  index: number;
  status: StepStatus;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [finishedAt, setFinishedAt] = useState<number | null>(null);
  const prevStatus = useRef<StepStatus>(status);

  useEffect(() => {
    if (prevStatus.current !== "running" && status === "running") {
      setStartedAt(Date.now());
      setFinishedAt(null);
    }
    if (prevStatus.current === "running" && status === "complete") {
      setFinishedAt(Date.now());
    }
    prevStatus.current = status;
  }, [status]);

  const durationLabel = (() => {
    if (status === "complete" && startedAt && finishedAt) {
      return `${((finishedAt - startedAt) / 1000).toFixed(1)}s`;
    }
    return null;
  })();

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`pipeline-step pipeline-step-${status} ${isSelected ? "is-selected" : ""}`}
      aria-pressed={isSelected}
      aria-label={`${step.label} — ${status}`}
    >
      <span className="pipeline-step-index">{String(index + 1).padStart(2, "0")}</span>

      <span className={`pipeline-step-dot pipeline-step-dot-${status}`} aria-hidden>
        {status === "complete" && (
          <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden>
            <path
              d="M3 8.5L6.5 12L13 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {status === "running" && <span className="pipeline-step-pulse" />}
        {status === "error" && <span className="pipeline-step-x">×</span>}
      </span>

      <span className="pipeline-step-body">
        <span className="pipeline-step-label">{step.label}</span>
        <span className="pipeline-step-desc">{step.description}</span>
      </span>

      <span className="pipeline-step-meta">
        {status === "running" && <StepTimer startedAt={startedAt} />}
        {durationLabel && <span className="step-timer step-timer-done">{durationLabel}</span>}
      </span>
    </button>
  );
}
