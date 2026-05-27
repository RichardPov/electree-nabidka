import { OFFER } from "@/lib/offer-data";

const el = OFFER.offer.monthlyPaymentWithVat;   // 1440
const cz = OFFER.current.monthlyPaymentWithVat; // 1890
const sav = cz - el;                            // 450
const savPct = Math.round((sav / cz) * 100);    // 24

function fmt(n: number) {
  return n.toLocaleString("cs-CZ");
}

const D = "#0D3D34";
const LIME = "#D7FF00";
const SOFT = "#EBF7F1";
const MID  = "#D8EAE0";
const FG3  = "#6B7280";
const FG4  = "#7C9691";

/* ─── shared font ─── */
const font = "'Plus Jakarta Sans', sans-serif";
const base: React.CSSProperties = { fontFamily: font, color: D };

/* ─── small logo mark ─── */
function Mark({ size = 20, bg = D, fill = LIME }: { size?: number; bg?: string; fill?: string }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.26, background: bg,
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width={size * 0.56} height={size * 0.56} viewBox="0 0 32 32" fill="none">
        <path d="M15 32C14.45 32 13.99 31.55 14.05 31C14.52 26.28 18.28 22.52 23 22.05C23.55 22 24 22.45 24 23V25C24 25.55 23.55 26 23 26.08C20.49 26.5 18.5 28.49 18.08 31C17.99 31.55 17.55 32 17 32H15Z" fill={fill}/>
        <path d="M17 32C17.55 32 18.01 31.55 17.95 31C17.48 26.28 13.72 22.52 9 22.05C8.45 22 8 22.45 8 23V25C8 25.55 8.45 26 9 26.08C11.51 26.5 13.5 28.49 13.92 31C14.01 31.55 14.45 32 15 32Z" fill={fill}/>
        <rect x="14" y="13" width="13" height="4" rx="1" transform="rotate(-90 14 13)" fill={fill}/>
        <rect x="28.73" y="6.1" width="14" height="4" rx="1" transform="rotate(135 28.73 6.1)" fill={fill}/>
        <rect x="6.1" y="3.27" width="13.71" height="4" rx="1" transform="rotate(45 6.1 3.27)" fill={fill}/>
        <path d="M24 16C19.58 16 16 12.42 16 8" stroke={fill} strokeWidth="4"/>
        <path d="M23.97 18H31C31.55 18 32 17.55 32 17V15C32 14.45 31.55 14 31 14H23.97V18Z" fill={fill}/>
        <path d="M8 16C12.42 16 16 12.42 16 8" stroke={fill} strokeWidth="4"/>
        <path d="M8.05 18H1C0.45 18 0 17.55 0 17V15C0 14.45 0.45 14 1 14H8.05V18Z" fill={fill}/>
      </svg>
    </div>
  );
}

/* ─── ČEZ badge ─── */
function CezBadge({ size = 20 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.22, background: "#e2001a",
      color: "#fff", fontSize: size * 0.32, fontWeight: 900, fontFamily: font,
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, letterSpacing: "0.04em" }}>
      ČEZ
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   VARIANT 1 — Classic redesigned table (dva sloupce)
═══════════════════════════════════════════════════════ */
function Variant1() {
  return (
    <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e2e8f0",
      boxShadow: "0 2px 16px rgba(0,0,0,0.06)", background: "#fff" }}>

      {/* Header row */}
      <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr", background: "#f8f9fb",
        borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ padding: "20px 18px" }} />
        <div style={{ padding: "18px 24px 16px", borderLeft: "1px solid #e2e8f0",
          borderTop: `3px solid ${LIME}`, background: "#fff" }}>
          <div style={{ display: "inline-block", background: LIME, color: D, borderRadius: 4,
            padding: "2px 8px", fontSize: 9, fontWeight: 800, fontFamily: font,
            textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>
            Naše nabídka
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 4 }}>
            <Mark size={26} />
            <span style={{ ...base, fontSize: 15, fontWeight: 800 }}>Electree</span>
          </div>
          <div style={{ fontSize: 11, color: FG3, fontFamily: font }}>
            {OFFER.offer.tariff} · {OFFER.offer.fixYears} roky
          </div>
        </div>
        <div style={{ padding: "18px 24px 16px", borderLeft: "1px solid #e2e8f0" }}>
          <div style={{ display: "inline-block", background: "#eef0f3", color: "#9aa5b1",
            borderRadius: 4, padding: "2px 8px", fontSize: 9, fontWeight: 800, fontFamily: font,
            textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>
            Vaše aktuální nabídka
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 4 }}>
            <CezBadge size={26} />
            <span style={{ fontSize: 15, fontWeight: 800, fontFamily: font, color: "#b0bac4" }}>ČEZ</span>
          </div>
          <div style={{ fontSize: 11, color: "#c4cdd6", fontFamily: font }}>{OFFER.current.tariff}</div>
        </div>
      </div>

      {/* Data row */}
      <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr" }}>
        <div style={{ padding: "18px 18px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#3A3A3C", fontFamily: font }}>Měsíční záloha</div>
          <div style={{ fontSize: 10, color: FG4, fontFamily: font, marginTop: 2 }}>s DPH 21 %</div>
        </div>
        <div style={{ padding: "18px 24px", borderLeft: "1px solid #f0f4f8", background: SOFT,
          display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 22, fontWeight: 900, color: D, letterSpacing: "-0.02em", fontFamily: font }}>
            {fmt(el)} Kč
          </span>
          <span style={{ fontSize: 12, color: FG3, fontFamily: font }}>/měs</span>
        </div>
        <div style={{ padding: "18px 24px", borderLeft: "1px solid #f0f4f8", background: "#fafbfc",
          display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 22, fontWeight: 700, color: "#c4cdd6", letterSpacing: "-0.02em", fontFamily: font }}>
            {fmt(cz)} Kč
          </span>
          <span style={{ fontSize: 12, color: "#c4cdd6", fontFamily: font }}>/měs</span>
        </div>
      </div>

      {/* Savings strip */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 24px", background: D }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", fontFamily: font }}>
          Na zálohách s námi ušetříte
        </span>
        <span style={{ fontSize: 22, fontWeight: 900, color: LIME, letterSpacing: "-0.02em", fontFamily: font }}>
          {fmt(sav)} Kč <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)" }}>měsíčně</span>
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   VARIANT 2 — Dvě kartičky vedle sebe
═══════════════════════════════════════════════════════ */
function Variant2() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        {/* Electree card — dark */}
        <div style={{ background: D, borderRadius: 16, padding: "24px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <Mark size={32} />
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", fontFamily: font }}>Electree</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: font }}>
                {OFFER.offer.tariff} · {OFFER.offer.fixYears} roky
              </div>
            </div>
            <div style={{ marginLeft: "auto", background: LIME, color: D, borderRadius: 6,
              padding: "3px 10px", fontSize: 10, fontWeight: 800, fontFamily: font }}>
              Naše nabídka
            </div>
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: font, marginBottom: 4 }}>
            Měsíční záloha s DPH
          </div>
          <div style={{ fontSize: 42, fontWeight: 900, color: LIME, lineHeight: 1,
            letterSpacing: "-0.03em", fontFamily: font }}>
            {fmt(el)} Kč
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: font, marginTop: 6 }}>
            za měsíc
          </div>
        </div>

        {/* ČEZ card — light */}
        <div style={{ background: "#f4f6f8", borderRadius: 16, padding: "24px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <CezBadge size={32} />
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#b0bac4", fontFamily: font }}>ČEZ</div>
              <div style={{ fontSize: 11, color: "#c4cdd6", fontFamily: font }}>{OFFER.current.tariff}</div>
            </div>
            <div style={{ marginLeft: "auto", background: "#eaecef", color: "#9aa5b1", borderRadius: 6,
              padding: "3px 10px", fontSize: 10, fontWeight: 800, fontFamily: font }}>
              Aktuálně
            </div>
          </div>
          <div style={{ fontSize: 11, color: "#b0bac4", fontFamily: font, marginBottom: 4 }}>
            Měsíční záloha s DPH
          </div>
          <div style={{ fontSize: 42, fontWeight: 900, color: "#c4cdd6", lineHeight: 1,
            letterSpacing: "-0.03em", fontFamily: font }}>
            {fmt(cz)} Kč
          </div>
          <div style={{ fontSize: 12, color: "#b0bac4", fontFamily: font, marginTop: 6 }}>
            za měsíc
          </div>
        </div>
      </div>

      {/* Savings row */}
      <div style={{ background: SOFT, borderRadius: 12, padding: "14px 24px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        border: `1px solid ${MID}` }}>
        <span style={{ fontSize: 13, color: FG3, fontFamily: font, fontWeight: 500 }}>
          Měsíční úspora
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22, fontWeight: 900, color: D, letterSpacing: "-0.02em", fontFamily: font }}>
            −{fmt(sav)} Kč
          </span>
          <span style={{ background: D, color: LIME, borderRadius: 6, padding: "3px 10px",
            fontSize: 11, fontWeight: 800, fontFamily: font }}>
            −{savPct} %
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   VARIANT 3 — Úspora v centru (savings spotlight)
═══════════════════════════════════════════════════════ */
function Variant3() {
  return (
    <div style={{ background: D, borderRadius: 20, padding: "36px 36px 28px", textAlign: "center" }}>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: font,
        textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
        Přechodem k Electree ušetříte
      </div>
      <div style={{ fontSize: 64, fontWeight: 900, color: LIME, lineHeight: 1,
        letterSpacing: "-0.04em", fontFamily: font, marginBottom: 4 }}>
        {fmt(sav)} Kč
      </div>
      <div style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", fontFamily: font, marginBottom: 32 }}>
        každý měsíc na zálohách
      </div>

      {/* Two prices */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 16 }}>
        <div style={{ background: "rgba(215,255,0,0.08)", borderRadius: 12, padding: "16px 20px",
          border: `1px solid rgba(215,255,0,0.18)` }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
            <Mark size={22} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: font }}>Electree</span>
          </div>
          <div style={{ fontSize: 28, fontWeight: 900, color: LIME, letterSpacing: "-0.02em", fontFamily: font }}>
            {fmt(el)} Kč
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: font, marginTop: 3 }}>
            /měsíc
          </div>
        </div>

        <div style={{ fontSize: 20, color: "rgba(255,255,255,0.2)", fontFamily: font }}>vs</div>

        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "16px 20px",
          border: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
            <CezBadge size={22} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.4)", fontFamily: font }}>ČEZ</span>
          </div>
          <div style={{ fontSize: 28, fontWeight: 900, color: "rgba(255,255,255,0.25)",
            letterSpacing: "-0.02em", fontFamily: font, textDecoration: "line-through" }}>
            {fmt(cz)} Kč
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: font, marginTop: 3 }}>
            /měsíc
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   VARIANT 4 — Minimalistický seznam
═══════════════════════════════════════════════════════ */
function Variant4() {
  return (
    <div style={{ background: "#fff", borderRadius: 16, border: `1px solid ${MID}`,
      overflow: "hidden" }}>

      {/* Title row */}
      <div style={{ padding: "20px 28px 16px", borderBottom: `1px solid ${MID}` }}>
        <div style={{ fontSize: 11, color: FG4, fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.07em", fontFamily: font, marginBottom: 2 }}>
          Měsíční záloha s DPH 21 %
        </div>
        <div style={{ fontSize: 12, color: FG3, fontFamily: font }}>
          při roční spotřebě {OFFER.client.consumptionMWh} MWh
        </div>
      </div>

      {/* ČEZ row — muted */}
      <div style={{ display: "flex", alignItems: "center", padding: "18px 28px",
        borderBottom: `1px solid ${MID}`, gap: 14 }}>
        <CezBadge size={32} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#9aa5b1", fontFamily: font }}>ČEZ</div>
          <div style={{ fontSize: 11, color: "#c4cdd6", fontFamily: font }}>{OFFER.current.tariff}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#c4cdd6",
            letterSpacing: "-0.02em", fontFamily: font, textDecoration: "line-through" }}>
            {fmt(cz)} Kč
          </div>
          <div style={{ fontSize: 11, color: "#c4cdd6", fontFamily: font }}>měsíčně</div>
        </div>
      </div>

      {/* Electree row — highlighted */}
      <div style={{ display: "flex", alignItems: "center", padding: "18px 28px",
        background: SOFT, borderBottom: `1px solid ${MID}`, gap: 14 }}>
        <Mark size={32} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: D, fontFamily: font }}>Electree</div>
          <div style={{ fontSize: 11, color: FG3, fontFamily: font }}>
            {OFFER.offer.tariff} · {OFFER.offer.fixYears} roky
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: D,
            letterSpacing: "-0.02em", fontFamily: font }}>
            {fmt(el)} Kč
          </div>
          <div style={{ fontSize: 11, color: FG3, fontFamily: font }}>měsíčně</div>
        </div>
        <div style={{ background: D, color: LIME, borderRadius: 8, padding: "4px 12px",
          fontSize: 11, fontWeight: 800, fontFamily: font, whiteSpace: "nowrap" }}>
          Naše nabídka
        </div>
      </div>

      {/* Savings row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 28px", background: D }}>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: font }}>
          Ušetříte měsíčně
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 22, fontWeight: 900, color: LIME,
            letterSpacing: "-0.02em", fontFamily: font }}>
            {fmt(sav)} Kč
          </span>
          <span style={{ background: "rgba(215,255,0,0.15)", color: LIME, borderRadius: 6,
            padding: "3px 10px", fontSize: 11, fontWeight: 800, fontFamily: font }}>
            −{savPct} %
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   VARIANT 5 — Vizuální lišta (bar comparison)
═══════════════════════════════════════════════════════ */
function Variant5() {
  const total = cz;
  const elW = (el / total) * 100;
  const savW = (sav / total) * 100;

  return (
    <div style={{ background: "#fff", borderRadius: 16, border: `1px solid ${MID}`,
      padding: "28px 28px 24px" }}>

      {/* Supplier headers */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Mark size={28} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: D, fontFamily: font }}>Electree</div>
            <div style={{ fontSize: 11, color: FG3, fontFamily: font }}>
              {OFFER.offer.tariff} · {OFFER.offer.fixYears} roky
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <CezBadge size={28} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#b0bac4", fontFamily: font }}>ČEZ</div>
            <div style={{ fontSize: 11, color: "#c4cdd6", fontFamily: font }}>{OFFER.current.tariff}</div>
          </div>
        </div>
      </div>

      {/* Bar visualization */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 11, color: FG4, fontFamily: font, marginBottom: 8,
          textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>
          Měsíční záloha s DPH
        </div>

        {/* Electree bar */}
        <div style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: D, fontFamily: font }}>Electree</span>
            <span style={{ fontSize: 16, fontWeight: 900, color: D, fontFamily: font,
              letterSpacing: "-0.01em" }}>{fmt(el)} Kč</span>
          </div>
          <div style={{ height: 12, borderRadius: 6, background: "#edf0f2", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${elW}%`, background: D, borderRadius: 6 }} />
          </div>
        </div>

        {/* ČEZ bar */}
        <div style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#b0bac4", fontFamily: font }}>ČEZ</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#c4cdd6", fontFamily: font,
              letterSpacing: "-0.01em" }}>{fmt(cz)} Kč</span>
          </div>
          <div style={{ height: 12, borderRadius: 6, background: "#edf0f2", overflow: "hidden" }}>
            <div style={{ height: "100%", display: "flex" }}>
              <div style={{ width: `${elW}%`, background: "#dde3e8" }} />
              <div style={{ width: `${savW}%`, background: LIME }} />
            </div>
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: 3, background: D }} />
            <span style={{ fontSize: 11, color: FG3, fontFamily: font }}>Electree záloha</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: 3, background: LIME }} />
            <span style={{ fontSize: 11, color: FG3, fontFamily: font }}>Vaše úspora {fmt(sav)} Kč/měs</span>
          </div>
        </div>
      </div>

      {/* Bottom savings */}
      <div style={{ background: SOFT, borderRadius: 10, padding: "12px 18px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        border: `1px solid ${MID}` }}>
        <span style={{ fontSize: 13, color: FG3, fontFamily: font }}>Celková měsíční úspora</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 20, fontWeight: 900, color: D, fontFamily: font,
            letterSpacing: "-0.02em" }}>−{fmt(sav)} Kč</span>
          <span style={{ background: D, color: LIME, borderRadius: 6, padding: "3px 9px",
            fontSize: 11, fontWeight: 800, fontFamily: font }}>−{savPct} %</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════ */
export default function V3Page() {
  const variants = [
    { num: 1, name: "Tabulka s oddělenými sloupci", component: <Variant1 /> },
    { num: 2, name: "Dvě kartičky vedle sebe",      component: <Variant2 /> },
    { num: 3, name: "Úspora v centru",               component: <Variant3 /> },
    { num: 4, name: "Minimalistický seznam",          component: <Variant4 /> },
    { num: 5, name: "Vizuální lišta",                 component: <Variant5 /> },
  ];

  return (
    <div style={{ background: "#f2f5f3", minHeight: "100vh", padding: "40px 24px",
      fontFamily: font }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: FG4, textTransform: "uppercase",
            letterSpacing: "0.08em", marginBottom: 6 }}>
            Měsíční zálohy — výběr varianty
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: D, letterSpacing: "-0.02em", marginBottom: 6 }}>
            5 vizuálních variant
          </h1>
          <p style={{ fontSize: 14, color: FG3 }}>
            Vyberte variantu, která se vám líbí — zapracujeme ji do hlavní stránky.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {variants.map(v => (
            <div key={v.num}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 26, height: 26, borderRadius: 8, background: D,
                  color: LIME, fontSize: 12, fontWeight: 900,
                  display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {v.num}
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: D }}>{v.name}</span>
              </div>
              {v.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
