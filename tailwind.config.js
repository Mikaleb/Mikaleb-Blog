/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aero: {
          DEFAULT: '#00c1f5',
          100: '#002631',
          200: '#004d62',
          300: '#007393',
          400: '#0099c4',
          500: '#00c1f5',
          600: '#2bd1ff',
          700: '#60ddff',
          800: '#95e8ff',
          900: '#caf4ff'
        },
        pumpkin: {
          DEFAULT: '#fe7f2d',
          100: '#3c1800',
          200: '#783001',
          300: '#b44801',
          400: '#f06101',
          500: '#fe7f2d',
          600: '#fe9b59',
          700: '#feb482',
          800: '#ffcdac',
          900: '#ffe6d5'
        },
        white: {
          DEFAULT: '#fefcfd',
          100: '#4c1932',
          200: '#973265',
          300: '#cb6497',
          400: '#e4afca',
          500: '#fefcfd',
          600: '#fefcfd',
          700: '#fefdfd',
          800: '#fefdfe',
          900: '#fffefe'
        },
        emerald: {
          DEFAULT: '#06d6a0',
          100: '#012b20',
          200: '#02563f',
          300: '#03805f',
          400: '#04ab7f',
          500: '#06d6a0',
          600: '#1cf9be',
          700: '#55fbce',
          800: '#8efcdf',
          900: '#c6feef'
        },
        charcoal: {
          DEFAULT: '#233d4d',
          100: '#070c0f',
          200: '#0e181f',
          300: '#15252e',
          400: '#1c313d',
          500: '#233d4d',
          600: '#3c6883',
          700: '#5c92b4',
          800: '#92b6cd',
          900: '#c9dbe6'
        }
      }
    }
  },
  variants: {
    extend: {
      display: ['dark'],
      backgroundOpacity: ['active']
    }
  },
  plugins: []
}
