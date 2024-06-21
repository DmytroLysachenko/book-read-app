import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        google: '0 2px 2px 0 rgba(9, 30, 63, 0.15)',
        gray_btn: 'box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        book: '0 2px 3px 0 rgba(9, 30, 63, 0.1)',
      },
      spacing: {
        '170px': '170px',
        '130px': '130px',
        '200px': '200px',
        '230px': '230px',
        25: '100px',
        12.5: '50px',
        13: '52px',
        '14px': '14px',
        15: '60px',
        70: '280px',
        noHeaderMob: 'calc(100vh - 60px)',
      },
      fontSize: { '34px': '34px', '14px': '14px' },
      fontWeight: { logo: '900' },
      lineHeight: { '112%': '112%;', '190%': '190%' },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        OpenSans: ['OpenSans', 'sans-serif'],
        AbrilFatface: ['AbrilFatface'],
      },
      colors: {
        deep_blue: '#242A37',
        orangeBtn: '#FF6B08',
        white: '#FFFFFF',
        bgOverlay: '#091E3F',
        google_white: '#F5F7FA',
        google_text: '#707375',
        placeholder_text: '#A6ABB9',
        gray_text: '#898F9F',
        divider: 'rgba(36, 42, 55, 0.5)',
        gray_bg: '#F6F7FB',
        gray_btn: '#6D7A8D',
      },
      backgroundImage: {
        mob_auth:
          'linear-gradient(90deg, rgba(9,30,63,0.8) 0%, rgba(9,30,63,0.8) 100%),url("/bg-mob.jpg")',
      },
      boxShadowColor: {
        input: 'inset 0 1px 2px 0 rgba(29, 29, 27, 0.15)',
      },
    },
  },
  plugins: [daisyui],
};
