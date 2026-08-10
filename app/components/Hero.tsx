"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const wordsX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[110vh] w-full overflow-hidden pt-24"
    >
      {/* Warm gradient sky */}
      <div className="absolute inset-0 sunset-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grain-warm pointer-events-none" />

      {/* Ambient breathing blobs */}
      <div className="blob w-[560px] h-[560px] bg-moss-200/50 -top-40 -right-40 animate-breathe" aria-hidden />
      <div className="blob w-[500px] h-[500px] bg-oak-200/40 top-[380px] -left-40 animate-breathe" style={{ animationDelay: "2s" }} aria-hidden />

      <div className="relative mx-auto max-w-[1360px] px-6 lg:px-10 pt-12 lg:pt-16">
        {/* Top meta row */}
        <motion.div
          style={{ x: wordsX, opacity }}
          className="flex items-center justify-between mb-14 lg:mb-20"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-moss-500 animate-pulse-soft" />
            <span className="eyebrow">Paarberatung · Mediation · Coaching</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[12px] tabular-nums text-ink-500">
            <span>SAARBRÜCKEN · 49°14′N</span>
            <span className="w-4 h-px bg-ink-400" />
            <span>SEIT 2019</span>
          </div>
        </motion.div>

        <motion.div
          style={{ y: textY, opacity }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Text column */}
          <div className="lg:col-span-7">
            <h1 className="text-display text-[clamp(3.5rem,10vw,10rem)] text-ink-950 leading-[0.9] tracking-tightest">
              Wieder ins
              <br />
              <span className="italic text-moss-600 pull-quote">Gespräch</span>{" "}
              kommen.
            </h1>

            <p className="mt-10 lg:mt-14 max-w-[52ch] text-[19px] leading-[1.65] text-ink-700 pretty">
              Willkommen bei Julia und Tom. Wir begleiten Sie einfühlsam durch
              Konflikte, Krisen und Neuanfänge — als Paar, als Einzelperson
              oder in der Mediation. <span className="text-display italic text-moss-700">Ehrlich, warmherzig, lösungsorientiert.</span>
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#termine"
                className="group inline-flex items-center gap-3 pl-7 pr-3 py-3.5 rounded-full bg-moss-700 text-paper-50 text-[15px] hover:bg-moss-800 transition-colors"
              >
                Kostenloses Kennenlernen
                <span className="w-8 h-8 rounded-full bg-paper-50/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#angebote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-ink-800 text-[15px] hover:text-moss-700 transition-colors underline underline-offset-4 decoration-moss-500/40 hover:decoration-moss-700"
              >
                Unsere Angebote entdecken
              </a>
            </div>

            {/* Trust chips */}
            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13.5px] text-ink-600">
              {[
                "20 Min kostenlos",
                "Vor Ort oder online",
                "Diskret & vertraulich",
                "Ohne Wartezeit",
              ].map((c) => (
                <span key={c} className="inline-flex items-center gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-moss-500" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Portrait column */}
          <div className="lg:col-span-5 relative">
            <div className="float-slow">
              <motion.div
                style={{ y: imgY, scale: imgScale }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="relative aspect-[4/5] rounded-apple-xl overflow-hidden bg-moss-100 apple-shadow will-change-transform group"
              >
                <Image
                  src="/julia-tom-hero.png"
                  alt="Julia und Tom Hecken"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover object-center transition-transform duration-[1.5s] group-hover:scale-[1.04]"
                />
                {/* Warm color grade */}
                <div className="absolute inset-0 mix-blend-soft-light bg-gradient-to-tr from-moss-500/25 via-transparent to-oak-200/40 pointer-events-none" />

                {/* Corner sticker */}
                <div className="absolute top-5 left-5 flex items-center gap-2.5 bg-paper-50/90 backdrop-blur-xl rounded-full pl-2 pr-4 py-1.5 apple-shadow">
                  <span className="w-2 h-2 rounded-full bg-moss-500 animate-pulse-soft" />
                  <span className="text-[11px] font-medium text-ink-800 tracking-wide">
                    Neue Termine frei
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Signature label under portrait */}
            <div className="mt-6 flex items-end justify-between px-2">
              <div>
                <div className="pull-quote text-3xl text-moss-800 leading-none">
                  Julia &amp; Tom.
                </div>
                <div className="eyebrow mt-2">Ihr Team in Saarbrücken</div>
              </div>
              <div className="hidden sm:block text-right">
                <div className="text-display text-4xl text-ink-950 tabular-nums leading-none">
                  04
                </div>
                <div className="eyebrow mt-2">Kinder</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-500"
      >
        <span className="eyebrow">Scrollen</span>
        <div className="w-px h-8 bg-moss-500/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-moss-600 animate-[bob_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes bob {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
