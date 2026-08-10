import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 text-paper-100 pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 sunset-glow opacity-40 pointer-events-none" />
      <div
        className="blob w-[700px] h-[700px] bg-moss-700/45 -top-40 left-1/4 animate-breathe"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1360px] px-6 lg:px-10">
        {/* Big claim */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-moss-400 animate-pulse-soft" />
              <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-paper-100/60">
                Paarberatung · Mediation · Coaching
              </span>
            </div>
            <h3 className="text-display text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.98] text-paper-50 balance">
              Wir freuen uns auf{" "}
              <span className="pull-quote text-moss-300">Ihre Nachricht.</span>
            </h3>
          </div>
          <div className="lg:col-span-4 lg:self-end">
            <div className="grid grid-cols-1 gap-3">
              <a
                href="tel:+491726344734"
                className="group border border-paper-100/15 rounded-2xl px-5 py-4 hover:border-moss-400 hover:bg-moss-800/25 transition-all flex items-center justify-between gap-3"
              >
                <div>
                  <div className="text-[11px] tracking-[0.16em] uppercase text-paper-100/55 mb-1">
                    Telefon
                  </div>
                  <div className="text-[15px] text-paper-50 tabular-nums">
                    0172 6344734
                  </div>
                </div>
                <span aria-hidden className="text-paper-100/60 group-hover:text-moss-300 group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </a>
              <a
                href="mailto:info@mediation-hecken.de"
                className="group border border-paper-100/15 rounded-2xl px-5 py-4 hover:border-moss-400 hover:bg-moss-800/25 transition-all flex items-center justify-between gap-3"
              >
                <div>
                  <div className="text-[11px] tracking-[0.16em] uppercase text-paper-100/55 mb-1">
                    E-Mail
                  </div>
                  <div className="text-[13px] text-paper-50 truncate">
                    info@mediation-hecken.de
                  </div>
                </div>
                <span aria-hidden className="text-paper-100/60 group-hover:text-moss-300 group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Info columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-paper-100/10">
          <div>
            <div className="text-[11px] tracking-[0.16em] uppercase text-paper-100/55 mb-4">
              Adresse
            </div>
            <address className="not-italic text-[14px] leading-[1.7] text-paper-100/85">
              Julia &amp; Tom Hecken
              <br />
              Schulstraße 28
              <br />
              66125 Saarbrücken
              <br />
              Jägersfreude
            </address>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.16em] uppercase text-paper-100/55 mb-4">
              Angebote
            </div>
            <ul className="space-y-2 text-[14px] text-paper-100/85">
              <li>
                <Link href="/leistungen#paarberatung" className="hover:text-paper-50 transition-colors">Paarberatung</Link>
              </li>
              <li>
                <Link href="/leistungen#einzelberatung" className="hover:text-paper-50 transition-colors">Einzelberatung</Link>
              </li>
              <li>
                <Link href="/leistungen#mediation" className="hover:text-paper-50 transition-colors">Mediation</Link>
              </li>
              <li>
                <Link href="/leistungen#walk-and-talk" className="hover:text-paper-50 transition-colors">Walk &amp; Talk</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.16em] uppercase text-paper-100/55 mb-4">
              Praxis
            </div>
            <ul className="space-y-2 text-[14px] text-paper-100/85">
              <li>
                <Link href="/ueber-uns" className="hover:text-paper-50 transition-colors">Über uns</Link>
              </li>
              <li>
                <Link href="/#preise" className="hover:text-paper-50 transition-colors">Preise</Link>
              </li>
              <li>
                <Link href="/#termine" className="hover:text-paper-50 transition-colors">Termine</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.16em] uppercase text-paper-100/55 mb-4">
              Rechtliches
            </div>
            <ul className="space-y-2 text-[14px] text-paper-100/85">
              <li>
                <Link href="/impressum" className="hover:text-paper-50 transition-colors">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-paper-50 transition-colors">Datenschutz</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 mt-10 border-t border-paper-100/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-paper-100/50">
          <div>
            © {new Date().getFullYear()} Julia &amp; Tom Hecken · Alle Rechte vorbehalten
          </div>
          <div className="flex items-center gap-2">
            <span className="text-moss-400">✽</span>
            <span>Mit Herz in Saarbrücken</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
