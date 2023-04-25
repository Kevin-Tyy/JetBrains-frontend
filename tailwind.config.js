/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./src/**/components/*.jsx",
    "./src/**/components/**/body/*.jsx"
  ],
  theme: {
    extend: {
      height: {
        '600': '600px',

      },
      width: {
        '850' : '850px',
        '1250': '1250px',
        
      },
      screens: {
        'xs': {'max': '1535px'},
        'xxs' :{'min': '144px'}
        
      },
    },
  },
  plugins: [],
}

