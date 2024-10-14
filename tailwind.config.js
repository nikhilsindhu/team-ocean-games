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
    // fontSize: {
    //   xs: ["1.2rem", { lineHeight: "1.6rem" }],
    //   sm: ["1.4rem", { lineHeight: "2rem" }],
    //   base: ["1.6rem", { lineHeight: "2.4rem" }],
    //   lg: ["1.8rem", { lineHeight: "2.8rem" }],
    //   xl: ["2rem", { lineHeight: "2.8rem" }],
    //   "2xl": ["2.4rem", { lineHeight: "3.2rem" }],
    //   "3xl": ["3rem", { lineHeight: "3.6rem" }],
    //   "4xl": ["3.6rem", { lineHeight: "4rem" }],
    //   "5xl": ["4.8rem", { lineHeight: "1" }],
    //   "6xl": ["6rem", { lineHeight: "1" }],
    //   "7xl": ["7.2rem", { lineHeight: "1" }],
    //   "8xl": ["9.6rem", { lineHeight: "1" }],
    //   "9xl": ["12.8rem", { lineHeight: "1" }],
    // },
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
