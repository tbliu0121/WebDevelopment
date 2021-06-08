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

  mode: "development",

  // devServer: 用于完成自动的编译、打开浏览器、自动刷新浏览器等功能。
  // 特点: 只会在内存中编译打包, 不会有任何输出。
  // 启动指令: npx webpack-dev-server(需要下载相关的包)
  // webpack5中指令变为了npx webapck serve
  // 为了达到热更新的效果, 需要留在localhost本地端口号启动进程！！！
  devServer: {
    contentBase: resolve(__dirname, "build"),    // 打包的目标目录, 同样使用绝对路径
    compress: true,                              // 启动gzip压缩, 让代码体积更小, 启动更快
    port: 3000,                                  // 指定开发服务器的端口号
    open: true                                   // 自动打开浏览器
  }
}
