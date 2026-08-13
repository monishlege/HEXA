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
  title: "Hexacore Royal | Bangalore Web Agency & Software Company",
  description:
    "Hexacore Royal is a Bangalore web agency and software company building ultra-fast websites, custom software, UI/UX design, and growth-focused digital experiences for businesses in Bengaluru.",
  keywords: [
    "Hexacore",
    "Hexacore Royal",
    "Hexacore software",
    "Hexacore agency",
    "Bangalore web agency",
    "Bengaluru web development agency",
    "software company in Bangalore",
    "custom software development Bengaluru",
  ],
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
    title: "Hexacore Royal | Bangalore Web Agency & Software Company",
    description:
      "Hexacore Royal is a Bangalore web agency and software company building ultra-fast websites, custom software, UI/UX design, and growth-focused digital experiences for businesses in Bengaluru.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hexacore Royal | Bangalore Web Agency & Software Company",
    description:
      "Hexacore Royal is a Bangalore web agency and software company building ultra-fast websites, custom software, UI/UX design, and growth-focused digital experiences for businesses in Bengaluru.",
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
              areaServed: ["Bengaluru", "Bangalore", "Karnataka"],
              description:
                "Hexacore Royal is a Bangalore web agency and software company building premium websites, custom software, and digital experiences for businesses in Bengaluru.",
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
