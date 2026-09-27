import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          ink: "#163300",
          DEFAULT: "#163300",
        },
        lime: {
          voltage: "#9fe870",
          DEFAULT: "#9fe870",
        },
        spruce: "#054d28",
        linen: {
          mist: "#e2f6d5",
          DEFAULT: "#e2f6d5",
        },
        signal: {
          blue: "#0b4c72",
        },
        alarm: {
          red: "#cb272f",
        },
        charcoal: "#454745",
        obsidian: "#0e0f0c",
        pebble: "#868685",
        slate: "#6a6c6a",
        fog: "#e8ebe6",
        paper: "#ffffff",
      },
      borderRadius: {
        card: "10px",
        input: "10px",
        pill: "9999px",
        largeCard: "28px",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Inter", "sans-serif"],
        mono: ["Consolas", "Monaco", "Courier New", "monospace"],
      },
      boxShadow: {
        subtle: "rgba(14, 15, 12, 0.12) 0px 0px 0px 1px",
        card: "rgba(0, 0, 0, 0.08) 0px 4px 16px 0px",
      },
    },
  },
  plugins: [],
};
export default config;
