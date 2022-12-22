/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'bh': {'raw': '(hover: hover)'},
      }
    },
  },
  corePlugins: {
    space: false,
  },
  plugins: [],
}
