/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'openSans': ['Open Sans','sans-serif'],
      'monoton': ['Monoton', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}
