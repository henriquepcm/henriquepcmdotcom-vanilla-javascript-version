/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
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
      fontSize: {
        xs: "0.75rem", // Extra Small
        sm: "0.875rem", // Small
        base: "1rem", // Base
        lg: "1.125rem", // Large
        xl: "1.25rem", // Extra Large
        "2xl": "1.8rem", // Extra Large 2
        "3xl": "2.15rem", // Extra Large 3
        "4xl": "4.25rem", // Extra Large 4
        "5xl": "5rem", // Extra Large 5
      },
    },
  },
  plugins: [],
};
