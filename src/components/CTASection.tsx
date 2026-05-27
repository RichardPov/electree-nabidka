import { OFFER } from "@/lib/offer-data";

export function CTASection() {
  return (
    <section
      id="cta"
      className="py-14 px-6 md:px-10 lg:px-16"
      style={{ background: "#EBF7F1" }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-[24px] overflow-hidden"
          style={{ background: "#0D3D34" }}
        >
          {/* ── Phone CTA banner (DS component) ── */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-8 py-4"
            style={{ background: "#0B3530", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Máte otázky?
            </span>
            <a
              href="tel:+420666888999"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full font-bold text-[14px]"
              style={{
                background: "#D7FF00",
                color: "#0D3D34",
              }}
            >
              <PhoneChipIcon />
              +420 666 888 999
            </a>
            <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              Po–Pá, 8:00–16:00
            </span>
          </div>

          {/* ── Main CTA content ── */}
          <div className="px-8 py-10 md:px-12 md:py-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {/* Left */}
              <div className="flex-1">
                <p
                  className="text-[11px] font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "rgba(215,255,0,0.45)", letterSpacing: "0.1em" }}
                >
                  Připraveni začít?
                </p>
                <h2
                  className="font-extrabold leading-tight mb-3"
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(22px, 4vw, 28px)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Ušetříte {OFFER.savings.threeYear.toLocaleString("cs-CZ")} Kč
                  <br />
                  za {OFFER.offer.fixYears} roky.
                </h2>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
                  Platnost nabídky do{" "}
                  <span style={{ color: "rgba(255,255,255,0.7)" }}>{OFFER.validity}</span>.
                  {" "}Přechod vyřídíme za vás.
                </p>
              </div>

              {/* Right: two CTAs */}
              <div className="flex flex-col gap-3 md:min-w-[220px]">
                {/* Primary — DS style: dark-green bg + lime text (on dark bg, use lime bg + dark text) */}
                <a
                  href="#"
                  className="cta-primary-hero inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-[15px] font-bold"
                  style={{
                    background: "#D7FF00",
                    color: "#0D3D34",
                  }}
                >
                  Podepsat online
                  <ArrowIcon />
                </a>

                {/* Secondary — outline */}
                <a
                  href="tel:+420666888999"
                  className="cta-secondary-hero inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-medium"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  <PhoneIcon />
                  Zavolejte mi
                </a>
              </div>
            </div>

            {/* Indicative disclaimer row */}
            <div
              className="mt-8 pt-6 flex items-start gap-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <InfoIcon />
              <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                Tato nabídka má{" "}
                <strong style={{ color: "rgba(255,255,255,0.48)" }}>indikativní charakter</strong>{" "}
                a vychází z informací ze schůzky. Konečné podmínky budou upřesněny
                po zadání kompletních údajů. Nabídka č. {OFFER.offerNumber}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneChipIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.27a16 16 0 0 0 6 6l1.15-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.81l.01 1.11z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.27a16 16 0 0 0 6 6l1.15-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.81l.01 1.11z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
