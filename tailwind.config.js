module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    left: ['responsive', 'focus', 'hover', 'active'],
    transition: ['responsive', 'focus', 'hover', 'active'],
    extend: {},
  },
  plugins: [],
}
