import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaše nabídka od Electree – Jan Novák",
  description:
    "Indikativní nabídka elektřiny od Electree pro Jana Nováka. Ušetříte 450 Kč měsíčně oproti ČEZ při fixní ceně na 3 roky.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={jakarta.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
