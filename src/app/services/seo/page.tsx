import type { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site";

const slug = "/services/seo";
const canonical = `${getSiteUrl()}${slug}`;

export const metadata: Metadata = {
  title: "SEO Services in Bangalore | HEXACORE ROYAL",
  description:
    "SEO services in Bangalore for startups and small businesses: technical SEO, schema, sitemap/robots, speed optimization, and analytics—built for real leads.",
  alternates: { canonical: slug },
  openGraph: {
    title: "SEO Services in Bangalore | HEXACORE ROYAL",
    description: "Technical SEO + performance for high-conversion websites and landing pages.",
    url: canonical,
  },
};

function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function SeoServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SEO Services",
    provider: { "@type": "Organization", name: "HEXACORE ROYAL", url: getSiteUrl() },
    areaServed: [{ "@type": "City", name: "Bangalore" }, { "@type": "Country", name: "India" }],
    url: canonical,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide SEO for small businesses in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We focus on small–mid businesses and founders: technical SEO, on-page structure, local intent targeting, and tracking for measurable leads.",
        },
      },
      {
        "@type": "Question",
        name: "How long does SEO take to show results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most sites see early movement in 2–6 weeks, with stronger results in 3–6 months depending on competition, content depth, and authority/backlinks.",
        },
      },
      {
        "@type": "Question",
        name: "Do you improve Core Web Vitals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We optimize performance (LCP/CLS/INP), images, fonts, and page structure—because speed and UX support SEO.",
        },
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-6 pt-28 pb-20">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <nav className="text-sm text-zinc-400">
        <Link href="/services" className="hover:text-cyan-300">
          Services
        </Link>{" "}
        <span className="opacity-60">/</span> SEO
      </nav>

      <header className="mt-6 max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl text-[color:var(--foreground)]">
          SEO Services in{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
            Bangalore
          </span>
        </h1>
        <p className="mt-4 text-zinc-300 md:text-lg">
          Built for founders and small businesses who want visibility and leads—not vanity metrics.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          ["Technical SEO", "Indexing, sitemap/robots, canonical, metadata, crawlability, and structured data."],
          ["On-page Strategy", "Keyword mapping, headings, internal links, and conversion-focused page structure."],
          ["Performance + CWV", "Speed optimization, image tuning, font strategy, and Core Web Vitals improvements."],
          ["Tracking", "Analytics + events + lead tracking so you know what’s working."],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl p-6 glass gold-border">
            <div className="font-display text-xl text-[color:var(--foreground)]">{title}</div>
            <p className="mt-2 text-sm text-zinc-300">{desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-2xl p-8 glass gold-border">
        <h2 className="font-display text-2xl text-[color:var(--foreground)]">Perfect for</h2>
        <ul className="mt-3 grid gap-2 text-sm text-zinc-300 md:grid-cols-2">
          <li>Small business website design India (local intent)</li>
          <li>Startup website design + landing pages</li>
          <li>Business website redesign services</li>
          <li>High-conversion landing pages</li>
        </ul>
        <a
          href={`https://wa.me/917829110701?text=${encodeURIComponent(
            "Hi HEXACORE ROYAL, I need SEO services in Bangalore for my business."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:brightness-110 gold-border"
          data-cursor="cta"
        >
          Start SEO Audit
        </a>
      </section>
    </main>
  );
}

