import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "DoneFast — The agency alternative for AI automation",
  description:
    "Stop hiring agencies for $5,000 builds. AI agents, workflows, and custom automations for $750/month flat. 3-5 day delivery. Cancel anytime.",
  alternates: { canonical: "https://donefast.com/" },
  openGraph: {
    title: "DoneFast — The agency alternative for AI automation",
    description:
      "Stop hiring agencies for $5,000 builds. AI agents, workflows, and custom automations for $750/month flat. 3-5 day delivery. Cancel anytime.",
    url: "https://donefast.com/",
    type: "website",
    images: ["https://donefast.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DoneFast — The agency alternative for AI automation",
    description:
      "AI agents, workflows, and custom automations for $750/month flat. Cancel anytime.",
    images: ["https://donefast.com/og-image.jpg"],
  },
};

const HOMEPAGE_HTML = `
<noscript><style>.rv{opacity:1;transform:none}.split-line-inner{transform:none}.hero-eyebrow,.hero h1,.hero-sub,.hero-actions,.hero-trust-strip{opacity:1;animation:none}</style></noscript>

<!-- ===== NAV ===== -->
<nav class="nav" id="nav">
    <div class="nav-in">
        <a href="/" class="nav-logo"><b>Done</b><i>Fast</i></a>
        <ul class="nav-links">
            <li><a href="#how">How it works</a></li>
            <li><a href="#benefits">Why DoneFast</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
        <button data-cal-link="donefast/15min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="nav-cta" style="border:none;cursor:pointer;">Book a call</button>
        <button class="mob-btn" onclick="openMobNav()" aria-label="Menu">
            <span></span><span></span><span></span>
        </button>
    </div>
</nav>

<div class="mob-nav" id="mobNav">
    <button class="mob-nav-close" onclick="closeMobNav()">&times;</button>
    <a href="#how" onclick="closeMobNav()">How it works</a>
    <a href="#benefits" onclick="closeMobNav()">Why DoneFast</a>
    <a href="#pricing" onclick="closeMobNav()">Pricing</a>
    <a href="#faq" onclick="closeMobNav()">FAQ</a>
    <button data-cal-link="donefast/15min" data-cal-config='{"layout":"month_view","theme":"dark"}' onclick="closeMobNav()" class="btn-cta" style="margin-top:12px;font-size:14px;border:none;cursor:pointer;">Book a call</button>
</div>

<!-- ===== HERO ===== -->
<section class="hero">
    <canvas class="hero-canvas" id="heroCanvas"></canvas>
    <div class="hero-mesh">
        <div class="mesh-blob mesh-blob-1"></div>
        <div class="mesh-blob mesh-blob-2"></div>
        <div class="mesh-blob mesh-blob-3"></div>
    </div>
    <div class="hero-atmosphere">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
    </div>
    <div class="hero-lines"></div>
    <div class="wrap">
        <div class="hero-content">
            <div class="hero-eyebrow">
                <span class="pulse"></span>
                Built for businesses tired of $5,000 quotes
            </div>
            <h1>
                <span class="split-line"><span class="split-line-inner">Stop hiring</span></span>
                <span class="split-line"><span class="split-line-inner serif-light">agencies.</span></span>
                <span class="split-line"><span class="split-line-inner">Start shipping <em>automations.</em></span></span>
            </h1>
            <p class="hero-sub">
                AI agents, workflows, and custom automations &mdash; built and managed for one flat fee. No proposals. No scoping calls. No $5,000 invoices for a Zapier flow.
            </p>
            <div class="hero-actions">
                <button data-cal-link="donefast/15min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="btn-cta" style="border:none;cursor:pointer;">
                    Book a 15-min call
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <a href="#pricing" class="btn-ghost">See pricing</a>
            </div>
            <div class="hero-trust-strip">
                <span>$750/month flat</span>
                <span class="hero-trust-sep">&middot;</span>
                <span>Unlimited requests</span>
                <span class="hero-trust-sep">&middot;</span>
                <span>3-5 day delivery</span>
                <span class="hero-trust-sep">&middot;</span>
                <span>Pause anytime</span>
            </div>
        </div>
    </div>
</section>

<!-- ===== WORKED WITH ===== -->
<section class="trusted">
    <div class="wrap">
        <div class="trusted-head rv">
            <div class="label">Worked with</div>
        </div>
        <div class="trusted-grid rv rv-d1">
            <div class="trusted-item"><img src="/logos/january-labs.webp" alt="January Labs" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/grounded.webp" alt="Grounded" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/elate-beauty.svg" alt="Elate Beauty" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/fom.avif" alt="Freedom of Movement" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/skoon.avif" alt="SKOON" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/musee.svg" alt="Musee Bath" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/kaplan-md.png" alt="Kaplan MD" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/ps.svg" alt="Perfect Shaker" loading="lazy" /></div>
        </div>
    </div>
</section>

<!-- ===== AGENCY FATIGUE ===== -->
<section class="fatigue">
    <div class="wrap">
        <div class="fatigue-inner rv">
            <h2>You've been <em>here</em> before.</h2>
            <div class="fatigue-body">
                <p>You know your business needs better automation. You've talked to three agencies. They sent decks, scoped projects, quoted $5,000 to $15,000 &mdash; and that's just the build. Then a retainer. Then change orders.</p>
                <p>The work that actually needs to happen &mdash; connecting tools, automating handoffs, building the internal dashboard nobody else can &mdash; is straightforward. The pricing isn't.</p>
            </div>
            <div class="fatigue-punchline">
                <span class="fatigue-punchline-lead">DoneFast is the alternative.</span>
                <span class="fatigue-punchline-rest">$750/month, flat. No hidden fees. Send us what you need built. We build it. When that's done, send the next one.</span>
            </div>
        </div>
    </div>
</section>

<!-- ===== HOW IT WORKS ===== -->
<section class="how" id="how">
    <div class="wrap">
        <div class="how-head rv">
            <div class="label">How it works</div>
            <h2>Three steps. <em>That's it.</em></h2>
        </div>

        <div class="how-track">
            <div class="hstep rv rv-d1">
                <div class="hstep-ring"><span>1</span></div>
                <h3>Add it</h3>
                <p>Drop a request on your board. Loom video, written brief, or rough idea &mdash; we'll figure it out.</p>
                <span class="hstep-tag">Your board</span>
            </div>
            <div class="hstep rv rv-d2">
                <div class="hstep-ring"><span>2</span></div>
                <h3>We build it</h3>
                <p>AI does the heavy lifting. A senior engineer reviews and tests every workflow before you see it.</p>
                <span class="hstep-tag">AI + senior review</span>
            </div>
            <div class="hstep rv rv-d3">
                <div class="hstep-ring"><span>3</span></div>
                <h3>Ship it</h3>
                <p>3-5 days for most requests. Bigger builds get broken into pieces so you see momentum.</p>
                <span class="hstep-tag">3-5 days</span>
            </div>
        </div>
    </div>
</section>

<!-- ===== MEMBERSHIP BENEFITS ===== -->
<section class="benefits" id="benefits">
    <div class="wrap">
        <div class="benefits-head rv">
            <div class="label">Why DoneFast</div>
            <h2>No hiring. No agencies.<br><em>Just results.</em></h2>
            <p>One flat fee. Fast delivery. Cancel anytime.</p>
        </div>

        <div class="benefits-grid">
            <div class="ben rv rv-d1">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </div>
                <h3>Your own board</h3>
                <p>Add requests, track progress, all in one place.</p>
            </div>
            <div class="ben rv rv-d2">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                </div>
                <h3>Fixed monthly rate</h3>
                <p>$750 every month. No proposals. No surprises.</p>
            </div>
            <div class="ben rv rv-d3">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3>Lightning delivery</h3>
                <p>Most requests done in 3-5 days.</p>
            </div>
            <div class="ben rv rv-d4">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>Senior engineer review</h3>
                <p>Every workflow is tested and reviewed by a senior engineer before you see it.</p>
            </div>
            <div class="ben rv rv-d5">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-6.219-8.56"/><path d="M21 3v6h-6"/></svg>
                </div>
                <h3>Pause or cancel anytime</h3>
                <p>No contracts. No penalties. Your call.</p>
            </div>
            <div class="ben rv rv-d6">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>
                </div>
                <h3>You own everything</h3>
                <p>Every workflow we build is yours to keep. Forever.</p>
            </div>
        </div>
    </div>
</section>

<!-- ===== UNLIMITED EXPLAINED ===== -->
<section class="unlimited" id="unlimited">
    <div class="wrap">
        <div class="unlimited-head rv">
            <div class="label">Unlimited explained</div>
            <h2>'Unlimited' &mdash; <em>what it actually means.</em></h2>
        </div>

        <div class="unlimited-body rv rv-d1">
            <p>Other 'unlimited' services bury the catch in the fine print. We won't.</p>
            <p>Here's the deal: you can have as many requests in your queue as you want. Add 5, add 50, add them faster than we can ship &mdash; your queue is unlimited. We work on one request at a time, and most ship in 3-5 days. So in a typical month, expect 6-10 things shipped, depending on complexity.</p>
        </div>

        <div class="unlimited-grid">
            <div class="unlimited-block rv rv-d2">
                <div class="unlimited-block-tag">What gets built</div>
                <ul class="unlimited-list">
                    <li>Workflow automations (the kind that used to live in Zapier or N8N, now built properly)</li>
                    <li>AI agents that actually do work &mdash; qualifying leads, processing documents, drafting outreach</li>
                    <li>Internal tools and dashboards</li>
                    <li>Integrations between systems that don't talk to each other</li>
                    <li>The thing your team keeps doing manually that shouldn't exist</li>
                </ul>
            </div>
            <div class="unlimited-block unlimited-block--neg rv rv-d3">
                <div class="unlimited-block-tag unlimited-block-tag--neg">What doesn't fit</div>
                <p>Full SaaS products, native mobile apps, 6-month engagements with a roadmap. We're an ops engineering team, not a product studio.</p>
            </div>
        </div>
    </div>
</section>

<!-- ===== WHY $750 ===== -->
<section class="why-750">
    <div class="wrap">
        <div class="why-750-inner rv">
            <div class="label">Pricing rationale</div>
            <h2>Why it's $750, <em>not $5,000.</em></h2>
            <div class="why-750-body">
                <p>Agencies charge $5,000 because they have account managers, sales teams, project managers, and a designer who has to make the deck pretty. That overhead is real, and you pay for it.</p>
                <p>We use AI to do most of the building, with a senior engineer reviewing every output. No account managers. No sales calls after the first one. No deck. Just work shipped.</p>
                <p class="why-750-kicker">The savings get passed to you.</p>
            </div>
        </div>
    </div>
</section>

<!-- ===== PRICING ===== -->
<section class="pricing" id="pricing">
    <div class="wrap">
        <div class="pricing-head rv">
            <div class="label">Pricing</div>
            <h2>One plan.<br><em>One price.</em></h2>
        </div>

        <div class="pricing-grid pricing-grid--single">
            <div class="price-card studio rv rv-d1">
                <span class="price-badge">Subscription</span>
                <div class="price-amount">
                    <span class="dollar">$750</span>
                    <span class="period">/ month</span>
                </div>
                <p class="price-tagline">Flat. Cancel anytime.</p>
                <ul class="price-features">
                    <li>Unlimited requests in your queue</li>
                    <li>3-5 day delivery on most requests</li>
                    <li>One active build at a time</li>
                    <li>Senior engineer review on everything</li>
                    <li>Weekly 30-min strategy call</li>
                    <li>You own everything we build</li>
                    <li>Pause your subscription anytime</li>
                </ul>
                <div class="price-ctas">
                    <button data-cal-link="donefast/15min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="price-cta" style="border:none;cursor:pointer;">Get started</button>
                    <button data-cal-link="donefast/15min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="price-cta-ghost" style="border:none;cursor:pointer;">Book a call first</button>
                </div>
            </div>
        </div>

        <p class="pricing-footnote rv rv-d2">Need parallel builds, dedicated engineering hours, or a custom integration? <button data-cal-link="donefast/15min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="pricing-footnote-link" style="border:none;cursor:pointer;background:none;padding:0;font:inherit;">Book a call</button> &mdash; we'll quote a custom plan.</p>
    </div>
</section>

<!-- ===== FAQ ===== -->
<section class="faq" id="faq">
    <div class="wrap">
        <div class="faq-layout">
            <div class="faq-left rv">
                <div class="label">FAQ</div>
                <h2>Got questions?<br><em>Good.</em></h2>
                <p>Here are the ones we get every day.</p>
                <button data-cal-link="donefast/15min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="btn-cta" style="font-size:14px; padding:14px 28px; border:none; cursor:pointer;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    Book a call
                </button>
            </div>
            <div class="faq-list">
                <div class="faq-item rv rv-d1">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        How is this not just a worse version of an agency?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Agencies sell projects. We sell capacity. An agency takes 4 weeks to scope what we ship in 4 days. The tradeoff: we don't do 6-month roadmaps. If you need that, hire an agency.</div></div>
                </div>
                <div class="faq-item rv rv-d2">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        How is this not just AI slop?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">AI builds the first version. A senior engineer tests, reviews, and rewrites whatever's wrong before it ships. You never get untested code. The AI is a force multiplier, not a replacement for engineering judgment.</div></div>
                </div>
                <div class="faq-item rv rv-d3">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        What if my request is too complex?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">We break it into smaller requests. You see progress every few days instead of waiting weeks for one big delivery. If something is genuinely too big for the model &mdash; like a custom SaaS &mdash; we'll tell you upfront and refer you somewhere better.</div></div>
                </div>
                <div class="faq-item rv rv-d4">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Can you work with my existing Zapier / N8N / Make setup?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Yes. We work with whatever you already use, or we'll recommend something better if your current stack is the bottleneck.</div></div>
                </div>
                <div class="faq-item rv rv-d5">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        How fast do you actually ship?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">3-5 days for most requests. A simple workflow ships same-day. A complex multi-system integration might take a week, broken into smaller deliveries.</div></div>
                </div>
                <div class="faq-item rv rv-d6">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        What happens to the work if I cancel?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">You own everything from day one. Cancel and keep using everything we built. We hand over all code, credentials, and documentation.</div></div>
                </div>
                <div class="faq-item rv rv-d7">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Is there a contract?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Month-to-month. Cancel anytime. Pause anytime &mdash; your remaining days roll over.</div></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===== CLOSING CTA / CONTACT ===== -->
<section class="contact" id="contact">
    <div class="wrap">
        <div class="contact-inner rv">
            <div class="label" style="justify-content:center;margin-bottom:20px;"><span style="display:none;"></span>Get started</div>
            <h2>Less talk. <em>More shipped.</em></h2>
            <p>Book a 15-minute call. We'll show you exactly what we'd build first.</p>

            <div style="margin-top:48px;">
                <button
                    data-cal-link="donefast/15min"
                    data-cal-config='{"layout":"month_view","theme":"dark"}'
                    class="btn-cta"
                    style="font-size:18px; padding:22px 48px; border:none; cursor:pointer;">
                    Book a free 15-min call
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <p style="margin-top:16px; font-size:13px; color:var(--white-muted);">No commitment. No deck. Just clarity.</p>
            </div>
        </div>
    </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="footer">
    <div class="wrap">
        <div class="footer-in">
            <a href="/" class="footer-logo"><b>Done</b><i>Fast</i></a>
            <div class="footer-mid">
                <span>&copy; <span id="footer-year"></span> DoneFast</span>
            </div>
            <div class="footer-socials">
                <!-- Add social links here -->
            </div>
        </div>
    </div>
</footer>

<!-- ===== FLOATING CTA ===== -->
<button data-cal-link="donefast/15min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="float-cta" aria-label="Book a call" style="border:none;cursor:pointer;">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    Book a call
</button>
`;

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HOMEPAGE_HTML }} />
      <PageClient />
    </>
  );
}
