import type { Metadata } from "next";
import { Inter, Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ClearStone | The 3-Move Blueprint for Mid-Market AI",
    template: "%s | ClearStone",
  },
  description:
    "A 14-day, fixed-fee diagnostic that names the three AI investments most likely to pay back inside 90 days in your business. For founder-led US companies, $25M–$100M.",
  keywords: [
    "AI consulting",
    "AI implementation",
    "mid-market AI",
    "AI strategy",
    "AI ROI",
    "3-Move Blueprint",
    "AI diagnostic",
  ],
  authors: [{ name: "ClearStone" }],
  creator: "ClearStone",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clearstoneai.com",
    siteName: "ClearStone",
    title: "ClearStone | The 3-Move Blueprint for Mid-Market AI",
    description:
      "A 14-day, fixed-fee diagnostic that names the three AI investments most likely to pay back inside 90 days in your business. For founder-led US companies, $25M–$100M.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearStone | The 3-Move Blueprint for Mid-Market AI",
    description:
      "A 14-day, fixed-fee diagnostic that names the three AI investments most likely to pay back inside 90 days in your business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", inter.variable, poppins.variable, cormorant.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
