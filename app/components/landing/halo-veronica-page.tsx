import { useConfigurables } from "~/modules/configurables";

/**
 * HaloVeronicaPage — two full-screen sections:
 *  1. Hero: "Halo Veronica"
 *  2. Declaration: "I Love You"
 *
 * All copy and colors are configurable via useConfigurables().
 */
export function HaloVeronicaPage() {
  const { config, loading } = useConfigurables();

  // Resolve values with graceful fallbacks while loading
  const bgColor = loading ? "#0D0A0B" : (config.backgroundColor ?? "#0D0A0B");
  const textColor = loading ? "#F5EFE6" : (config.textColor ?? "#F5EFE6");
  const accentColor = loading ? "#C9848A" : (config.accentColor ?? "#C9848A");
  const heroHeading = loading ? "" : (config.heroHeading ?? "Halo Veronica");
  const heroSubtext = loading ? "" : (config.heroSubtext ?? "");
  const declarationText = loading ? "" : (config.declarationText ?? "I Love You");
  const declarationSubtext = loading ? "" : (config.declarationSubtext ?? "");

  return (
    <main
      style={{
        backgroundColor: bgColor,
        color: textColor,
        scrollBehavior: "smooth",
      }}
      className="font-cormorant"
    >
      {/* ─── Section 1: Hero ───────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center"
        style={{ minHeight: "100dvh" }}
      >
        {/* Subtle radial glow behind heading */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 50%, ${accentColor}18 0%, transparent 70%)`,
          }}
        />

        <div
          className={`relative z-10 flex flex-col items-center gap-6 px-6 text-center${loading ? "" : " animate-fade-in-up"}`}
          style={{ animationDelay: "0.1s", opacity: loading ? 0 : undefined }}
        >
          {/* Decorative top line */}
          <div
            aria-hidden="true"
            className="mb-2 h-px w-24"
            style={{ backgroundColor: accentColor, opacity: 0.5 }}
          />

          <h1
            className="text-7xl font-light leading-tight tracking-widest sm:text-8xl md:text-9xl"
            style={{ color: textColor, fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {heroHeading}
          </h1>

          {heroSubtext && (
            <p
              className="mt-2 text-lg font-light tracking-[0.3em] opacity-60 sm:text-xl"
              style={{ color: textColor, fontStyle: "italic" }}
            >
              {heroSubtext}
            </p>
          )}

          {/* Decorative bottom line + chevron */}
          <div
            aria-hidden="true"
            className="mt-4 h-px w-24"
            style={{ backgroundColor: accentColor, opacity: 0.5 }}
          />

          {/* Scroll hint */}
          <div
            aria-hidden="true"
            className="mt-10 flex animate-bounce flex-col items-center gap-1 opacity-30"
          >
            <span className="text-xs tracking-[0.25em]" style={{ color: accentColor }}>
              scroll
            </span>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L8 8L15 1"
                stroke={accentColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Declaration ────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center"
        style={{ minHeight: "100dvh" }}
      >
        {/* Deeper radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 55% at 50% 50%, ${accentColor}22 0%, transparent 70%)`,
          }}
        />

        <div
          className={`relative z-10 flex flex-col items-center gap-6 px-6 text-center${loading ? "" : " animate-fade-in"}`}
          style={{ animationDelay: "0.3s", opacity: loading ? 0 : undefined }}
        >
          {/* Ornamental heart / rose symbol */}
          <div
            aria-hidden="true"
            className="mb-4 text-4xl"
            style={{ color: accentColor, opacity: 0.75 }}
          >
            ❦
          </div>

          <h2
            className="text-7xl font-light leading-tight tracking-widest sm:text-8xl md:text-9xl"
            style={{
              color: accentColor,
              fontFamily: '"Cormorant Garamond", Georgia, serif',
            }}
          >
            {declarationText}
          </h2>

          {declarationSubtext && (
            <p
              className="mt-3 text-lg font-light tracking-[0.3em] opacity-60 sm:text-xl"
              style={{ color: textColor, fontStyle: "italic" }}
            >
              {declarationSubtext}
            </p>
          )}

          {/* Decorative bottom ornament */}
          <div
            aria-hidden="true"
            className="mt-8 flex items-center gap-4"
            style={{ color: accentColor, opacity: 0.4 }}
          >
            <div className="h-px w-16" style={{ backgroundColor: accentColor }} />
            <span className="text-xl">✦</span>
            <div className="h-px w-16" style={{ backgroundColor: accentColor }} />
          </div>
        </div>
      </section>
    </main>
  );
}
