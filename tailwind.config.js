module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Noto Sans KR', 'sans-serif']
    },
    extend: {
      colors: {
        nstp: '#ff733c'
      },
      backgroundImage: {
        'main-bg': "url('/images/main-bg.png')"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
