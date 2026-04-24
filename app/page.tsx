import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "DoneFast — Development Subscriptions That Actually Ship",
  description:
    "Unlimited development requests. One flat monthly fee. Pause or cancel anytime. Delivered in days, not weeks.",
  alternates: { canonical: "https://donefast.com/" },
  openGraph: {
    title: "DoneFast — Development Subscriptions That Actually Ship",
    description:
      "Unlimited development requests. One flat monthly fee. Pause or cancel anytime. Delivered in days, not weeks.",
    url: "https://donefast.com/",
    type: "website",
    images: ["https://donefast.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DoneFast — Development Subscriptions That Actually Ship",
    description:
      "Unlimited development requests. One flat monthly fee. Pause or cancel anytime.",
    images: ["https://donefast.com/og-image.jpg"],
  },
};

const HOMEPAGE_HTML = `
<noscript><style>.rv{opacity:1;transform:none}.split-line-inner{transform:none}.hero-eyebrow,.hero h1,.hero-sub,.hero-actions,.hero-stats{opacity:1;animation:none}</style></noscript>

<!-- ===== NAV ===== -->
<nav class="nav" id="nav">
    <div class="nav-in">
        <a href="/" class="nav-logo"><b>Done</b><i>Fast</i></a>
        <ul class="nav-links">
            <li><a href="#how">How it works</a></li>
            <li><a href="#benefits">Why DoneFast</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
        <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="nav-cta" style="border:none;cursor:pointer;">Book a call</button>
        <button class="mob-btn" onclick="openMobNav()" aria-label="Menu">
            <span></span><span></span><span></span>
        </button>
    </div>
</nav>

<div class="mob-nav" id="mobNav">
    <button class="mob-nav-close" onclick="closeMobNav()">&times;</button>
    <a href="#how" onclick="closeMobNav()">How it works</a>
    <a href="#benefits" onclick="closeMobNav()">Why DoneFast</a>
    <a href="#faq" onclick="closeMobNav()">FAQ</a>
    <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' onclick="closeMobNav()" class="btn-cta" style="margin-top:12px;font-size:14px;border:none;cursor:pointer;">Book a call</button>
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
                Your fractional AI CTO
            </div>
            <h1>
                <span class="split-line"><span class="split-line-inner">Your entire</span></span>
                <span class="split-line"><span class="split-line-inner serif-light">business,</span></span>
                <span class="split-line"><span class="split-line-inner"><em>automated.</em></span></span>
            </h1>
            <p class="hero-pause">No tech team required.</p>
            <p class="hero-sub">
                We build your automations, AI workflows, and internal tools. You pay one flat monthly fee.
            </p>
            <div class="hero-actions">
                <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="btn-cta" style="border:none;cursor:pointer;">
                    Book a free call
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <a href="#how" class="btn-ghost">See how it works</a>
            </div>
            <div class="hero-stats">
                <div class="hero-stat">
                    <span class="val">1-3 days</span>
                    <span class="desc">Avg Delivery</span>
                </div>
                <div class="hero-stat-div"></div>
                <div class="hero-stat">
                    <span class="val">Unlimited</span>
                    <span class="desc">Requests</span>
                </div>
                <div class="hero-stat-div"></div>
                <div class="hero-stat">
                    <span class="val">Anytime</span>
                    <span class="desc">Pause &amp; Resume</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===== TRUSTED BY ===== -->
<section class="trusted">
    <div class="wrap">
        <div class="trusted-head rv">
            <div class="label">Trusted by</div>
        </div>
        <div class="trusted-grid rv rv-d1">
            <div class="trusted-item"><img src="/logos/january-labs.webp" alt="January Labs" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/grounded.webp" alt="Grounded" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/elate-beauty.svg" alt="Elate Beauty" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/fom.avif" alt="FOM" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/skoon.avif" alt="SKOON" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/musee.svg" alt="Musee" loading="lazy" /></div>
            <div class="trusted-item"><img src="/logos/ps.svg" alt="Perse" loading="lazy" /></div>
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
                <h3>Subscribe</h3>
                <p>Pick a plan. Get your board in under an hour.</p>
                <span class="hstep-tag">Instant access</span>
            </div>
            <div class="hstep rv rv-d2">
                <div class="hstep-ring"><span>2</span></div>
                <h3>Request</h3>
                <p>Tell us what to build. Add unlimited requests.</p>
                <span class="hstep-tag">Unlimited</span>
            </div>
            <div class="hstep rv rv-d3">
                <div class="hstep-ring"><span>3</span></div>
                <h3>Receive</h3>
                <p>Get it delivered in 1-3 days. Approve it or request changes.</p>
                <span class="hstep-tag">1-3 days</span>
            </div>
        </div>
    </div>
</section>

<!-- ===== TICKER ===== -->
<section class="ticker">
    <div class="ticker-track" id="ticker">
        <span class="ticker-item">Zapier workflows</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">N8n automations</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">AI agents</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">Lead capture systems</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">Client onboarding</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">CRM integrations</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">Reporting dashboards</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">Email sequences</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">E-commerce automations</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">Slack &amp; Telegram bots</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">API integrations</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">Custom chatbots</span><span class="ticker-sep">&middot;</span>
        <!-- Duplicate for seamless loop -->
        <span class="ticker-item">Zapier workflows</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">N8n automations</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">AI agents</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">Lead capture systems</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">Client onboarding</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">CRM integrations</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">Reporting dashboards</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">Email sequences</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">E-commerce automations</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">Slack &amp; Telegram bots</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">API integrations</span><span class="ticker-sep">&middot;</span>
        <span class="ticker-item">Custom chatbots</span><span class="ticker-sep">&middot;</span>
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
                <p>Same price every month. No surprises.</p>
            </div>
            <div class="ben rv rv-d3">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3>Lightning delivery</h3>
                <p>Most requests done in 1-3 days.</p>
            </div>
            <div class="ben rv rv-d4">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>AI + human review</h3>
                <p>AI builds it. A human checks it before you see it.</p>
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

<!-- ===== WHAT WE BUILD ===== -->
<section class="build" id="build">
    <div class="wrap">
        <div class="build-head rv">
            <div class="label">What we build</div>
            <h2>One subscription.<br>Anything you need <em>automated.</em></h2>
        </div>

        <div class="build-tags">
            <span class="build-tag rv rv-d1">AI agents &amp; automations</span>
            <span class="build-tag rv rv-d2">N8n workflows</span>
            <span class="build-tag rv rv-d3">Zapier &amp; Make integrations</span>
            <span class="build-tag rv rv-d1">Internal tools</span>
            <span class="build-tag rv rv-d2">API &amp; third-party integrations</span>
            <span class="build-tag rv rv-d3">Dashboards &amp; reporting</span>
            <span class="build-tag rv rv-d4">Lead capture &amp; CRM automations</span>
            <span class="build-tag rv rv-d5">Email &amp; follow-up sequences</span>
            <span class="build-tag rv rv-d6">Telegram &amp; Slack bots</span>
            <span class="build-tag rv rv-d7">E-commerce automations</span>
            <span class="build-tag rv rv-d8">Client portals</span>
            <span class="build-tag rv rv-d1">+ more</span>
        </div>
    </div>
</section>

<!-- ===== PRICING ===== -->
<section class="pricing" id="pricing">
    <div class="wrap">
        <div class="pricing-head rv">
            <div class="label">Pricing</div>
            <h2>Two ways to work<br>with us.</h2>
        </div>

        <div class="pricing-grid">
            <div class="price-card builder rv rv-d1">
                <span class="price-badge">Perfect for a single project</span>
                <div class="price-name">Once-off Build</div>
                <div class="price-amount">
                    <span class="dollar" style="font-size:38px;letter-spacing:-0.02em;">Custom quote</span>
                </div>
                <ul class="price-features">
                    <li>Fixed scope, fixed price</li>
                    <li>Avg. 1-3 day delivery per milestone</li>
                    <li>Unlimited revisions until you're happy</li>
                    <li>Full handover &amp; documentation</li>
                    <li>Yours to keep forever</li>
                </ul>
                <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="price-cta" style="border:none;cursor:pointer;">Book a call</button>
            </div>

            <div class="price-card studio rv rv-d2">
                <span class="price-badge">Most popular</span>
                <div class="price-name">Monthly Retainer</div>
                <div class="price-amount">
                    <span class="dollar" style="font-size:38px;letter-spacing:-0.02em;">Book a call to discuss</span>
                </div>
                <ul class="price-features">
                    <li>One active request at a time</li>
                    <li>Avg. 1-3 day delivery</li>
                    <li>Unlimited requests in queue</li>
                    <li>Automation board included</li>
                    <li>AI-powered development</li>
                    <li>Weekly 30-min strategy call</li>
                    <li>Pause or cancel anytime</li>
                </ul>
                <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="price-cta" style="border:none;cursor:pointer;">Book a call</button>
            </div>
        </div>

        <div class="pricing-extras rv rv-d3">
            <div class="pricing-extra">
                <h4><span class="icon" aria-hidden="true">&#x23F8;</span> Pause anytime</h4>
                <p>Pause your subscription. Your remaining days roll over.</p>
            </div>
            <div class="pricing-extra">
                <h4><span class="icon" aria-hidden="true">&#x1F91D;</span> Try it for a week</h4>
                <p>Not happy after 7 days? 75% refund. No questions.</p>
            </div>
        </div>
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
                <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="btn-cta" style="font-size:14px; padding:14px 28px; border:none; cursor:pointer;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    Book a call
                </button>
            </div>
            <div class="faq-list">
                <div class="faq-item rv rv-d1">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Do I need to be technical to work with DoneFast?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Nope. You describe what you want. We handle the tech.</div></div>
                </div>
                <div class="faq-item rv rv-d2">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        How fast will my automation be delivered?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">1-3 days for most requests. Bigger builds get broken into smaller pieces so you see progress fast.</div></div>
                </div>
                <div class="faq-item rv rv-d3">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        What counts as one request?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">One clear deliverable. A workflow, a bot, a dashboard, an integration. If it's too big, we break it up for you.</div></div>
                </div>
                <div class="faq-item rv rv-d4">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Can you automate my entire business operations?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Yes. That's exactly what the retainer is for. We work through it card by card, starting with what saves you the most time.</div></div>
                </div>
                <div class="faq-item rv rv-d5">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Who actually builds everything?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">AI does the heavy lifting. A senior engineer reviews everything before you see it.</div></div>
                </div>
                <div class="faq-item rv rv-d6">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        What if I don't like the result?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">We revise until you're happy. Unlimited revisions, always.</div></div>
                </div>
                <div class="faq-item rv rv-d7">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        How does pausing work?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Pause mid-cycle, your remaining days freeze. Resume whenever you want.</div></div>
                </div>
                <div class="faq-item rv rv-d8">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        What tools and platforms do you work with?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">N8n, Zapier, Make, React, Next.js, Python, Supabase, and more. We build around whatever you already use.</div></div>
                </div>
                <div class="faq-item rv rv-d1">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Do I own everything you build?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">100%. Everything we build is yours from day one.</div></div>
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
            <h2>Let's talk about<br><em>your business</em></h2>
            <p>Free 30-min call. We'll show you what we'd automate first.</p>

            <div style="margin-top:48px;">
                <button
                    data-cal-link="donefast/30min"
                    data-cal-config='{"layout":"month_view","theme":"dark"}'
                    class="btn-cta"
                    style="font-size:18px; padding:22px 48px; border:none; cursor:pointer;">
                    Book a free 30-min call
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <p style="margin-top:16px; font-size:13px; color:var(--white-muted);">No commitment. No pitch. Just clarity.</p>
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
<button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="float-cta" aria-label="Book a call" style="border:none;cursor:pointer;">
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
