"use client";
import { motion } from "framer-motion";

type Tier = {
  name: string;
  title: string;
  price: number;
  originalPrice?: number;
  description?: string;
  highlight?: boolean;
  features: string[];
  cta: string;
};

const PHONE = "917829110701";
const tiers: Tier[] = [
  {
    name: "Starter",
    title: "Starter",
    price: 4999,
    originalPrice: 8999,
    features: [
      "Premium single-page website",
      "Mobile-first design",
      "Advanced SEO foundation",
      "Contact form",
      "Social media integration",
      "2 months support",
    ],
    cta: "Start Your Journey",
  },
  {
    name: "Professional",
    title: "Professional",
    price: 10999,
    originalPrice: 18999,
    features: [
      "Multi-page website",
      "Advanced responsive design",
      "Complete SEO",
      "CMS",
      "Google Analytics",
      "4 months priority support",
    ],
    highlight: true,
    cta: "Go Professional",
  },
  {
    name: "Enterprise",
    title: "Enterprise",
    price: 20999,
    originalPrice: 35999,
    features: [
      "Unlimited pages",
      "Custom animations",
      "E-commerce integration",
      "Custom functionality",
      "Brand identity package",
      "6 months enterprise support",
    ],
    cta: "Scale Your Business",
  },
];

function ShimmerCard({ tier }: { tier: Tier }) {
  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hi HEXACORE ROYAL, I'm interested in the ${tier.name} plan (₹${tier.price}).`
  )}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 26 }}
      className={`relative overflow-hidden rounded-2xl p-6 gold-border glass ${
        tier.highlight
          ? "ring-1 ring-[color:var(--accent)] scale-[1.02] animate-[pulseGold_2.4s_ease-in-out_infinite]"
          : ""
      }`}
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-20 animate-[shimmer_2s_linear_infinite] [background:linear-gradient(120deg,transparent,rgba(197,160,89,0.08),transparent)]" />
      </div>
      <style>
        {`@keyframes shimmer { 
          0% { transform: translateX(-40%); } 
          100% { transform: translateX(40%); } 
        }
        @keyframes pulseGold {
          0%, 100% { box-shadow: 0 0 0px rgba(197,160,89,0.0), 0 0 12px rgba(197,160,89,0.25); }
          50% { box-shadow: 0 0 24px rgba(197,160,89,0.45), 0 0 4px rgba(197,160,89,0.85); }
        }`}
      </style>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm uppercase tracking-wide text-zinc-400">
            {tier.title}{" "}
            {tier.highlight && (
              <span className="ml-2 rounded-full px-2 py-0.5 text-xs bg-[color:var(--accent)] text-black">
                Most Popular
              </span>
            )}
          </div>
          <div className="font-display text-xl text-[color:var(--foreground)]">
            {tier.name}
          </div>
        </div>
        <div className="text-right">
          {tier.originalPrice && (
            <div className="text-xs text-zinc-500">
              Was <span className="line-through">₹{tier.originalPrice}</span>
            </div>
          )}
          <div className="font-display text-2xl text-[color:var(--accent)]">
          ₹{tier.price}
          </div>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="inline-block size-1.5 rounded-full bg-[color:var(--accent)] mt-1.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <div className="flex">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all gold-border ${
              tier.highlight
                ? "text-black bg-[color:var(--accent)] hover:brightness-110"
                : "text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-black"
            }`}
            data-cursor="cta"
          >
            {tier.cta}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="font-display text-3xl md:text-4xl text-[color:var(--foreground)] text-center">
        Interactive Pricing
      </h2>
      <p className="mt-2 text-center text-zinc-400">
        Choose your evolution path — all prices in ₹
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <ShimmerCard tier={tiers[0]} />
        <ShimmerCard tier={tiers[1]} />
        <ShimmerCard tier={tiers[2]} />
      </div>
    </section>
  );
}
