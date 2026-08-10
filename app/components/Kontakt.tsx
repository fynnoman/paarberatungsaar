"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Kontakt() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);

  return (
    <section id="kontakt" ref={ref} className="relative py-28 lg:py-44 overflow-hidden">
      <motion.div
        style={{ y: orbY }}
        className="blob w-[600px] h-[600px] bg-moss-200/50 top-40 right-1/3 will-change-transform"
        aria-hidden
      />
      <div className="blob w-[500px] h-[500px] bg-oak-100/60 -top-20 -left-40" aria-hidden />

      <div className="relative mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[13px] tabular-nums text-moss-600">05</span>
              <span className="w-8 h-px bg-ink-900/20" />
              <span className="eyebrow">Kontakt</span>
            </div>
            <h2 className="text-display text-[clamp(2.5rem,6.5vw,6rem)] text-ink-950 leading-[0.98] balance mb-10">
              Melden Sie sich —{" "}
              <span className="pull-quote text-moss-600">gerne.</span>
            </h2>
            <p className="text-[17.5px] leading-[1.7] text-ink-700 pretty max-w-[52ch]">
              Ob per Telefon, WhatsApp oder E-Mail — schreiben oder rufen Sie
              uns einfach an. Uns ist wichtig, dass Sie sich bei uns von
              Anfang an gut aufgehoben fühlen.
            </p>

            <div className="mt-12 pt-8 border-t border-ink-900/10 space-y-5">
              <ContactLine label="Adresse">
                Schulstraße 28
                <br />
                66125 Saarbrücken · Jägersfreude
              </ContactLine>
              <ContactLine label="Antwortzeit">
                In der Regel innerhalb eines Werktags
              </ContactLine>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            <ContactCard
              icon="phone"
              label="Telefon"
              main="0172 6344734"
              href="tel:+491726344734"
              hint="Am schnellsten erreichbar."
              accent="terra"
            />
            <ContactCard
              icon="whatsapp"
              label="WhatsApp"
              main="Nachricht schreiben"
              href="https://wa.me/491726344734"
              hint="Auch kurze Anfragen sind willkommen."
              external
              accent="sage"
            />
            <ContactCard
              icon="mail"
              label="E-Mail"
              main="info@mediation-hecken.de"
              href="mailto:info@mediation-hecken.de"
              hint="Wir melden uns zeitnah zurück."
              accent="peach"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="eyebrow mb-2">{label}</div>
      <div className="text-[15.5px] text-ink-800 leading-[1.6]">{children}</div>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  main,
  href,
  hint,
  external,
  accent,
}: {
  icon: "phone" | "whatsapp" | "mail";
  label: string;
  main: string;
  href: string;
  hint: string;
  external?: boolean;
  accent: "terra" | "sage" | "peach";
}) {
  const accentClass =
    accent === "terra"
      ? "bg-moss-100 text-moss-700 group-hover:bg-moss-200"
      : accent === "sage"
        ? "bg-moss-100 text-moss-700 group-hover:bg-moss-300"
        : "bg-oak-100 text-moss-700 group-hover:bg-oak-200";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group relative bg-paper-50 border border-ink-900/8 rounded-apple p-6 lg:p-7 flex items-center justify-between gap-4 hover:border-moss-400 hover:bg-paper-50 apple-shadow-lift"
    >
      <div className="flex items-center gap-5">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors shrink-0 ${accentClass}`}>
          <Icon name={icon} />
        </div>
        <div>
          <div className="eyebrow mb-1">{label}</div>
          <div className="text-[17px] text-ink-950">{main}</div>
        </div>
      </div>
      <div className="hidden sm:flex flex-col items-end gap-1 text-right">
        <span className="text-[12px] text-ink-500">{hint}</span>
        <span className="w-8 h-8 rounded-full border border-ink-900/10 flex items-center justify-center text-ink-500 group-hover:border-moss-600 group-hover:text-moss-700 group-hover:translate-x-0.5 transition-all">
          →
        </span>
      </div>
    </a>
  );
}

function Icon({ name }: { name: "phone" | "whatsapp" | "mail" }) {
  if (name === "phone")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
      </svg>
    );
  if (name === "whatsapp")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-4.6-7.85L21 3l-1.15 4.6A9 9 0 0 1 21 12z" />
        <path d="M8 10c0 3 3 6 6 6l1.5-1.5-2-1-1 .5c-1 0-2-1-2-2l.5-1-1-2z" />
      </svg>
    );
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
