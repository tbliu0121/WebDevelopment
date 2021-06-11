/**  webpack.config.js是webpack的配置文件
 *   - 作用: 指示webpack完成那些工作（运行webapck指令时, 就会加载里面的内容）
 *   - 所以工的构建工具都是基于Node平台运行的, Node的模块化是默认用commonjs。
 *   - webpack.config.js是写配置的代码。
 *   - src是写项目的代码。项目代码和配置代码用的是不同的模块化规范
 */

// 通过结构赋值引入nodejs模块中的一个方法
const { resolve } = require("path");  

// webpack配置: 五个核心配置
module.exports = {
  // 01 入口
  entry: "./src/index.js",

  // 02 输出
  output: {
    // 输出的文件名字
    filename: "built.js",                  
    // 输出文件的路径(为了避免出错, 使用绝对路径, __dirname是node中的一个变量, 代表当前文件的绝对路径)
    path: resolve(__dirname, "build"),     
  },

  // 03 loader的配置
  module: {
    rules: [
      // 详细loader配置, 每一个lodaer的配置都是一个对象
      {
        // 匹配那些文件
        test: /\.css$/,
        // 使用那些Loader来处理, use中Loader是反向顺序执行的。
        use: [
          "style-loader",  // 创建<style>标签将js中的CSS样式添加到<heade>中生效
          "css-loader"     // 将CSS文件变成commonjs模块加载到js中, 里面都是样式字符串
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",  // 创建<style>标签将JS中的CSS样式加入到<heade>中生效
          "css-loader",    // 将CSS文件变化commonjs模块加载到js中, 里面都是样式字符串。
          "less-loader"    // 将less文件编译成css文件, 需要less和less-loader两个包支持
        ]
      }
    ]
  },

  // 04 plgins插件(是一个数组)
  plugins: [
    // plugins详细配置
  ],

  // 05 mode只有两种模式
  mode: "development",  // 测试过程中一般以开发模式来运行
  // mode: "production"

}