"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-6">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs border border-white/10 bg-white/5 text-zinc-300">
          About Us
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 26 }}
        >
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-[color:var(--foreground)]">
            Crafting{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
              Digital
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="mt-4 text-zinc-300 md:max-w-xl">
            At HEXACORE ROYAL, we believe exceptional design shouldn’t need an
            exceptional price tag. We’re a premium digital agency crafting
            powerful, conversion‑focused websites that help brands dominate their markets.
          </p>
          <p className="mt-3 text-zinc-400 md:max-w-xl">
            Our award‑winning team blends cutting‑edge technology with strategic
            design thinking to deliver sites that don’t just look incredible — they
            drive real business results.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            {[
              { label: "Projects Delivered", value: "150+" },
              { label: "Client Retention", value: "98%" },
              { label: "Premium Support", value: "24/7" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl p-6 glass gold-border"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 26 }}
              >
                <div className="font-display text-2xl text-[color:var(--accent)]">{stat.value}</div>
                <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-cyan-300 border border-cyan-300/40 hover:bg-cyan-300 hover:text-black transition"
            >
              Discover Our Story
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 26, delay: 0.1 }}
          className="relative h-[320px] md:h-[420px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute left-8 top-8 h-14 w-14 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 opacity-80" />
            <div className="absolute right-14 top-16 h-10 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 opacity-70" />
            <div className="absolute left-24 bottom-16 h-12 w-20 rounded-md bg-gradient-to-b from-yellow-400 to-amber-600 opacity-70" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 opacity-80" />
            <div className="absolute right-10 bottom-12 h-20 w-10 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600 opacity-60" />
          </div>
          <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
