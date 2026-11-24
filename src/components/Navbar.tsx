"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "@/data/site";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-charcoal/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 font-display text-3xl tracking-wide" aria-label="Chicken Albax home">
          <img src="/chicken-albax-logo.svg" alt="Chicken Albax logo" className="h-11 w-11 rounded-full object-contain" />
          <span className="text-brand-yellow">Chicken</span>{" "}
          <span className="text-brand-red">Albax</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:text-brand-yellow"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-yellow !py-2">
              <Phone size={16} /> Order Now
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-white md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-brand-charcoal md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 font-semibold uppercase tracking-wide text-white/90 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="btn btn-yellow w-full"
              >
                <Phone size={16} /> Order Now: {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
