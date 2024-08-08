/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
'./modules/**/*.{html, css, js}',
'./templates/**/*.{html, css, js}',
],
  theme: {
    extend: {
      'Blue': {
        '50': '#eaf5ff',
        '100': '#d9ecff',
        '200': '#C9DCF1',
        '300': '#91c2ff',
        '400': '#669bff',
        '500': '#4375ff',
        '600': '#224bff',
        '700': '#2244ec',
        '800': '#1635bd',
        '900': '#1b3394',
        '950': '#10133C',
    },
    },
  },
  plugins: [],
}

