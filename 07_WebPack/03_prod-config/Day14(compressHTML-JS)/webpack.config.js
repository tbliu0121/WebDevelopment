const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,          // 防止将第三方文件转化了
        loader: "babel-loader",
        options: {
          // 预设: 指示babel做哪些兼容性处理
          presets: [
            [
              "@babel/preset-env",        // 基本兼容性语法处理
              {
                useBuiltIns: "usage",     // 01 按需加载。
                corejs: { version: 3 },   // 02 指定按需加载的配置: corejs的版本。
                targets: {                // 03 指定兼容到那个浏览器的版本。
                  chrome: "60",
                  firefox: "60",
                  ie: "9",
                  safari: "10",
                }
              },
            ]
            
          ]
        }
      }
    ]
  },

  plugins: [
    // 压缩html: 在HTMLWebpackPlugin()中加入minify即可完成
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,         // 移除换行符号和空格
        removeComments: true              // 移除代码中的注释
      }
    })
  ],

  mode: "production"                      // 压缩js: 将模式设置为生产模式就会自动压缩js代码
};