const { resolve } = require("path");
const webpack = require("webpack")
/**               dll
 *   - 使用dll技术对某些文件进行单独打包; 一般指的是第三方库。
 *   - 当运行webpack时, 默认查找的是webapck.config.js配置文件。
 *   - 而我们需要运行webpack.dll.js文件, 执行如下指令即可。
 *     - webpack --config webpack.dll.js
*/
module.exports = {
  entry: {
    jquery: ["jquery"]   // 生文件名字 -- 要打包的包名
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dll"),  // 打包到dll目录下
    library: "[name]_[hash:8]"        // 打包完的库向外暴露的名字
  },
  plugins: [
    // 帮我们生成一个manifest.json文件, 提供了一种映射关系, 通过这种映射关系可以知道不需要打包的库, 
    // dll打包之后源代码就不需要打包对应的内容了, 需要的时候直接引入即可
    // 因此webpack.config.js也要做出修改。
    new webpack.DllPlugin({
      name: "[name]_[hash:8]",        // 库动态打包后的名字
      path: resolve(__dirname, "dll/manifest.json"),  //输出文件的名称
    })
  ],
  mode: "production"
};
