import tailwindTypography from "@tailwindcss/typography";
import { type ThemableColorScale, wedgesTW } from "wedges-vue";

const primaryBlue: ThemableColorScale = {
  100: "#DAF0FF",
  200: "#B5DEFF",
  300: "#90C9FF",
  400: "#75B6FF",
  500: "#4796FF",
  600: "#3374DB",
  700: "#2356B7",
  800: "#163C93",
  900: "#0D297A",
  DEFAULT: "#4796FF", // 500
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx,md,css}",
    "./.vitepress/**/*.{vue,js,ts,jsx,tsx,css,md}",
    "node_modules/wedges-vue/**/*.{ts,vue}",
  ],

  theme: {
    extend: {
      screens: {
        "2xl": "82rem",
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              padding: 0,
              borderRadius: "0.5rem",
              margin: 0,
            },
          },
        },
      },
      animation: {
        "flash": "flash 1s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-out": "fadeOut 0.5s ease-in-out",
      },
      keyframes: {
        flash: {
          "0%, 20%": { opacity: "0.4" },
          "70%, 100%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },

      maxWidth: {
        "7xl": "82rem",
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "102rem",
        "11xl": "108rem",
      },
      colors: {
        "gray-50": "#F7F7F8",
        "gray-100": "#E8E8ED",
        "gray-500": "#6C6C89",
        "gray-800": "#282833",
        "gray-900": "#121217",
        "purple-200": "#fcc5f3",
        "purple-400": "#8D6CEF",
        "purple-500": "#7047EB",
        "purple-600": "#5423E7",
        "yellow-500": "#FFC233",
        "wtf-gainsboro": "#EAEAEB",
        "border": "hsl(var(--border))",
        "input": "hsl(var(--input))",
        "ring": "hsl(var(--ring))",
        "muted": {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        "accent": {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        "popover": {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        "card": {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      container: {
        center: true,
        screens: {
          md: "100%",
          xl: "77rem", // 72 + 5 for padding
        },
        padding: {
          DEFAULT: "1.5rem",
          md: "2.5rem",
          xl: "2.5rem",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system"],
      },
      minHeight: {
        "screen-dvh": "100dvh",
      },
      transitionDuration: {
        180: "180ms",
      },
    },
  },
  plugins: [
    wedgesTW({
      themes: {
        "dark-blue": {
          extend: "dark",
          colors: {
            primary: primaryBlue,
          },
        },
        "light": {
          colors: {
            primary: {
              DEFAULT: "#7047EB",
              400: "#8D6CEF",
              500: "#7047EB",
              600: "#5423E7",
            },
          },
        },
      },
    }),
    tailwindTypography,
  ],
};
