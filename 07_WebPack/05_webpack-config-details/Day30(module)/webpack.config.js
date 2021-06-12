const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "js/[name].js",
    path: resolve(__dirname, "build")
  },

  module: {
    // loader的配置写到rules[]中
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]    // 多个loader用use: []
      },
      {
        test: /\.js$/,
        include: resolve(__dirname, "src"),    // 只检查这么目录下的文件
        exclude: /node_modules/,               // 要排除的文件
        enforce: "pre",                        // 优先执行, 值为post代表延迟执行。
        loader: "eslint"                       // 单个loader用loader: ""
      },
      { // oneOf中的loader匹配到符合的loader就会停止。
        oneOf: [
          { /* loader01 */},
          { /* loader02 */},
          { /* loader03 */}
        ]
      }

    ]
  },

  plugins: [
    new HtmlWebpackPlugin()
  ],

  mode: "development"  // 为了看到打包后的代码, 此处设置成开发模式
};