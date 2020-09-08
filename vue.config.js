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
  css: {
    // 启用 CSS modules
    modules: false,
    // 是否使用css分离插件
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      less: {
        javascriptEnabled: true
      },
      css: {},
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            // 这里是配置项，详见官方文档
            rootValue: 16, // 换算的基数
            selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('src/assets/css/valiable.less')]
    }
  }
}
