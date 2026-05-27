const benefits = [
  {
    title: "Fixní cena na 3 roky",
    desc: "Garantovaná cena elektřiny nezávisle na pohybu trhu. Žádná překvapení ve vyúčtování.",
    icon: "lock",
  },
  {
    title: "Snadný přechod",
    desc: "Vyřídíme vše za vás. Bez výpadku dodávky, bez starostí. Přecházíme hladce.",
    icon: "switch",
  },
  {
    title: "100% zelená energie",
    desc: "Elektřina z obnovitelných zdrojů. Certifikát původu je součástí nabídky.",
    icon: "leaf",
  },
  {
    title: "Žádné skryté poplatky",
    desc: "Transparentní ceník. Co vidíte, to platíte. Žádné šedé položky na faktuře.",
    icon: "shield",
  },
] as const;

export function Benefits() {
  return (
    <section className="py-12 px-6 md:px-10 lg:px-16" style={{ background: "#ffffff" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[20px] font-bold mb-8" style={{ color: "#0D3D34" }}>
          Proč Electree
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-5">
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{ background: "#EBF7F1" }}
                aria-hidden="true"
              >
                <BenefitIcon name={b.icon} />
              </div>
              <div>
                <h3 className="text-[14px] font-bold mb-1" style={{ color: "#0D3D34" }}>
                  {b.title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#6B7280" }}>
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitIcon({ name }: { name: string }) {
  const props = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#0D3D34",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "lock":
      return (
        <svg {...props}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "switch":
      return (
        <svg {...props}>
          <path d="M17 1l4 4-4 4" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <path d="M7 23l-4-4 4-4" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...props}>
          <path d="M2 22c1.25-1.25 2.5-5 6-6s7.5-2 10-6c1-1.5 1.5-3 1.5-5 0 0-4.5 1-7.5 4S8 15 6 18" />
          <path d="M2 22c0-3 1.5-6 4-8" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    default:
      return null;
  }
}
