/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        apertureOrange: '#FF6600',
        apertureTeal: '#00B3B3',
        apertureGray: {
          light: '#E0E0E0',
          DEFAULT: '#4B4B4B',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        portal: ['"Orbitron"', 'sans-serif'], // futuristic font for Portal theme
      },
    },
  },
  plugins: [],
}
