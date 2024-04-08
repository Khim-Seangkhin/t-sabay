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
    // container: {
    //   center: true,
    //   padding: '2rem'
    // },
    extend: {
      colors: {
        bgBlack: '#161616',
        bgRed: '#fa1939',
        bgYellow: '#F9A62B',
        bgPink: '#fa5480',
        bgGreen: '#38c378',
        bgBlue: '#4390f8'
      },
      gridTemplateColumns: {
        '16': 'repeat(auto-fit, minmax(10rem, 1fr))',
      }
    },
  },
  plugins: [],
}

