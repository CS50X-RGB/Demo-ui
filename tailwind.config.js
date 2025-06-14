import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        text: {
          value: "#749e75",
        },
        schema: {
          base : "#e4e4e5",
          compo : "#fefeff"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;