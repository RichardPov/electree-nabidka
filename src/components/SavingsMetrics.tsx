import { OFFER } from "@/lib/offer-data";

const metrics = [
  {
    value: `${OFFER.savings.monthly.toLocaleString("cs-CZ")} Kč`,
    label: "méně každý měsíc",
    tag: `−${OFFER.savings.pct} %`,
    highlight: false,
  },
  {
    value: `${OFFER.savings.annual.toLocaleString("cs-CZ")} Kč`,
    label: "ušetříte za rok",
    tag: "roční úspora",
    highlight: false,
  },
  {
    value: `${OFFER.savings.threeYear.toLocaleString("cs-CZ")} Kč`,
    label: `za ${OFFER.offer.fixYears} roky fixace`,
    tag: "celková úspora",
    highlight: true,
  },
] as const;

export function SavingsMetrics() {
  return (
    <section className="py-14 px-6 md:px-10 lg:px-16" style={{ background: "#ffffff" }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-[11px] font-semibold tracking-widest uppercase mb-8"
          style={{ color: "#96D5B7", letterSpacing: "0.1em" }}
        >
          Vaše úspora s Electree
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-[18px] p-7 flex flex-col gap-3"
              style={
                m.highlight
                  ? { background: "#0D3D34" }
                  : { background: "#EBF7F1" }
              }
            >
              <div
                className="font-extrabold leading-none tracking-tight"
                style={{
                  fontSize: "clamp(32px, 5vw, 40px)",
                  letterSpacing: "-0.03em",
                  color: m.highlight ? "#D7FF00" : "#0D3D34",
                }}
              >
                {m.value}
              </div>

              <p
                className="text-[13px] font-medium"
                style={{ color: m.highlight ? "rgba(255,255,255,0.45)" : "#6B7280" }}
              >
                {m.label}
              </p>

              <div className="mt-auto pt-2">
                <span
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold"
                  style={
                    m.highlight
                      ? { background: "rgba(215,255,0,0.1)", color: "#D7FF00" }
                      : { background: "#D8EAE0", color: "#20544A" }
                  }
                >
                  {m.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
