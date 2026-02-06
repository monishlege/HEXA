"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };
    const enterCta = () => {
      el.style.width = "48px";
      el.style.height = "48px";
      el.style.boxShadow =
        "0 0 18px rgba(197,160,89,0.6), 0 0 4px rgba(197,160,89,0.8)";
    };
    const leaveCta = () => {
      el.style.width = "28px";
      el.style.height = "28px";
      el.style.boxShadow = "0 0 12px rgba(197,160,89,0.5)";
    };

    window.addEventListener("mousemove", move);
    const targets = document.querySelectorAll<HTMLElement>("[data-cursor='cta']");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", enterCta);
      t.addEventListener("mouseleave", leaveCta);
    });
    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", enterCta);
        t.removeEventListener("mouseleave", leaveCta);
      });
    };
  }, []);

  return <div ref={ref} className="cursor-ring" />;
}
