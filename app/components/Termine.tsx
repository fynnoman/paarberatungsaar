"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Termine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], ["-15%", "20%"]);

  return (
    <section id="termine" ref={ref} className="relative py-28 lg:py-44 overflow-hidden">
      <motion.div
        style={{ y: orbY }}
        className="blob w-[720px] h-[720px] bg-moss-200/50 top-40 -right-60 animate-breathe will-change-transform"
        aria-hidden
      />
      <div className="blob w-[500px] h-[500px] bg-oak-100/60 -top-20 left-1/4" aria-hidden />

      <div className="relative mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[13px] tabular-nums text-moss-600">03</span>
              <span className="w-8 h-px bg-ink-900/20" />
              <span className="eyebrow">Termine</span>
            </div>
            <h2 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] text-ink-950 leading-[1] balance">
              Finden wir die beste Zeit für{" "}
              <span className="pull-quote text-moss-600">Ihr Gespräch.</span>
            </h2>
          </div>
          <p className="lg:col-span-3 lg:col-start-10 text-[16px] leading-[1.7] text-ink-700 self-end pretty">
            Sollten Sie keinen passenden Termin finden, sprechen Sie uns
            gerne an — gemeinsam finden wir eine Zeit, die passt.
          </p>
        </div>

        {/* Two appointment cards */}
        <div className="grid lg:grid-cols-5 gap-4 lg:gap-6">
          <AppointmentCard
            featured
            duration="20 Minuten"
            price="Kostenlos"
            title={
              <>
                Kennenlern-
                <br />
                <span className="pull-quote text-moss-200">gespräch.</span>
              </>
            }
            body="Ein kurzes, unverbindliches Gespräch — telefonisch oder per Video. Wir lernen uns kennen, klären erste Fragen und prüfen gemeinsam, ob unsere Angebote zu Ihnen passen."
            note="Für den ersten Eindruck"
            span="lg:col-span-3"
          />
          <AppointmentCard
            duration="90 Minuten"
            price="ab 150 €"
            title={
              <>
                Beratung &amp;
                <br />
                <span className="pull-quote text-moss-600">Folgetermin.</span>
              </>
            }
            body="Vertiefendes Gespräch — Einzelberatung, Paarberatung oder Fortsetzung eines laufenden Prozesses. Vor Ort oder online, ganz wie Sie mögen."
            note="Für alle weiteren Termine"
            span="lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}

function AppointmentCard({
  featured,
  duration,
  price,
  title,
  body,
  note,
  span,
}: {
  featured?: boolean;
  duration: string;
  price: string;
  title: React.ReactNode;
  body: string;
  note: string;
  span: string;
}) {
  return (
    <article
      className={`relative rounded-apple-xl p-8 lg:p-12 border transition-all duration-500 hover:-translate-y-1 flex flex-col ${span} ${
        featured
          ? "bg-ink-950 text-paper-50 border-ink-950 apple-shadow-dark"
          : "bg-paper-50 border-ink-900/8 hover:border-moss-500 apple-shadow"
      } overflow-hidden`}
    >
      {featured && (
        <>
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-moss-700/40 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-moss-600/30 blur-3xl pointer-events-none" />
        </>
      )}

      <div className="relative">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <span
              className={`w-2 h-2 rounded-full ${
                featured ? "bg-moss-300 animate-pulse-soft" : "bg-moss-500"
              }`}
            />
            <span
              className={`text-[11px] font-medium tracking-[0.16em] uppercase ${
                featured ? "text-paper-100/75" : "text-ink-600"
              }`}
            >
              {duration}
            </span>
          </div>
          <span
            className={`text-[14px] tabular-nums font-medium ${
              featured ? "text-moss-200" : "text-ink-700"
            }`}
          >
            {price}
          </span>
        </div>

        <h3
          className={`text-display leading-[1] mb-6 ${
            featured ? "text-[clamp(2.5rem,5vw,4.5rem)] text-paper-50" : "text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink-950"
          }`}
        >
          {title}
        </h3>

        <p
          className={`leading-[1.7] pretty mb-10 max-w-xl ${
            featured ? "text-[15.5px] text-paper-100/85" : "text-[15px] text-ink-700"
          }`}
        >
          {body}
        </p>
      </div>

      <div className="relative mt-auto pt-8 border-t space-y-4 flex-col flex" style={{ borderColor: featured ? "rgba(245,235,218,0.12)" : "rgba(30,26,21,0.10)" }}>
        <a
          href="tel:+491726344734"
          className={`group inline-flex items-center justify-between w-full pl-6 pr-3 py-4 rounded-full transition-colors ${
            featured
              ? "bg-paper-50 text-ink-950 hover:bg-paper-100"
              : "bg-moss-700 text-paper-50 hover:bg-moss-800"
          }`}
        >
          <span className="text-[14.5px] font-medium">Termin buchen</span>
          <span
            className={`w-9 h-9 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform ${
              featured ? "bg-moss-700 text-paper-50" : "bg-paper-50/15"
            }`}
          >
            →
          </span>
        </a>
        <div
          className={`text-[12px] tracking-[0.14em] uppercase text-center ${
            featured ? "text-paper-100/55" : "text-ink-500"
          }`}
        >
          {note}
        </div>
      </div>
    </article>
  );
}
