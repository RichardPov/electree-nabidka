export const OFFER = {
  client: {
    name: "Jan Novák",
    initials: "JN",
    location: "Praha 5",
    consumptionMWh: 4,
  },
  current: {
    supplier: "ČEZ",
    tariff: "Variabilní tarif",
    pricePerMWhExVat: 2650,
    monthlyFeeExVat: 150,
    monthlyPaymentWithVat: 1890,
    annualCostCommodityExVat: 12400,
  },
  offer: {
    supplier: "Electree",
    tariff: "Fixovaný tarif",
    fixYears: 3,
    pricePerMWhExVat: 2299,
    monthlyFeeExVat: 149,
    monthlyPaymentWithVat: 1440,
    annualCostCommodityExVat: 10984,
  },
  savings: {
    monthly: 450,
    annual: 5400,
    threeYear: 16200,
    pct: 24,
    commodityMonthly: 118,
    commodityAnnual: 1416,
    commodityThreeYear: 4248,
  },
  validity: "9. 6. 2026",
  offerNumber: "2026-05-26-JN",
  vat: 0.21,
} as const;

export type OfferData = typeof OFFER;
