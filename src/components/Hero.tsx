import { OFFER } from "@/lib/offer-data";
import { SavingsChart } from "./SavingsChart";

export function Hero() {
  return (
    <section
      style={{ background: "#0D3D34" }}
      className="px-6 pt-10 pb-12 md:px-10 lg:px-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Client tag */}
        <div className="flex items-center gap-3 mb-8 fade-up fade-up-1">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0"
            style={{ background: "#D7FF00", color: "#0D3D34" }}
            aria-hidden="true"
          >
            {OFFER.client.initials}
          </div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
              {OFFER.client.name}
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)" }} aria-hidden="true">·</span>
            <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              {OFFER.client.location}
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)" }} aria-hidden="true">·</span>
            <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              {OFFER.client.consumptionMWh} MWh/rok
            </span>
          </div>
          <div
            className="ml-auto hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
            style={{
              background: "rgba(215,255,0,0.08)",
              border: "1px solid rgba(215,255,0,0.2)",
              color: "rgba(215,255,0,0.8)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#D7FF00" }}
              aria-hidden="true"
            />
            Indikativní nabídka
          </div>
        </div>

        {/* Main layout: text left, chart right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
          {/* Left: copy */}
          <div className="flex-1 min-w-0">
            <p
              className="text-[14px] font-medium mb-3 fade-up fade-up-2"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              S Electree ušetříte každý měsíc
            </p>

            <div className="fade-up fade-up-2">
              <div
                className="text-[72px] sm:text-[80px] font-extrabold leading-none tracking-tight mb-1"
                style={{ color: "#D7FF00" }}
                aria-label={`${OFFER.savings.monthly.toLocaleString("cs-CZ")} korun měsíčně`}
              >
                {OFFER.savings.monthly.toLocaleString("cs-CZ")} Kč
              </div>
              <p className="text-[15px] mt-3 mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                oproti ČEZ &mdash; fixní cena na {OFFER.offer.fixYears} roky
              </p>
            </div>

            {/* Savings summary chips */}
            <div className="flex flex-wrap gap-2 mb-8 fade-up fade-up-3">
              <Chip>
                <ChipDot />
                Ušetříte {OFFER.savings.annual.toLocaleString("cs-CZ")} Kč ročně
              </Chip>
              <Chip>
                <ChipDot />
                {OFFER.savings.threeYear.toLocaleString("cs-CZ")} Kč za {OFFER.offer.fixYears} roky
              </Chip>
              <Chip>
                <ChipDot />
                Zelená energie
              </Chip>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 fade-up fade-up-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[12px] text-[15px] font-bold transition-all"
                style={{
                  background: "#D7FF00",
                  color: "#0D3D34",
                }}
              >
                Podepsat online
                <ArrowRight />
              </a>
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[12px] text-[15px] font-medium transition-all"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Zavolejte mi
              </a>
            </div>

            {/* Indicative disclaimer */}
            <p
              className="mt-6 text-[12px] leading-relaxed fade-up fade-up-5"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Předběžná kalkulace na základě dostupných dat. Konečné podmínky upřesníme společně.
            </p>
          </div>

          {/* Right: chart */}
          <div className="flex-shrink-0 flex justify-center md:justify-end fade-up fade-up-3">
            <SavingsChart />
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "rgba(255,255,255,0.65)",
      }}
    >
      {children}
    </span>
  );
}

function ChipDot() {
  return (
    <span
      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
      style={{ background: "#D7FF00" }}
      aria-hidden="true"
    />
  );
}

function ArrowRight() {
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
