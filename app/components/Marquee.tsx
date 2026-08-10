const words = [
  "Zuhören",
  "Verstehen",
  "Fühlen",
  "Sprechen",
  "Ankommen",
  "Wachsen",
  "Loslassen",
  "Vergeben",
  "Neu beginnen",
];

export default function Marquee() {
  const line = [...words, ...words];
  return (
    <section
      aria-hidden
      className="relative py-8 border-y border-ink-900/8 bg-paper-50/50 backdrop-blur-sm overflow-hidden"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap will-change-transform">
          {line.map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-12 shrink-0 pull-quote text-3xl md:text-4xl text-ink-950"
            >
              {w}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-moss-500"
                aria-hidden
              >
                <path
                  d="M12 2v20M2 12h20M4 4l16 16M20 4L4 20"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  opacity="0.5"
                />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
