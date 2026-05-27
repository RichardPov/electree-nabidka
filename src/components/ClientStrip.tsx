import { OFFER } from "@/lib/offer-data";

export function ClientStrip() {
  return (
    <div className="client-strip">
      <div className="client-inner">
        <div className="client-avatar" aria-hidden="true">
          {OFFER.client.initials}
        </div>
        <div>
          <div className="client-name">{OFFER.client.name}</div>
          <div className="client-meta">
            {OFFER.client.location}&nbsp;·&nbsp;Roční spotřeba: {OFFER.client.consumptionMWh} MWh&nbsp;·&nbsp;Stávající dodavatel: {OFFER.current.supplier}
          </div>
        </div>
        <div className="client-badge">Vaše nabídka</div>
      </div>
    </div>
  );
}
