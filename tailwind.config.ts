import type { Config } from "tailwindcss";

const oxfordColors = {
  50: "#e6eaf2", // Light background
  100: "#b3bfd7",
  200: "#8095bc",
  300: "#4d6aa1",
  400: "#264b8f",
  500: "#001A46", // Primary Oxford Navy
  600: "#001741",
  700: "#00133b",
  800: "#000f35",
  900: "#000829",
};

const navyColors = {
  50: "#f1f1ff",
  100: "#e8e5ff",
  200: "#d2ceff",
  300: "#b0a7ff",
  400: "#8b76ff",
  500: "#673fff",
  600: "#5418ff",
  700: "#4607fa",
  800: "#3a05d2",
  900: "#3106ac",
  950: "#1a0076",
};

const persianBlue = {
  "50": "#eaf4ff",
  "100": "#d9eaff",
  "200": "#bbd8ff",
  "300": "#92bdff",
  "400": "#6794ff",
  "500": "#446cff",
  "600": "#2341ff",
  "700": "#1831ea",
  "800": "#172dbd",
  "900": "#1c2f93",
  "950": "#111a55",
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        oxford: oxfordColors,
        navy: navyColors,
        persianBlue,
        primary: persianBlue,
        // Complementary colors
        secondary: {
          50: "#fff7ed", // Warm accent
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdb97c",
          400: "#fb923c",
          500: "#f97316", // Orange accent
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
      },
      // Custom gradients
      backgroundImage: {
        "oxford-gradient": "linear-gradient(to right, #001A46, #264b8f)",
        "oxford-dark": "linear-gradient(to right, #000829, #001A46)",
      },
    },
  },
  plugins: [],
} satisfies Config;
