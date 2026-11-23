import { Clock, IndianRupee, MapPin, Truck } from "lucide-react";
import { SITE } from "@/data/site";

const FACTS = [
  { icon: MapPin, title: "Find us", body: SITE.addressLines.join(" ") },
  { icon: Clock, title: "Hours", body: `${SITE.hours} · ${SITE.days}` },
  { icon: IndianRupee, title: "Price range", body: SITE.priceRange },
  { icon: Truck, title: "Delivery", body: "Free delivery. Also on Zomato and Swiggy." },
];

export default function About() {
  return (
    <section id="about" className="bg-brand-yellow py-16 text-brand-charcoal sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-widest text-brand-red">
            About Us
          </p>
          <h2 className="section-title mt-2">Original taste, made fresh</h2>
          <p className="mt-4 text-base leading-relaxed">
            Chicken Albax is Mumbra&apos;s go-to spot for crispy fried chicken
            and fast food. Everything is freshly prepared in store with quality
            ingredients, from golden broast and lollipops to Chicken Cheeza,
            stacked burgers, wraps and loaded fries.
          </p>
          <p className="mt-3 text-base leading-relaxed">
            Whether it&apos;s a quick burger meal or a Family Meal for the
            whole gang, we have something for every craving, vegetarian
            options included.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {FACTS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rounded-2xl bg-white p-5 shadow-card">
              <Icon className="text-brand-red" size={24} />
              <h3 className="mt-2 font-display text-2xl uppercase tracking-wide">
                {title}
              </h3>
              <p className="mt-1 text-sm text-brand-ink">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
