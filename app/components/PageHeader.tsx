import Link from "next/link";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-paper-100/85 backdrop-blur-xl border-b border-ink-900/8">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-10 h-[68px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 shrink-0">
              <div className="absolute inset-0 rounded-full bg-moss-300 opacity-70 animate-breathe" />
              <div className="absolute inset-[6px] rounded-full bg-moss-500" />
              <div className="absolute inset-[10px] rounded-full bg-paper-100" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-display text-[20px] text-ink-950 tracking-tightest">
                Julia <span className="italic text-moss-600">&amp;</span> Tom
              </span>
              <span className="text-[10px] tracking-[0.18em] uppercase text-ink-500 mt-1">
                Paarberatung · Mediation
              </span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-[13px] text-ink-700 hover:text-ink-950 transition-colors inline-flex items-center gap-2"
          >
            <span aria-hidden>←</span> Zur Startseite
          </Link>
        </div>
      </header>

      <section className="relative pt-40 lg:pt-48 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 sunset-glow pointer-events-none opacity-70" />
        <div className="blob w-[400px] h-[400px] bg-oak-100/50 -top-20 -right-20" aria-hidden />

        <div className="relative mx-auto max-w-[1080px] px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-moss-500" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1 className="text-display text-[clamp(2.75rem,7vw,6.5rem)] text-ink-950 leading-[0.98] balance">
            {title}
          </h1>
          {intro && (
            <p className="mt-10 text-[19px] leading-[1.65] text-ink-700 max-w-[60ch] pretty">
              {intro}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
