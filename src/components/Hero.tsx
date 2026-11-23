import { Clock, MapPin, Phone, Truck } from "lucide-react";
import { SITE } from "@/data/site";
import OpenStatus from "./OpenStatus";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-brand-red via-brand-red to-brand-red-dark pt-24 pb-16 sm:pt-32 sm:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-black/25 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <OpenStatus />
          <h1 className="mt-4 font-display text-6xl uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
            Crispy.
            <br />
            <span className="text-brand-yellow">Juicy.</span>
            <br />
            Albax.
          </h1>
          <p className="mt-5 max-w-md text-base text-white/90 sm:text-lg">
            Crispy fried chicken, stacked burgers, loaded fries and the famous
            Chicken Cheeza, freshly made in Mumbra every evening.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-yellow">
              <Phone size={18} /> Order Now
            </a>
            <a href="#menu" className="btn btn-outline">
              View Menu
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-brand-yellow" />
              {SITE.hours}, daily
            </li>
            <li className="flex items-center gap-2">
              <Truck size={16} className="text-brand-yellow" />
              Free delivery
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-yellow" />
              Kausa, Mumbra
            </li>
          </ul>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-brand-yellow shadow-card" />
          <div className="absolute inset-4 rounded-full border-4 border-dashed border-brand-red/40" />
          <span className="relative text-[9rem] leading-none sm:text-[11rem]" role="img" aria-label="Fried chicken">
            🍗
          </span>
          <span className="absolute left-2 top-6 text-5xl sm:text-6xl" aria-hidden>🍔</span>
          <span className="absolute bottom-6 right-2 text-5xl sm:text-6xl" aria-hidden>🍟</span>
          <span className="absolute -bottom-2 left-6 text-4xl sm:text-5xl" aria-hidden>🌯</span>
        </div>
      </div>
    </section>
  );
}
