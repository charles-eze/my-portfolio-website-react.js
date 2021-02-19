module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
    transitionDelay: ['hover'],
    transitionDuration: ['hover'],
    transitionProperty: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
