import type { Metadata } from "next";
import { Instrument_Serif, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const faviconSvg =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%2308080a'/><text x='50' y='68' font-size='55' font-family='serif' font-style='italic' fill='%23c8ff2e' text-anchor='middle'>df</text></svg>";

export const metadata: Metadata = {
  metadataBase: new URL("https://donefast.com"),
  title: "DoneFast — Development Subscriptions That Actually Ship",
  description:
    "Unlimited development requests. One flat monthly fee. Pause or cancel anytime. Delivered in days, not weeks.",
  icons: {
    icon: [{ url: faviconSvg, type: "image/svg+xml" }],
    apple: [{ url: faviconSvg }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`no-js ${instrumentSerif.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js"
          data-pid="EDQPrynPAmUJtsnB"
          data-version="062024"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
