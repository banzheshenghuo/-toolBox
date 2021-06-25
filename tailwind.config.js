const plugin = require('tailwindcss/plugin');

const createBaseStylesFactory = (theme) => ({
  h1: { fontSize: theme('fontSize.2xl') },
  h2: { fontSize: theme('fontSize.xl') },
  h3: { fontSize: theme('fontSize.lg') },
  ul: { listStyle: 'disc', marginLeft: 20 },
  ol: { listStyleType: 'decimal', marginLeft: 20 },
});

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase(createBaseStylesFactory(theme));
    }),
  ],
};
