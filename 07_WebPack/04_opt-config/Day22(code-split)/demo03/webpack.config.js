const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 单入口 (对应单页面应用的配置)
  // 平时的开发SPA会多一些, 但是多入口文件的公共依赖如何抽离打包呢？？
  // 不想写多入口, 又想完成多多入口代码分割的效果, 需要写js代码来实现。
  // 通过js代码来让某个文件被单独打包成一个chunk (例子见./src/js/index.js)
  // 通过ES10中的import动态打包语法, import的结果是一个promise。
  entry: "./src/js/index.js",
  
  output: {
    // [name]: 取文件名
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "build")
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      minify: {                       // 压缩HTML
        collapseWhitespace: true,
        removeCommoents: true
      }
    })
  ],

  /**              splitChunks
   *   - 可以将node_modules中的代码单独打包成一个chunk最终输出 (将第三方的代码单独打包一个bundle)。
   *   - 会分析多入口文件中,是否有公共依赖, 公共依赖会被单独打包成一个chunk。
   *   - 注: 只有公共文件大于30kb才会被单独打包。
  */
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

  mode: "production"
};
