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
    default: "ClearStone AI | AI Implementation for Mid-Market Operators",
    template: "%s | ClearStone AI",
  },
  description:
    "Find the 3 AI investments that will pay back in 90 days. Or you don't pay. AI implementation consulting for mid-market operators ($25M-$250M revenue).",
  keywords: [
    "AI consulting",
    "AI implementation",
    "mid-market AI",
    "AI integration",
    "AI strategy",
    "business AI",
    "GenAI consulting",
    "AI ROI",
  ],
  authors: [{ name: "ClearStone AI" }],
  creator: "ClearStone AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clearstoneai.com",
    siteName: "ClearStone AI",
    title: "ClearStone AI | AI Implementation for Mid-Market Operators",
    description:
      "Find the 3 AI investments that will pay back in 90 days. Or you don't pay. AI implementation consulting for mid-market operators.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearStone AI | AI Implementation for Mid-Market Operators",
    description:
      "Find the 3 AI investments that will pay back in 90 days. Or you don't pay.",
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
