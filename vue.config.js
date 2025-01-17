const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  configureWebpack: {
    output: {
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].[hash].js'
    }
  },
  css: {
    extract: {
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[hash].css'
    }
  }
})
