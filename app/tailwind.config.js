/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      keyframes: {
    shimmer: {
      '0%': { backgroundPosition: '200% 0' },
      '100%': { backgroundPosition: '-200% 0' },
    },
  },
  animation: {
    shimmer: 'shimmer 2.5s infinite linear',
  },
    },
  },
  plugins: [],
}
