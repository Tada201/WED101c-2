/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,jsx,ts,tsx}"
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
        background: 'hsl(240, 10%, 3.9%)',
        foreground: 'hsl(0, 0%, 88%)',
        muted: 'hsl(240, 3.7%, 15.9%)',
        'muted-foreground': 'hsl(240, 5%, 64.9%)',
        popover: 'hsl(240, 10%, 3.9%)',
        'popover-foreground': 'hsl(0, 0%, 98%)',
        card: 'hsl(240, 10%, 3.9%)',
        'card-foreground': 'hsl(0, 0%, 98%)',
        border: 'hsl(240, 3.7%, 15.9%)',
        input: 'hsl(240, 3.7%, 15.9%)',
        primary: 'hsl(195, 100%, 46%)',
        'primary-foreground': 'hsl(211, 100%, 99%)',
        secondary: 'hsl(240, 3.7%, 15.9%)',
        'secondary-foreground': 'hsl(0, 0%, 98%)',
        accent: 'hsl(240, 3.7%, 15.9%)',
        'accent-foreground': 'hsl(0, 0%, 98%)',
        destructive: 'hsl(0, 62.8%, 30.6%)',
        'destructive-foreground': 'hsl(0, 0%, 98%)',
        ring: 'hsl(240, 4.9%, 83.9%)',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        portal: ['"Orbitron"', 'sans-serif'], // futuristic font for Portal theme
      },
    },
  },
  plugins: [],
}
