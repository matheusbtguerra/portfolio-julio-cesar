/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg:    '#0b0b0d', 
        text:  '#ffffff', 
        purple: {
          DEFAULT: '#8b5cf6', 
          light:   '#a78bfa',
          dark:    '#6d28d9'
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
      screens: {
        sm: '768px',
        md: '992px',
        lg: '993px',
      },
    },
  },
  plugins: [],
};
