"use client";
import Link from "next/link";

export default function HeroAgency() {
  const PHONE = "917829110701";
  const waAudit = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    "Hi HEXACORE ROYAL, I’d like a free website audit and strategy suggestions."
  )}`;

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-500/10" />
      <svg
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        aria-hidden="true"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="dots-royal" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#11c9d8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-royal)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 md:p-8">
            <div className="mb-4 text-sm text-cyan-300/80">
              HEXACORE ROYAL — Premium Digital Solutions by Mahi & Chirag
            </div>
            <h1 className="text-3xl leading-tight text-white md:text-5xl">
              Premium Websites That Turn Visitors Into Clients
            </h1>
            <p className="mt-4 text-zinc-300 md:text-lg">
              For startups, small businesses, and founders in India. Fast delivery,
              conversion‑focused design, and SEO‑ready builds.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={waAudit}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-black bg-cyan-300 hover:brightness-110 transition"
              >
                Get a Free Website Audit
              </a>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-cyan-300 border border-cyan-300/40 hover:bg-cyan-300 hover:text-black transition"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <span className="rounded-full px-3 py-1 border border-white/10 bg-white/5 text-zinc-300">
                20+ projects delivered
              </span>
              <span className="rounded-full px-3 py-1 border border-white/10 bg-white/5 text-zinc-300">
                &lt;3s load time
              </span>
              <span className="rounded-full px-3 py-1 border border-white/10 bg-white/5 text-zinc-300">
                5/5 client satisfaction
              </span>
            </div>
          </div>

          <div className="relative h-[320px] md:h-[440px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-emerald-400/10 to-purple-600/20" />
            <div className="absolute inset-0">
              <div className="m-5 rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-400/80" />
                  <div className="h-2 w-2 rounded-full bg-yellow-300/80" />
                  <div className="h-2 w-2 rounded-full bg-emerald-400/80" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="col-span-2 rounded-lg border border-white/10 bg-black/20 p-4">
                    <div className="h-5 w-32 rounded bg-cyan-300/30" />
                    <div className="mt-3 h-3 w-48 rounded bg-white/10" />
                    <div className="mt-2 h-3 w-40 rounded bg-white/10" />
                    <div className="mt-4 flex gap-2">
                      <div className="h-7 w-20 rounded bg-cyan-300/30" />
                      <div className="h-7 w-24 rounded border border-cyan-300/40" />
                    </div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                    <div className="h-3 w-24 rounded bg-white/10" />
                    <div className="mt-2 h-3 w-20 rounded bg-white/10" />
                    <div className="mt-4 h-20 rounded bg-cyan-300/20" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="h-14 rounded border border-white/10 bg-black/20" />
                  <div className="h-14 rounded border border-white/10 bg-black/20" />
                  <div className="h-14 rounded border border-white/10 bg-black/20" />
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
