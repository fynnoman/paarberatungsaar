import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm oak paper — cream with warm undertone
        paper: {
          50: "#FDF9EF",
          100: "#F5E9D1",
          200: "#ECDBB6",
          300: "#DEC79A",
        },
        // Warm oak brown — from cream to deep espresso
        ink: {
          950: "#0F0A05",
          900: "#1D140A",
          800: "#2D2113",
          700: "#453521",
          600: "#614C35",
          500: "#856950",
          400: "#A28871",
          300: "#BEA689",
          200: "#D5C4AB",
          100: "#E5D8C1",
        },
        // Oak — warm wood mid-tones
        oak: {
          100: "#EBD9BC",
          200: "#D8BB92",
          300: "#C29D6E",
          400: "#A88056",
          500: "#8B6540",
          600: "#6E4E2C",
          700: "#523A20",
          800: "#3A2814",
        },
        // Moss — main green accent, natural growth
        moss: {
          50: "#EEF2E6",
          100: "#DAE1C9",
          200: "#BFCAA6",
          300: "#9EAF80",
          400: "#7E925F",
          500: "#617647",
          600: "#4A5E33",
          700: "#374722",
          800: "#243014",
          900: "#141C0A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.038em",
        micro: "0.16em",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        breathe: "breathe 8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.06)", opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
