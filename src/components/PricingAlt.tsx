"use client";
import { motion } from "framer-motion";

type Plan = {
  name: string;
  price: number;
  features: string[];
  highlight?: boolean;
};

const PHONE = "917829110701";

const plans: Plan[] = [
  {
    name: "Starter",
    price: 4999,
    features: [
      "Premium single-page site",
      "Mobile-first design",
      "Advanced SEO foundation",
      "2 months support",
    ],
  },
  {
    name: "Growth",
    price: 10999,
    highlight: true,
    features: [
      "Multi-page site",
      "CMS & Google Analytics",
      "Complete SEO",
      "4 months priority support",
    ],
  },
  {
    name: "Elite",
    price: 20999,
    features: [
      "Unlimited pages",
      "Custom animations & E-commerce",
      "Custom functionality",
      "6 months enterprise support",
    ],
  },
];

export default function PricingAlt() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-4xl text-[color:var(--foreground)]">
          Transparent, One-Time Investment
        </h2>
        <p className="mt-3 text-zinc-400">
          Choose the perfect plan to accelerate your growth — prices in ₹.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <motion.div
            key={p.name}
            className={`rounded-2xl p-6 gold-border glass ${
              p.highlight
                ? "ring-1 ring-[color:var(--accent)] scale-[1.02] animate-[pulseGold_2.4s_ease-in-out_infinite]"
                : ""
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 26 }}
          >
            <div className="flex items-baseline justify-between">
              <div className="font-display text-xl text-[color:var(--foreground)]">
                {p.name}
              </div>
              {p.highlight && (
                <span className="rounded-full px-2 py-0.5 text-xs bg-[color:var(--accent)] text-black gold-border">
                  Most Popular
                </span>
              )}
            </div>
            <div className="mt-2 font-display text-2xl text-[color:var(--accent)]">
              ₹{p.price}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="inline-block size-1.5 rounded-full bg-[color:var(--accent)] mt-1.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent(
                `Hi HEXACORE ROYAL, I want the ${p.name} plan (₹${p.price}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-block rounded-full px-4 py-2 text-sm font-semibold transition-all gold-border ${
                p.highlight
                  ? "text-black bg-[color:var(--accent)] hover:brightness-110"
                  : "text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-black"
              }`}
              data-cursor="cta"
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 text-center text-sm text-zinc-400">
        Fast Delivery · Premium Support · Guaranteed Results
      </div>
      <style>
        {`@keyframes pulseGold {
          0%, 100% { box-shadow: 0 0 0px rgba(197,160,89,0.0), 0 0 12px rgba(197,160,89,0.25); }
          50% { box-shadow: 0 0 24px rgba(197,160,89,0.45), 0 0 4px rgba(197,160,89,0.85); }
        }`}
      </style>
    </section>
  );
}
