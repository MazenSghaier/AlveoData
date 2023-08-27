/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'xl': '1rem', // Add a new border radius size
      },
      fontSize: {
        '2xl': '1.5rem', // Add a new font size
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '1rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
        },
      });
    },
  ],
}