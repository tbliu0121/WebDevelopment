/**       loader和resolve的区别
 *   - loader: 下载; 使用(配置loader)。
 *   - plugins: 下载; 引入; 使用。
 */

const { resolve } = require("path");  // 通过结构赋值获取到path中resolve方法
const HTMLWebPackPlugin = require("html-webpack-plugin");  // 引入进来的是一个构造函数。

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "built.js",
    path: resolve(__dirname, "build")
  },

  module: {
    rules: [
      // loader的配置
    ]
  },

  plugins: [
    // html-webpack-plugin
    // 功能: 会默认创建一个空的HTML文件, 自动引入打包的输出的所有资源(js/css)
    // 需求: 我们要打包我们自己写的样式文件, 在构造函数中加入一个含有template的对象~
    new HTMLWebPackPlugin({
      // 复制指定文件覆盖默认html文件并自动引入打包输出所有资源。
      // 注意, 不需要自己再手动引入相关资源！！！
      template: "./src/index.html"
    })
  ],

  mode: "development"
}