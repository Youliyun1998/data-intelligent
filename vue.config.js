const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: process.env.PACK_TITLE,
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_a', resolve('src/assets'))
      .set('_u', resolve('src/utils'))
      .set('_css', resolve('src/assets/css'))
      .set('_img', resolve('src/assets/img'))
      .set('_v', resolve('src/views'))
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10, // 优先级
          chunks: 'initial' // 刚开始抽离
        },
        iviewUI: {
          name: 'chunk-iviewUI',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?iview(.*)/
        },
        commons: {
          name: 'chunk-commons',
          test: resolve('src/components'),
          minChunks: 3, // 引用多少次抽离
          priority: 5,
          reuseExistingChunk: true // 重复使用已经存在的块，若某个模块在之前已经被打包过了，后面打包时再遇到这个模块就直接使用之前打包的模块
        }
      }
    })
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('src/assets/css/valiable.less')]
    }
  }

}
