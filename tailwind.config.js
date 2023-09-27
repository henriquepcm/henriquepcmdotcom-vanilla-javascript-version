/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: "Barlow, Helvetica, Arial, sans-serif",
        condensed: "Barlow Condensed, Helvetica, Arial, sans-serif",
      },
    },
  },
  plugins: [],
};
