import { tasks, auth } from "@trigger.dev/sdk";
import { NextRequest, NextResponse } from "next/server";
import { getDemoConfig } from "@/lib/demos";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const MAX_RUNS_PER_HOUR = 10;
const HOUR_MS = 3_600_000;

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function checkRateLimit(ip: string): { ok: true } | { ok: false; resetIn: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || entry.resetAt <= now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + HOUR_MS });
    return { ok: true };
  }

  if (entry.count >= MAX_RUNS_PER_HOUR) {
    return { ok: false, resetIn: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count++;
  return { ok: true };
}

export async function POST(req: NextRequest) {
  let slug: string;
  try {
    const body = await req.json();
    slug = body?.slug;
    if (typeof slug !== "string" || !slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const ip = getClientIp(req);
  const rateLimit = checkRateLimit(ip);
  if (!rateLimit.ok) {
    return NextResponse.json(
      { error: "Rate limited", resetInSeconds: rateLimit.resetIn },
      { status: 429 },
    );
  }

  const config = getDemoConfig(slug);
  if (!config) {
    return NextResponse.json({ error: "Demo not found" }, { status: 404 });
  }

  if (!process.env.TRIGGER_SECRET_KEY) {
    return NextResponse.json(
      { error: "Server not configured" },
      { status: 500 },
    );
  }

  try {
    const handle = await tasks.trigger(config.triggerTaskId, {});

    const publicToken =
      handle.publicAccessToken ??
      (await auth.createPublicToken({
        scopes: { read: { runs: [handle.id] } },
        expirationTime: "15m",
      }));

    return NextResponse.json({
      runId: handle.id,
      publicToken,
    });
  } catch (err) {
    console.error("Failed to trigger demo task", err);
    return NextResponse.json(
      { error: "Failed to start demo" },
      { status: 500 },
    );
  }
}
