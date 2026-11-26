"use client";

import { useState } from "react";
import Image from "next/image";
import { Flame, Sparkles, Star } from "lucide-react";
import { HIGHLIGHTS, MENU, type MenuItem } from "@/data/menu";
import BucketIcon from "./BucketIcon";

function VegDot({ veg }: { veg?: boolean }) {
  return (
    <span
      title={veg ? "Vegetarian" : "Non-vegetarian"}
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
      className={`mt-1.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm border-2 ${
        veg ? "border-green-500" : "border-red-500"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          veg ? "bg-green-500" : "bg-red-500"
        }`}
      />
    </span>
  );
}

function Row({ item, showDiet }: { item: MenuItem; showDiet: boolean }) {
  return (
    <li className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
      {showDiet && <VegDot veg={item.veg} />}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-semibold text-white">{item.name}</h4>
          {item.isNew && (
            <span className="inline-flex items-center gap-1 rounded bg-brand-yellow px-1.5 py-0.5 text-[10px] font-bold uppercase text-brand-charcoal">
              <Sparkles size={10} /> New
            </span>
          )}
          {item.best && (
            <span className="inline-flex items-center gap-1 rounded bg-brand-red px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
              <Flame size={10} /> Best seller
            </span>
          )}
          {item.recommended && (
            <span className="inline-flex items-center gap-1 rounded bg-brand-red px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
              <Star size={10} /> Recommended
            </span>
          )}
        </div>
        {item.note && (
          <p className="mt-1 text-xs leading-relaxed text-white/60">
            {item.note}
          </p>
        )}
      </div>
      <div className="flex shrink-0 flex-wrap justify-end gap-x-3 gap-y-1 text-right">
        {item.prices.map((pr, i) => (
          <div key={i} className="leading-tight">
            {pr.label && (
              <div className="text-[10px] uppercase tracking-wide text-white/50">
                {pr.label}
              </div>
            )}
            <div className="font-bold text-brand-yellow">₹{pr.amount}</div>
          </div>
        ))}
      </div>
    </li>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const category = MENU.find((c) => c.id === active) ?? MENU[0];

  return (
    <section id="menu" className="bg-brand-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-brand-yellow">
            Menu Highlights
          </p>
          <h2 className="section-title mt-2">What everyone is ordering</h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <li
              key={h.name}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark p-5 shadow-card transition hover:-translate-y-1"
            >
              {h.tag && (
                <span className="absolute right-3 top-3 rounded-full bg-brand-yellow px-2 py-0.5 text-[10px] font-bold uppercase text-brand-charcoal">
                  {h.tag}
                </span>
              )}
              <div className="flex min-h-[3.5rem] items-center text-5xl" aria-hidden>
                {h.emoji === "platter" ? (
                  <Image
                    src="/platter.webp"
                    alt="Al-Baik Special Platter: popcorn, nuggets, strips, fries and two dips"
                    width={760}
                    height={603}
                    className="h-28 w-auto drop-shadow-[0_6px_8px_rgba(0,0,0,0.3)]"
                  />
                ) : h.emoji === "bucket" ? (
                  <BucketIcon className="h-20 w-auto" />
                ) : (
                  h.emoji
                )}
              </div>
              <h3 className="mt-3 font-display text-2xl uppercase tracking-wide">
                {h.name}
              </h3>
              <p className="mt-1 text-sm text-white/85">{h.desc}</p>
              <p className="mt-3 text-sm font-bold text-brand-yellow">
                From ₹{h.from}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center">
          <h3 className="section-title text-brand-yellow">Full Menu</h3>
          <p className="mt-1 text-sm text-white/60">
            Prices in ₹. Call us to confirm availability.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Menu categories"
          className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
        >
          {MENU.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              onClick={() => setActive(c.id)}
              className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === c.id
                  ? "bg-brand-yellow text-brand-charcoal"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {c.emoji === "bucket" ? (
                <BucketIcon className="-my-1 mr-1.5 h-7 w-auto" />
              ) : (
                <span className="mr-1" aria-hidden>
                  {c.emoji}
                </span>
              )}
              {c.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="mt-8 space-y-8">
          {category.groups.map((g, i) => (
            <div key={g.title ?? i}>
              {g.title && (
                <h4 className="mb-3 font-display text-2xl uppercase tracking-wide text-brand-yellow">
                  {g.title}
                </h4>
              )}
              <ul className="grid gap-3 md:grid-cols-2">
                {g.items.map((item) => (
                  <Row
                    key={item.name}
                    item={item}
                    showDiet={!category.hideDiet}
                  />
                ))}
              </ul>
            </div>
          ))}
          {category.footnote && (
            <p className="rounded-lg bg-brand-yellow/10 p-3 text-center text-sm text-brand-yellow">
              {category.footnote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
