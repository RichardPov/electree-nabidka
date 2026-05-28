"use client";
import { useEffect, useRef, useState } from "react";

interface Props { isOpen: boolean; onClose: () => void; }

export function ForwardModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    setEmail("");
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    setTimeout(() => inputRef.current?.focus(), 60);
    return () => document.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="fwd-modal-title">
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Zavřít">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <h2 className="modal-title" id="fwd-modal-title">Přeposlat nabídku</h2>

        <label className="modal-label" htmlFor="fwd-email">E-mailová adresa</label>
        <input
          ref={inputRef}
          id="fwd-email"
          type="email"
          className="modal-input modal-input-email"
          placeholder="jan.novak@email.cz"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && email.trim()) onClose(); }}
        />

        <div className="modal-footer modal-footer-row">
          <button className="btn-modal-cancel" onClick={onClose}>Zrušit</button>
          <button
            className="btn-modal-send"
            onClick={onClose}
            disabled={!email.trim()}
          >
            Přeposlat
          </button>
        </div>
      </div>
    </div>
  );
}
