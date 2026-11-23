import { Instagram, Phone } from "lucide-react";
import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pb-24 pt-10 sm:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center">
        <p className="font-display text-3xl tracking-wide">
          <span className="text-brand-yellow">Chicken</span>{" "}
          <span className="text-brand-red">Albax</span>
        </p>
        <p className="text-sm text-white/60">{SITE.tagline}</p>
        <p className="max-w-xl text-xs text-white/50">
          {SITE.addressOneLine}
        </p>
        <div className="flex items-center gap-5 text-sm">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-2 hover:text-brand-yellow"
          >
            <Phone size={16} /> {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand-yellow"
          >
            <Instagram size={16} /> {SITE.instagramHandle}
          </a>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>

      {/* Sticky mobile call bar */}
      <a
        href={`tel:${SITE.phoneTel}`}
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-brand-yellow py-3 text-sm font-bold uppercase tracking-wide text-brand-charcoal shadow-[0_-4px_16px_rgba(0,0,0,0.4)] sm:hidden"
      >
        <Phone size={18} /> Call to Order · {SITE.phoneDisplay}
      </a>
    </footer>
  );
}
