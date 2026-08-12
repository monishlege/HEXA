import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSiteUrl } from "@/lib/site";
import { workItems } from "../workData";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = workItems.find((w) => w.slug === slug);
  if (!item) return {};

  const path = `/work/${item.slug}`;
  return {
    title: `${item.title} | HEXACORE ROYAL`,
    description: item.summary,
    alternates: { canonical: path },
    openGraph: {
      title: `${item.title} | HEXACORE ROYAL`,
      description: item.summary,
      url: `${getSiteUrl()}${path}`,
    },
  };
}

function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = workItems.find((w) => w.slug === slug);
  if (!item) notFound();

  const canonical = `${getSiteUrl()}/work/${item.slug}`;

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    description: item.summary,
    url: canonical,
    creator: { "@type": "Organization", name: "HEXACORE ROYAL", url: getSiteUrl() },
    about: item.services,
  };

  return (
    <main className="mx-auto max-w-7xl px-6 pt-28 pb-20">
      <JsonLd data={caseStudySchema} />

      <nav className="text-sm text-zinc-400">
        <Link href="/work" className="hover:text-cyan-300">
          Work
        </Link>{" "}
        <span className="opacity-60">/</span> {item.title}
      </nav>

      <header className="mt-6 max-w-3xl">
        <div className="text-xs text-zinc-400">{item.industry}</div>
        <h1 className="mt-2 font-display text-4xl md:text-6xl text-[color:var(--foreground)]">{item.title}</h1>
        <p className="mt-4 text-zinc-300 md:text-lg">{item.summary}</p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl p-6 glass gold-border">
          <div className="font-display text-xl text-[color:var(--foreground)]">Services</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {item.services.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="inline-block size-1.5 rounded-full bg-[color:var(--accent)] mt-1.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl p-6 glass gold-border">
          <div className="font-display text-xl text-[color:var(--foreground)]">Outcomes</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {item.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2">
                <span className="inline-block size-1.5 rounded-full bg-[color:var(--accent-cyan)] mt-1.5" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-2xl p-8 glass gold-border">
        <div className="font-display text-2xl text-[color:var(--foreground)]">Want something similar?</div>
        <p className="mt-2 text-sm text-zinc-300">
          We design premium websites and landing pages in Bangalore for startups and small–mid businesses.
        </p>
        <a
          href={`https://wa.me/917829110701?text=${encodeURIComponent(
            "Hi HEXACORE ROYAL, I saw your work and I’d like a similar website/landing page."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:brightness-110 gold-border"
          data-cursor="cta"
        >
          Message Us on WhatsApp
        </a>
      </section>
    </main>
  );
}

