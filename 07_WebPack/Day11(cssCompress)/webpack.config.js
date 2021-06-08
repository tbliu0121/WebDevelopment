const { resolve } = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// 设置nodejs环境变量, 以开发环境来执行
process.env.NODE_ENV = "development"

// optimize-css-assets-webpack-plugin

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
          MiniCssExtractPlugin.loader, 
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              // postcss的插件
              plugins: [
                // 这里与视频有出入, postcss降低到3.x.x, 然后把箭头函数改为数组才可以。
                require("postcss-preset-env")()
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HTMLWebPackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/built.css"
    }),
    // 内部的默认配置已经足够将CSS文件压缩了~无需任何额外的配置。
    new OptimizeCssAssetsPlugin()
  ],

  mode: "development",
}
