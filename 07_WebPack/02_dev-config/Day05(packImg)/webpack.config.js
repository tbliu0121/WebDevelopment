const { resolve } = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "built.js",
    path: resolve(__dirname, "build")
  },

  module: {
    rules: [
      // less-loader
      {
        test: /\.less$/,
        use: [
          "style-loader",          // 创建<style>标签, 将js中的样式字符串添加到<head>标签中。
          "css-loader",            // 将CSS文件转化为commonjs模块加载到js中, 转化之后都是样式字符串。
          "less-loader"
        ]
      },

      // url-loader
      {
        // 可以处理样式中的图片, 但是无法处理html中的<img>标签; 需要用html-loader处理<img>标签中的图片。
        test: /\.(jpg|jpeg|png|gif|webp)/,
        loader: "url-loader",      // 依赖于url-loader和file-loader。使用一个loader直接使用loader; 多个loader使用use。
        options: {
          limit: 8 * 1024,         // 图片大小小于限制按照base64处理; 可以减小请求数量, 但是会使文件体积变大。
          name: "[hash:10].[ext]"  // 对文件重命名; 取hash的前10位, 并使用文件原来的扩展名。
        }
      },

      // html-loader
      {
        test: /\.html$/,
        // 处理html文件中的<img>图片, 引入<img>中的图片, 从而可以被url-loader处理。
        loader: "html-loader",     // 引入后的文件是commojs模块, url-loader是默认用es6module解析的; 
        options: {
          esModule: false          // 关闭es模块(Webpack5之前是写到url-loader中的。。。)
        }
      }
    ]
  },

  plugins: [
    new HTMLWebPackPlugin({
      template: "./src/index.html"
    })
  ],

  mode: "development"
}