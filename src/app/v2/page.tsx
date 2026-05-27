import { OFFER } from "@/lib/offer-data";
import { V2Actions } from "@/components/V2Actions";

const WHY_ITEMS = [
  { title: "Vše online",             sub: "Smlouva, platby i správa účtu přes mobil nebo web" },
  { title: "Žádné skryté poplatky",  sub: "Transparentní ceník, žádná překvapení na faktuře" },
  { title: "Bezstarostný přechod",   sub: "Vše za vás zařídíme, žádné přerušení dodávky" },
  { title: "Jistota fixní ceny",     sub: `${OFFER.offer.fixYears} roky stabilní cena bez ohledu na trh` },
];

const priceDelta = OFFER.current.pricePerMWhExVat - OFFER.offer.pricePerMWhExVat;

export default function OfferPageV2() {
  return (
    <div className="v2-page">
      {/* Header */}
      <header className="v2-hdr">
        <div className="v2-hdr-inner">
          <V2Logo />
          <span className="v2-validity">
            Nabídka platná do <strong>{OFFER.validity}</strong>
          </span>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="v2-hero">
          <div className="v2-hero-inner">
            <p className="v2-hero-intro">Indikativní nabídka pro</p>
            <h1 className="v2-hero-name">{OFFER.client.name}</h1>
            <div className="v2-sc">
              <p className="v2-sc-label">Roční úspora oproti ČEZ</p>
              <p className="v2-sc-val">{OFFER.savings.commodityAnnual.toLocaleString("cs-CZ")} Kč</p>
              <p className="v2-sc-sub">tj. {OFFER.savings.commodityMonthly} Kč každý měsíc</p>
            </div>
            <div className="v2-pills">
              <span className="v2-pill">Fixní cena na {OFFER.offer.fixYears} roky</span>
              <span className="v2-pill">Vše online</span>
              <span className="v2-pill">Žádné skryté poplatky</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="v2-body">
          {/* Comparison */}
          <div className="v2-sec">
            <h2 className="v2-sec-title">Porovnání nabídek</h2>
            <div className="v2-compare">
              {/* ČEZ */}
              <div className="v2-cp-col v2-cp-cez">
                <p className="v2-cp-sup">Váš stávající</p>
                <p className="v2-cp-name">ČEZ</p>
                <p className="v2-cp-tar">{OFFER.current.tariff}</p>
                <div className="v2-cp-rows">
                  <div className="v2-cp-row">
                    <span>Cena za MWh</span>
                    <span>{OFFER.current.pricePerMWhExVat.toLocaleString("cs-CZ")} Kč</span>
                  </div>
                  <div className="v2-cp-row">
                    <span>Stálý měsíční plat</span>
                    <span>{OFFER.current.monthlyFeeExVat} Kč</span>
                  </div>
                  <div className="v2-cp-row">
                    <span>Roční náklady*</span>
                    <span>{OFFER.current.annualCostCommodityExVat.toLocaleString("cs-CZ")} Kč</span>
                  </div>
                </div>
              </div>

              {/* Electree */}
              <div className="v2-cp-col v2-cp-el">
                <div className="v2-cp-badges">
                  <span className="v2-cp-our">Naše nabídka</span>
                  <span className="v2-cp-fix">{OFFER.offer.fixYears}Y fix</span>
                </div>
                <p className="v2-cp-name">{OFFER.offer.supplier}</p>
                <p className="v2-cp-tar">{OFFER.offer.tariff}</p>
                <div className="v2-cp-rows">
                  <div className="v2-cp-row">
                    <span>Cena za MWh</span>
                    <span className="v2-cp-val-row">
                      {OFFER.offer.pricePerMWhExVat.toLocaleString("cs-CZ")} Kč
                      <span className="v2-cp-delta">↓{priceDelta.toLocaleString("cs-CZ")} Kč</span>
                    </span>
                  </div>
                  <div className="v2-cp-row">
                    <span>Stálý měsíční plat</span>
                    <span>{OFFER.offer.monthlyFeeExVat} Kč</span>
                  </div>
                  <div className="v2-cp-row">
                    <span>Roční náklady*</span>
                    <span>{OFFER.offer.annualCostCommodityExVat.toLocaleString("cs-CZ")} Kč</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Savings */}
          <div className="v2-sec">
            <h2 className="v2-sec-title">Vaše úspory s Electree</h2>
            <div className="v2-metrics">
              <div className="v2-metric">
                <div className="v2-metric-val">{OFFER.savings.commodityMonthly.toLocaleString("cs-CZ")} Kč</div>
                <div className="v2-metric-lbl">každý měsíc</div>
              </div>
              <div className="v2-metric">
                <div className="v2-metric-val">{OFFER.savings.commodityAnnual.toLocaleString("cs-CZ")} Kč</div>
                <div className="v2-metric-lbl">ročně</div>
              </div>
              <div className="v2-metric">
                <div className="v2-metric-val">{OFFER.savings.commodityThreeYear.toLocaleString("cs-CZ")} Kč</div>
                <div className="v2-metric-lbl">za {OFFER.offer.fixYears} roky</div>
              </div>
            </div>
          </div>

          {/* Why */}
          <div className="v2-sec">
            <h2 className="v2-sec-title">Proč Electree</h2>
            <div className="v2-why">
              {WHY_ITEMS.map((item, i) => (
                <div className="v2-why-item" key={i}>
                  <div className="v2-why-icon" aria-hidden="true" />
                  <div>
                    <div className="v2-why-title">{item.title}</div>
                    <div className="v2-why-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <V2Actions />
      </main>

      {/* Footer */}
      <footer className="v2-footer">
        <div className="v2-footer-inner">
          <p className="v2-footer-note">
            * Roční náklady zahrnují pouze komoditu (silová elektřina) + stálý plat. Distribuce, poplatky OTE
            a daně nejsou zahrnuty a platí stejně u obou dodavatelů. Spotřeba: {OFFER.client.consumptionMWh} MWh/rok.
            Ceny bez DPH. Nabídka má indikativní charakter a vychází z informací poskytnutých při telefonickém hovoru.
          </p>
          <div className="v2-footer-row">
            <span>Electree s.r.o.</span>
            <span>
              <a href="mailto:info@electree.cz" className="v2-footer-link">info@electree.cz</a>
              {" · "}
              <a href="tel:+420800000000" className="v2-footer-link">800 xxx xxx</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function V2Logo() {
  return (
    <div className="v2-logo">
      <div className="v2-logo-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M15 32C14.4477 32 13.9947 31.551 14.0492 31.0014C14.5177 26.2759 18.2759 22.5177 23.0014 22.0492C23.551 21.9947 24 22.4477 24 23L24 25C24 25.5523 23.5489 25.9913 23.0042 26.0823C20.4883 26.5025 18.5025 28.4883 18.0823 31.0042C17.9913 31.5489 17.5523 32 17 32L15 32Z" fill="#D7FF00"/>
          <path d="M17 32C17.5523 32 18.0053 31.551 17.9508 31.0014C17.4823 26.2759 13.7241 22.5177 8.9986 22.0492C8.44901 21.9947 8 22.4477 8 23L8 25C8 25.5523 8.45108 25.9913 8.99581 26.0823C11.5117 26.5025 13.4975 28.4883 13.9177 31.0042C14.0087 31.5489 14.4477 32 15 32L15 32Z" fill="#D7FF00"/>
          <rect x="14" y="13" width="13" height="4" rx="1" transform="rotate(-90 14 13)" fill="#D7FF00"/>
          <rect x="28.7266" y="6.10059" width="13.9999" height="4" rx="1" transform="rotate(135 28.7266 6.10059)" fill="#D7FF00"/>
          <rect x="6.10156" y="3.27246" width="13.7099" height="4" rx="1" transform="rotate(45 6.10156 3.27246)" fill="#D7FF00"/>
          <path d="M24 16C19.5817 16 16 12.4183 16 8" stroke="#D7FF00" strokeWidth="4"/>
          <path d="M23.9688 18H31.0039C31.5562 18 32.0039 17.5523 32.0039 17V15C32.0039 14.4477 31.5562 14 31.0039 14H23.9688V18Z" fill="#D7FF00"/>
          <path d="M8 16C12.4183 16 16 12.4183 16 8" stroke="#D7FF00" strokeWidth="4"/>
          <path d="M8.04688 18H1.00391C0.451622 18 0.00390625 17.5523 0.00390625 17V15C0.00390625 14.4477 0.451622 14 1.00391 14H8.04688V18Z" fill="#D7FF00"/>
        </svg>
      </div>
      <span className="v2-logo-text">electree</span>
    </div>
  );
}
