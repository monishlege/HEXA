export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://royal.tech";
  return raw.replace(/\/+$/, "");
}

