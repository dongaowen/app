const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn'
      }
    },
    host: 'localhost',
    port: 8080,
    open: true,  
    hot: true
  },
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias.set('@',  resolve('src')).set('@assets', resolve('src/assets'))  //设置别名
  },
  configureWebpack: config => {
    config.devtool = 'cheap-module-source-map'
  }
})
