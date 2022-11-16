/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['var(--font-optima)', ...fontFamily.serif]
      },
      colors: {
        tan: {
          100: '#FFF7E9',
          200: '#FFEED0',
          300: '#FFE4B5',
          400: '#FFC359',
          500: '#E18F00',
          600: '#B07000',
          700: '#805100',
        }
      }
    },
  },
  plugins: [],
}
