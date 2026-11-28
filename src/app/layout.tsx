import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/site";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: `${SITE.name} | Crispy Fried Chicken, Burgers & Wraps in Mumbra`,
  description: SITE.description,
  metadataBase: new URL("https://chicken-albax.vercel.app"),
  alternates: { canonical: "/" },
  verification: {
    google: "ijI2dGum0uld81gX4kWnBSm0ld3M6J_nGJ_JHBQMxfk",
  },
  robots: { index: true, follow: true },
  keywords: [
    "Chicken Albax Mumbra",
    "Chicken Albax",
    "fried chicken Mumbra",
    "fast food Mumbra",
    "chicken burger Kausa",
    "chizza",
    "shawarma Mumbra",
    "Thane restaurant",
  ],
  openGraph: {
    title: `${SITE.name} - Mumbra`,
    description: SITE.description,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#D62828",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  name: SITE.name,
  telephone: SITE.phoneTel,
  email: SITE.email,
  priceRange: "₹400-₹600",
  servesCuisine: ["Fast Food", "Fried Chicken", "Burgers", "Wraps"],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop no. 10, Building no. 1, Central Heights, MM Valley Road, opposite Central Empire, beside Mumbra Kabrastan, Kausa",
    addressLocality: "Mumbra, Thane",
    addressRegion: "Maharashtra",
    postalCode: "400612",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "16:00",
      closes: "23:59",
    },
  ],
  sameAs: [SITE.instagram],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Chicken Albax",
  alternateName: ["Chicken Albax Mumbra"],
  url: "https://chicken-albax.vercel.app/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {children}
      </body>
    </html>
  );
}
