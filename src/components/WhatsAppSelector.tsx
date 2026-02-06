"use client";
import { useMemo, useState } from "react";

type Opt = { id: string; label: string; price: number };

const PHONE = "917829110701";

export default function WhatsAppSelector() {
  const options: Opt[] = useMemo(
    () => [
      { id: "Starter", label: "Starter — ₹4,999", price: 4999 },
      { id: "Professional", label: "Professional — ₹10,999", price: 10999 },
      { id: "Enterprise", label: "Enterprise — ₹20,999", price: 20999 },
    ],
    []
  );
  const [selected, setSelected] = useState<Opt>(options[1]);

  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hi HEXACORE ROYAL, I want the ${selected.id} plan (₹${selected.price}).`
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-[320px] rounded-2xl glass gold-border p-4">
      <div className="font-display text-sm text-[color:var(--foreground)]">
        Chat on WhatsApp
      </div>
      <div className="mt-3">
        <select
          value={selected.id}
          onChange={(e) =>
            setSelected(
              options.find((o) => o.id === e.target.value) || options[1]
            )
          }
          className="w-full rounded-xl bg-black/40 text-zinc-200 outline-none border border-white/10 px-3 py-2"
        >
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-3">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-2 text-sm font-semibold text-black bg-[color:var(--accent)] hover:brightness-110 transition-all gold-border"
          data-cursor="cta"
        >
          Message on WhatsApp
        </a>
      </div>
    </div>
  );
}
