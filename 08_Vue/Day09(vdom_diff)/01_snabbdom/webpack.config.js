const { resolve } = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    // publicPath 代表虚拟打包, 意味着文件不会真正生成, 而是在运行端口下虚拟生成 (似乎不大对。。。)
    // path: resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "bundle.js"
  },

  devServer: {
    // 静态资源文件夹
    contentBase: "content_base",
    port: 8080,
    open: true
  },

  mode: "development",

  devtool: "source-map"
};