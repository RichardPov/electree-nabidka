"use client";
import { useEffect } from "react";

interface Props { isOpen: boolean; onClose: () => void; }

const DOCS = [
  { title: "Smlouva o dodávce",          sub: "Elektřina · PDF · 142 kB" },
  { title: "Poučení spotřebitele",        sub: "Elektřina · PDF · 64 kB"  },
  { title: "Všeobecné obchodní podmínky", sub: "Elektřina · PDF · 188 kB" },
  { title: "Plná moc",                    sub: "Elektřina · PDF · 48 kB"  },
];

export function SignModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="sign-modal-title">
      <div className="modal-box modal-box-wide" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Zavřít">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <h2 className="modal-title" id="sign-modal-title">Dokumenty ke smlouvě</h2>
        <p className="modal-sub">Před podpisem si můžete dokumenty stáhnout a prostudovat.</p>

        <div className="modal-docs-grid">
          {DOCS.map((doc, i) => (
            <a key={i} href="#" className="modal-doc-card" onClick={e => e.preventDefault()}>
              <div className="modal-doc-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <div className="modal-doc-info">
                <div className="modal-doc-title">{doc.title}</div>
                <div className="modal-doc-sub">{doc.sub}</div>
              </div>
              <div className="modal-doc-dl" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="modal-footer">
          <button className="btn-modal-primary" onClick={onClose}>
            Podepsat
          </button>
          <button className="btn-modal-back" onClick={onClose}>Zpět</button>
        </div>
      </div>
    </div>
  );
}
