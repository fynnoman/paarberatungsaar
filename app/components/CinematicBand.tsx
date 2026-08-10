"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  image: string;
  eyebrow: string;
  quote: React.ReactNode;
  attribution?: string;
  cta?: { label: string; href: string };
  minHeight?: string;
  align?: "left" | "center";
};

export default function CinematicBand({
  image,
  eyebrow,
  quote,
  attribution,
  cta,
  minHeight = "min-h-[80vh]",
  align = "left",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      className={`relative w-full ${minHeight} overflow-hidden bg-ink-950`}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Warm color grade */}
      <div className="absolute inset-0 mix-blend-multiply bg-moss-900/40" />
      <div
        className={`absolute inset-0 ${
          align === "left"
            ? "bg-gradient-to-r from-ink-950/85 via-ink-950/40 to-transparent"
            : "bg-gradient-to-b from-ink-950/70 via-ink-950/20 to-ink-950/75"
        }`}
      />
      <div className="grain-warm-overlay" />

      <motion.div
        style={{ y: textY }}
        className={`relative h-full min-h-[inherit] flex ${
          align === "center" ? "items-center" : "items-end"
        }`}
      >
        <div
          className={`mx-auto max-w-[1360px] px-6 lg:px-10 w-full py-16 lg:py-24 ${
            align === "center" ? "text-center" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-3xl ${align === "center" ? "mx-auto" : ""}`}
          >
            <div
              className={`flex items-center gap-3 mb-6 ${
                align === "center" ? "justify-center" : ""
              }`}
            >
              <span className="w-6 h-px bg-moss-300" />
              <span className="eyebrow-dark">{eyebrow}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="pull-quote text-[clamp(2rem,5.5vw,5.5rem)] text-paper-50 leading-[1.05] balance"
            >
              {quote}
            </motion.div>

            {attribution && (
              <div className="mt-8 flex items-center gap-3 text-paper-100/80">
                <span className="w-6 h-px bg-moss-300" />
                <span className="eyebrow-dark">{attribution}</span>
              </div>
            )}

            {cta && (
              <div className={`mt-10 ${align === "center" ? "flex justify-center" : ""}`}>
                <a
                  href={cta.href}
                  className="group inline-flex items-center gap-3 pl-6 pr-3 py-3 rounded-full bg-paper-50 text-ink-950 text-[14.5px] hover:bg-paper-100 apple-shadow transition-colors"
                >
                  {cta.label}
                  <span className="w-8 h-8 rounded-full bg-moss-700 text-paper-50 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
