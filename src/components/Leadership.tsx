"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

function TiltCard({
  name,
  title,
  subtitle,
}: {
  name: string;
  title: string;
  subtitle: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 10;
    const rotateX = -(y - 0.5) * 10;
    ref.current!.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const onLeave = () => {
    ref.current!.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      className="relative rounded-2xl p-6 gold-border glass"
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 26 }}
    >
      <div
        ref={ref}
        className="grid grid-cols-[64px_1fr] gap-4"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative size-16 rounded-xl gold-border overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,#C5A059_10%,transparent_60%)]" />
          <div className="flex h-full w-full items-center justify-center font-display text-xl text-[color:var(--accent)]">
            {name.split(" ").map((n) => n[0]).join("")}
          </div>
        </div>
        <div className="self-center">
          <div className="font-display text-xl text-[color:var(--foreground)]">
            {name}
          </div>
          <div className="text-sm text-zinc-400">{title}</div>
          <div className="mt-2 text-xs text-zinc-500">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="font-display text-3xl md:text-4xl text-[color:var(--foreground)] text-center">
        Leadership & Identity
      </h2>
      <p className="mt-2 text-center text-zinc-400">
        HEXACORE ROYAL — The Gold Standard of Digital Evolution
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <TiltCard
          name="MAHI"
          title="Visionary & Lead Architect"
          subtitle="Orchestrating luxury-grade engineering and architecture."
        />
        <TiltCard
          name="Chirag C Kulkarni"
          title="Strategy & Digital Operations"
          subtitle="Driving ROI-first growth and elite digital operations."
        />
      </div>
    </section>
  );
}
