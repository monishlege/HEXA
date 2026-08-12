import type { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site";
import { workItems } from "./workData";

export const metadata: Metadata = {
  title: "Work | HEXACORE ROYAL",
  description:
    "Selected work from HEXACORE ROYAL: startup landing pages, small business websites, and premium responsive website design built for conversions.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work | HEXACORE ROYAL",
    description: "Case studies and examples of premium web design services.",
    url: `${getSiteUrl()}/work`,
  },
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-28 pb-20">
      <header className="max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl text-[color:var(--foreground)]">
          Selected{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
            Work
          </span>
        </h1>
        <p className="mt-4 text-zinc-300 md:text-lg">
          Examples of our premium digital solutions—startup landing pages, responsive websites, and conversion-focused
          design systems.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {workItems.map((w) => (
          <Link
            key={w.slug}
            href={`/work/${w.slug}`}
            className="rounded-2xl p-6 glass gold-border hover:brightness-110 transition"
          >
            <div className="text-xs text-zinc-400">{w.industry}</div>
            <div className="mt-2 font-display text-2xl text-[color:var(--foreground)]">{w.title}</div>
            <p className="mt-2 text-sm text-zinc-300">{w.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {w.services.slice(0, 4).map((s) => (
                <span key={s} className="rounded-full px-3 py-1 text-xs border border-white/10 bg-white/5 text-zinc-300">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 text-sm text-[color:var(--accent-cyan)]">View case study →</div>
          </Link>
        ))}
      </section>
    </main>
  );
}

