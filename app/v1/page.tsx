import type { Metadata } from "next";
import PageClient from "../page-client";

export const metadata: Metadata = {
  title: "DoneFast — Development Subscriptions That Actually Ship",
  description:
    "Unlimited development requests. One flat monthly fee. Pause or cancel anytime. Delivered in days, not weeks.",
  robots: { index: false, follow: false },
};

const HOMEPAGE_HTML = `
<noscript><style>.rv{opacity:1;transform:none}.split-line-inner{transform:none}.hero-eyebrow,.hero h1,.hero-sub,.hero-actions,.hero-stats{opacity:1;animation:none}</style></noscript>

<!-- ===== NAV ===== -->
<nav class="nav" id="nav">
    <div class="nav-in">
        <a href="/v1" class="nav-logo"><b>Done</b><i>Fast</i></a>
        <ul class="nav-links">
            <li><a href="#how">How it works</a></li>
            <li><a href="#pricing">Pricing</a></li>
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
    <a href="#pricing" onclick="closeMobNav()">Pricing</a>
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
                Custom automations, AI workflows, and internal tools — built for marketing agencies, infoproduct businesses, and e-commerce brands. One flat monthly fee.
            </p>
            <div class="hero-actions">
                <a href="#pricing" class="btn-cta">
                    See pricing
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <button data-cal-link="donefast/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' class="btn-ghost" style="border:none;cursor:pointer;background:none;">Book a free call</button>
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

<!-- ===== HOW IT WORKS ===== -->
<section class="how" id="how">
    <div class="wrap">
        <div class="how-head rv">
            <div class="label">How it works</div>
            <h2>Automation the way it should have <em>always</em> worked.</h2>
        </div>

        <div class="how-track">
            <div class="hstep rv rv-d1">
                <div class="hstep-ring"><span>1</span></div>
                <h3>Subscribe</h3>
                <p>Choose a plan and get access to your own automation board within the hour. Add as many requests as you want &mdash; we'll handle the rest.</p>
                <span class="hstep-tag">Instant access</span>
            </div>
            <div class="hstep rv rv-d2">
                <div class="hstep-ring"><span>2</span></div>
                <h3>Request</h3>
                <p>Tell us what you need &mdash; a lead capture workflow, a client onboarding sequence, an AI agent, a reporting dashboard. If you can describe the problem, we can automate it.</p>
                <span class="hstep-tag">Unlimited</span>
            </div>
            <div class="hstep rv rv-d3">
                <div class="hstep-ring"><span>3</span></div>
                <h3>Receive</h3>
                <p>Your automation ships within 1-3 days on average. Review it, request changes, or approve and we pull the next card from your queue.</p>
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
            <h2>It's <em>"you'll never<br>go back"</em> better</h2>
            <p>DoneFast is your fractional AI CTO &mdash; without the salary, equity, or six-month hiring process. We replace expensive agencies and unreliable freelancers with fast, reliable automation delivery for one flat monthly fee.</p>
        </div>

        <div class="benefits-grid">
            <div class="ben rv rv-d1">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </div>
                <h3>Your automation board</h3>
                <p>Manage your entire request queue in one clean board. Add, prioritise, and track every automation in real time. Total visibility, zero chaos.</p>
            </div>
            <div class="ben rv rv-d2">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                </div>
                <h3>Fixed monthly rate</h3>
                <p>No quotes. No proposals. No scope creep surprises. Same price every month.</p>
            </div>
            <div class="ben rv rv-d3">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3>Lightning delivery</h3>
                <p>Most automations are live within 1-3 days. Complex builds get broken into sequential cards so you're always seeing real progress.</p>
            </div>
            <div class="ben rv rv-d4">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>Built by AI experts</h3>
                <p>AI-powered delivery with experienced human oversight. Every build is reviewed before it goes live. Quality output, every time.</p>
            </div>
            <div class="ben rv rv-d5">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-6.219-8.56"/><path d="M21 3v6h-6"/></svg>
                </div>
                <h3>Flexible and scalable</h3>
                <p>Scale up or down as needed. Pause when your queue is empty. Cancel anytime with no penalties.</p>
            </div>
            <div class="ben rv rv-d6">
                <div class="ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>
                </div>
                <h3>Yours forever</h3>
                <p>Every workflow, every integration, every tool we build is yours to keep. Fully documented and handed over completely, any time you want.</p>
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
            <h2>Two ways to work<br>with us. <em>One flat fee.</em></h2>
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
                <a href="#contact" class="price-cta">Enquire about a build</a>
            </div>

            <div class="price-card studio rv rv-d2">
                <span class="price-badge">Most popular</span>
                <div class="price-name">Monthly Retainer</div>
                <div class="price-amount">
                    <span class="dollar">$4,500</span>
                    <span class="period">/mo</span>
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
                <a href="#contact" class="price-cta">Start today</a>
            </div>
        </div>

        <div class="pricing-extras rv rv-d3">
            <div class="pricing-extra">
                <h4><span class="icon" aria-hidden="true">&#x23F8;</span> Pause anytime</h4>
                <p>Only have a few requests right now? Pause your subscription and your remaining days roll over. No waste.</p>
            </div>
            <div class="pricing-extra">
                <h4><span class="icon" aria-hidden="true">&#x1F91D;</span> Try it for a week</h4>
                <p>Not happy after 7 days? Get 75% back. No questions asked.</p>
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
                <p>We'd be worried if you didn't. Here are the ones we get every day.</p>
                <a href="#contact" class="btn-cta" style="font-size:14px; padding:14px 28px;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    Book a call
                </a>
            </div>
            <div class="faq-list">
                <div class="faq-item rv rv-d1">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Do I need to be technical to work with DoneFast?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Not at all. Our clients are typically marketing agencies, infoproduct businesses, and e-commerce brands &mdash; not developers. You describe the problem or the outcome you want, and we handle everything technical from there.</div></div>
                </div>
                <div class="faq-item rv rv-d2">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        How fast will my automation be delivered?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Most requests are completed in 1-3 days. More complex builds get broken into sequential milestones, so you're always seeing real progress within 48 hours.</div></div>
                </div>
                <div class="faq-item rv rv-d3">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        What counts as one request?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">One discrete, deliverable unit of work. A Zapier workflow, a lead scoring automation, an AI agent, a CRM integration, a reporting dashboard. Think of it like a sprint ticket &mdash; one clear outcome per card. If you submit something bigger, we'll break it into cards for you on intake.</div></div>
                </div>
                <div class="faq-item rv rv-d4">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Can you automate my entire business operations?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Yes &mdash; and that's exactly what the retainer is designed for. We work through your operations methodically, card by card, automating the parts of your business that are costing you the most time and money first.</div></div>
                </div>
                <div class="faq-item rv rv-d5">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Who actually builds everything?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">DoneFast uses a combination of AI-powered development tools and senior human engineers. Every automation is reviewed by an experienced operator before delivery. You always get quality output &mdash; never raw AI slop.</div></div>
                </div>
                <div class="faq-item rv rv-d6">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        What if I don't like the result?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">We revise until you're happy. Unlimited revisions are included on every request.</div></div>
                </div>
                <div class="faq-item rv rv-d7">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        How does pausing work?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Billing runs on 31-day cycles. If you pause mid-cycle, your remaining days freeze and resume whenever you're ready. Nothing is wasted.</div></div>
                </div>
                <div class="faq-item rv rv-d8">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        What tools and platforms do you work with?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">N8n, Zapier, Make, Trigger.dev, React, Next.js, Node, Python, Supabase, Firebase, and most modern automation tooling. Tell us what you're already using on your onboarding call and we'll build around your existing stack.</div></div>
                </div>
                <div class="faq-item rv rv-d1">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Do I own everything you build?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">100%. Every workflow, every line of code, every integration &mdash; clean, documented, and yours from day one.</div></div>
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
            <h2>See if DoneFast is the<br>right fit for <em>you</em></h2>
            <p class="contact-aside">(it totally is)</p>
            <p>Book a free 30-minute call. We'll map out your biggest operational bottlenecks and show you exactly what we'd automate first &mdash; whether you sign up or not.</p>

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
            <a href="/v1" class="footer-logo"><b>Done</b><i>Fast</i></a>
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
