"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "18%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section id="wir" ref={ref} className="relative py-28 lg:py-44 overflow-hidden">
      <div className="blob w-[520px] h-[520px] bg-oak-100/40 top-40 -right-40" aria-hidden />

      <div className="relative mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: eyebrow + big serif statement */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[13px] tabular-nums text-moss-600">01</span>
              <span className="w-8 h-px bg-ink-900/20" />
              <span className="eyebrow">Wir</span>
            </div>

            <h2 className="text-display text-[clamp(2.5rem,6vw,6rem)] text-ink-950 leading-[0.98] balance">
              Aus dem <br />
              <span className="pull-quote text-moss-600">Leben</span> —{" "}
              für Ihres.
            </h2>

            <div className="mt-14 grid md:grid-cols-2 gap-10 max-w-[62ch]">
              <p className="text-[17px] leading-[1.7] text-ink-800 pretty text-display-med">
                Wir sind Julia und Tom. Paarberater, Mediatoren und Coaches
                aus Saarbrücken — mit vier Kindern, viel Erfahrung und
                großem Herzen für Menschen.
              </p>
              <p className="text-[16px] leading-[1.75] text-ink-700 pretty">
                Wir haben selbst erlebt, wie schwer, aber auch wie schön
                Beziehungen sein können. Diese Nähe zum Leben tragen wir
                in unsere Arbeit: bodenständig, ehrlich, warmherzig.
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/ueber-uns"
                className="group inline-flex items-center gap-3 pl-6 pr-3 py-3 rounded-full border border-ink-900/15 text-ink-800 text-[14.5px] hover:border-moss-600 hover:text-moss-700 transition-colors"
              >
                Julia &amp; Tom kennenlernen
                <span className="w-8 h-8 rounded-full bg-ink-950 text-paper-50 flex items-center justify-center group-hover:bg-moss-700 group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right: two overlapping images with parallax */}
          <div className="lg:col-span-5 relative min-h-[500px] lg:min-h-[600px]">
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-[70%] aspect-[3/4] rounded-2xl overflow-hidden bg-moss-100 shadow-[0_30px_80px_-40px_rgba(74,94,51,0.4)] will-change-transform"
            >
              <motion.div style={{ scale }} className="absolute inset-0">
                <Image
                  src="/julia.png"
                  alt="Julia Hecken"
                  fill
                  sizes="(min-width: 1024px) 25vw, 55vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute bottom-3 left-3 bg-paper-50/95 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-[11px] text-ink-800 font-medium">Julia</span>
              </div>
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-0 right-0 w-[62%] aspect-[3/4] rounded-2xl overflow-hidden bg-oak-100 shadow-[0_30px_80px_-40px_rgba(74,94,51,0.4)] will-change-transform"
            >
              <motion.div style={{ scale }} className="absolute inset-0">
                <Image
                  src="/tom.png"
                  alt="Thomas Hecken"
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute bottom-3 right-3 bg-paper-50/95 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-[11px] text-ink-800 font-medium">Tom</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
