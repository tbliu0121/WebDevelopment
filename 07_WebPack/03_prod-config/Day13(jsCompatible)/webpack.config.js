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
      /**          js兼容性处理
       *   - babel-loader处理js的兼容性问题。
       *   - babel-loader; @babel/core; @babel/preset-env。
       *   - 问题: 只能转换基本的语法, promise之类的语法无法完成转化。
       * 
       *   - 要做全部的兼容性处理: @babel/polyfill           // 现在已经废弃了
       *   - @babel/polyfill直接在源代码的js文件中引入即可~   // 虽然废弃了, 还是要记录下来~
       *   - @babel/polyfill会引入所有的兼容性解决代码, 会导致文件体积过大。
       * 
       *   - core-js: 可以完成兼容性处理的按需加载。
       * 
       *   - 总结: babel-loader; @babel/core; @babel/preset-env; corejs。
       *   - 其中@babel/preset-env完成基本的语法兼容; corejs完成高级的兼容性处理并按需加载。
      */
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
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ],

  mode: "development"
};