const defaultTheme = require('tailwindcss/defaultTheme')
const {fontFamily} = require('tailwindcss/defaultTheme');
module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    stroke:{
      current: 'currentColor',
      "countries":"white"
    },
    extend: {
      colors:{
        yellow: {
          DEFAULT: '#003399',
          '50': '#FFF1B8',
          '100': '#FFEDA3',
          '200': '#FFE47A',
          '300': '#FFDC52',
          '400': '#FFD429',
          '500': '#FFCC00',
          '600': '#C79F00',
          '700': '#8F7200',
          '800': '#574500',
          '900': '#1F1800'
        },
        blue:{
          DEFAULT: '#003399',
          '50': '#C4D8FF',
          '100': '#A3C2FF',
          '200': '#6196FF',
          '300': '#1F69FF',
          '400': '#0049DB',
          '500': '#003399',
          '600': '#002570',
          '700': '#001847',
          '800': '#000A1F',
          '900': '#000000'
        }
        
      },
      fontFamily: {
        sans: ['League Spartan Variable', ...fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
