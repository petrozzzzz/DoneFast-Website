import { procurementDemo } from "@/demos/procurement";

export type OutputType =
  | "table"
  | "html"
  | "email-preview"
  | "json"
  | "comparison"
  | "text";

export interface DemoStep {
  id: string;
  label: string;
  description: string;
  outputType?: OutputType;
}

export interface DemoConfig {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  triggerTaskId: string;
  steps: DemoStep[];
  ctaText: string;
  ctaUrl: string;
  estimatedDurationSeconds?: number;
}

const demos: Record<string, DemoConfig> = {
  [procurementDemo.slug]: procurementDemo,
};

export function getDemoConfig(slug: string): DemoConfig | null {
  return demos[slug] ?? null;
}

export function getAllDemos(): DemoConfig[] {
  return Object.values(demos);
}
