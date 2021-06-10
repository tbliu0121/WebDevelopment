const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 单入口 (对应单页面应用的配置)
  // entry: "./src/js/index.js",
  entry: {
    // 多入口: 有几个入口就有几个bundle输出, 为了区分不同的bundle, 需要设置输出文件名字。(对应多页面应用的配置)
    // 多入口的入口可能会经常变动, 需要修改, 略嫌麻烦, 于是有了demo02的配置方法。
    main: "./src/js/index.js",
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

  mode: "production"
};
