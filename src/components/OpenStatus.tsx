"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/data/site";

function isOpenNow(): boolean {
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      hour12: false,
      timeZone: "Asia/Kolkata",
    }).format(new Date())
  ) % 24;
  return hour >= SITE.openHour && hour < SITE.closeHour;
}

export default function OpenStatus() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isOpenNow());
    const id = setInterval(() => setOpen(isOpenNow()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (open === null) {
    return <span className="inline-block h-7" aria-hidden />;
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
        open ? "bg-green-500/20 text-green-200" : "bg-black/30 text-white/80"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          open ? "animate-pulse bg-green-400" : "bg-white/50"
        }`}
      />
      {open ? "Open now · until 12 AM" : "Closed · opens at 4 PM"}
    </span>
  );
}
