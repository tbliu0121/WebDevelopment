const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 单入口 (对应单页面应用的配置)
  // entry: "./src/js/index.js",
  entry: {
    index: "./src/js/index.js",
    test: "./src/js/test.js"
  },

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
