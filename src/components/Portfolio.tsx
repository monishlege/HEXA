"use client";
import { motion } from "framer-motion";

const projects = [
  {
    tag: "Startup",
    name: "Nova Labs",
    desc: "Fast MVP launch with conversion-first landing and analytics.",
  },
  {
    tag: "Franchise",
    name: "Royal Fitness",
    desc: "Multi-location presence with CMS and SEO-rich content.",
  },
  {
    tag: "SaaS",
    name: "Flow Metrics",
    desc: "Product-led growth site with docs, metrics, and onboarding.",
  },
  {
    tag: "Enterprise",
    name: "Aurelius Group",
    desc: "Executive-grade site with brand identity and custom modules.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-4xl text-[color:var(--foreground)]">
          Recent Projects
        </h2>
        <p className="mt-3 text-zinc-400">
          Selected work spanning startups, franchises, SaaS, and enterprise.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.name}
            className="rounded-2xl overflow-hidden gold-border glass"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 26 }}
          >
            <div className="h-40 bg-[radial-gradient(circle_at_30%_30%,#00e6ff_0%,transparent_45%)]" />
            <div className="p-6">
              <div className="text-xs text-black bg-[color:var(--accent)] inline-block px-2 py-1 rounded-full gold-border">
                {p.tag}
              </div>
              <div className="mt-3 font-display text-xl text-[color:var(--foreground)]">
                {p.name}
              </div>
              <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
              <a
                href="#"
                className="mt-4 inline-block text-sm text-[color:var(--accent-cyan)] hover:underline"
              >
                View Website →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
