/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      paarl: "#A25A2C",
      turquoise: "#43EAAF",
      mikado: "#2E1F0F",
      "aqua-forest": "#54A474",
      "cocoa-brown": "#1A1414",
      gray: {
        100: "#EFEFEF",
        200: "#C4C4C4",
        300: "#A4A4A4",
        400: "#717171",
        500: "#393939",
      },
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",
    },
    fontFamily: {
      primary: ["AfacadFlux", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
