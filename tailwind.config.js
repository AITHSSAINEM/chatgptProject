/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#dcc58a',
          400: '#cfb169',
          500: '#c79a32',
          600: '#9f7425'
        }
      },
      boxShadow: {
        luxury: '0 10px 35px -20px rgba(54, 44, 24, 0.45)'
      }
    }
  },
  plugins: []
};
