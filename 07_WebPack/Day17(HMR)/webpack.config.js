/**
 *   - HMR: Hot Module Replacement 模块热更新（这是针对开发环境的！！！）
 *   - 作用: 一个模块发生变化时, 只重新打包这个一个模块, 而不是重新打包所有模块。
 *   - 极大地提高了代码的构建速度。
 *   - 使用: 在devServer中配置hot: true即可！！！
 * 
 *   - 样式文件: 可以使用HMR功能, 因为style-loader内部实现了此功能。
 * 
 *   - js文件: 默认不能使用HMR功能; 需要修改js代码, 添加支持HMR功能的代码（见index.js末尾）。 
 *     - HMR只针对非入口的js文件, 因为入口文件会引入其他文件, 一旦入口文件发生了变换, 其他模块就会重新加载。
 * 
 *   - html文件: 默认不能使用HMR功能, 同时开启HMR会导致html文件不能热更新了。
 *     - 解决方法: 将入口文件变成数组, 将html文件入口引入即可恢复html代码的热更新。
 *     - [[BUT]]: 由于html只有一个文件, 没有js那么多模块, html不需要做HMR功能！！！
 * 
 *   - 注意: 无法实现代码热更新时, 将package.json中的browerslist删除即可！！！
 */

const { resolve } = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: "./src/js/index.js",
  entry: ["./src/js/index.js", "./src/index.html"],

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
    compress: true,    // 启用gzip压缩。
    port: 3000,        // 设置热更新的本地端口号。
    open: true,        // 启动自动打开默认浏览器。
    hot: true,         // 开启HMR功能。
  }
}