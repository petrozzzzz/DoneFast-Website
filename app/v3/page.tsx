import type { Metadata } from "next";
import V3Client from "./v3-client";

export const metadata: Metadata = {
  title: "DoneFast — The AI Workflow You Need, Built Fast",
  description:
    "Custom automations, AI workflows, and internal tools. One flat monthly fee. Pause or cancel anytime.",
  robots: { index: false, follow: false },
};

const V3_HTML = `
<noscript><style>.rv{opacity:1;transform:none}.split-line-inner{transform:none}.hero-eyebrow,.hero h1,.hero-sub,.hero-actions{opacity:1;animation:none}</style></noscript>

<style>
  /* ===== V3 CTA COLOR — the ONLY element on the page with this color ===== */
  :root { --cta-v3: #FF5C3A; --cta-v3-hover: #FF7A5C; }

  .v3-cta,
  .v3 .nav-cta,
  .v3 .float-cta,
  .v3 .price-cta {
    background: var(--cta-v3) !important;
    color: #fff !important;
    border: none !important;
    cursor: pointer;
    transition: background 0.25s ease, transform 0.25s ease;
  }
  .v3-cta:hover,
  .v3 .nav-cta:hover,
  .v3 .float-cta:hover,
  .v3 .price-cta:hover {
    background: var(--cta-v3-hover) !important;
  }

  /* Override the default btn-cta lime styling inside v3 */
  .v3 .btn-cta {
    background: var(--cta-v3) !important;
    color: #fff !important;
    border: none !important;
  }
  .v3 .btn-cta:hover {
    background: var(--cta-v3-hover) !important;
  }
  .v3 .btn-cta svg { stroke: #fff; }

  /* Remove lime glow from CTA buttons in v3 */
  .v3 .btn-cta::before,
  .v3 .nav-cta::before,
  .v3 .float-cta::before { display: none !important; }

  /* ===== Inline Cal embed container ===== */
  .cal-inline-wrap {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    min-height: 500px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.06);
  }
  .cal-inline-wrap iframe { border-radius: 16px; }

  /* ===== Three-benefit strip ===== */
  .v3-benefits-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 64px;
  }
  .v3-ben {
    text-align: center;
    padding: 40px 24px;
    border-radius: 16px;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
  }
  .v3-ben-icon {
    width: 48px; height: 48px;
    margin: 0 auto 20px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 12px;
    background: rgba(200,255,46,0.08);
  }
  .v3-ben-icon svg { width: 24px; height: 24px; stroke: var(--lime); }
  .v3-ben h3 { font-size: 20px; margin-bottom: 8px; color: var(--white-main); font-weight: 600; }
  .v3-ben p { font-size: 15px; color: var(--white-muted); line-height: 1.5; margin: 0; }

  /* ===== Next-steps section ===== */
  .next-steps-section { padding: 120px 0; }
  .next-steps-section .how-head h2 { font-size: clamp(28px, 4vw, 42px); }

  /* ===== Combined section: calendar + tags ===== */
  .combined-section { padding: 120px 0; }
  .combined-section .build-tags { margin-top: 48px; justify-content: center; }

  @media (max-width: 768px) {
    .v3-benefits-strip { grid-template-columns: 1fr; gap: 20px; }
    .cal-inline-wrap { min-height: 400px; }
  }
</style>

<!-- ===== NAV ===== -->
<nav class="nav" id="nav">
    <div class="nav-in">
        <a href="/v3" class="nav-logo"><b>Done</b><i>Fast</i></a>
        <ul class="nav-links">
            <li><a href="#why">Why DoneFast</a></li>
            <li><a href="#next-step">Book a call</a></li>
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
    <a href="#why" onclick="closeMobNav()">Why DoneFast</a>
    <a href="#next-step" onclick="closeMobNav()">Book a call</a>
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
                <span class="split-line"><span class="split-line-inner">The AI workflow</span></span>
                <span class="split-line"><span class="split-line-inner serif-light">you know you need built,</span></span>
                <span class="split-line"><span class="split-line-inner"><em>DoneFast.</em></span></span>
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
            </div>
        </div>
    </div>
</section>

<!-- ===== WHY DONEFAST (3 benefits) ===== -->
<section class="benefits" id="why">
    <div class="wrap">
        <div class="benefits-head rv">
            <div class="label">Why DoneFast</div>
            <h2>Automation the way it<br>should have <em>always</em> worked.</h2>
        </div>

        <div class="v3-benefits-strip">
            <div class="v3-ben rv rv-d1">
                <div class="v3-ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                </div>
                <h3>Fixed monthly rate</h3>
                <p>Same price every month. No quotes, no proposals, no surprise invoices. Ever.</p>
            </div>
            <div class="v3-ben rv rv-d2">
                <div class="v3-ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3>New deliverables every 3-5 days</h3>
                <p>Request anything. Get it built, reviewed, and delivered fast &mdash; then move on to the next.</p>
            </div>
            <div class="v3-ben rv rv-d3">
                <div class="v3-ben-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>Yours forever</h3>
                <p>Every workflow, every integration, every tool we build &mdash; you fully own it. Always.</p>
            </div>
        </div>
    </div>
</section>

<!-- ===== YOUR NEXT STEP (Calendar + Tags) ===== -->
<section class="combined-section" id="next-step">
    <div class="wrap">
        <div class="build-head rv" style="text-align:center;">
            <div class="label" style="justify-content:center;">Your next step</div>
            <h2>One subscription.<br>Anything you need <em>automated.</em></h2>
        </div>

        <!-- Inline Cal.com embed -->
        <div class="cal-inline-wrap rv rv-d1" id="cal-inline-container" style="margin-top:48px;"></div>

        <div class="build-tags" style="margin-top:48px; display:flex; flex-wrap:wrap; gap:10px; justify-content:center;">
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

<!-- ===== YOUR NEXT STEPS (3-step process after booking) ===== -->
<section class="how next-steps-section" id="how">
    <div class="wrap">
        <div class="how-head rv">
            <div class="label">Your next steps</div>
            <h2>A simple <em>three-step</em> process.</h2>
        </div>

        <div class="how-track">
            <div class="hstep rv rv-d1">
                <div class="hstep-ring"><span>1</span></div>
                <h3>20-minute call with Pete</h3>
                <p>We walk through your business together and identify the highest-impact opportunities for AI and automation.</p>
                <span class="hstep-tag">Free &amp; no commitment</span>
            </div>
            <div class="hstep rv rv-d2">
                <div class="hstep-ring"><span>2</span></div>
                <h3>Priority Roadmap</h3>
                <p>You get a clear roadmap of what to build and in what order &mdash; biggest wins first.</p>
                <span class="hstep-tag">Custom to your business</span>
            </div>
            <div class="hstep rv rv-d3">
                <div class="hstep-ring"><span>3</span></div>
                <h3>Receive your first build</h3>
                <p>Within 3 days, your first deliverable lands. Review it, iterate, or approve and we move to the next.</p>
                <span class="hstep-tag">First build in 3 days</span>
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
                        Do I need to be technical?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Nope. You describe what you want. We handle the tech.</div></div>
                </div>
                <div class="faq-item rv rv-d2">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        How fast will I get my builds?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">3-5 days for most requests. Bigger builds get broken into smaller pieces so you see progress fast.</div></div>
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
                        Who actually builds everything?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">AI does the heavy lifting. A senior engineer reviews everything before you see it.</div></div>
                </div>
                <div class="faq-item rv rv-d5">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        What if I don't like the result?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">We revise until you're happy. Unlimited revisions, always.</div></div>
                </div>
                <div class="faq-item rv rv-d6">
                    <button class="faq-q" onclick="toggleFaq(this)" aria-expanded="false">
                        Can I pause or cancel?
                        <span class="arrow">+</span>
                    </button>
                    <div class="faq-a"><div class="faq-a-in">Anytime. Pause mid-cycle and your remaining days freeze. No contracts, no penalties.</div></div>
                </div>
                <div class="faq-item rv rv-d7">
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

<!-- ===== CLOSING CTA ===== -->
<section class="contact" id="contact">
    <div class="wrap">
        <div class="contact-inner rv">
            <div class="label" style="justify-content:center;margin-bottom:20px;"><span style="display:none;"></span>Ready?</div>
            <h2>Let's talk about<br><em>your business</em></h2>
            <p>Free 20-min call. We'll show you what we'd automate first.</p>

            <div style="margin-top:48px;">
                <button
                    data-cal-link="donefast/30min"
                    data-cal-config='{"layout":"month_view","theme":"dark"}'
                    class="btn-cta"
                    style="font-size:18px; padding:22px 48px; border:none; cursor:pointer;">
                    Book a free call
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
            <a href="/v3" class="footer-logo"><b>Done</b><i>Fast</i></a>
            <div class="footer-mid">
                <span>&copy; <span id="footer-year"></span> DoneFast</span>
            </div>
            <div class="footer-socials"></div>
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
    <div className="v3">
      <div dangerouslySetInnerHTML={{ __html: V3_HTML }} />
      <V3Client />
    </div>
  );
}
