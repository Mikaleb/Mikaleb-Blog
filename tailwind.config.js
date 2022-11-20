const defaultColors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    colors: {
      mkGray: '#D9D9D9',
      mkDarkGray: '#1D1D1B',
      mkBlue: {
        DEFAULT: '#48BEFF',
        50: '#331E80',
        100: '#27289F',
        200: '#3152BF',
        300: '#3C84DF',
        400: '#48BEFF',
        500: '#5EE6FF',
        600: '#74FFFF',
        700: '#8CFFEC',
        800: '#A4FFDF',
        900: '#BDFFDB',
      },
      mkCyan: '#42E0E4',
      mkGreen: '#43C59E',
      mkPink: '#EFBCD5',
      ...defaultColors,
    },
  },
}
