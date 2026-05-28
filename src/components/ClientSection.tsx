import { OFFER } from "@/lib/offer-data";

export function ClientSection() {
  const details = [
    { key: "EAN elektřina",       val: OFFER.client.ean },
    { key: "Distribuční sazba",   val: OFFER.client.distributionRate },
    { key: "Jistič",              val: OFFER.client.circuitBreaker },
    { key: "Tarif",               val: OFFER.client.productName },
  ];

  return (
    <section className="body-section" style={{ paddingTop: 0 }}>
      <div className="body-inner">
        <div className="cs-grid">
          {/* Client info card */}
          <div className="cs-client-card">
            <div className="cs-client-eyebrow">Vaše údaje</div>
            <div className="cs-client-name">{OFFER.client.name}</div>
            <div className="cs-client-address">{OFFER.client.address}</div>
            <div className="cs-divider" />
            <div className="cs-rows">
              {details.map((d) => (
                <div key={d.key} className="cs-row">
                  <span className="cs-key">{d.key}</span>
                  <span className="cs-val">{d.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact card */}
          <div className="cs-contact-card">
            <div className="cs-contact-eyebrow">Potřebujete poradit?</div>
            <p className="cs-contact-title">
              V případě jakýchkoliv dotazů nás neváhejte kontaktovat.
            </p>
            <a href={`tel:${OFFER.phone.replace(/\s/g, "")}`} className="cs-phone-btn">
              <div className="cs-phone-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lime)"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.27a16 16 0 0 0 6 6l1.15-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.81l.01 1.11z"/>
                </svg>
              </div>
              {OFFER.phone}
            </a>
            <p className="cs-phone-note">
              Provozní doba infolinky: +420 544 525 222<br />9–17 h (v pracovní dny)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
