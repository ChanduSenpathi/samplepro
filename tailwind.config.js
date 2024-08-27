/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, jsx, tsx, ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans : ['Poppins', 'san-serif']
      },
      gridTemplateColumns: {
        '70/30' : '70% 28%'
      },
      customWidth: {
        'w-50' : '50px'
      },
      customHight :{
        'h-50' : '50px'
      }
    },
  },
  variants: {
    extends: {}
  },
  plugins: [],
}

