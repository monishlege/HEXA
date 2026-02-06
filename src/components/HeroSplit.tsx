"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import DevSeoBackdrop from "./DevSeoBackdrop";

export default function HeroSplit() {
  const [hasLogo, setHasLogo] = useState<boolean>(true);
  useEffect(() => {
    let mounted = true;
    fetch("/hexacore-royal-logo.png", { method: "HEAD" })
      .then((r) => mounted && setHasLogo(r.ok))
      .catch(() => mounted && setHasLogo(false));
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <section className="relative px-0">
      <div className="relative bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-500/10" />
        <svg
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          aria-hidden="true"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#00e6ff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 26 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 md:p-8"
            >
          <div className="flex items-center gap-3 mb-5 justify-start md:justify-start">
            <div className="relative h-10 w-10 overflow-hidden rounded-full gold-border grid place-items-center">
              {hasLogo ? (
                <Image
                  src="/hexacore-royal-logo.png"
                  alt="HEXACORE ROYAL logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="font-display text-[color:var(--accent)]">RT</div>
              )}
            </div>
            <span className="font-display text-lg text-[color:var(--foreground)]">
              HEXACORE ROYAL  
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl leading-tight text-[color:var(--foreground)]">
            Premium Web Solutions for Ambitious Brands
          </h1>
          <p className="mt-4 text-zinc-300">
            Dark Royal aesthetics, magnetic interactions, and conversion-first
            engineering — crafted by MAHI & Chirag C Kulkarni.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-full px-6 py-3 text-sm font-semibold text-black bg-[color:var(--accent)] hover:brightness-110 transition-all gold-border"
              data-cursor="cta"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#portfolio"
              className="rounded-full px-6 py-3 text-sm font-semibold text-[color:var(--accent-cyan)] hover:text-black hover:bg-[color:var(--accent-cyan)] transition-all gold-border"
              data-cursor="cta"
            >
              Explore Our Work
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-xs text-zinc-400">
            <div className="gold-border rounded-xl px-3 py-2 bg-black/20">
              50+ Projects Delivered
            </div>
            <div className="gold-border rounded-xl px-3 py-2 bg-black/20">
              Fast Turnaround
            </div>
            <div className="gold-border rounded-xl px-3 py-2 bg-black/20">
              100% Satisfaction
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 26, delay: 0.1 }}
          className="relative h-[320px] md:h-[420px] rounded-2xl glass gold-border overflow-hidden"
        >
          <DevSeoBackdrop />
          <div className="absolute inset-0 blur-2xl opacity-25 bg-[radial-gradient(circle_at_30%_30%,#00e6ff_0%,transparent_45%)]" />
          <div className="absolute inset-0 blur-xl opacity-30 bg-[radial-gradient(circle_at_70%_70%,#C5A059_0%,transparent_45%)]" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="font-display text-xl text-[color:var(--foreground)] cyan-glow">
                Dark Royalty Interface
              </div>
              <div className="mt-2 text-sm text-zinc-400">
                Bento-style visual with neon cyan glow and gold accents
              </div>
            </div>
          </div>
        </motion.div>
      </div>
        </div>
      </div>
    </section>
  );
}
