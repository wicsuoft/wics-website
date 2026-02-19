
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // colors: {
    //   gray: colors.coolGray,
    //   blue: colors.lightBlue,
    //   red: colors.rose,
    //   pink: colors.fuchsia,
    // },
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