/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        lg: "4rem",
      },
    },
    extend: {
      colors: {
        primary: "#105140",
        secondary: "#24B791",
        back: "#F8F3F1",
        back_secundary: "#1E2235",
      },
      fontFamily: {
        rob: ["Roboto"],
        lora: ["Lora"],
        pop: ["Poppins"],
      },
      dropShadow: {
        "1xl": "0 3px 3px rgba(16, 81, 64)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
