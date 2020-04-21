// A basic webpack configuration
// The default for running tests in this project

const path = require('path')
module.exports = {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        'cypress-vue-unit-test': path.join(__dirname, 'src'),
        'vue$': path.join(__dirname, 'vue/dist/vue.esm.js') // 'vue/dist/vue.common.js' for webpack 1
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              // you need to specify `i18n` loaders key with
              // `vue-i18n-loader` (https://github.com/kazupon/vue-i18n-loader)
              i18n: '@kazupon/vue-i18n-loader'
            }
          }
        }
      ]
    }
  }
