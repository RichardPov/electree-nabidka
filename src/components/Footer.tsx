import { OFFER } from "@/lib/offer-data";

export function Footer() {
  return (
    <footer className="px-6 py-8 md:px-10 lg:px-16" style={{ background: "#0D3D34" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
            Electree s.r.o.
          </span>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:info@electree.cz"
              className="text-[13px] transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              info@electree.cz
            </a>
            <a
              href="tel:+420800000000"
              className="text-[13px] transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              800 xxx xxx
            </a>
          </div>
        </div>

        <div
          className="pt-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-[11px] leading-loose" style={{ color: "rgba(255,255,255,0.25)" }}>
            * Roční náklady zahrnují pouze komoditu (silová elektřina) + stálý plat.
            Distribuce, poplatky OTE a daně nejsou zahrnuty a jsou totožné u obou dodavatelů.
            Spotřeba: {OFFER.client.consumptionMWh} MWh/rok. Zálohy jsou modelované na základě
            spotřeby a mohou se lišit dle skutečné spotřeby. Ceny bez DPH, pokud není uvedeno
            jinak. Nabídka má indikativní charakter a vychází z informací poskytnutých při
            telefonickém hovoru. Nabídka platná do {OFFER.validity}.
          </p>
          <p className="mt-3 text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 Electree s.r.o. &nbsp;·&nbsp; Nabídka č. {OFFER.offerNumber} &nbsp;·&nbsp;
            nabidka.electree.cz
          </p>
        </div>
      </div>
    </footer>
  );
}
