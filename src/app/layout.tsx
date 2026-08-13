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
  title: "Hexacore Royal | Premium Digital & Web Agency",
  description:
    "Hexacore Royal (Hexacore) is a premium digital agency crafting ultra-fast web development, UI/UX design, and software solutions.",
  keywords: ["Hexacore", "Hexacore Royal", "Hexacore software", "Hexacore agency"],
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
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Hexacore Royal | Premium Digital & Web Agency",
    description:
      "Hexacore Royal (Hexacore) is a premium digital agency crafting ultra-fast web development, UI/UX design, and software solutions.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hexacore Royal | Premium Digital & Web Agency",
    description:
      "Hexacore Royal (Hexacore) is a premium digital agency crafting ultra-fast web development, UI/UX design, and software solutions.",
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
              "@type": "Brand",
              name: "Hexacore Royal",
              alternateName: "Hexacore",
              url: "https://hexacore-royal.vercel.app/",
              logo: "https://hexacore-royal.vercel.app/logo.png",
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
