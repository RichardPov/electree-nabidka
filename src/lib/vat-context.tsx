"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type VatCtx = { vat: boolean; setVat: (v: boolean) => void };
const VatContext = createContext<VatCtx>({ vat: true, setVat: () => {} });

export function VatProvider({ children }: { children: ReactNode }) {
  const [vat, setVat] = useState(true);
  return <VatContext.Provider value={{ vat, setVat }}>{children}</VatContext.Provider>;
}

export function useVat() { return useContext(VatContext); }
