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
          className="rounded-[20px] px-8 py-10 md:px-12 md:py-12"
          style={{ background: "#0D3D34" }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left: text */}
            <div className="flex-1">
              <p
                className="text-[12px] font-semibold tracking-wider uppercase mb-3"
                style={{ color: "rgba(215,255,0,0.5)" }}
              >
                Další krok
              </p>
              <h2 className="text-[24px] md:text-[28px] font-extrabold leading-snug mb-3" style={{ color: "#ffffff" }}>
                Připraveni začít šetřit?
              </h2>
              <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Platnost nabídky do <strong style={{ color: "rgba(255,255,255,0.75)" }}>{OFFER.validity}</strong>.
                Přechod probíhá bez výpadku — postaráme se o vše.
              </p>
            </div>

            {/* Right: buttons */}
            <div className="flex flex-col gap-3 md:flex-shrink-0">
              {/* Primary CTA */}
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[12px] text-[15px] font-bold transition-all"
                style={{
                  background: "#D7FF00",
                  color: "#0D3D34",
                  boxShadow: "0 4px 24px rgba(215,255,0,0.25)",
                }}
              >
                Podepsat online
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
              </a>

              {/* Secondary CTA */}
              <a
                href="tel:+420800000000"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[12px] text-[15px] font-medium transition-all"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                <PhoneIcon />
                Zavolejte mi
              </a>
            </div>
          </div>

          {/* Indicative note */}
          <div
            className="mt-8 pt-6 flex items-start gap-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <InfoIcon />
            <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Tato nabídka má <strong style={{ color: "rgba(255,255,255,0.5)" }}>indikativní charakter</strong> a
              vychází z informací poskytnutých při hovoru. Konečné podmínky a ceny budou upřesněny
              po ověření kompletních údajů. Nabídka č. {OFFER.offerNumber}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
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

function InfoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255,255,255,0.3)"
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
