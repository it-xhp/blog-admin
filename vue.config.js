'use strict'
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const cdn = {
  js: [
    'https://lib.baomitu.com/vue/2.6.11/vue.min.js',
    'https://lib.baomitu.com/vue-router/3.2.0/vue-router.min.js',
    'https://lib.baomitu.com/vuex/3.5.1/vuex.min.js',
    'https://lib.baomitu.com/axios/0.20.0/axios.min.js'
  ]
}

function resolve(dir) {
  return path.join(__dirname, dir)
}
// 接口地址，注意协议，如果你没有配置 ssl，需要将 https 改为 http
const VUE_APP_BASE_API = 'http://127.0.0.1:8088'
// 如果接口是 http 形式， wss 需要改为 ws
// eslint-disable-next-line no-unused-vars
const VUE_APP_WS_API = 'ws://42.194.194.178:3000'

module.exports = {
  publicPath: '/', // 部署应用包时的基本 url
  outputDir: 'dist', // build 构建文件目录
  assetsDir: 'static', // 静态资源目录
  productionSourceMap: false, // 禁用生产环境的 source map
  runtimeCompiler: true, // 是否运行时组件中使用 template
  lintOnSave: false,
  devServer: {
    host: '0.0.0.0', // 默认是 localhost,可不配置
    port: 8000, // 配置端口号
    open: true, // 启动是否打开浏览器
    overlay: { // 是否在浏览器上显示编译的 errors 或 warnings
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': { // 被代理的接口名
        target: VUE_APP_BASE_API, // url地址
        changeOrigin: true, // 发送请求头中 host 是否设置成 target
        pathRewrite: {
          '^/api/': '' // 将访问路径的/api/替换成’‘，后台服务不用加api了,但前端的请求地址还是要加/api/
        }
      }
    }
  },
  configureWebpack(config) {
    // production configuration Gzip compression
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionWebpackPlugin({
          // 正则匹配需要压缩的文件后缀
          // test: /\.(js|css|svg|woff|ttf|json|html)$/,
          test: /\.(js|css|json|html)$/,
          // 大于10kb的会压缩
          threshold: 10240,
          // 是否删除原文件
          deleteOriginalAssets: false
        })
      )
      Object.assign(config, {
        resolve: {
          alias: {
            '@': resolve('src')
          }
        },
        externals: {
          'vue': 'Vue',
          'vue-router': 'VueRouter',
          'vuex': 'Vuex',
          'axios': 'axios'
        }
      })
    }
  },
  chainWebpack(config) {
    config
      .when(process.env.NODE_ENV === 'production',
        config => {
          config.plugin('html').tap(args => { // dynamic import CDN
            args[0].cdn = cdn
            return args
          })
          config.optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial'
              },
              elementUI: {
                name: 'chunk-elementUI',
                priority: 20,
                test: /[\\/]node_modules[\\/]_?element-ui(.*)/
              },
              commons: {
                name: 'chunk_commons',
                test: resolve('src/components'),
                minChunks: 3,
                priority: 5,
                reuseExistingChunk: true
              }
            }
          })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
