"use client";

import { useEffect } from "react";

export default function V3Client() {
  useEffect(() => {
    document.documentElement.classList.remove("no-js");

    const yearEl = document.getElementById("footer-year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // ——— NAV SCROLL ———
    const nav = document.getElementById("nav");
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (nav) nav.classList.toggle("scrolled", window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);

    // ——— SCROLL REVEAL ———
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("vis");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".rv").forEach((el) => obs.observe(el));

    // ——— CURSOR GLOW ——— (desktop only)
    let glow: HTMLDivElement | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      curX = e.clientX;
      curY = e.clientY;
      if (glow) glow.classList.add("active");
    };
    const handleMouseLeave = () => {
      if (glow) glow.classList.remove("active");
    };
    let glowX = 0,
      glowY = 0,
      curX = 0,
      curY = 0;
    let glowRafId = 0;

    if (!isTouchDevice) {
      glow = document.createElement("div");
      glow.className = "cursor-glow";
      document.body.appendChild(glow);

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);

      const updateGlow = () => {
        glowX += (curX - glowX) * 0.08;
        glowY += (curY - glowY) * 0.08;
        if (glow) {
          glow.style.left = glowX + "px";
          glow.style.top = glowY + "px";
        }
        glowRafId = requestAnimationFrame(updateGlow);
      };
      updateGlow();
    }

    // ——— HERO PARALLAX ——— (desktop only)
    const heroSection = document.querySelector<HTMLElement>(".hero");
    const orb1 = document.querySelector<HTMLElement>(".orb-1");
    const orb2 = document.querySelector<HTMLElement>(".orb-2");

    const handleHeroMouseMove = (e: MouseEvent) => {
      if (!heroSection || !orb1 || !orb2) return;
      const rect = heroSection.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width - 0.5;
      const my = (e.clientY - rect.top) / rect.height - 0.5;
      orb1.style.transform =
        "translate(" + mx * 40 + "px, " + my * 30 + "px) scale(1.02)";
      orb2.style.transform =
        "translate(" + mx * -25 + "px, " + my * -20 + "px) scale(0.98)";
    };
    const handleHeroMouseLeave = () => {
      if (orb1) orb1.style.transform = "";
      if (orb2) orb2.style.transform = "";
    };

    if (!isTouchDevice && heroSection && orb1 && orb2) {
      heroSection.addEventListener("mousemove", handleHeroMouseMove);
      heroSection.addEventListener("mouseleave", handleHeroMouseLeave);
      orb1.style.transition =
        "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      orb2.style.transition =
        "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    }

    // ——— MAGNETIC BUTTONS ——— (desktop only)
    const magneticHandlers: Array<{
      el: HTMLElement;
      move: (e: MouseEvent) => void;
      leave: () => void;
    }> = [];
    if (!isTouchDevice) {
      document
        .querySelectorAll<HTMLElement>(
          ".btn-cta, .btn-ghost, .nav-cta, .price-cta"
        )
        .forEach((btn) => {
          btn.classList.add("magnetic");
          const move = (e: MouseEvent) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform =
              "translate(" + x * 0.15 + "px, " + y * 0.15 + "px)";
          };
          const leave = () => {
            btn.style.transform = "";
          };
          btn.addEventListener("mousemove", move);
          btn.addEventListener("mouseleave", leave);
          magneticHandlers.push({ el: btn, move, leave });
        });
    }

    // ——— BENEFIT CARD 3D TILT ——— (desktop only)
    const tiltHandlers: Array<{
      el: HTMLElement;
      move: (e: MouseEvent) => void;
      leave: () => void;
    }> = [];
    if (!isTouchDevice) {
      document.querySelectorAll<HTMLElement>(".v3-ben").forEach((card) => {
        const move = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          const rotateX = (0.5 - y) * 6;
          const rotateY = (x - 0.5) * 6;
          card.style.transform =
            "perspective(600px) rotateX(" +
            rotateX +
            "deg) rotateY(" +
            rotateY +
            "deg) scale(1.01)";
        };
        const leave = () => {
          card.style.transform = "";
        };
        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
        tiltHandlers.push({ el: card, move, leave });
      });
    }

    // ——— HERO SPLIT LINE TRIGGER ———
    const splitTimer = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".hero h1 .split-line-inner")
        .forEach((el) => {
          el.style.transform = "translateY(0)";
        });
    }, 400);

    // ——— HERO LINES PARALLAX ———
    const heroLines = document.querySelector<HTMLElement>(".hero-lines");
    const handleHeroLinesScroll = () => {
      if (heroLines) {
        heroLines.style.transform =
          "translateY(" + window.scrollY * 0.3 + "px)";
      }
    };
    if (heroLines) {
      window.addEventListener("scroll", handleHeroLinesScroll, {
        passive: true,
      });
    }

    // ——— HERO PARTICLE SYSTEM ——— (desktop only)
    let canvasRafId = 0;
    let heroVisObs: IntersectionObserver | null = null;
    let resizeHandler: (() => void) | null = null;
    let heroCanvasMouseHandler: ((e: MouseEvent) => void) | null = null;

    if (!isTouchDevice) {
      const canvas = document.getElementById(
        "heroCanvas"
      ) as HTMLCanvasElement | null;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          type Particle = {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
            pulse: number;
          };
          const particles: Particle[] = [];
          let mouseX = 0;
          let mouseY = 0;
          let canvasW = 0;
          let canvasH = 0;

          const resizeCanvas = () => {
            const hero = document.querySelector<HTMLElement>(".hero");
            if (!hero) return;
            canvasW = canvas.width = hero.offsetWidth;
            canvasH = canvas.height = hero.offsetHeight;
          };
          resizeCanvas();
          resizeHandler = resizeCanvas;
          window.addEventListener("resize", resizeCanvas);

          const PARTICLE_COUNT = 60;
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
              x: Math.random() * (canvasW || window.innerWidth),
              y: Math.random() * (canvasH || window.innerHeight),
              vx: (Math.random() - 0.5) * 0.3,
              vy: (Math.random() - 0.5) * 0.3,
              size: Math.random() * 1.5 + 0.5,
              opacity: Math.random() * 0.4 + 0.1,
              pulse: Math.random() * Math.PI * 2,
            });
          }

          const heroEl = document.querySelector<HTMLElement>(".hero");
          heroCanvasMouseHandler = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
          };
          if (heroEl) {
            heroEl.addEventListener("mousemove", heroCanvasMouseHandler);
          }

          let isHeroVisible = true;
          heroVisObs = new IntersectionObserver((entries) => {
            isHeroVisible = entries[0].isIntersecting;
          });
          if (heroEl) heroVisObs.observe(heroEl);

          const drawParticles = () => {
            if (!isHeroVisible) {
              canvasRafId = requestAnimationFrame(drawParticles);
              return;
            }
            ctx.clearRect(0, 0, canvasW, canvasH);

            particles.forEach((p, i) => {
              p.x += p.vx;
              p.y += p.vy;
              p.pulse += 0.02;

              if (p.x < 0) p.x = canvasW;
              if (p.x > canvasW) p.x = 0;
              if (p.y < 0) p.y = canvasH;
              if (p.y > canvasH) p.y = 0;

              const dx = p.x - mouseX;
              const dy = p.y - mouseY;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 150) {
                const force = (150 - dist) / 150;
                p.vx += (dx / dist) * force * 0.08;
                p.vy += (dy / dist) * force * 0.08;
              }

              p.vx *= 0.99;
              p.vy *= 0.99;

              const pulseOp = p.opacity + Math.sin(p.pulse) * 0.15;

              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              ctx.fillStyle =
                "rgba(200, 255, 46, " + Math.max(0, pulseOp) + ")";
              ctx.fill();

              for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const d = Math.sqrt(
                  Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
                );
                if (d < 120) {
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.strokeStyle =
                    "rgba(200, 255, 46, " + 0.06 * (1 - d / 120) + ")";
                  ctx.lineWidth = 0.5;
                  ctx.stroke();
                }
              }
            });
            canvasRafId = requestAnimationFrame(drawParticles);
          };
          drawParticles();
        }
      }
    }

    // ——— MOBILE MENU ———
    type WinGlobals = {
      openMobNav?: () => void;
      closeMobNav?: () => void;
      toggleFaq?: (btn: HTMLElement) => void;
    };
    const w = window as unknown as WinGlobals;
    w.openMobNav = () => {
      const el = document.getElementById("mobNav");
      if (el) el.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    w.closeMobNav = () => {
      const el = document.getElementById("mobNav");
      if (el) el.classList.remove("open");
      document.body.style.overflow = "";
    };

    // ——— FAQ ———
    w.toggleFaq = (btn: HTMLElement) => {
      const item = btn.parentElement as HTMLElement | null;
      if (!item) return;
      const ans = item.querySelector<HTMLElement>(".faq-a");
      const wasOpen = item.classList.contains("open");

      document
        .querySelectorAll<HTMLElement>(".faq-item.open")
        .forEach((i) => {
          i.classList.remove("open");
          const q = i.querySelector<HTMLElement>(".faq-q");
          const a = i.querySelector<HTMLElement>(".faq-a");
          if (q) q.setAttribute("aria-expanded", "false");
          if (a) a.style.maxHeight = "0";
        });

      if (!wasOpen && ans) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    };

    // ——— CAL.COM EMBED (popup + inline) ———
    let calScriptEl: HTMLScriptElement | null = null;
    if (!document.getElementById("cal-embed-loader")) {
      calScriptEl = document.createElement("script");
      calScriptEl.id = "cal-embed-loader";
      calScriptEl.type = "text/javascript";
      calScriptEl.text = `
        (function (C, A, L) {
          let p = function (a, ar) { a.q.push(ar); };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal; let ar = arguments;
            if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
            if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; }
            p(cal, ar);
          };
        })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", { origin: "https://cal.com" });
        Cal("ui", { theme: "dark", hideEventTypeDetails: false, layout: "month_view" });

        // Inline embed
        Cal("inline", {
          elementOrSelector: "#cal-inline-container",
          calLink: "donefast/30min",
          layout: "month_view",
          config: { theme: "dark" }
        });
      `;
      document.head.appendChild(calScriptEl);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleHeroLinesScroll);
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      obs.disconnect();
      if (heroVisObs) heroVisObs.disconnect();
      if (canvasRafId) cancelAnimationFrame(canvasRafId);
      if (glowRafId) cancelAnimationFrame(glowRafId);
      window.clearTimeout(splitTimer);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (heroSection) {
        heroSection.removeEventListener("mousemove", handleHeroMouseMove);
        heroSection.removeEventListener("mouseleave", handleHeroMouseLeave);
        if (heroCanvasMouseHandler) {
          heroSection.removeEventListener(
            "mousemove",
            heroCanvasMouseHandler
          );
        }
      }
      magneticHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
      tiltHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
      if (glow && glow.parentNode) glow.parentNode.removeChild(glow);
    };
  }, []);

  return null;
}
