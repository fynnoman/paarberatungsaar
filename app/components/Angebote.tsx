"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    n: "01",
    slug: "paarberatung",
    title: "Paarberatung",
    lead: "Wieder ins Gespräch kommen.",
    body: "Für Paare, die Konflikte hinter sich lassen und wieder zueinander finden möchten. Ein geschützter Raum, in dem beide gehört werden.",
    image: "/beratung-szene.png",
    tint: "moss" as const,
    featured: true,
  },
  {
    n: "02",
    slug: "einzelberatung",
    title: "Einzelberatung",
    lead: "Klarheit für sich selbst.",
    body: "Für alle, die zunächst allein hinschauen möchten — eigene Bedürfnisse verstehen, Muster erkennen, sich neu ausrichten.",
    image: "https://picsum.photos/seed/einzelberatung/800/1000",
    tint: "oak" as const,
  },
  {
    n: "03",
    slug: "trennungsbegleitung",
    title: "Trennungsbegleitung",
    lead: "Wenn Wege sich trennen.",
    body: "Wir stehen an Ihrer Seite, wenn eine Beziehung endet — respektvoll, klar, mit Blick auf das, was war und was kommen kann.",
    image: "https://picsum.photos/seed/trennungsbegleitung/800/1000",
    tint: "moss" as const,
  },
  {
    n: "04",
    slug: "mediation",
    title: "Mediation",
    lead: "Konflikte gemeinsam lösen.",
    body: "Als neutrale Vermittler helfen wir Ihnen, tragfähige Vereinbarungen zu finden — in Familie, Erbe, Nachbarschaft oder Beruf.",
    image: "https://picsum.photos/seed/mediation-julia-tom/800/1000",
    tint: "oak" as const,
  },
  {
    n: "05",
    slug: "walk-and-talk",
    title: "Walk & Talk",
    lead: "Reden in Bewegung.",
    body: "Beratung in der Natur. Beim gemeinsamen Gehen entstehen neue Perspektiven — bodenständig, ruhig und mit klarem Kopf.",
    image: "https://picsum.photos/seed/walk-and-talk-nature/800/1000",
    tint: "moss" as const,
  },
  {
    n: "06",
    slug: "wegbegleitung",
    title: "Wegbegleitung",
    lead: "Über einen längeren Zeitraum.",
    body: "Wenn einzelne Termine nicht genügen, begleiten wir Sie kontinuierlich vom Ausgangspunkt bis zu Ihrem selbst gewählten Ziel.",
    image: "https://picsum.photos/seed/wegbegleitung-path/800/1000",
    tint: "oak" as const,
  },
];

export default function Angebote() {
  return (
    <section id="angebote" className="relative py-28 lg:py-44 overflow-hidden">
      <div className="blob w-[600px] h-[600px] bg-moss-200/50 top-40 -left-40 animate-breathe" aria-hidden />
      <div className="blob w-[520px] h-[520px] bg-oak-100/60 bottom-40 -right-40 animate-breathe" style={{ animationDelay: "3s" }} aria-hidden />

      <div className="relative mx-auto max-w-[1360px] px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[13px] tabular-nums text-moss-600">02</span>
              <span className="w-8 h-px bg-ink-900/20" />
              <span className="eyebrow">Unsere Angebote</span>
            </div>
            <h2 className="text-display text-[clamp(2.75rem,7vw,6.5rem)] text-ink-950 leading-[0.98] balance">
              Sechs Wege, wie wir Sie{" "}
              <span className="pull-quote text-moss-600">begleiten.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-[16.5px] leading-[1.7] text-ink-700 self-end pretty">
            Konkrete und nachhaltige Lösungen für Beziehungsthemen —
            persönlich vor Ort in Saarbrücken oder online, ganz wie es
            Ihnen passt.
          </p>
        </div>

        {/* Featured — 4 grid — Featured */}
        <div className="space-y-4 lg:space-y-5">
          {/* Top feature (01) */}
          <FeatureCard item={items[0]} />

          {/* Middle 2×2 grid (02–05) */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-5">
            {items.slice(1, 5).map((it, i) => (
              <ServiceCard
                key={it.slug}
                item={it}
                span="md:col-span-3"
                tall={i === 0 || i === 2}
              />
            ))}
          </div>

          {/* Bottom feature (06) — mirrored */}
          <FeatureCard item={items[5]} reverse />
        </div>

        {/* Full CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/leistungen"
            className="group inline-flex items-center gap-3 pl-6 pr-3 py-3.5 rounded-full bg-ink-950 text-paper-50 text-[14.5px] hover:bg-ink-800 transition-colors"
          >
            Alle Angebote im Detail
            <span className="w-8 h-8 rounded-full bg-moss-700 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------- Featured wide card -------- */

function FeatureCard({
  item,
  reverse,
}: {
  item: (typeof items)[number];
  reverse?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);

  const badge = reverse ? "Für den langen Weg" : "Herz unserer Arbeit";

  return (
    <motion.article
      ref={ref}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className="group relative rounded-apple-xl overflow-hidden bg-ink-900 grid lg:grid-cols-12 min-h-[520px] lg:min-h-[560px] will-change-transform apple-shadow"
    >
      {/* Image side */}
      <div
        className={`relative lg:col-span-7 h-72 lg:h-full overflow-hidden ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover transition-transform duration-[1.8s] group-hover:scale-[1.05]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-moss-800/25 mix-blend-multiply" />
        <div
          className={`absolute inset-0 ${
            reverse
              ? "bg-gradient-to-tl from-ink-950/40 via-transparent to-transparent"
              : "bg-gradient-to-tr from-ink-950/40 via-transparent to-transparent"
          }`}
        />
        {/* Corner badge */}
        <div
          className={`absolute top-6 flex items-center gap-2 bg-paper-50/90 backdrop-blur-xl rounded-full px-3.5 py-1.5 apple-shadow ${
            reverse ? "right-6" : "left-6"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-moss-500" />
          <span className="text-[10.5px] font-medium tracking-[0.16em] uppercase text-ink-800">
            {badge}
          </span>
        </div>
      </div>

      {/* Content side — warm oak dark */}
      <div
        className={`relative lg:col-span-5 bg-moss-800 text-paper-50 p-8 lg:p-12 flex flex-col justify-between ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        <div className="absolute inset-0 warm-glow opacity-60 pointer-events-none" />

        <div className="relative">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[13px] tabular-nums text-moss-200">{item.n}</span>
            <span className="w-8 h-px bg-paper-100/25" />
            <span className="eyebrow-dark">Angebot {item.n}</span>
          </div>
          <h3 className="text-display text-4xl lg:text-6xl leading-[0.98] mb-4">
            {item.title}
          </h3>
          <p className="pull-quote text-2xl lg:text-3xl text-oak-200 mb-6">
            {item.lead}
          </p>
          <p className="text-[15.5px] leading-[1.7] text-paper-100/85 pretty max-w-md">
            {item.body}
          </p>
        </div>

        <div className="relative mt-10">
          <Link
            href={`/leistungen#${item.slug}`}
            className="group/link inline-flex items-center gap-3 pl-6 pr-3 py-3 rounded-full bg-paper-50 text-ink-950 text-[14px] hover:bg-paper-100 transition-colors"
          >
            Mehr erfahren
            <span className="w-8 h-8 rounded-full bg-moss-700 text-paper-50 flex items-center justify-center group-hover/link:translate-x-0.5 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* -------- Small card -------- */

function ServiceCard({
  item,
  span,
  tall,
}: {
  item: (typeof items)[number];
  span: string;
  tall?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);

  const tintClass =
    item.tint === "oak" ? "bg-oak-600/28" : "bg-moss-700/30";
  const chipTintClass =
    item.tint === "oak" ? "text-oak-200" : "text-moss-200";

  const aspect = tall ? "aspect-[4/5]" : "aspect-[5/6]";

  return (
    <motion.article
      ref={ref}
      whileHover={{ y: -8, rotate: tall ? -0.4 : 0.4 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={`group relative rounded-apple overflow-hidden bg-ink-900 ${aspect} ${span} will-change-transform apple-shadow`}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.8s] group-hover:scale-[1.05]"
        />
      </motion.div>

      {/* Consistent oak+moss color grade */}
      <div className={`absolute inset-0 ${tintClass} mix-blend-multiply`} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

      {/* Number */}
      <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
        <span className="text-display text-4xl lg:text-5xl text-paper-50/25 tabular-nums leading-none">
          {item.n}
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-7 lg:p-9 flex flex-col justify-end text-paper-50">
        <div className="flex items-center gap-2 mb-4">
          <span className={`w-1.5 h-1.5 rounded-full ${item.tint === "oak" ? "bg-oak-300" : "bg-moss-300"}`} />
          <span className="eyebrow-dark">Angebot {item.n}</span>
        </div>
        <h3 className="text-display text-2xl lg:text-3xl leading-[1.05] mb-2">
          {item.title}
        </h3>
        <p className={`pull-quote text-lg lg:text-xl mb-4 ${chipTintClass}`}>
          {item.lead}
        </p>
        <p className="text-[14px] leading-[1.7] text-paper-100/85 pretty">
          {item.body}
        </p>

        <div className="mt-6">
          <Link
            href={`/leistungen#${item.slug}`}
            className="inline-flex items-center gap-2 text-[13.5px] text-paper-50 hover:text-moss-200 transition-colors"
          >
            Mehr erfahren
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
