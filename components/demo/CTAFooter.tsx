"use client";

export function CTAFooter({ text, url }: { text: string; url: string }) {
  return (
    <div className="demo-cta">
      <div className="demo-cta-inner">
        <div>
          <span className="demo-cta-eyebrow">Demo complete</span>
          <h3 className="demo-cta-heading">{text}</h3>
          <p className="demo-cta-sub">
            We build this for you. Fixed monthly fee. No retainer runaround.
          </p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="demo-cta-button"
        >
          Book an intro call
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
            <path
              d="M3 11L11 3M11 3H5M11 3V9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
