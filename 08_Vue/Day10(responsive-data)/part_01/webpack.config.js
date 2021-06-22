const { resolve } = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    // 打包到目标端口下的一个虚拟文件中, 注意：需要在html文件手动引入打包后的文件输出地址。。。因为没用任何loader
    publicPath: "dist",
    // 打包生成的文件名字
    filename: "bundle.js"
  },

  mode: "development",

  devServer: {
    contentBase: "contBase",
    port: 8080,
    open: true,
  },

  devtool: "source-map"
};