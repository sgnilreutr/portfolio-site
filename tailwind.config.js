const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', "./node_modules/day-n-nite/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ...fontFamily,
      sans: ['Inter Variable', 'sans-serif'],
    },
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            transform: 'translate3d(0, 20px, 0)',
          },
          '90%': {
            transform: 'translate3d(0, -2px, 0)',
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /gap-/,
    },
    {
      pattern: /items-/,
    },
    {
      pattern: /justify-/,
    },
  ],
}
