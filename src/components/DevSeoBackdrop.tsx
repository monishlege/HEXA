"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function DevSeoBackdrop() {
  const metrics = useMemo(() => {
    const speedBefore = 72;
    const speedAfter = 96;
    const speedGain = Math.round(((speedAfter - speedBefore) / speedBefore) * 100);
    const ctrBefore = 2.3;
    const ctrAfter = 3.8;
    const ctrGain = Math.round(((ctrAfter - ctrBefore) / ctrBefore) * 100);
    const convBefore = 1.8;
    const convAfter = 2.6;
    const convGain = Math.round(((convAfter - convBefore) / convBefore) * 100);
    return { speedGain, ctrGain, convGain, speedAfter, ctrAfter, convAfter };
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_30%_30%,#00e6ff_0%,transparent_45%)]" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_70%,#C5A059_0%,transparent_45%)]" />
      <motion.pre
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 0.65, y: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 24 }}
        className="absolute left-6 top-6 text-xs leading-5 text-zinc-300/70"
      >
        <code>
{`const seo = {
  schema: true,
  sitemaps: true,
  coreWebVitals: "green",
  lighthouse: ${metrics.speedAfter},
};`}
        </code>
      </motion.pre>
      <div className="absolute bottom-6 right-6 grid gap-2 text-xs">
        <div className="rounded-full px-3 py-1 gold-border bg-black/30 text-zinc-200">
          Page Speed +{metrics.speedGain}%
        </div>
        <div className="rounded-full px-3 py-1 gold-border bg-black/30 text-zinc-200">
          CTR +{metrics.ctrGain}%
        </div>
        <div className="rounded-full px-3 py-1 gold-border bg-black/30 text-zinc-200">
          Conversion +{metrics.convGain}%
        </div>
      </div>
    </div>
  );
}
