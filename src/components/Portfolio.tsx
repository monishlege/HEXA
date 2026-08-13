"use client";
import { motion } from "framer-motion";

const heroScreenshot =
  "https://s.wordpress.com/mshots/v1/https://dots-rho-two.vercel.app?size=1600";

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-4xl text-[color:var(--foreground)]">
          Our Works
        </h2>
        <p className="mt-3 text-zinc-400">
          Selected case study showcasing premium website design and hero page visuals.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <motion.a
          href="https://dots-rho-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl overflow-hidden gold-border glass group"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 26 }}
        >
          <div className="h-56 overflow-hidden bg-black">
            <img
              src={heroScreenshot}
              alt="DOT Solutions hero page design created by Hexacore Royal for a web agency portfolio showcase"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="text-xs text-black bg-[color:var(--accent)] inline-block px-2 py-1 rounded-full gold-border">
              Web Design
            </div>
            <div className="mt-3 font-display text-xl text-[color:var(--foreground)]">
              DOT Solutions Website
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Premium print & design studio website built for brand clarity, modern visuals, and high-impact conversions.
            </p>
            <div className="mt-4 text-sm text-[color:var(--accent-cyan)] hover:underline">
              Visit Website →
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
