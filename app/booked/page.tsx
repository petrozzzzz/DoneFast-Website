import type { Metadata } from "next";
import BookedClient from "./booked-client";

export const metadata: Metadata = {
  title: "You're Booked — DoneFast",
  description:
    "Your call with DoneFast is confirmed. Check your email and Google Calendar for the details.",
  robots: { index: false, follow: false },
};

const BOOKED_HTML = `
<!-- NAV -->
<nav class="booked-nav">
  <a href="/" class="nav-logo"><b>Done</b><i>Fast</i></a>
  <a href="/" class="nav-back">&larr; Back to home</a>
</nav>

<!-- CONFIRMATION HERO -->
<section class="confirm-hero">
  <div class="check-circle">
    <svg viewBox="0 0 44 44" fill="none">
      <path class="check-path" d="M10 22l8 8L34 14"/>
    </svg>
  </div>
  <h1>You're <em>booked</em> in.</h1>
  <p class="sub">Check your email &amp; Google Calendar for the meeting details. We're looking forward to chatting with you.</p>
</section>

<!-- WHAT TO EXPECT -->
<section class="steps-section">
  <div class="steps-grid">
    <div class="step-card rv rv-d1">
      <div class="step-icon">&#9993;</div>
      <h3>Check your inbox</h3>
      <p>A confirmation email with the meeting link is on its way to you now.</p>
    </div>
    <div class="step-card rv rv-d2">
      <div class="step-icon">&#128197;</div>
      <h3>Calendar invite sent</h3>
      <p>It's been added to your Google Calendar automatically. Nothing else to do.</p>
    </div>
    <div class="step-card rv rv-d3">
      <div class="step-icon">&#128161;</div>
      <h3>On the call</h3>
      <p>We'll map your biggest operational bottlenecks and show you exactly what we'd automate first.</p>
    </div>
  </div>
</section>

<!-- SOCIAL PROOF -->
<section class="proof-section">
  <div class="proof-banner rv">
    <div class="avatars">
      <div class="av">JR</div>
      <div class="av">TM</div>
      <div class="av">SK</div>
    </div>
    <div class="proof-text">
      <strong>Clients typically save 10–20 hours per week</strong> within the first 30 days of onboarding.
    </div>
  </div>
</section>

<!-- WHILE YOU WAIT — commented out until assets are ready
<section class="wait-section">
  <div class="wait-card rv">
    <h2>Want to see how DoneFast works before our call?</h2>
    <p>Explore how we automate the operations of marketing agencies, infoproduct businesses, and e-commerce brands.</p>
    <a href="/" class="btn-dark">
      See how it works
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </div>
</section>
-->

<!-- FOOTER -->
<footer class="booked-footer">
  <span>&copy; 2025 DoneFast</span>
  <div style="display:flex;gap:24px">
    <a href="#">Privacy</a>
    <a href="#">Terms</a>
  </div>
</footer>
`;

export default function BookedPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: BOOKED_HTML }} />
      <BookedClient />
    </>
  );
}
