const { resolve } = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build")
  },

  module: {
    rules: [
      { 
        test: /\.css$/,
        use: [
          // 创建<style>标签将样式放入其中
          // "style-loader",    
          MiniCssExtractPlugin.loader,  // 为了从js中抽离css, 要停用style-loader并使用此loader。
          // 将css文件整合到js文件中
          "css-loader"
        ],
      }
    ]
  },

  plugins: [
    new HTMLWebPackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      // 对输出的css文件重命名
      filename: "css/built.css"
    }),
  ],

  mode: "development",

  // devServer: {}
}