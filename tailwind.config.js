/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        gif: "url('./images/bg.gif')",
      },
    },
  },
  plugins: [],
};
