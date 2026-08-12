import type { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | HEXACORE ROYAL",
  description:
    "Explore HEXACORE ROYAL services: web design, custom website development, responsive design, SEO, UI/UX, and performance optimization for Bangalore startups and SMBs.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | HEXACORE ROYAL",
    description:
      "Web design services and premium digital solutions for Bangalore startups and small–mid businesses.",
    url: `${getSiteUrl()}/services`,
  },
};

export default function ServicesIndexPage() {
  const cards = [
    {
      title: "SEO Services",
      href: "/services/seo",
      desc: "Technical SEO, on-page strategy, sitemap/robots, schema, and measurable growth.",
    },
    {
      title: "Website Design & Development",
      href: "/services/web-development",
      desc: "Custom website development, responsive design, performance-first builds, and clean UX.",
    },
    {
      title: "UI/UX Design",
      href: "/services/ui-ux",
      desc: "High-conversion landing pages, user journeys, prototypes, and premium interface design.",
    },
    {
      title: "Performance Optimization",
      href: "/services/performance",
      desc: "Core Web Vitals improvements, audits, image optimization, and speed tuning.",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 pt-28 pb-20">
      <header className="max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl text-[color:var(--foreground)]">
          Premium{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
            Web Design Services
          </span>{" "}
          in Bangalore
        </h1>
        <p className="mt-4 text-zinc-300 md:text-lg">
          HEXACORE ROYAL builds premium, responsive websites and high-conversion landing pages for
          startups and small–mid businesses in Bangalore, India.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          {[
            "custom website development",
            "responsive website design",
            "website redesign services",
            "high-conversion landing pages",
          ].map((t) => (
            <span key={t} className="rounded-full px-3 py-1 border border-white/10 bg-white/5 text-zinc-300">
              {t}
            </span>
          ))}
        </div>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {cards.map((c) => (
          <Link key={c.href} href={c.href} className="rounded-2xl p-6 glass gold-border hover:brightness-110 transition">
            <div className="font-display text-2xl text-[color:var(--foreground)]">{c.title}</div>
            <p className="mt-2 text-sm text-zinc-300">{c.desc}</p>
            <div className="mt-4 text-sm text-[color:var(--accent-cyan)]">View details →</div>
          </Link>
        ))}
      </section>

      <section className="mt-12 rounded-2xl p-8 glass gold-border">
        <h2 className="font-display text-2xl text-[color:var(--foreground)]">Need a custom package?</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Tell us your goals and we’ll recommend the best plan for startups or small businesses—fast delivery, premium
          design, and SEO-ready builds.
        </p>
        <a
          href={`https://wa.me/917829110701?text=${encodeURIComponent(
            "Hi HEXACORE ROYAL, I’m in Bangalore and I’d like a quote for web design services."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:brightness-110 gold-border"
          data-cursor="cta"
        >
          Get a Quote on WhatsApp
        </a>
      </section>
    </main>
  );
}

