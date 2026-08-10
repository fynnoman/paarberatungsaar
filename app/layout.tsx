import type { Metadata } from "next";
import { Newsreader, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julia & Tom · Paarberatung, Mediation & Coaching in Saarbrücken",
  description:
    "Julia und Tom Hecken begleiten Sie durch Paarberatung, Einzelberatung, Mediation, Trennungsbegleitung und Walk & Talk — vor Ort in Saarbrücken oder online.",
  metadataBase: new URL("https://mediation-hecken.de"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-paper-100 text-ink-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
