import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { MAPS_EMBED, MAPS_LINK, SITE } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-brand-yellow">
            Contact
          </p>
          <h2 className="section-title mt-2">Hungry? Call us now</h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-center gap-4 rounded-2xl bg-brand-red p-5 shadow-card transition hover:brightness-110"
            >
              <Phone size={28} className="shrink-0 text-brand-yellow" />
              <div>
                <p className="text-xs uppercase tracking-wide text-white/80">
                  Order now · Free delivery
                </p>
                <p className="font-display text-3xl tracking-wide">
                  {SITE.phoneDisplay}
                </p>
              </div>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
              >
                <MessageCircle className="text-green-400" />
                <span className="text-sm font-semibold">WhatsApp us</span>
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
              >
                <Instagram className="text-pink-400" />
                <span className="text-sm font-semibold">
                  {SITE.instagramHandle}
                </span>
              </a>
            </div>

            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
            >
              <Mail className="shrink-0 text-brand-yellow" />
              <span className="break-all text-sm">{SITE.email}</span>
            </a>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
            >
              <MapPin className="mt-0.5 shrink-0 text-brand-yellow" />
              <address className="text-sm not-italic leading-relaxed text-white/90">
                {SITE.addressOneLine}
                <span className="mt-2 block text-xs font-semibold uppercase tracking-wide text-brand-yellow">
                  Open in Google Maps →
                </span>
              </address>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card">
            <iframe
              title="Chicken Albax location map"
              src={MAPS_EMBED}
              className="h-80 w-full border-0 lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
