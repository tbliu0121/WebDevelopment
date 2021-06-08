const { resolve } = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");

// 打包其他资源(如字体图标, 这类文件不需要任何处理直接输出即可)
module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "built.js",
    path: resolve(__dirname, "build")
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ],
      },
      // 打包其他资源(除了html、css、js资源)
      {
        exclude: /\.(css|js|html|less|scss)$/,     // 排除这些文件以外的资源就是其他资源
        loader: "file-loader",
        options: { name: "[hash:10].[ext]" }       // 对输出文件重命名
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
