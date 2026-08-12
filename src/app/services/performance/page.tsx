import type { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site";

const slug = "/services/performance";
const canonical = `${getSiteUrl()}${slug}`;

export const metadata: Metadata = {
  title: "Website Performance Optimization (Core Web Vitals) | HEXACORE ROYAL",
  description:
    "Performance optimization in Bangalore: Core Web Vitals (LCP/CLS/INP), speed audits, image optimization, caching, and SEO-first performance tuning.",
  alternates: { canonical: slug },
  openGraph: {
    title: "Website Performance Optimization | HEXACORE ROYAL",
    description: "Core Web Vitals improvements and speed tuning for better rankings and conversions.",
    url: canonical,
  },
};

function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function PerformanceServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Website Performance Optimization",
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
        name: "What are Core Web Vitals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Core Web Vitals measure real user experience: LCP (loading), CLS (visual stability), and INP (interaction). Improving them helps UX and often supports SEO.",
        },
      },
      {
        "@type": "Question",
        name: "Can you speed up my existing website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We run audits, fix render-blocking issues, optimize images/fonts, reduce JS, and improve caching to reduce load time and improve conversions.",
        },
      },
      {
        "@type": "Question",
        name: "Will performance improvements help rankings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Performance can help indirectly by improving UX and engagement, and it supports technical SEO. It’s especially important for mobile-first audiences.",
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
        <span className="opacity-60">/</span> Performance
      </nav>

      <header className="mt-6 max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl text-[color:var(--foreground)]">
          Performance{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
            Optimization
          </span>
        </h1>
        <p className="mt-4 text-zinc-300 md:text-lg">
          Core Web Vitals improvements and speed tuning for founders and SMBs in Bangalore. Faster pages convert better.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          ["Core Web Vitals (LCP/CLS/INP)", "Practical improvements that reduce bounce and improve experience."],
          ["Image + Font Optimization", "Next.js image strategy and font loading for faster rendering."],
          ["JavaScript Reduction", "Remove unnecessary JS and ship less to the browser."],
          ["Technical Audits", "Clear report + prioritized fixes to ship improvements quickly."],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl p-6 glass gold-border">
            <div className="font-display text-xl text-[color:var(--foreground)]">{title}</div>
            <p className="mt-2 text-sm text-zinc-300">{desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-2xl p-8 glass gold-border">
        <h2 className="font-display text-2xl text-[color:var(--foreground)]">Get a performance audit</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Share your website URL and your target audience. We’ll identify the fastest wins for speed and conversions.
        </p>
        <a
          href={`https://wa.me/917829110701?text=${encodeURIComponent(
            "Hi HEXACORE ROYAL, I’d like a Core Web Vitals and performance audit."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:brightness-110 gold-border"
          data-cursor="cta"
        >
          Request Audit
        </a>
      </section>
    </main>
  );
}

