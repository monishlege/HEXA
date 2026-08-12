import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import { getSiteUrl } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HEXACORE ROYAL | Premium Web Design Services in Bangalore",
  description:
    "Premium web design services in Bangalore — responsive website design, custom website development, SEO, and high-conversion landing pages.",
  verification: {
    google: "google7a54d8665c56f6da.html",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/royal-tech-logo.svg",
    shortcut: "/royal-tech-logo.svg",
    apple: "/royal-tech-logo.svg",
  },
  openGraph: {
    title: "HEXACORE ROYAL | Premium Web Design Services",
    description:
      "Premium web design services in Bangalore — responsive websites, custom development, and high-conversion landing pages.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "HEXACORE ROYAL — Premium Web Design Services",
    description:
      "Responsive websites, custom development, SEO, and high-conversion landing pages in Bangalore.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${jakarta.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HEXACORE ROYAL",
              url: siteUrl,
              logo: `${siteUrl}/royal-tech-logo.svg`,
              description:
                "Premium web design services — websites, SEO, and performance optimization in Bangalore.",
            }),
          }}
        />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
