/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(auto-fit, minmax(10rem, 1fr))',
      }
    },
  },
  plugins: [],
}

