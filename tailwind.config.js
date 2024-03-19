/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yinmn_blue: {
          DEFAULT: '#2d4777',
          100: '#090e18',
          200: '#121c2f',
          300: '#1b2a47',
          400: '#24385f',
          500: '#2d4777',
          600: '#4065a9',
          700: '#6889c6',
          800: '#9ab0d9',
          900: '#cdd8ec'
        },
        tiffany_blue: {
          DEFAULT: '#80d1d6',
          100: '#113234',
          200: '#216467',
          300: '#32969b',
          400: '#4cbfc5',
          500: '#80d1d6',
          600: '#99dbde',
          700: '#b3e4e6',
          800: '#ccedef',
          900: '#e6f6f7'
        },
        old_lace: {
          DEFAULT: '#f6f1e5',
          100: '#473918',
          200: '#8d7130',
          300: '#c6a457',
          400: '#decb9e',
          500: '#f6f1e5',
          600: '#f8f4ea',
          700: '#faf6ef',
          800: '#fbf9f4',
          900: '#fdfcfa'
        },
        asparagus: {
          DEFAULT: '#6da84d',
          100: '#16220f',
          200: '#2c431f',
          300: '#41652e',
          400: '#57863e',
          500: '#6da84d',
          600: '#89bc6e',
          700: '#a7cd92',
          800: '#c4deb6',
          900: '#e2eedb'
        },
        bittersweet: {
          DEFAULT: '#f56960',
          100: '#400804',
          200: '#801008',
          300: '#c1180c',
          400: '#f12e21',
          500: '#f56960',
          600: '#f78880',
          700: '#f9a6a0',
          800: '#fbc4c0',
          900: '#fde1df'
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
