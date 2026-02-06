import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://royal.tech"),
  title: "HEXACORE ROYAL | Premium Digital Solutions by Mahi & Chirag",
  description:
    "Premium digital solutions crafted by MAHI & Chirag C Kulkarni — Dark Royalty design, elite SEO, and enterprise-grade engineering.",
  icons: {
    icon: "/hexacore-royal-logo.png",
    shortcut: "/hexacore-royal-logo.png",
    apple: "/hexacore-royal-logo.png",
  },
  openGraph: {
    title: "HEXACORE ROYAL | Premium Digital Solutions",
    description:
      "Dark Royalty aesthetics with Neon Cyan and Gold accents. High-conversion websites engineered by MAHI & Chirag.",
    type: "website",
    url: "https://royal.tech",
    images: ["/hexacore-royal-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "HEXACORE ROYAL — Premium Digital Solutions",
    description:
      "Magnetic UIs, SEO-first architecture, and ROI-focused growth.",
    images: ["/hexacore-royal-logo.png"],
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
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
