const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",

  output: {
    // 文件名称 (可指定公共目录下的子目录)
    filename: "js/[name].js",
    // 指定文件的输出目录 (将来所有资源输出的公共目录)
    path: resolve(__dirname, "build"),
    // 所有资源的引入的公共路径的前缀, 一般用于生产环境。
    // ./imgs/img01.jps -> 从当前目录开始寻找资源; /imgs/img01.jpg -> 以当前服务地址为补充, 从服务器的根目录下开始寻找。
    publicPath: "/",
    // 非入口chunk的名称
    // import分割出去的、optimization分割出去的node_modules都是非入口chunk
    chunkFilename: "js/[name]_chunk.js",  
    // liarary一般结合dll一起使用, 将某个库单独打包暴露到全局中, 然后库就可以全局使用了。
    library: "[name]",          // 打包后的文件作为一个库向外暴露的名字
    // libraryTarget: "global",    // 变量名添加到那个属性下, node平台是global, browser端则是window
    libraryTarget: "commongjs"  // 添加到commonjs中, 通过使用coomonjs引入
  },

  plugins: [
    new HtmlWebpackPlugin()
  ],

  mode: "development"  // 为了看到打包后的代码, 此处设置成开发模式
};