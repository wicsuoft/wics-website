
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}