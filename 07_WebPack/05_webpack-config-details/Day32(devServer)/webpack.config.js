const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "js/[name].js",
    path: resolve(__dirname, "build")
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin()
  ],

  resolve: {
    alias: {
      $css: resolve(__dirname, "src/css"),  // 优点: 工整; 缺点: 没有语法提示。
    },
    extensions: [".js", ".json", "jsx", "css"],
    modules: [resolve(__dirname, "../../node_modules"), "node_modules"]
  },

  // 一定是用于开发环境的
  devServer: {
    contentBase: resolve(__dirname, "build"),  // 运行代码的目录
    watchContentBase: true,                    // 监视contentBase下的目录, 一旦重新变化就会reload
    watchOptions: {                            // 忽略的监视文件
      ignored: /node_modules/
    },
    compress: true,                            // 启动gzip压缩
    port: 5000,                                // 指定端口
    host: "localhost",                         // 指定域名
    open: true,                                // 自动打开浏览器
    hot: true,                                 // 开启HMR功能
    clientLogLevel: "node",                    // 不显示启动服务器的日志信息
    quiet: true,                               // 除了基本的启动信息, 不会显示其他信息
    overlay: false,                            // 如果出现错误不要全屏提示
    proxy: {                                   // 服务器代理, 解决开发环境下的跨域问题
      // 一旦devServer(5000)接收到了/api/xxx的请求, 就会转到另一个服务器 (3000)
      "/api": { 
        target: "http://localhost:3000",
        // 发送请求时将请求路径重写: /api/xxx -> /xxx (去掉/api)
        pathRewrite: {
          "^/api": ""
        }
      }
    },
  },

  mode: "development"
};