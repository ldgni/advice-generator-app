/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        custom: "30px 50px 80px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
