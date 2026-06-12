import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/lib/site";

/**
 * Single typeface across the entire site — Manrope. The display, body
 * and "mono" roles only differ in weight and letter-spacing, not family,
 * so they all read from `--font-sans`.
 *
 * Only the weights the utility classes actually use are loaded.
 */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sarah Quattrucci — Fine-Line Tattoo & Custom Art",
    template: "%s — Sarah Quattrucci",
  },
  description:
    "Fine-line tattoo, custom embroidery, custom canvas painting, and hand-painted nail work by Sarah Quattrucci. Based in Stoughton, Massachusetts. Booking by appointment.",
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
      "Fine-line tattoo, custom embroidery, and canvas painting. By appointment.",
    type: "website",
    locale: "en_US",
    siteName: "Sarah Quattrucci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Quattrucci — Fine-Line Tattoo & Custom Art",
    description:
      "Fine-line tattoo, custom embroidery, and canvas painting. By appointment.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
