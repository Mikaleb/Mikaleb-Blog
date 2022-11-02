const defaultColors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    colors: {
      mkGray: '#D9D9D9',
      mkDarkGray: '#2a2b2a',
      ...defaultColors,
    },
  },
}
