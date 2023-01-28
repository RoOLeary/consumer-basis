module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
    autoprefixer: {},
  },
}
