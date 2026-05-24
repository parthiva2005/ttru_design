import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarahquattrucci.com"),
  title: {
    default: "Sarah Quattrucci — Fine-Line Tattoo & Custom Art",
    template: "%s — Sarah Quattrucci",
  },
  description:
    "Boutique fine-line tattoo, flash, custom wearables and commissioned art by Sarah Quattrucci. Based in the Bridgewater, Massachusetts area. Booking by appointment.",
  keywords: [
    "fine line tattoo",
    "custom tattoo design",
    "tattoo artist Bridgewater MA",
    "botanical tattoo",
    "Sarah Quattrucci",
    "ttru_designs",
  ],
  authors: [{ name: "Sarah Quattrucci" }],
  openGraph: {
    title: "Sarah Quattrucci — Fine-Line Tattoo & Custom Art",
    description:
      "Boutique fine-line tattoo, flash and custom commissions. By appointment.",
    type: "website",
    locale: "en_US",
    siteName: "Sarah Quattrucci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Quattrucci — Fine-Line Tattoo & Custom Art",
    description:
      "Boutique fine-line tattoo, flash and custom commissions. By appointment.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
