const benefits = [
  {
    title: "Fixní cena na 3 roky",
    desc: "Garantovaná cena elektřiny bez ohledu na pohyb trhu. Bez překvapení na faktuře.",
    icon: "lock",
  },
  {
    title: "Bezstarostný přechod",
    desc: "Vše vyřídíme za vás. Bez výpadku dodávky, bez formulářů, bez starostí.",
    icon: "switch",
  },
  {
    title: "100% zelená energie",
    desc: "Elektřina z obnovitelných zdrojů. Certifikát původu je součástí každé smlouvy.",
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
    <section className="py-14 px-6 md:px-10 lg:px-16" style={{ background: "#ffffff" }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-[11px] font-semibold tracking-widest uppercase mb-10"
          style={{ color: "#96D5B7", letterSpacing: "0.1em" }}
        >
          Proč Electree
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-9">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Brand icon chip — DS style: 32px dark-green square + lime icon */}
              <div
                className="flex-shrink-0 w-9 h-9 rounded-[9px] flex items-center justify-center"
                style={{ background: "#0D3D34" }}
                aria-hidden="true"
              >
                <BenefitIcon name={b.icon} />
              </div>
              <div>
                <h3
                  className="text-[14px] font-bold mb-1.5"
                  style={{ color: "#0D3D34" }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "#6B7280" }}
                >
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
  const base = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#D7FF00",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "lock":
      return (
        <svg {...base}>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "switch":
      return (
        <svg {...base}>
          <path d="M17 1l4 4-4 4" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <path d="M7 23l-4-4 4-4" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...base}>
          <path d="M2 22c1.25-1.25 2.5-5 6-6s7.5-2 10-6c1-1.5 1.5-3 1.5-5 0 0-4.5 1-7.5 4S8 15 6 18" />
          <path d="M2 22c0-3 1.5-6 4-8" />
        </svg>
      );
    case "shield":
      return (
        <svg {...base}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    default:
      return null;
  }
}
