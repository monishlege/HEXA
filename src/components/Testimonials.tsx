"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Royal Tech crafted a premium site that doubled our inbound leads in under a month.",
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    company: "TechStart Solutions",
  },
  {
    quote:
      "Elegant design, fast delivery, and measurable results. Exactly what our brand needed.",
    name: "Ananya Shah",
    role: "Head of Growth",
    company: "FranchisePlus",
  },
  {
    quote:
      "Their attention to UX and performance is outstanding. Highly recommended.",
    name: "Mohit Verma",
    role: "Product Lead",
    company: "Flow Metrics",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-4xl text-[color:var(--foreground)]">
          What Clients Say
        </h2>
        <p className="mt-3 text-zinc-400">
          Results-driven partnerships with premium support.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            className="rounded-2xl p-6 glass gold-border"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 26 }}
          >
            <p className="text-sm text-zinc-300">“{t.quote}”</p>
            <div className="mt-4 text-sm text-zinc-400">
              {t.name} — {t.role}, {t.company}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
