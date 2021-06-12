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
        use: ["style-loader", "css-loader"]    // 多个loader用use: []
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin()
  ],

  // 解析模块时的一些设计路径的规则。
  resolve: {
    // 解析路径的别名
    alias: {
      $css: resolve(__dirname, "src/css"),  // 优点: 工整; 缺点: 没有语法提示。
    },

    // 配置省略文件路径的后缀名(一般省略的是js文件后缀名)
    // 不同后缀的文件重名, 则引入文件时只引入到第一个匹配的, 如index.js和index.css。
    extensions: [".js", ".json", "jsx", "css"],

    // 告诉webpack解析模块时去哪个目录寻找; 默认寻找node_modules, 并且逐层寻找
    modules: [resolve(__dirname, "../../node_modules"), "node_modules"]
  },

  mode: "development"  // 为了看到打包后的代码, 此处设置成开发模式
};