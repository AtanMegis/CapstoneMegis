/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        someBlue: "#00525F",
        hovGreen: "#4CACBC",
      }

    },
  },
  plugins: [],
}
