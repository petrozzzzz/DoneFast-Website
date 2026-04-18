"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRealtimeRun } from "@trigger.dev/react-hooks";
import type { DemoConfig } from "@/lib/demos";
import { PipelineStep, type StepStatus } from "./PipelineStep";
import { OutputPanel, type StepOutput } from "./OutputPanel";
import { CTAFooter } from "./CTAFooter";

type RunState = "idle" | "starting" | "running" | "complete" | "error";

export function DemoRunner({ config }: { config: DemoConfig }) {
  const [runState, setRunState] = useState<RunState>("idle");
  const [runId, setRunId] = useState<string | null>(null);
  const [publicToken, setPublicToken] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedStep, setSelectedStep] = useState<string>(config.steps[0].id);
  const [userSelected, setUserSelected] = useState(false);

  const handleRun = useCallback(async () => {
    setRunState("starting");
    setErrorMessage(null);
    setUserSelected(false);
    setSelectedStep(config.steps[0].id);

    try {
      const res = await fetch("/api/demo/trigger", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: config.slug }),
      });
      const body = await res.json();
      if (!res.ok) {
        throw new Error(body?.error ?? "Failed to start demo");
      }
      setRunId(body.runId);
      setPublicToken(body.publicToken);
      setRunState("running");
    } catch (err) {
      setRunState("error");
      setErrorMessage(err instanceof Error ? err.message : "Unknown error");
    }
  }, [config.slug, config.steps]);

  return (
    <section className="demo-root">
      <header className="demo-hero">
        <div className="demo-hero-eyebrow">Interactive automation demo</div>
        <h1 className="demo-hero-title">{config.title}</h1>
        <p className="demo-hero-subtitle">{config.subtitle}</p>
        <p className="demo-hero-description">{config.description}</p>

        <div className="demo-hero-actions">
          {runState === "idle" && (
            <button
              type="button"
              onClick={handleRun}
              className="demo-run-button"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                <path d="M3 2L12 7L3 12Z" fill="currentColor" />
              </svg>
              Run demo
            </button>
          )}
          {runState === "starting" && (
            <button type="button" disabled className="demo-run-button is-loading">
              <span className="demo-run-spinner" aria-hidden />
              Starting…
            </button>
          )}
          {runState === "running" && (
            <div className="demo-run-status">
              <span className="demo-run-pulse" aria-hidden />
              Running live — watching Claude work in realtime
            </div>
          )}
          {runState === "complete" && (
            <button
              type="button"
              onClick={handleRun}
              className="demo-run-button demo-run-button-secondary"
            >
              Run again
            </button>
          )}
          {runState === "error" && (
            <div>
              <button
                type="button"
                onClick={handleRun}
                className="demo-run-button"
              >
                Try again
              </button>
              {errorMessage && (
                <div className="demo-run-error">{errorMessage}</div>
              )}
            </div>
          )}
          {config.estimatedDurationSeconds && runState === "idle" && (
            <span className="demo-hero-hint">
              Takes ~{config.estimatedDurationSeconds}s · Real AI, no mocks
            </span>
          )}
        </div>
      </header>

      {runId && publicToken ? (
        <LiveDemo
          config={config}
          runId={runId}
          publicToken={publicToken}
          selectedStep={selectedStep}
          userSelected={userSelected}
          onSelectStep={(id) => {
            setSelectedStep(id);
            setUserSelected(true);
          }}
          onAutoSelectStep={(id) => setSelectedStep(id)}
          onRunComplete={() => setRunState("complete")}
          onRunError={(msg) => {
            setRunState("error");
            setErrorMessage(msg);
          }}
        />
      ) : (
        <InactiveDemo
          config={config}
          selectedStep={selectedStep}
          onSelectStep={(id) => {
            setSelectedStep(id);
            setUserSelected(true);
          }}
        />
      )}

      {runState === "complete" && (
        <CTAFooter text={config.ctaText} url={config.ctaUrl} />
      )}
    </section>
  );
}

function InactiveDemo({
  config,
  selectedStep,
  onSelectStep,
}: {
  config: DemoConfig;
  selectedStep: string;
  onSelectStep: (id: string) => void;
}) {
  const current = config.steps.find((s) => s.id === selectedStep) ?? config.steps[0];
  return (
    <div className="demo-grid">
      <div className="pipeline">
        {config.steps.map((step, index) => (
          <PipelineStep
            key={step.id}
            step={step}
            index={index}
            status="pending"
            isSelected={selectedStep === step.id}
            onSelect={() => onSelectStep(step.id)}
          />
        ))}
      </div>
      <OutputPanel
        stepLabel={current.label}
        outputType={current.outputType}
        output={null}
        status="pending"
      />
    </div>
  );
}

function LiveDemo({
  config,
  runId,
  publicToken,
  selectedStep,
  userSelected,
  onSelectStep,
  onAutoSelectStep,
  onRunComplete,
  onRunError,
}: {
  config: DemoConfig;
  runId: string;
  publicToken: string;
  selectedStep: string;
  userSelected: boolean;
  onSelectStep: (id: string) => void;
  onAutoSelectStep: (id: string) => void;
  onRunComplete: () => void;
  onRunError: (msg: string) => void;
}) {
  const { run, error } = useRealtimeRun(runId, {
    accessToken: publicToken,
  });

  useEffect(() => {
    if (error) onRunError(error.message || "Realtime subscription failed");
  }, [error, onRunError]);

  const runStatus = run?.status;
  const metadata = (run?.metadata ?? {}) as Record<string, unknown>;

  const stepStatuses = useMemo<Record<string, StepStatus>>(() => {
    const out: Record<string, StepStatus> = {};
    for (const step of config.steps) {
      const raw = metadata[`stepStatus:${step.id}`];
      if (raw === "running" || raw === "complete" || raw === "error") {
        out[step.id] = raw;
      } else {
        out[step.id] = "pending";
      }
    }
    return out;
  }, [config.steps, metadata]);

  const stepOutputs = useMemo<Record<string, StepOutput | null>>(() => {
    const out: Record<string, StepOutput | null> = {};
    for (const step of config.steps) {
      const raw = metadata[`output:${step.id}`];
      out[step.id] = parseOutput(raw);
    }
    return out;
  }, [config.steps, metadata]);

  const currentStepId = typeof metadata.currentStep === "string"
    ? (metadata.currentStep as string)
    : null;

  useEffect(() => {
    if (userSelected) return;
    if (currentStepId && config.steps.some((s) => s.id === currentStepId)) {
      onAutoSelectStep(currentStepId);
    }
  }, [currentStepId, config.steps, onAutoSelectStep, userSelected]);

  useEffect(() => {
    if (runStatus === "COMPLETED") {
      onRunComplete();
    } else if (
      runStatus === "FAILED" ||
      runStatus === "CRASHED" ||
      runStatus === "SYSTEM_FAILURE" ||
      runStatus === "TIMED_OUT" ||
      runStatus === "CANCELED"
    ) {
      onRunError(`Run ended with status: ${runStatus}`);
    }
  }, [runStatus, onRunComplete, onRunError]);

  const current = config.steps.find((s) => s.id === selectedStep) ?? config.steps[0];
  const currentStatus = stepStatuses[current.id] ?? "pending";
  const currentOutput = stepOutputs[current.id] ?? null;

  return (
    <div className="demo-grid">
      <div className="pipeline">
        {config.steps.map((step, index) => (
          <PipelineStep
            key={step.id}
            step={step}
            index={index}
            status={stepStatuses[step.id] ?? "pending"}
            isSelected={selectedStep === step.id}
            onSelect={() => onSelectStep(step.id)}
          />
        ))}
      </div>
      <OutputPanel
        stepLabel={current.label}
        outputType={current.outputType}
        output={currentOutput}
        status={currentStatus}
      />
    </div>
  );
}

function parseOutput(raw: unknown): StepOutput | null {
  if (!raw) return null;
  if (typeof raw === "object") return raw as StepOutput;
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw) as StepOutput;
    } catch {
      return { type: "text", text: raw };
    }
  }
  return null;
}
