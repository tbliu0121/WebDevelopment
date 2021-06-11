const { resolve } = require("path");  // 通过结构赋值获取到path中resolve方法
const HTMLWebPackPlugin = require("html-webpack-plugin");  // 引入进来的是一个构造函数。

module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build")
  },

  plugins: [
    new HTMLWebPackPlugin({
      template: "./src/index.html"
    })
  ],

  mode: "production",
  externals: {
    // 忽略的库名 -- npm的包名
    // 忽略掉的库需要通过cdn添加到html代码中
    jquery: "jQuery"
  }
}