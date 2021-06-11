const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
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

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

  mode: "production"
};
