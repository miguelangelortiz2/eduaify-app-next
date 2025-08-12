/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#6E59F9',
          600: '#5F4BF5',
          700: '#4C3EE0',
        },
        accent: '#FFD76F',
        ink: '#101828',
        mute: '#667085',
        bg: '#F8FAFC',
      },
    },
  },
  plugins: [],
};
