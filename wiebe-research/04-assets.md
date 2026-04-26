# Asset Spec — DoneFast Landing Page

Date: 2026-04-25
Built from: 03-hierarchy.md
Note: The current page already has a hero canvas particle system, mesh blobs, and orbs handled in CSS/JS. This spec covers only NEW or REVISED assets needed to support the rewritten copy. Existing imagery (the 8 worked-with logos) is retained as-is.

---

## Asset 1 — Founder photo (NEW)

**Where:** "A note from the founder" section (after pricing card)
**Job:** Make Pete a real person to a non-tech buyer who's been burned by faceless agencies. Photo > silhouette > nothing.
**Format:** Single static photo, square crop (1:1) at 480×480px display, served at 2x retina (960×960 source).
**Style:** Casual, slightly informal. Not a corporate headshot. Pete in a t-shirt or hoodie, decent natural light, looking at the camera. The voice in the section is conversational ("I'm an AI nerd") — the photo should match.
**Source:** Pete to provide. If unavailable, use a small monogram/initials block as placeholder.
**Placement:** Floated left of the headline, or above it on mobile. Round corners or full circle crop.
**Approx. dimensions in layout:** 96-128px circle on desktop, 80px on mobile.
**Status:** Placeholder until Pete provides.

---

## Asset 2 — "Most agencies are running a scam" section background treatment (REVISED)

**Where:** Category critique section (the rewritten `.fatigue` section)
**Job:** Visually signal "this is the contrarian, sharp section." The current `.fatigue` styling is fine but could feel sharper. Consider: subtle warning-stripe pattern at the section edge, or a bolder accent color on the punchline block.
**Format:** CSS-only treatment (no image asset). Possibly a single subtle SVG noise/grain overlay if the existing fatigue styles feel flat.
**Source:** CSS. No external asset needed.
**Status:** Optional — only if the section feels visually under-weighted in browser preview.

---

## Asset 3 — "What we build" industry icons (NEW, optional)

**Where:** The 4 blocks in the rewritten `.unlimited` section ("Missed-call recovery", "Quote & intake automation", "Internal tool", "What doesn't fit")
**Job:** Each block could carry a small icon to anchor the visual identity. Currently the blocks are text-only.
**Format:** Inline SVG, 24-32px, single-stroke style matching existing benefit-card icons. Outline style, not filled.
**Suggested icons:**
1. Missed-call recovery → phone with arrow back, or phone + clock
2. Quote & intake automation → document with arrow, or checklist
3. Internal tool → grid/dashboard
4. What doesn't fit → simple slash/no-symbol
**Source:** Inline SVG. Use the same visual style already in the `.ben-icon` blocks.
**Status:** Skipped in this rewrite — text-only is fine. Add in a v2 if the section feels visually flat.

---

## Asset 4 — Hero visual treatment (NO CHANGE)

The existing hero canvas (particles, mesh blobs, orbs) is doing the visual job. No revision needed.
**Note:** the headline structure changed from 3 lines to 3 different lines — the existing CSS animation hooks (`.split-line`, `.split-line-inner`, `.serif-light`) still apply, so animations should work without modification. Verify in browser.

---

## Asset 5 — OG / social share image (NEEDS UPDATE)

**Where:** `metadata.openGraph.images` and `metadata.twitter.images` in `app/page.tsx`
**Current:** `https://donefast.com/og-image.jpg`
**Job:** Match the new headline ("You know you need AI. You don't know who to trust.") and the new pricing ($1,250).
**Format:** 1200×630px JPG or PNG.
**Style:** Match the existing hero — dark background, accent color (#C8FF2E lime green that's used in the particle system), big serif/sans typography. Hero text should be the headline.
**Suggested layout:**
- Top: small "DoneFast" wordmark
- Center: "You know you need AI. You don't know who to trust." (dominant)
- Bottom: "$1,250/mo flat. 75% refund week one. Cancel anytime."
**Source:** Build via the `quick-graphics` or `graphic` skill, or commission. Save to `/public/og-image.jpg`.
**Status:** TODO — not blocking page launch but needed before the page is shared on socials.

---

## Asset 6 — Worked-with logos (NO CHANGE)

The 8 existing logos in `/public/logos/` are retained:
- january-labs.webp
- grounded.webp
- elate-beauty.svg
- fom.avif
- skoon.avif
- musee.svg
- kaplan-md.png
- ps.svg

No changes needed. Note for Pete: the rewritten heading is still "Worked with" — DO NOT change to "Trusted by" or "Customers" since these are prior personal client work, not DoneFast clients.

---

## Future enhancements (not blocking launch)

These are worth adding once available but the page can launch without them.

1. **Real client testimonials with photos.** Once 5+ DoneFast clients exist, add a testimonial section between sections 9 and 10 (pricing and founder note). Format: photo + name + role + 1-3 sentence quote with specific dollar/time outcome.
2. **A 30-second hero loom or screen recording.** A loom of Pete walking through one of the example builds (missed-call recovery, quote intake) would dramatically lift conversion. Embed below the hero or in the "What we build" section.
3. **A live counter / proof banner.** "X automations shipped this month" running counter pulled from the build queue. Adds "this is real and active" signal.
4. **Vertical-specific pages.** Separate `/hvac`, `/plumbing`, `/contractors` subpages once volume justifies. Each lifts the most resonant pain stat for that vertical to the hero (e.g., "$50K/yr in missed calls" for plumbers).
