"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [hasLogo, setHasLogo] = useState<boolean>(true);
  useEffect(() => {
    let mounted = true;
    fetch("/hexacore-royal-logo.png", { method: "HEAD" })
      .then((r) => mounted && setHasLogo(r.ok))
      .catch(() => mounted && setHasLogo(false));
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 24 }}
          className="glass gold-border mt-4 rounded-2xl"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="#home" className="flex items-center gap-3" aria-label="HEXACORE ROYAL Home">
              <div className="relative h-8 w-8 overflow-hidden rounded-full gold-border grid place-items-center">
                {hasLogo ? (
                  <Image
                    src="/hexacore-royal-logo.png"
                    alt="HEXACORE ROYAL logo"
                    fill
                    sizes="32px"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="font-display text-[color:var(--accent)]">HR</div>
                )}
              </div>
              <span className="font-display text-sm md:text-base tracking-wide text-[color:var(--foreground)]">
                HEXACORE ROYAL
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#home" className="text-sm hover:text-[color:var(--accent)] transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm hover:text-[color:var(--accent)] transition-colors">
                About
              </Link>
              <Link href="#services" className="text-sm hover:text-[color:var(--accent)] transition-colors">
                Services
              </Link>
              <Link href="#pricing" className="text-sm hover:text-[color:var(--accent)] transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="text-sm hover:text-[color:var(--accent)] transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="rounded-full px-4 py-2 text-sm font-semibold text-black bg-[color:var(--accent)] hover:brightness-110 transition-all gold-border"
                data-cursor="cta"
              >
                Free Digital Audit
              </Link>
            </div>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}
