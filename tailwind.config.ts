import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D62828",
          "red-dark": "#A91B1B",
          yellow: "#FFC300",
          "yellow-soft": "#FFF4CC",
          charcoal: "#1F1F1F",
          ink: "#2B2B2B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 24px -8px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
