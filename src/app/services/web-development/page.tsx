import type { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site";

const slug = "/services/web-development";
const canonical = `${getSiteUrl()}${slug}`;

export const metadata: Metadata = {
  title: "Website Design & Development in Bangalore | HEXACORE ROYAL",
  description:
    "Website design and development in Bangalore: responsive website design, custom website development, premium UI, and conversion-focused builds for startups and SMBs.",
  alternates: { canonical: slug },
  openGraph: {
    title: "Website Design & Development in Bangalore | HEXACORE ROYAL",
    description: "Premium, responsive, custom website development built to convert.",
    url: canonical,
  },
};

function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function WebDevServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Website Design and Development",
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
        name: "Do you build responsive websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every build is mobile-first and responsive across devices, with performance and accessibility baked in.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build a custom website (not templates)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We do custom website development with a premium design system that matches your brand and conversion goals.",
        },
      },
      {
        "@type": "Question",
        name: "Do you also create high-conversion landing pages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We design and develop landing pages for startups and small businesses focused on leads, sign-ups, and sales.",
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
        <span className="opacity-60">/</span> Web Development
      </nav>

      <header className="mt-6 max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl text-[color:var(--foreground)]">
          Website Design &{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
            Development
          </span>{" "}
          in Bangalore
        </h1>
        <p className="mt-4 text-zinc-300 md:text-lg">
          Premium website design services for startups and small–mid businesses. Responsive, SEO-ready, and built for
          conversions.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          ["Responsive Website Design", "Mobile-first layouts that look premium on every screen size."],
          ["Custom Website Development", "Modern Next.js builds that are scalable, secure, and fast."],
          ["Premium Website Design", "A polished UI system that positions you above competitors."],
          ["High-Conversion Landing Pages", "Clear messaging + strong CTAs tuned for lead generation."],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl p-6 glass gold-border">
            <div className="font-display text-xl text-[color:var(--foreground)]">{title}</div>
            <p className="mt-2 text-sm text-zinc-300">{desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-2xl p-8 glass gold-border">
        <h2 className="font-display text-2xl text-[color:var(--foreground)]">Best for</h2>
        <ul className="mt-3 grid gap-2 text-sm text-zinc-300 md:grid-cols-2">
          <li>website design for small business</li>
          <li>startup website development services</li>
          <li>pitch-ready startup landing page</li>
          <li>business website redesign services</li>
        </ul>
        <a
          href={`https://wa.me/917829110701?text=${encodeURIComponent(
            "Hi HEXACORE ROYAL, I need website design and development in Bangalore."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:brightness-110 gold-border"
          data-cursor="cta"
        >
          Get Website Quote
        </a>
      </section>
    </main>
  );
}



