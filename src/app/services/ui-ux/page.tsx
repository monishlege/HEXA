import type { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site";

const slug = "/services/ui-ux";
const canonical = `${getSiteUrl()}${slug}`;

export const metadata: Metadata = {
  title: "UI/UX & Landing Page Design in Bangalore | HEXACORE ROYAL",
  description:
    "UI/UX design and high-conversion landing pages in Bangalore: startup landing page design, SaaS landing pages, MVP landing pages, and premium interfaces.",
  alternates: { canonical: slug },
  openGraph: {
    title: "UI/UX & Landing Page Design in Bangalore | HEXACORE ROYAL",
    description: "Premium UI/UX and landing pages built for sign-ups, demos, and sales.",
    url: canonical,
  },
};

function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function UiUxServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "UI/UX Design",
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
        name: "Do you design landing pages for startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—startup landing page design, SaaS landing pages, MVP landing pages, and pitch-ready pages focused on conversion.",
        },
      },
      {
        "@type": "Question",
        name: "Can you improve conversions on an existing landing page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We audit messaging, layout, UX friction, and CTAs, then iterate with measurable improvements.",
        },
      },
      {
        "@type": "Question",
        name: "Do you also build what you design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Design + development together improves speed, consistency, and outcomes.",
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
        <span className="opacity-60">/</span> UI/UX
      </nav>

      <header className="mt-6 max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl text-[color:var(--foreground)]">
          UI/UX &{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
            Landing Pages
          </span>{" "}
          in Bangalore
        </h1>
        <p className="mt-4 text-zinc-300 md:text-lg">
          Premium interface design for founders: high-conversion landing pages, SaaS pages, and product experiences that
          build trust and drive action.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          ["Startup Landing Page Design", "Pitch-ready pages with clear positioning and strong CTAs."],
          ["SaaS Landing Page Design", "Feature narrative, social proof, and conversion flows for demos/trials."],
          ["MVP Landing Page Design", "Fast, clean pages to validate demand and capture leads."],
          ["Neon Cyberpunk / Dark Theme", "Signature HEXACORE ROYAL aesthetics with premium readability."],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl p-6 glass gold-border">
            <div className="font-display text-xl text-[color:var(--foreground)]">{title}</div>
            <p className="mt-2 text-sm text-zinc-300">{desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-2xl p-8 glass gold-border">
        <h2 className="font-display text-2xl text-[color:var(--foreground)]">Want a landing page that converts?</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Send your product, audience, and goal. We’ll recommend a structure and timeline for a premium landing page.
        </p>
        <a
          href={`https://wa.me/917829110701?text=${encodeURIComponent(
            "Hi HEXACORE ROYAL, I need a high-conversion landing page in Bangalore."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:brightness-110 gold-border"
          data-cursor="cta"
        >
          Get Landing Page Plan
        </a>
      </section>
    </main>
  );
}

