"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  ["Angebote", "/#angebote"],
  ["Über uns", "/ueber-uns"],
  ["Termine", "/#termine"],
  ["Kontakt", "/#kontakt"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper-100/85 backdrop-blur-xl border-b border-ink-900/8"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Mark />
          <div className="flex flex-col leading-none">
            <span className="text-display text-[20px] text-ink-950 tracking-tightest">
              Julia <span className="italic text-moss-600">&amp;</span> Tom
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-ink-500 mt-1">
              Paarberatung · Mediation
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="nav-link text-[13.5px] text-ink-700 hover:text-ink-950 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+491726344734"
            className="hidden md:inline-block text-[13.5px] text-ink-700 hover:text-ink-950 transition-colors tabular-nums"
          >
            0172 6344734
          </a>
          <a
            href="/#termine"
            className="group inline-flex items-center gap-2 pl-5 pr-3 py-2 text-[13px] font-medium text-paper-50 bg-moss-700 hover:bg-moss-800 transition-colors rounded-full"
          >
            Termin buchen
            <span className="w-6 h-6 rounded-full bg-paper-50/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Mark() {
  return (
    <div className="relative w-8 h-8 shrink-0">
      <div className="absolute inset-0 rounded-full bg-moss-300 opacity-70 animate-breathe" />
      <div className="absolute inset-[6px] rounded-full bg-moss-500" />
      <div className="absolute inset-[10px] rounded-full bg-paper-100" />
    </div>
  );
}
