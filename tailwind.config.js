/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFE6FF',
          100: '#FFCCFF',
          200: '#FF99FF',
          300: '#FF66FF',
          400: '#FF33FF',
          500: '#FF00FE',
          600: '#CC00CB',
          700: '#990098',
          800: '#660065',
          900: '#330033',
          950: '#1A0019',
        },
      }
    },
  },
  plugins: [],
}

