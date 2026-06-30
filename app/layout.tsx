import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  icons: {
    icon: "/jay1.svg",
    shortcut: "/jay1.svg",
    apple: "/jay1.svg",
  },
  metadataBase: new URL("https://jay-dev-portfolio.vercel.app/"),
  creator: "Ogbekhilu Jedidiah",
  openGraph: {
    title: "Jay | Full Stack Developer Portfolio",
    description:
      "Explore Jay's portfolio featuring modern, responsive web apps built with cutting-edge web technologies.",
    url: "https://jay-dev-portfolio.vercel.app/",
    siteName: "Jay Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: " Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay | Full Stack Developer Portfolio",
    description:
      "Modern, responsive web apps built with React, Next.js, and Tailwind CSS.",
    creator: "@Jedediah_xo",
    images: ["/og-image.png"],
  },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
