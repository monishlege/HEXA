import HeroAgency from "@/components/HeroAgency";
import About from "@/components/About";
import Services from "@/components/Services";
import PricingAlt from "@/components/PricingAlt";
import SectionReveal from "@/components/SectionReveal";
import ContactAudit from "@/components/ContactAudit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroAgency />
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal>
        <Services />
      </SectionReveal>
      <SectionReveal>
        {/* Portfolio removed */}
      </SectionReveal>
      <SectionReveal>
        <PricingAlt />
      </SectionReveal>
      <SectionReveal>
        <section className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl p-8 glass gold-border text-center">
            <div className="font-display text-2xl text-[color:var(--foreground)]">
              Need a Custom Solution?
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Every visionary business is unique. Let’s collaborate to create a bespoke digital solution
              that aligns with your ambitious goals and exceeds industry standards.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href={`https://wa.me/917829110701?text=${encodeURIComponent(
                  "Hi HEXACORE ROYAL, I’d like to schedule a consultation."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 hover:brightness-110 gold-border"
                data-cursor="cta"
              >
                Schedule Consultation
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-black gold-border"
                data-cursor="cta"
              >
                View Enterprise Features
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>
      <SectionReveal>
        <ContactAudit />
      </SectionReveal>
      <Footer />
    </main>
  );
}
