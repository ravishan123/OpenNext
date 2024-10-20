/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fff", // White as the primary color
        secondary: "#ff7153", // Orange as the secondary color
        dimWhite: "rgba(0, 0, 0, 0.7)", // Slightly transparent white
        dimOrange: "rgba(255, 113, 83, 0.1)", // Transparent orange for subtle backgrounds or accents
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
