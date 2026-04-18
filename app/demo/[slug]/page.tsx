import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllDemos, getDemoConfig } from "@/lib/demos";
import { DemoRunner } from "@/components/demo/DemoRunner";
import "./demo.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getDemoConfig(slug);
  if (!config) return { title: "Demo not found · DoneFast" };
  return {
    title: `${config.title} · DoneFast Demo`,
    description: config.description,
  };
}

export async function generateStaticParams() {
  return getAllDemos().map((d) => ({ slug: d.slug }));
}

export default async function DemoPage({ params }: PageProps) {
  const { slug } = await params;
  const config = getDemoConfig(slug);
  if (!config) notFound();

  return (
    <main className="demo-page">
      <a href="/" className="demo-back-link" aria-label="Back to DoneFast">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
          <path
            d="M9 11L5 7L9 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        DoneFast
      </a>
      <DemoRunner config={config} />
    </main>
  );
}
