/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "F3F8FF",
        secondary: "#000A64",
        tertiary: "#050C9C",
      },
    },
    screens: {
      lg: { max: "2023px" },

      sm: { max: "1000px" },
    },
  },
  plugins: [],
};
