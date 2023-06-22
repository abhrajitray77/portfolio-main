/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        special_blob: "special_blob 6s infinite ease-in-out",
      },
      keyframes: {
        special_blob:{
        "33%": {
            transform: "translate(200px, 0px) scale(1.3)",
        },
        "50%": {
            transform: "translate(120px, 50px) scale(1.1)",
        },
        "60%": {
            transform: "translate(-100px, 20px) scale(1.0)",
        },
        "76%": {
            transform: "translate(-320px, 10px) scale(0.9)",
        },
        "86%": {
            transform: "translate(-100px, 40px) scale(0.9)",
        },
        }
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
