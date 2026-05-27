import { OFFER } from "@/lib/offer-data";
import { SavingsChart } from "./SavingsChart";

export function Hero() {
  return (
    <section
      style={{ background: "#0D3D34" }}
      className="relative overflow-hidden px-6 pt-12 pb-14 md:px-10 lg:px-16"
    >
      {/* Subtle bg texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(215,255,0,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Client meta row */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-10 fade-up fade-up-1">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0"
            style={{ background: "#D7FF00", color: "#0D3D34" }}
            aria-hidden="true"
          >
            {OFFER.client.initials}
          </div>
          <span className="text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
            {OFFER.client.name}
          </span>
          <span style={{ color: "rgba(255,255,255,0.18)" }} aria-hidden="true">·</span>
          <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.38)" }}>
            {OFFER.client.location}
          </span>
          <span style={{ color: "rgba(255,255,255,0.18)" }} aria-hidden="true">·</span>
          <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.38)" }}>
            Spotřeba: {OFFER.client.consumptionMWh} MWh/rok
          </span>

          <div className="ml-auto">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium"
              style={{
                background: "rgba(215,255,0,0.07)",
                border: "1px solid rgba(215,255,0,0.15)",
                color: "rgba(215,255,0,0.65)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#D7FF00" }}
                aria-hidden="true"
              />
              Indikativní nabídka
            </span>
          </div>
        </div>

        {/* Main layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-8">
          {/* ── Left: copy ── */}
          <div className="flex-1 min-w-0">
            <p
              className="text-[14px] font-medium mb-3 fade-up fade-up-1"
              style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.01em" }}
            >
              S Electree platíte každý měsíc
            </p>

            {/* THE number — dominant anchor */}
            <div className="fade-up fade-up-2 mb-4">
              <div
                className="font-extrabold leading-none block"
                style={{
                  color: "#D7FF00",
                  fontSize: "clamp(72px, 12vw, 104px)",
                  letterSpacing: "-0.035em",
                }}
                aria-label={`${OFFER.savings.monthly.toLocaleString("cs-CZ")} korun méně každý měsíc`}
              >
                {OFFER.savings.monthly.toLocaleString("cs-CZ")} Kč
              </div>
            </div>

            <p
              className="text-[15px] mb-7 fade-up fade-up-2"
              style={{ color: "rgba(255,255,255,0.42)", lineHeight: "1.65" }}
            >
              méně oproti ČEZ &mdash;{" "}
              <span style={{ color: "rgba(255,255,255,0.65)" }}>
                fixní cena na {OFFER.offer.fixYears} roky
              </span>
            </p>

            {/* Benefit chips */}
            <div className="flex flex-wrap gap-2 mb-9 fade-up fade-up-3">
              <TrustChip>
                {OFFER.savings.annual.toLocaleString("cs-CZ")} Kč ročně
              </TrustChip>
              <TrustChip>
                {OFFER.savings.threeYear.toLocaleString("cs-CZ")} Kč za {OFFER.offer.fixYears} roky
              </TrustChip>
              <TrustChip>100% zelená energie</TrustChip>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 fade-up fade-up-4">
              {/* Primary — lime bg + dark text (inverted on dark hero) */}
              <a
                href="#cta"
                className="cta-primary-hero inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-[15px] font-bold"
                style={{
                  background: "#D7FF00",
                  color: "#0D3D34",
                }}
              >
                Podepsat online
                <ArrowIcon />
              </a>

              {/* Secondary — ghost outline */}
              <a
                href="tel:+420800000000"
                className="cta-secondary-hero inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-medium"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                <PhoneIcon />
                Zavolejte mi
              </a>
            </div>

            {/* Preliminary disclaimer */}
            <p
              className="text-[12px] leading-relaxed fade-up fade-up-5"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Předběžná kalkulace na základě dostupných dat.
              Konečné podmínky upřesníme společně.
            </p>
          </div>

          {/* ── Right: chart ── */}
          <div className="flex-shrink-0 flex justify-center md:justify-end fade-up fade-up-3">
            <SavingsChart />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustChip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.58)",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: "#D7FF00" }}
        aria-hidden="true"
      />
      {children}
    </span>
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
