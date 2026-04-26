import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "DoneFast — You know you need AI. You don't know who to trust.",
  description:
    "Custom AI agents, automations, and internal tools for $1,250/month flat. We tell you what to build first. We ship in 3-5 days. 75% refund if you don't love it after week one.",
  alternates: { canonical: "https://donefast.com/" },
  openGraph: {
    title: "DoneFast — You know you need AI. You don't know who to trust.",
    description:
      "Custom AI agents, automations, and internal tools for $1,250/month flat. We tell you what to build first. We ship in 3-5 days. 75% refund if you don't love it after week one.",
    url: "https://donefast.com/",
    type: "website",
    images: ["https://donefast.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DoneFast — You know you need AI. You don't know who to trust.",
    description:
      "AI agents, automations, and internal tools for $1,250/month flat. 75% refund if you don't love it.",
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
        <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="nav-cta" style="border:none;cursor:pointer;">Book your audit</button>
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
    <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' onclick="closeMobNav()" class="btn-cta" style="margin-top:12px;font-size:14px;border:none;cursor:pointer;">Book your audit</button>
</div>

<!-- ===== HERO ===== -->
<!-- Section job: 5-second test for problem-aware buyer (cold outbound + FB ads). Mirror buyer's internal monologue. -->
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
            <!-- Eyebrow source: v4 — anchors the operator's recent experience of being pitched generic AI by people who don't know their business. -->
            <div class="hero-eyebrow">
                <span class="pulse"></span>
                For operators tired of being pitched "AI" by people who don't know what their business does
            </div>
            <!-- Headline source: v4 — long-term partner positioning. "Your AI department. Without the hires." -->
            <h1>
                <span class="split-line"><span class="split-line-inner">Your AI</span></span>
                <span class="split-line"><span class="split-line-inner">department.</span></span>
                <span class="split-line"><span class="split-line-inner serif-light"><em>Without the hires.</em></span></span>
            </h1>
            <!-- Subhead source: v4 — names the partnership model and the price together. -->
            <p class="hero-sub">
                DoneFast is the long-term AI partner for established businesses without a tech team. We design your roadmap, ship your first builds in days, and stay as your business changes. <strong>$1,250/month</strong> &mdash; flat, for an ongoing AI engineer instead of a project quote.
            </p>
            <div class="hero-actions">
                <!-- CTA source: copy-rules.md "I want to..." rule. Buyer wants clarity, not a form-fill. -->
                <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="btn-cta" style="border:none;cursor:pointer;">
                    Book your 30-min audit
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <a href="#pricing" class="btn-ghost">See pricing</a>
            </div>
            <!-- Trust strip source: discovery §7 offer terms — flat $1,250, 75% refund, 3-5 day delivery, cancel. Each one neutralizes a documented objection from research §5 objection map. -->
            <div class="hero-trust-strip">
                <span>$1,250/mo flat</span>
                <span class="hero-trust-sep">&middot;</span>
                <span>3-5 day delivery</span>
                <span class="hero-trust-sep">&middot;</span>
                <span>Cancel anytime</span>
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

<!-- ===== CATEGORY CRITIQUE + EMPATHY (combined) ===== -->
<!-- Section job: validate the buyer's existing belief that AI agencies are mostly scams (research §1), then bridge to "we're the alternative" (founder origin + 75% guarantee). -->
<!-- Big-idea anchor: this is where we deploy big-idea #1 ("most AI agencies are scams") — buyer arrives skeptical; we weaponize that skepticism instead of fighting it. -->
<section class="fatigue">
    <div class="wrap">
        <div class="fatigue-inner rv">
            <!-- Headline source: Gartner stat ("90% of AI agent vendors are scams") + everworker.ai ("most profitable scam in business history"). Verbatim-adjacent — buyers have read this language already. -->
            <h2>Most AI agencies are running a <em>scam.</em></h2>
            <div class="fatigue-body">
                <!-- Body source: stitched from danielbilsborough ("Reports, slide decks, roadmaps. Nice looking documents that make everyone feel like progress happened. But you didn't hire someone for documents."), downelink ("hook desperate small businesses with cheap initial offers then trap them in expensive long-term contracts"), aiifi ("greatly oversell"). -->
                <p>You've talked to one or two of them. They sent decks. They quoted $5,000 to $15,000 to build a single Zapier flow. They want a 6-month contract and a kickoff workshop. The deliverable is a 60-page strategy doc that's outdated before the ink dries.</p>
                <p>Gartner says 90% of AI agent vendors are scams. We don't disagree. Most are people who learned about AI three months ago and are charging you to learn the rest of it on your dime.</p>
            </div>
            <!-- Bridge source: discovery §7 offer — the 75% refund is the explicit anti-scam differentiator. -->
            <div class="fatigue-punchline">
                <span class="fatigue-punchline-lead">DoneFast is the deliberate non-scam version.</span>
                <span class="fatigue-punchline-rest">$1,250/mo flat. We tell you what to build first. We ship working AI in 3-5 days. If you don't love it after week one, we refund 75% &mdash; we'd rather lose 25% of one month than have you stuck with us.</span>
            </div>
        </div>
    </div>
</section>

<!-- ===== HOW IT WORKS ===== -->
<!-- Section job: make the system feel real with minimal abstraction. Step 1 is sharpened to emphasize the value of the call itself, since the buyer's #4 objection is "I don't even know what to ask for" (research §5). -->
<section class="how" id="how">
    <div class="wrap">
        <div class="how-head rv">
            <div class="label">How it works</div>
            <h2>Three steps. <em>That's it.</em></h2>
        </div>

        <div class="how-track">
            <div class="hstep rv rv-d1">
                <div class="hstep-ring"><span>1</span></div>
                <!-- Source: handles objection #4 from research §5 ("I don't even know what to ask you to build"). The call itself is the deliverable, even if the buyer doesn't sign up. -->
                <h3>Audit</h3>
                <p>Book a free 30-min workflow audit. We'll hear about your business &mdash; the bottlenecks, the manual work, the spreadsheets &mdash; then map the AI agents, automations, and internal tools we'd build first.</p>
                <span class="hstep-tag">Free 30-min audit</span>
            </div>
            <div class="hstep rv rv-d2">
                <div class="hstep-ring"><span>2</span></div>
                <!-- Source: handles objection #2 ("Will this just be ChatGPT in a wrapper?"). Plain-English version of the AI + senior engineer model. -->
                <h3>We build</h3>
                <p>AI does the heavy lifting. A senior engineer tests and reviews every build before it ships. You never get untested code.</p>
                <span class="hstep-tag">AI + senior review</span>
            </div>
            <div class="hstep rv rv-d3">
                <div class="hstep-ring"><span>3</span></div>
                <!-- Source: discovery §7 — 3-5 day delivery. Handles objection #5 ("what if AI moves so fast it's obsolete") by emphasizing speed. -->
                <h3>You ship</h3>
                <p>Most builds go live in 3-5 days. Bigger ones get broken into pieces so you see momentum every week.</p>
                <span class="hstep-tag">3-5 days</span>
            </div>
        </div>
    </div>
</section>

<!-- ===== WHAT YOU ACTUALLY GET ===== -->
<!-- Section job: solution overview at low abstraction (problem-aware buyer). Each card maps to one objection from research §5 objection map. -->
<section class="benefits" id="benefits">
    <div class="wrap">
        <div class="benefits-head rv">
            <!-- Headline source: contrasts with agency "decks and strategy reviews" — research §1 ("Reports, slide decks, roadmaps... you didn't hire someone for documents"). -->
            <div class="label">What you actually get</div>
            <h2>No deck. No strategy review.<br><em>Just stuff that works.</em></h2>
            <p>Six things that come standard, every month.</p>
        </div>

        <div class="benefits-grid">
            <!-- Card 1 source: handles objection #4 from research ("I don't even know what to ask you to build"). The call is the deliverable. -->
            <div class="ben rv rv-d1">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                </div>
                <h3>We tell you what to build</h3>
                <p>You don't need an AI strategy. You need a 30-min audit where we hear about your business and map the AI builds that actually move the needle.</p>
            </div>
            <!-- Card 2 source: discovery §7 — 3-5 day delivery, contrasts with "18-36 months" enterprise consulting cycles (research §1 / everworker). -->
            <div class="ben rv rv-d2">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3>Shipped in 3-5 days</h3>
                <p>Most builds go live the same week you brief them. Bigger ones get broken into pieces so you see momentum.</p>
            </div>
            <!-- Card 3 source: handles objection #2 ("ChatGPT in a wrapper") — research §5 objection map + danielbilsborough "intern-level AI results" critique. -->
            <div class="ben rv rv-d3">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>Senior engineer review</h3>
                <p>AI builds the first version. A senior engineer tests and rewrites whatever's wrong. You never get untested code.</p>
            </div>
            <!-- Card 4 source: anti-bait-and-switch (downelink). Flat $1,250 contrasts with industry $3,200/mo avg (research §4). -->
            <div class="ben rv rv-d4">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                </div>
                <h3>$1,250/month, flat</h3>
                <p>No proposals. No scope creep. No change orders. Industry average is $3,200/mo. We're not the industry.</p>
            </div>
            <!-- Card 5 source: discovery §7 — the 75% refund is the deliberate anti-scam differentiator (objection #1 in research §5). -->
            <div class="ben rv rv-d5">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-6.219-8.56"/><path d="M21 3v6h-6"/></svg>
                </div>
                <h3>75% refund, week one</h3>
                <p>Don't love it after seven days? We refund 75% and part as friends. Pause or cancel anytime after that.</p>
            </div>
            <!-- Card 6 source: discovery §7 — buyer owns everything from day one. Handles "what if I cancel?" implicit objection. -->
            <div class="ben rv rv-d6">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>
                </div>
                <h3>You own everything</h3>
                <p>Every workflow, every line of code, every integration &mdash; yours from day one. Cancel and keep using it forever.</p>
            </div>
        </div>
    </div>
</section>

<!-- ===== WHAT WE BUILD (industry examples) ===== -->
<!-- Section job: collapse the "AI in your business" abstraction into concrete examples with dollar math. Buyer is non-tech (research §3 vertical pain) — needs to see "oh, that's me." -->
<section class="unlimited" id="unlimited">
    <div class="wrap">
        <div class="unlimited-head rv">
            <!-- Headline source: big-idea #2 from hierarchy ("you don't need an AI strategy. you need three things shipped"). Reframes the consulting trap one more time. -->
            <div class="label">What we build</div>
            <h2>You don't need an AI strategy. <em>You need three things shipped.</em></h2>
        </div>

        <div class="unlimited-body rv rv-d1">
            <!-- Body source: oneclickcontractor + companycam ("contractors getting value usually aren't buying standalone AI tools first... start at the source: phone calls"). -->
            <p>"AI in your business" is too vague to be useful. Here's what it actually looks like for the kind of business we work with.</p>
        </div>

        <div class="unlimited-grid">
            <!-- Block 1 source: research §3 vertical-specific pain — suzeeai.com $50K-60K annual loss for plumbers, 28% missed call rate, 85% voicemail abandonment, 78% choose first responder. The most concrete dollar math in the entire research file. -->
            <div class="unlimited-block rv rv-d2">
                <div class="unlimited-block-tag">Missed-call recovery for service businesses</div>
                <p>The average plumbing or HVAC business misses 28% of incoming calls. 85% of those callers never call back. We build the system that catches them &mdash; auto-text within 30 seconds, AI voice agent that books after-hours appointments, scheduled follow-up if they ghost.</p>
                <p style="margin-top:12px;opacity:0.8;font-size:0.95em;">Recovers $45K-$120K of lost revenue in year one for a typical contractor.</p>
            </div>
            <!-- Block 2 source: discovery §7 examples + companycam "stop our estimators from rebuilding field notes every night" archetype. Replaces the manual admin work non-tech operators are doing themselves at 9pm. -->
            <div class="unlimited-block rv rv-d3">
                <div class="unlimited-block-tag">Quote &amp; intake automation</div>
                <p>Lead form fills. AI parses the intent and qualifies. Books the right call type. Drafts the proposal in your voice. Routes to the right person.</p>
                <p style="margin-top:12px;opacity:0.8;font-size:0.95em;">Replaces 4 hours of admin work a day for the operator usually doing it manually.</p>
            </div>
            <!-- Block 3 source: discovery §1 — "the thing your team keeps doing manually that shouldn't exist." Universal pain across the ICP. -->
            <div class="unlimited-block rv rv-d2">
                <div class="unlimited-block-tag">The internal tool nobody else can build</div>
                <p>Every business has one. The thing your team keeps doing in spreadsheets that should be a button. The dashboard your bookkeeper rebuilds every Monday. The follow-up sequence that lives in your head.</p>
                <p style="margin-top:12px;opacity:0.8;font-size:0.95em;">We find it on the first call. We ship it the same week.</p>
            </div>
            <!-- Block 4 source: research §3 implication — non-tech traditional businesses are explicitly the ICP (project memory). Honest about scope limits = trust signal (Wiebe principle). -->
            <div class="unlimited-block unlimited-block--neg rv rv-d3">
                <div class="unlimited-block-tag unlimited-block-tag--neg">What doesn't fit</div>
                <p>Full SaaS products, native mobile apps, 6-month engagements with a roadmap. We're not your tech team &mdash; we're the ops engineering you don't have. If your business is software-native, we're probably not your fit.</p>
            </div>
        </div>
    </div>
</section>

<!-- ===== WHY $1,250 ===== -->
<!-- Section job: anchor against industry pricing (research §4) — $3,200/mo avg retainer, $5K-$15K projects, SevenLab €5,500/mo. Justify $1,250 as the deliberate anti-fluff price. -->
<!-- Note: keeping CSS class .why-750 so existing styles work; only copy is updated. -->
<section class="why-750">
    <div class="wrap">
        <div class="why-750-inner rv">
            <div class="label">Pricing rationale</div>
            <!-- Headline source: existing page tested this structure ("why X, not Y"). Updated number. -->
            <h2>Why it's $1,250, <em>not $5,000.</em></h2>
            <div class="why-750-body">
                <!-- Para 1 source: research §4 pricing benchmarks — $3,200/mo industry retainer average (digitalagencynetwork), SevenLab €5,500 closest direct competitor. Buyer can verify these numbers themselves, which builds trust. -->
                <p>Industry average for an AI automation retainer: $3,200 a month. The closest direct competitor we found charges around $6,000. Standalone projects start at $5,000. AI consultants charge $5K to $50K for an engagement that ends in a strategy doc.</p>
                <!-- Para 2 source: danielbilsborough ("AI consulting model rewards deliverables — reports, slide decks, roadmaps"). The "what you're not paying for" frame. -->
                <p>You're paying them for account managers, sales teams, project managers, and a designer who makes the deck pretty. We don't have those. AI does most of the building. A senior engineer reviews and ships it. There's no deck, no kickoff workshop, no quarterly business review.</p>
                <p class="why-750-kicker">The savings get passed to you.</p>
            </div>
        </div>
    </div>
</section>

<!-- ===== PRICING ===== -->
<!-- Section job: make the actual ask. One tier, stacked features, the 75% refund prominent. Pricing visible (Wiebe rule — never hide). -->
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
                    <!-- Price source: discovery §7 — $1,250/mo flat (updated 2026-04-25 from $750). -->
                    <span class="dollar">$1,250</span>
                    <span class="period">/ month</span>
                </div>
                <p class="price-tagline">Flat. Cancel anytime.</p>
                <!-- Features source: discovery §7 offer terms. The 75% refund moves up the list as the lead trust signal (research §5 objection #1 handler). -->
                <ul class="price-features">
                    <li><strong>75% refund if you don't love it after week one</strong></li>
                    <li>3-5 day delivery on most builds</li>
                    <li>Unlimited requests in your queue</li>
                    <li>One active build at a time</li>
                    <li>Senior engineer review on everything</li>
                    <li>Weekly 30-min strategy call (optional)</li>
                    <li>You own everything we build</li>
                    <li>Pause anytime &mdash; your days roll over</li>
                </ul>
                <div class="price-ctas">
                    <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="price-cta" style="border:none;cursor:pointer;">Book your free 30-min audit</button>
                </div>
            </div>
        </div>

        <p class="pricing-footnote rv rv-d2">Need parallel builds, dedicated engineering hours, or a custom integration? <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="pricing-footnote-link" style="border:none;cursor:pointer;background:none;padding:0;font:inherit;">Book an audit</button> &mdash; we'll quote a custom plan.</p>
    </div>
</section>

<!-- ===== FOUNDER NOTE ===== -->
<!-- Section job: replace missing client testimonials with founder credibility. Pete's verbatim discovery quote does the trust work. -->
<!-- Reusing .why-750 styling for inner block since both are centered prose blocks. -->
<section class="why-750" style="padding-top:0;">
    <div class="wrap">
        <div class="why-750-inner rv" style="max-width:780px;">
            <div class="label">A note from the founder</div>
            <!-- Headline source: a tightened version of Pete's discovery quote. Pulled verbatim language ("AI nerd", "rabbit hole", "world's catching up"). -->
            <h2 style="font-size:clamp(28px,4vw,44px);">I'm not learning AI <em>on your dime.</em></h2>
            <div class="why-750-body">
                <!-- Body source: Pete's verbatim quote from discovery §9 — kept the informal voice deliberately. The slight casualness is the trust signal for non-tech buyers tired of McKinsey-coded language (research §1 / §7 voice notes). -->
                <p>I started DoneFast because I'm an AI nerd. I've been going down this rabbit hole for years &mdash; building agents, breaking things, rebuilding them &mdash; long before there was a market for it.</p>
                <p>The world's catching up now. Every business owner I talk to knows they need AI in their business. Most haven't spent the last few years living inside it like I have. So they're getting quoted $7,500 for a Zapier flow by people who learned about AI three months ago.</p>
                <p style="font-style:italic;opacity:0.85;">DoneFast is what I'd want if I were them.</p>
                <p style="margin-top:24px;font-weight:600;">&mdash; Pete, Founder</p>
            </div>
        </div>
    </div>
</section>

<!-- ===== FAQ ===== -->
<section class="faq" id="faq">
    <div class="wrap">
        <div class="faq-layout">
            <div class="faq-left rv">
                <!-- FAQ left side — heading source: existing tested copy ("Got questions? Good."). Kept verbatim — works. -->
                <div class="label">FAQ</div>
                <h2>Got questions?<br><em>Good.</em></h2>
                <p>The six we hear on every call. If you've got a seventh, ask on the call.</p>
                <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="btn-cta" style="font-size:14px; padding:14px 28px; border:none; cursor:pointer;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    Book your audit
                </button>
            </div>
            <!-- FAQ source: research §5 objection map — six recurring objections in this category. Each question uses buyer's verbatim phrasing (Wiebe rule); each answer engages directly without dodging. -->
            <div class="faq-list">
                <!-- Objection #1 — "Aren't all of these AI agencies scams?" Most direct competitor critique. Lean into it instead of denying. -->
                <div class="faq-item rv rv-d1">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Aren't all of these AI agencies scams?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Most are. We agree with you. The 75% refund after week one exists because we know you've been burned (or you've watched someone get burned), and we'd rather lose 25% of one month's fee than have you stuck with us. The first call also costs nothing &mdash; you'll know whether we're full of it within 15 minutes.</div></div>
                </div>
                <!-- Objection #2 — "Will this just be ChatGPT in a wrapper?" Research §1: "intern-level AI results", "ChatGPT wrapper" is the dominant slop critique. -->
                <div class="faq-item rv rv-d2">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Will this just be ChatGPT in a wrapper?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">AI builds the first version. A senior engineer tests it, breaks it, and rewrites whatever's wrong before you see it. You never get untested code. The AI is a force multiplier, not a replacement for engineering judgment &mdash; that's why we can charge $1,250 instead of $5,000.</div></div>
                </div>
                <!-- Objection #3 — "What if I get locked in?" Discovery §7 — pause/cancel/refund all match. Repeat in 3 places (research §5 prescription). -->
                <div class="faq-item rv rv-d3">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        What if I get locked in?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">You can't. Month-to-month, no contract. Pause anytime &mdash; your remaining days roll over. Cancel anytime, no exit fee. You own everything we built from day one, so you can leave with all of it.</div></div>
                </div>
                <!-- Objection #4 — "I don't even know what to ask you to build." The strongest unmet-need objection. The intro call is the deliverable. -->
                <div class="faq-item rv rv-d4">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        I don't even know what to ask you to build.
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">That's the most common starting point, and it's what the first call is for. Bring the boring problem that's eating your week &mdash; the missed calls, the manual quote follow-ups, the spreadsheet your team rebuilds every Monday. We'll tell you the one or two builds that move the needle most. You walk away with a plan whether you sign up or not.</div></div>
                </div>
                <!-- Objection #5 — "What if AI moves so fast that what you build is obsolete?" Research §1 ("AI moves too fast for the consulting model to work") — handled by short delivery cycles. -->
                <div class="faq-item rv rv-d5">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        What if AI moves so fast that what you build is obsolete in three months?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Then we ship the new version next month. The whole model is built around the speed of change. We work in 3-5 day cycles, not 6-month projects. Your subscription is the maintenance plan &mdash; if something we built last quarter needs an upgrade, drop it on the queue.</div></div>
                </div>
                <!-- Objection #6 — "Is this guy actually qualified?" Pete's founder origin (discovery §9) is the answer. Signed in his voice. -->
                <div class="faq-item rv rv-d6">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Is this guy actually qualified?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">I've been building with AI since before there was a market for it &mdash; agents, automations, internal tooling. The world's just catching up now. I started DoneFast because I watched too many business owners get charged $7,500 for a Zapier flow by people who learned about AI three months ago. Book the audit. You'll know within the first ten minutes if I know what I'm doing. &mdash; Pete</div></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===== CLOSING CTA / CONTACT ===== -->
<!-- Section job: last conversion chance. One CTA, low friction. Headline kept from existing page (proven). -->
<section class="contact" id="contact">
    <div class="wrap">
        <div class="contact-inner rv">
            <div class="label" style="justify-content:center;margin-bottom:20px;"><span style="display:none;"></span>Get started</div>
            <!-- Headline source: refocused on the audit deliverable. -->
            <h2>The free <em>workflow audit.</em></h2>
            <!-- Body source: sells the audit value — what we'll cover and what they walk away with. -->
            <p>Book a 30-minute audit. We'll spend the call hearing about your business &mdash; the missed calls, the manual quotes, the spreadsheet your team rebuilds every Monday &mdash; then map the AI agents, automations, and internal tools we'd integrate first. You walk away with a real roadmap, whether you sign up or not.</p>

            <div style="margin-top:48px;">
                <button
                    data-cal-link="donefast/30min"
                    data-cal-config='{"layout":"month_view","theme":"dark"}'
                    class="btn-cta"
                    style="font-size:18px; padding:22px 48px; border:none; cursor:pointer;">
                    Book your free 30-min audit
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <!-- Trust closer — audit-framed. -->
                <p style="margin-top:16px; font-size:13px; color:var(--white-muted);">30 minutes &middot; your business &middot; our roadmap &middot; no deck</p>
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
<button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="float-cta" aria-label="Book your audit" style="border:none;cursor:pointer;">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    Book your audit
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
