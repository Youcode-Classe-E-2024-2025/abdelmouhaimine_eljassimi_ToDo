/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
    },
    colors: {
      customGray: '#343435',
      teal: '#06D6A0',
      redOrange: '#EF476F',
      yellow: '#FFD166',
      coral: '#FF474A',
      white: '#FFFFFF',
      black: '#0000',
      darkgrey: '#272727',
    },
    fontFamily:{
      bodyFont: ['Inter']
    },
    width: {
      '450': '450px',
       '600': '600px',
    },
    height: {
      '550': '550px',
    },
    
  },
  plugins: [],
}

