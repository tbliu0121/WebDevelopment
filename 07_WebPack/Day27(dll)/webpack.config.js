const { resolve } = require("path");  // 通过结构赋值获取到path中resolve方法
const HTMLWebPackPlugin = require("html-webpack-plugin");  // 引入进来的是一个构造函数。
const webpack = require("webpack");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

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
    new HTMLWebPackPlugin({
      template: "./src/index.html"
    }),
    // 告诉webpack那些库不参与打包, 同时使用时的名称也需要修改。
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, "dll/manifets.json"),
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: require(__dirname, "dll/jquery.js"),
    })
  ],

  mode: "development"
}