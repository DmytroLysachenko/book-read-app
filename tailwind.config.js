import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        google: '0 2px 2px 0 rgba(9, 30, 63, 0.15)',
        gray_btn: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        book: '0 2px 3px 0 rgba(9, 30, 63, 0.1)',
        input: 'inset 0 1px 2px 0 rgba(29, 29, 27, 0.15)',
        reviewModal: '10px 10px 20px 0 rgba(9, 30, 63, 0.2)',
        counter: '4px 4px 8px 0 rgba(36, 42, 55, 0.15)',
        chart: '0 2px 3px 0 rgba(9, 30, 63, 0.25)',
      },
      spacing: {
        '170px': '170px',
        '130px': '130px',
        '200px': '200px',
        '215px': '215px',
        '230px': '230px',
        '42px': '42px',
        25: '100px',
        12.5: '50px',
        13: '52px',
        '10px': '10px',
        '14px': '14px',
        15: '60px',
        70: '280px',
        '270px': '270px',
        noHeaderMob: 'calc(100vh - 60px)',
      },
      fontSize: {
        '34px': '34px',
        '14px': '14px',
        '19px': '19px',
        '10px': '10px',
      },
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
        gray_bg: '#f6f7fb',
        gray_btn: '#6D7A8D',
        main_bg_theme: 'rgb(233, 235, 240)',
        backdrop: 'rgba(43, 43, 43, 0.1)',
        gray_heading: '#B1B5C2',
        planningBorder: '#e0e5eb',
      },
      backgroundImage: {
        headerShadow:
          'linear-gradient(0deg, rgba(89, 131, 252, 0) 0%, rgba(9, 30, 63, 0.15) 100%)',
        mob_auth:
          'linear-gradient(90deg, rgba(9,30,63,0.8) 0%, rgba(9,30,63,0.8) 100%),url("/bg-mob.jpg")',
      },
    },
  },
  plugins: [daisyui],
};
