const path = require("path")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
      },
      fontSize: {
        "3xl": ["2rem", { lineHeight: "2.5rem" }],
        "price-lg": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        "price-sm": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "500" }],
      },
      maxWidth: {
        "8xl": "100rem",
        "store-container": "1440px",
      },
      borderRadius: {
        none: "0px",
        soft: "2px",
        base: "4px",
        rounded: "8px",
        large: "16px",
        circle: "9999px",
      },
      boxShadow: {
        "soft-card": "0 4px 20px -2px rgba(63, 78, 79, 0.08)",
        "bubble-hover": "0 8px 24px -4px rgba(212, 131, 114, 0.25)",
      },
      transitionProperty: {
        width: "width margin",
        height: "height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },
      colors: {
        // Christmas & Festive Tokens
        "christmas-red": "#B31B1B",
        "christmas-green": "#1B4D3E",
        "festive-gold": "#D4AF37",

        // Core Whimsy Identity Palette
        whimsy: {
          rose: "#EE8279",    // Coral rose (Accents, badges, CTAs)
          yellow: "#FAD889",  // Butter yellow (Highlights, banners)
          sage: "#82B3A1",    // Soft sage green (Secondary badges, success)
          teal: "#3FA9C4",    // Sky teal (Focus rings, links)
          ink: "#262626",     // Dark primary typography
          cream: "#FDFBF7",   // Canvas/background foundation
        },

        // Functional / Semantic Aliases
        store: {
          canvas: "#FDFBF7",         // maps to whimsy.cream
          body: "#262626",           // maps to whimsy.ink
          primary: "#EE8279",        // primary action (whimsy.rose)
          "primary-hover": "#E56F65",
          accent: "#3FA9C4",         // interactive secondary (whimsy.teal)
          border: "#E5E7EB",         // standard dividers (grey.20)
          muted: "#6B7280",          // descriptions / secondary text (grey.50)
          surface: "#FFFFFF",        // card / modal base
        },
      },
      animation: {
        snowfall: "snow 10s linear infinite",
        "gentle-float": "float 4s ease-in-out infinite",
      },
      keyframes: {
        snow: {
          "0%": { transform: "translateY(-10px) translateX(0)", opacity: "0" },
          "50%": { opacity: "0.8" },
          "100%": { transform: "translateY(100vh) translateX(20px)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
}