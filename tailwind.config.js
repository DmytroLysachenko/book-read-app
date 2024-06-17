/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        google: '0 2px 2px 0 rgba(9, 30, 63, 0.15)',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        OpenSans: ['OpenSans', 'sans-serif'],
        AbrilFatface: ['AbrilFatface', 'sans-serif'],
      },
      colors: {
        orangeBtn: '#FF6B08',
        white: '#FFFFFF',
        bgOverlay: '#091E3F',
        google_white: '#F5F7FA',
        google_text: '#707375',
        placeholder_text: '#A6ABB9',
      },
      backgroundImage: {
        mob_auth:
          'linear-gradient(90deg, rgba(9,30,63,0.8) 0%, rgba(9,30,63,0.8) 100%),url("/bg-mob.jpg")',
      },
    },
  },
  plugins: [],
};
