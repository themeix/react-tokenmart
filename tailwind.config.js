const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false,
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "670px",
          },
          "@screen md": {
            maxWidth: "800px",
          },
          "@screen lg": {
            maxWidth: "1176px",
          },
          "@screen xl": {
            maxWidth: "1310px",
          },
          "@screen 2xl": {
            maxWidth: "1352px",
          },
        },
      });
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope", sans-serif'],
        display: ['"Nunito", sans-serif'],
        body: ['"Manrope", sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      colors: {
        "blueGray-50": "#F8FAFC",
        "blueGray-100": "#F1F5F9",
        "blueGray-200": "#E2E8F0",
        "blueGray-300": "#CBD5E1",
        "blueGray-400": "#94A3B8",
        "blueGray-600": "#475569",
        "blueGray-800": "#1E293B",
        "blueGray-900": "#0F172A",

        white: "#ffffff",
        red: "#FF4C3F",

        "red-50": "#FEF2F2",
        "red-100": "#FEE2E2",
        "green-50": "#ECFDF5",

        "indigo-50": "#EEF2FF",
        "indigo-100": "#E0E7FF",
        "indigo-200": "#C7D2FE",
        "indigo-500": "#6366F1",

        "purple-500": "#8E54E9",
        "purple-50": "#FAF5FF",
        "purple-100": "#F3E8FF",

        amber: "#E59A04",
        "amber-50": "#F7FEE7",
        "amber-100": "#e8f7c6",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "20px",
        lg: "40px",
      },
      boxShadow: {
        DEFAULT:
          "0px 5px 20px rgba(73, 116, 230, 0.04), 0px 5px 15px rgba(0, 0, 0, 0.035), 0px 3.39155px 7.58112px rgba(0, 0, 0, 0.0282725), 0px 1.4113px 3.15467px rgba(185, 202, 248, 0.06)",
        sm: "0px 0px 5px 5px rgba(73, 116, 230, 0.04), 0px 6.38599px 14.2746px rgba(0, 0, 0, 0.035), 0px 3.39155px 7.58112px rgba(0, 0, 0, 0.0282725), 0px 1.4113px 3.15467px rgba(185, 202, 248, 0.06)",
        lg: "0px 0px 20px 25px rgba(0, 0, 0, 0.05), 0px 10px 10px rgba(0, 0, 0, 0.04)",
        xl: "0 0 16px 0px rgba(0, 0, 0, 0.11),0px 10px 10px rgba(0, 0, 0, 0.09)",
        none: "none",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  // Other stuff
};
