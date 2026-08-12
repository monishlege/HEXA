const reviews = [
  {
    initial: "S",
    name: "Siva Reddy",
    meta: "0 reviews • 0 photos",
    rating: 5,
    text:
      "They behavior was very polite. They are understanding and very responsive. They helped me a lot with my website and customer support through WhatsApp was excellent.",
    new: true,
    tone: "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40",
  },
  {
    initial: "B",
    name: "BeatStreet",
    meta: "0 reviews • 0 photos",
    rating: 5,
    text:
      "They built me a website that matched my requirements and it was done perfectly and marvelously.",
    new: true,
    tone: "bg-blue-500/20 text-blue-300 ring-1 ring-blue-400/40",
  },
  {
    initial: "A",
    name: "AI Satheesh",
    meta: "0 reviews • 0 photos",
    rating: 5,
    text:
      "Their good price and nice quality. They compensate according to this. They do your job perfectly and marvelously.",
    new: true,
    tone: "bg-rose-500/20 text-rose-300 ring-1 ring-rose-400/40",
  },
];

export default function GoogleReviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-[28px] border border-white/10 bg-[#040d1d]/80 p-6 md:p-8 shadow-[0_0_30px_rgba(197,160,89,0.08)]">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl font-bold text-[color:var(--foreground)]">4.8</div>
            <div className="flex items-center gap-1 text-lg text-yellow-400">★★★★★</div>
            <div className="text-sm text-zinc-400">(4 reviews)</div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-[color:var(--accent)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)] hover:bg-[color:var(--accent)] hover:text-black transition-colors">
              Reply to reviews
            </button>
            <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[color:var(--foreground)] hover:border-white/30 transition-colors">
              Get more reviews
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 border-b border-white/10 pb-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
          <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
          Recent
        </div>

        <div className="mt-4 space-y-5">
          {reviews.map((review) => (
            <div key={review.name} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
              <div className="flex items-start gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${review.tone}`}>
                  {review.initial}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="text-lg font-semibold text-[color:var(--foreground)]">{review.name}</div>
                    <div className="text-xs text-zinc-500">{review.meta}</div>
                    {review.new && (
                      <span className="rounded bg-[color:var(--accent)]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[color:var(--accent)]">
                        NEW
                      </span>
                    )}
                  </div>

                  <div className="mt-2 flex items-center gap-1 text-sm text-yellow-400">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <span key={`${review.name}-star-${index}`}>★</span>
                    ))}
                  </div>

                  <p className="mt-3 text-sm leading-7 text-zinc-300">{review.text}</p>

                  <button className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[color:var(--accent)]">
                    ↩ Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
