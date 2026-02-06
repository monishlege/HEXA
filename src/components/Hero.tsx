"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import GoldenMeshBackground from "./GoldenMesh";
import Image from "next/image";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      x.set(dx * 0.06);
      y.set(dy * 0.06);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  const shadowX = useTransform(x, (v) => `${v * 0.4}px`);
  const shadowY = useTransform(y, (v) => `${v * 0.4}px`);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <GoldenMeshBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 text-center">
        <div className="mx-auto mb-6 grid place-items-center">
          <div className="relative h-14 w-14 overflow-hidden rounded-full gold-border">
            <Image
              src="/royal-tech-logo.png"
              alt="Royal Tech logo"
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <motion.h1
          ref={ref}
          style={{
            translateX: x,
            translateY: y,
            textShadow: `${shadowX.get()} ${shadowY.get()} 28px rgba(197,160,89,0.35)`,
          }}
          className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight leading-tight text-[color:var(--foreground)]"
        >
          The Gold Standard of Digital Evolution
        </motion.h1>
        <p className="mt-6 max-w-2xl mx-auto text-zinc-300">
          Elite engineering, enterprise AI automation, and ROI-first growth —
          crafted by MAHI and Chirag C Kulkarni.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full px-6 py-3 text-sm font-semibold text-black bg-[color:var(--accent)] hover:brightness-110 transition-all gold-border"
            data-cursor="cta"
          >
            Apply Now
          </a>
          <a
            href="#audit"
            className="rounded-full px-6 py-3 text-sm font-semibold text-[color:var(--accent)] hover:text-black hover:bg-[color:var(--accent)] transition-all gold-border"
            data-cursor="cta"
          >
            Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
