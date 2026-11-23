export const SITE = {
  name: "Chicken Albax",
  tagline: "Original Taste. Crispy. Fresh. Fired Up.",
  description:
    "Chicken Albax in Mumbra, Thane - crispy fried chicken, burgers, wraps, shawarma, loaded fries and the Special Albax Platter. Open 4 PM to 12 AM, free delivery.",
  phoneDisplay: "+91 99870 16877",
  phoneTel: "+919987016877",
  whatsapp: "https://wa.me/919987016877",
  email: "chickenalbaxmumbra@gmail.com",
  instagram: "https://www.instagram.com/chickenalbax",
  instagramHandle: "@chickenalbax",
  addressLines: [
    "Shop no. 10, Building no. 1, Central Heights,",
    "MM Valley Road, opposite Central Empire,",
    "beside Mumbra Kabrastan, Kausa,",
    "Mumbra, Thane, Maharashtra 400612",
  ],
  addressOneLine:
    "Shop no. 10, Building no. 1, Central Heights, MM Valley Road, opposite Central Empire, beside Mumbra Kabrastan, Kausa, Mumbra, Thane, Maharashtra 400612",
  hours: "4:00 PM – 12:00 AM",
  days: "Monday to Sunday",
  priceRange: "₹400 – ₹600 for two",
  openHour: 16,
  closeHour: 24,
} as const;

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Chicken Albax, Central Heights, MM Valley Road, Kausa, Mumbra, Thane 400612"
)}&output=embed`;

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Chicken Albax, Central Heights, MM Valley Road, Kausa, Mumbra, Thane 400612"
)}`;
