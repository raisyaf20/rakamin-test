/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "#34d399",
      },
      screens: {
        "2xl": "1240px",
      },
    },
  },
  plugins: [],
};
