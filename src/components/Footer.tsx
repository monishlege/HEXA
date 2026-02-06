"use client";
import { Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950/80 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-10 w-10 rounded-xl gold-border bg-gradient-to-br from-rose-500 to-fuchsia-600 text-white font-display text-lg">
                HR
              </div>
              <div className="font-display text-xl text-[color:var(--foreground)]">HEXACORE ROYAL</div>
            </div>
            <p className="mt-4 text-sm text-zinc-400 max-w-sm">
              Premium Excellence in Web Design. We craft bold digital experiences with a mobile‑first approach that help businesses grow and stand out in the digital landscape.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a href="mailto:hexacore.royal@gmail.com" className="flex items-center gap-2 text-zinc-300 hover:text-cyan-300">
                <Mail className="size-4" />
                hexacore.royal@gmail.com
              </a>
              <a href="tel:+917829110701" className="flex items-center gap-2 text-zinc-300 hover:text-cyan-300">
                <Phone className="size-4" />
                +91 78291 10701
              </a>
            </div>
          </div>

          <div>
            <div className="font-display text-lg text-[color:var(--foreground)]">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li><a href="#home" className="hover:text-cyan-300 flex items-center gap-2"><Globe className="size-3" /> Home</a></li>
              <li><a href="#about" className="hover:text-cyan-300 flex items-center gap-2"><Globe className="size-3" /> About</a></li>
              <li><a href="#services" className="hover:text-cyan-300 flex items-center gap-2"><Globe className="size-3" /> Services</a></li>
              <li><a href="#pricing" className="hover:text-cyan-300 flex items-center gap-2"><Globe className="size-3" /> Pricing</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 flex items-center gap-2"><Globe className="size-3" /> Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-display text-lg text-[color:var(--foreground)]">Services</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>Web Design & Development</li>
              <li>Brand Identity Design</li>
              <li>SEO & Performance</li>
              <li>Digital Marketing</li>
              <li>UX/UI Excellence</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
          <div className="text-zinc-400 text-xs">
            © {new Date().getFullYear()} HEXACORE ROYAL. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/917829110701?text=${encodeURIComponent(
                "Hi HEXACORE ROYAL, I’d like a project quote."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:brightness-110 gold-border"
              data-cursor="cta"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
