/**
 * 开发环境的配置: 能让代码运行起来即可~
 * 运行指令
 *   - webpack: 会将打包的结果输出。
 *   - npx webpack serve: 只在内存中打包编译文件, 不产生输出文件。
 */

const { resolve } = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "js/build.js",             // filename只决定入口文件在打包文件的输出位置。
    path: resolve(__dirname, "build")    // 所有文件都会输出到这个目录下面
  },

  module: {
    rules: [
      // 在这里面写各种loader的配置
      { // 01 处理less文件
        test: /\.less$/,
        use: [ "style-loader", "css-loader", "less-loader" ]
      },
      { // 02 处理CSS文件
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
      },
      { // 03 处理图片文件
        test: /\.(jpg|jpeg|png|gif|webp)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,               // 低于限制的图片会以base64的格式嵌入到代码中。
          name: "[hash:10].[ext]",
          outputPath: "imgs"             // 设定打包输出的图片资源的位置
        }
      },
      { // 04 处理<img>中的图片(默认通过commonjs的模块引入), url-loader则是通过es6的规范解析的
        test: /\.html$/,
        loader: "html-loader",
        options: { 
          // 关闭es6模块化
          esModule: false 
        }
      }, 
      { // 05 处理其他资源
        exclude: /\.(html|js|css|less|png|jpg|jpeg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
          outputPath: "font"             // 设置打包其他资源的输出文件
        }
      }
    ]
  },

  plugins: [
    // 各种插件的配置
    new HTMLWebPackPlugin({
      template: "./src/index.html",
    })
  ],

  mode: "development",

  // devServe没有输出, 只在内存中编译打包; 代码体积更小, 启动更快。
  devServer: {
    contentBase: resolve(__dirname, "build"),
    compress: true,    // 启用gzip压缩
    port: 3000,        // 设置热更新的本地端口号
    open: true         // 启动自动打开默认浏览器
  }
}