/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        red: 'hsl(0, 100%, 74%)',
        green: 'hsl(154, 59%, 51%)',
      },
      accent: {
        blue: 'hsl(248, 32%, 49%)',
      },
      neutral: {
        darkBlue: 'hsl(249, 10%, 26%)',
        grayBlue: 'hsl(246, 25%, 77%)',
      },
    },
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
