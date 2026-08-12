export type WorkItem = {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  services: string[];
  outcomes: string[];
};

export const workItems: WorkItem[] = [
  {
    slug: "startup-landing-page",
    title: "Startup Landing Page (Pitch‑ready)",
    summary: "High-conversion landing page design for a founder pitching to investors.",
    industry: "Startup",
    services: ["UI/UX", "Landing page design", "Frontend development", "Performance"],
    outcomes: ["Clear positioning", "Stronger CTAs", "Mobile-first performance"],
  },
  {
    slug: "small-business-website-redesign",
    title: "Small Business Website Redesign",
    summary: "Premium redesign to improve trust, speed, and leads for a local business in India.",
    industry: "Local business",
    services: ["Website redesign", "Responsive design", "SEO structure"],
    outcomes: ["Cleaner navigation", "Better readability", "SEO-ready site structure"],
  },
  {
    slug: "saas-landing-page",
    title: "SaaS Landing Page (Conversion-first)",
    summary: "SaaS landing page with product story, social proof, and demo-focused flow.",
    industry: "SaaS",
    services: ["SaaS landing page", "UX writing structure", "Front-end build"],
    outcomes: ["Improved CTA clarity", "Better product narrative", "Fast load time"],
  },
];

