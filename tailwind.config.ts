import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
        },
        foreground: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        border: {
          subtle: "var(--border-subtle)",
        },
        accent: {
          primary: "var(--accent-primary)",
        }
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"]
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        }
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      }
    }
  },
  plugins: []
};

export default config;
