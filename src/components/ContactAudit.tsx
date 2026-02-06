"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

const PHONE = "917829110701";

export default function ContactAudit() {
  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    "Hi HEXACORE ROYAL, I’d like a free digital audit and project quote."
  )}`;
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string) || "";
    const email = (fd.get("email") as string) || "";
    const brand = (fd.get("brand") as string) || "";
    const budget = (fd.get("budget") as string) || "";
    const details = (fd.get("details") as string) || "";
    const text = `Audit Request:\nName: ${name}\nEmail: ${email}\nBrand: ${brand}\nBudget: ${budget}\nDetails: ${details}`;
    const link = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(link, "_blank");
  };
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          className="rounded-2xl p-6 glass gold-border"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 26 }}
        >
          <h2 className="font-display text-3xl text-[color:var(--foreground)]">
            Request a Free Audit
          </h2>
          <p className="mt-2 text-zinc-400">
            Share a few details and we’ll respond within a business day.
          </p>
          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <input
              name="name"
              placeholder="Name"
              className="rounded-xl bg-black/40 text-zinc-200 outline-none border border-white/10 px-4 py-3"
            />
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="rounded-xl bg-black/40 text-zinc-200 outline-none border border-white/10 px-4 py-3"
            />
            <input
              name="brand"
              placeholder="Business / Brand Name"
              className="rounded-xl bg-black/40 text-zinc-200 outline-none border border-white/10 px-4 py-3"
            />
            <select name="budget" className="rounded-xl bg-black/40 text-zinc-200 outline-none border border-white/10 px-4 py-3">
              <option value="">Budget Range</option>
              <option>₹5k–₹10k</option>
              <option>₹10k–₹25k</option>
              <option>₹25k+</option>
            </select>
            <textarea
              name="details"
              placeholder="Project details"
              rows={5}
              className="rounded-xl bg-black/40 text-zinc-200 outline-none border border-white/10 px-4 py-3"
            />
            <button
              type="submit"
              className="rounded-full px-6 py-3 text-sm font-semibold text-black bg-[color:var(--accent)] hover:brightness-110 transition-all gold-border"
              data-cursor="cta"
            >
              Submit Request
            </button>
          </form>
        </motion.div>

        <motion.div
          className="rounded-2xl p-6 glass gold-border"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 26 }}
        >
          <h3 className="font-display text-xl text-[color:var(--foreground)]">
            Prefer a quick chat?
          </h3>
          <p className="mt-2 text-sm text-zinc-400">Average response time: under 24 hours</p>
          <div className="mt-6 grid gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl px-4 py-3 gold-border"
              data-cursor="cta"
            >
              <MessageSquare className="size-4 text-[color:var(--accent-cyan)]" />
              <span className="text-sm">WhatsApp: +91 78291 10701</span>
            </a>
            <a
              href="mailto:hexacore.royal@gmail.com"
              className="flex items-center gap-2 rounded-xl px-4 py-3 gold-border"
              data-cursor="cta"
            >
              <Mail className="size-4 text-[color:var(--accent)]" />
              <span className="text-sm">Email: hexacore.royal@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
