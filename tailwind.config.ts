import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#006536",
          light: "#218a3d",
          dark: "#004d29",
        },
        leaf: "#a6ce39",
        harvest: "#f58220",
        ivory: {
          DEFAULT: "#f7f4ea",
          light: "#fbf9f3",
        },
        charcoal: "#14251b",
        neutral: {
          DEFAULT: "#647067",
          light: "#9aa39c",
          border: "#e5e1d4",
        },
        gold: {
          DEFAULT: "#c9a24d",
          light: "#dfc389",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 12px rgba(20, 37, 27, 0.06)",
        card: "0 8px 30px rgba(20, 37, 27, 0.08)",
        lifted: "0 16px 40px rgba(20, 37, 27, 0.12)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(140deg, #004d29 0%, #006536 45%, #14251b 100%)",
        "brand-gradient": "linear-gradient(135deg, #006536 0%, #218a3d 100%)",
        "gold-hairline":
          "linear-gradient(90deg, transparent, #c9a24d, transparent)",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
