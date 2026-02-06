"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function SectionReveal({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.12, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
