import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:              "#080808",
        "bg-raised":     "#0f0f0f",
        "bg-card":       "#0d0d0d",
        text:            "#f0f0ee",
        "text-dim":      "rgba(240,240,238,0.45)",
        "text-muted":    "rgba(240,240,238,0.25)",
        accent:          "#ff6308",
        "accent-dim":    "rgba(255,99,8,0.08)",
        "accent-border": "rgba(255,99,8,0.25)",
        border:          "rgba(255,255,255,0.07)",
        "border-strong": "rgba(255,255,255,0.13)",
        success:         "#22c55e",
        warning:         "#fb923c",
        danger:          "#f87171",
      },
      fontFamily: {
        mono:  ["var(--font-mono)", "Space Mono", "monospace"],
        serif: ["var(--font-serif)", "Instrument Serif", "Georgia", "serif"],
        sans:  ["var(--font-sans)", "DM Sans", ...fontFamily.sans],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "7xl": ["4rem",     { lineHeight: "0.95" }],
        "8xl": ["5.5rem",   { lineHeight: "0.93" }],
        "9xl": ["7.125rem", { lineHeight: "0.93" }],
      },
      borderRadius: {
        outer: "12px",
        inner: "8px",
      },
      boxShadow: {
        "inset-soft":    "0px 1.5px 1px 0px hsla(0,0%,100%,.06)",
        emboss:          "0px 1.5px 2px -1px hsla(0,0%,100%,.2) inset",
        "emboss-hover":  "0px 1.5px 2px -1px hsla(0,0%,100%,.3) inset",
        "emboss-less":   "0px 1.5px 2px -1px hsla(0,0%,100%,.12) inset",
        card:            "0 1px 2px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)",
        "card-hover":    "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.13)",
        "glow-accent":   "0 0 60px rgba(255,99,8,0.12)",
        float:           "0 20px 80px rgba(0,0,0,0.8)",
      },
      transitionTimingFunction: {
        "back-out":    "cubic-bezier(0.34,1.56,0.64,1)",
        "circ-out":    "cubic-bezier(0,0.55,0.45,1)",
        "quart-inout": "cubic-bezier(0.77,0,0.175,1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in":  { from: { opacity: "0" }, to: { opacity: "1" } },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        "ticker": {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "pulse-badge": {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.55" },
        },
        "bounce-y": {
          "0%, 60%, 100%": { transform: "translateY(0)" },
          "30%":           { transform: "translateY(7px)" },
        },
      },
      animation: {
        "fade-up":     "fade-up 0.65s cubic-bezier(0,0.55,0.45,1) both",
        "fade-in":     "fade-in 0.5s ease both",
        "scale-in":    "scale-in 0.4s cubic-bezier(0.34,1.56,0.64,1) both",
        "ticker":      "ticker 28s linear infinite",
        "pulse-badge": "pulse-badge 2.5s ease-in-out infinite",
        "bounce-y":    "bounce-y 2.2s ease-in-out infinite",
      },
      maxWidth: { content: "1280px", prose: "680px" },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
