import { OFFER } from "@/lib/offer-data";

const metrics = [
  {
    value: `${OFFER.savings.monthly.toLocaleString("cs-CZ")} Kč`,
    label: "méně každý měsíc",
    badge: `−${OFFER.savings.pct} % na záloze`,
    highlight: false,
  },
  {
    value: `${OFFER.savings.annual.toLocaleString("cs-CZ")} Kč`,
    label: "úspora za rok",
    badge: "roční úspora",
    highlight: false,
  },
  {
    value: `${OFFER.savings.threeYear.toLocaleString("cs-CZ")} Kč`,
    label: `celkem za ${OFFER.offer.fixYears} roky fixace`,
    badge: "za celou fixaci",
    highlight: true,
  },
];

export function SavingsMetrics() {
  return (
    <section className="py-12 px-6 md:px-10 lg:px-16" style={{ background: "#ffffff" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-3 mb-8">
          <h2 className="text-[20px] font-bold" style={{ color: "#0D3D34" }}>
            Vaše úspora s Electree
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-[16px] p-6 flex flex-col"
              style={
                m.highlight
                  ? { background: "#0D3D34" }
                  : { background: "#EBF7F1" }
              }
            >
              <div
                className="text-[36px] font-extrabold leading-none tracking-tight mb-2"
                style={{ color: m.highlight ? "#D7FF00" : "#0D3D34" }}
              >
                {m.value}
              </div>
              <div
                className="text-[13px] font-medium mb-4"
                style={{ color: m.highlight ? "rgba(255,255,255,0.55)" : "#6B7280" }}
              >
                {m.label}
              </div>
              <div
                className="mt-auto inline-block self-start px-3 py-1 rounded-full text-[11px] font-semibold"
                style={
                  m.highlight
                    ? { background: "rgba(215,255,0,0.12)", color: "#D7FF00" }
                    : { background: "#D8EAE0", color: "#20544A" }
                }
              >
                {m.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
