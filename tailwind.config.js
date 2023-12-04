/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      main: ["Helvetica", "sans-serif"],
      mainLight: ["Helvetica-light", "sans-serif"],
    },
    extend: {
      colors: {
        "main-color": "#000",
        "font-color": "#000",
      },
    },
    plugins: [],
  },
};
