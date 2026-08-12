"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { workItems } from "@/app/work/workData";

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-4xl text-[color:var(--foreground)]">
          Our Works
        </h2>
        <p className="mt-3 text-zinc-400">
          Selected case studies showcasing work for startups, SaaS, and premium business brands.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {workItems.map((work) => (
          <motion.div
            key={work.slug}
            className="rounded-2xl overflow-hidden gold-border glass"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 26 }}
          >
            <div className="h-40 bg-[radial-gradient(circle_at_30%_30%,#00e6ff_0%,transparent_45%)]" />
            <div className="p-6">
              <div className="text-xs text-black bg-[color:var(--accent)] inline-block px-2 py-1 rounded-full gold-border">
                {work.industry}
              </div>
              <div className="mt-3 font-display text-xl text-[color:var(--foreground)]">
                {work.title}
              </div>
              <p className="mt-2 text-sm text-zinc-400">{work.summary}</p>
              <Link
                href={`/work/${work.slug}`}
                className="mt-4 inline-block text-sm text-[color:var(--accent-cyan)] hover:underline"
              >
                View Case Study →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
