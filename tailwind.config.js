/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      main: ["Helvetica", "sans-serif"],
      mainLight: ["Helvetica-light", "sans-serif"],
      mea: ["Mea", "sans-serif"],
    },
    extend: {
      colors: {
        "main-color": "#E8E7E7",
        "secondary-color": "#D9D9D9",
      },
    },
    plugins: [],
  },
};
