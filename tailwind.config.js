/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orangeBtn: '#FF6B08',
        white: '#FFFFFF',
        bgOverlay: '#091E3F',
        google_white: '#F5F7FA',
        google_text: '#707375',
      },
      backgroundImage: {
        mob_auth:
          'linear-gradient(90deg, rgba(9,30,63,0.8) 0%, rgba(9,30,63,0.8) 100%),url("/bg-mob.jpg")',
      },
    },
  },
  plugins: [],
};
