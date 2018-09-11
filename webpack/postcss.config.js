module.exports = {
  plugins: [
      require('postcss-cssnext'),
      require('postcss-import'),
      require('css-mqpacker'),
      require('cssnano'),
  ]
}