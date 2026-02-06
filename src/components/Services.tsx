"use client";
import { motion } from "framer-motion";
import { MonitorSmartphone, PenTool, Search, Gauge, Megaphone, Layers } from "lucide-react";

const services = [
  {
    title: "Web Design & Development",
    icon: MonitorSmartphone,
    features: ["Responsive Design", "Performance Optimized", "SEO Ready"],
  },
  {
    title: "Brand Identity Design",
    icon: PenTool,
    features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
  },
  {
    title: "SEO & Performance",
    icon: Search,
    features: ["Technical SEO", "Speed Optimization", "Analytics Setup"],
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    features: ["Social Strategy", "Content Creation", "Campaign Management"],
  },
  {
    title: "UX/UI Excellence",
    icon: Layers,
    features: ["User Research", "Prototyping", "Interface Design"],
  },
  {
    title: "Performance Optimization",
    icon: Gauge,
    features: ["Speed Optimization", "Core Web Vitals", "Technical Audits"],
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-5xl text-[color:var(--foreground)]">
          Premium{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
            Digital Solutions
          </span>
        </h2>
        <p className="mt-3 text-zinc-400">
          Comprehensive digital services designed to elevate your brand and drive measurable growth.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <motion.div
            key={s.title}
            className="rounded-2xl p-6 glass gold-border"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 26 }}
          >
            <div className="flex items-center gap-3">
              <s.icon className="size-5 text-[color:var(--accent-cyan)]" />
              <div className="font-display text-lg text-[color:var(--foreground)]">{s.title}</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="inline-block size-1.5 rounded-full bg-[color:var(--accent)] mt-1.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 rounded-2xl p-8 glass gold-border text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 26 }}
      >
        <div className="font-display text-2xl text-[color:var(--foreground)]">
          Ready to Transform Your Digital Presence?
        </div>
        <p className="mt-2 text-sm text-zinc-400">
          Let’s discuss how our premium services can elevate your brand and drive exceptional results.
        </p>
        <a
          href={`https://wa.me/917829110701?text=${encodeURIComponent(
            "Hi HEXACORE ROYAL, I’d like to discuss my project."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:brightness-110 gold-border"
          data-cursor="cta"
        >
          Discuss Your Project
        </a>
      </motion.div>
    </section>
  );
}
