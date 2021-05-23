const path = require("path");   //从Node环境中导入path
// 一旦需要node的东西, 使用npm init初始化所在文件, 建立一个package.json文件
// webpack.config.js和npm init生成的package.json要和src以及dist处于同一个目录下面
// 配置好下面的内容可以直接使用webapck命令打包, 而不用webpack ./src/index.js ./dist/bundle.js

module.exports = {
  entry: "./src/index.js",
  output: {
    // path: 需要动态获取路径, 通过node语法
    // __dirname是node所在环境上下文的全局变量; resolve()会拼接这两个形成一个绝对路径
    path: path.resolve(__dirname, 'dist'),     
    filename: "bundle.js"
  }
}