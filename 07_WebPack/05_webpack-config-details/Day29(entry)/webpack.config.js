const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 *   - entry: 入口的起点有三种情况
 *     1 String: "./src/js/index.js"; 单入口打包。
 *       - 打包形成一个chunk, 输出一个bundle文件。
 *       - filename: "[name].js"形成的默认的输出是main.js
 * 
 *     2 Array:["./src/js/index.js", "./src/js/add.js"]; 多入口打包。
 *       - 所有入口文件最终只会形成一个chunk, 输出去的只有一个bundle。
 *       - 所有文件都会打包到第一个文件内。
 *       - 用途: 通常来讲只有一个作用 -> 让html在HMR热更新中生效。
 * 
 *     3 Object: { key: value01, key: value02 }; 多入口打包。
 *       - 有几个入口文件就会形成几个chunk, 输出几个bundle文件。
 *       - chunk的名称是key值。
 * 
 *     4 特殊用法
 *         entry: {
 *           index: ["./src/js/index.js", "./src/js/sub.js"],
 *           add: ["./src/js/add"]
 *         }
 *       - 用途: 在打包相关资源时, 可以把相关资源写到一个数组中; 列子如下。
 *         entry: {
 *           index: "index.js",
 *           react: ["react", "reacht-dom", "react-router-dom"]
 *         }
 *
 *     【注】 第一种和第三种用的比较多, 第二种只针对特殊用途。
 */

module.exports = {
  entry: {
    index: ["./src/js/index.js", "./src/js/sub.js"],
    add: "./src/js/add.js"
  },

  output: {
    filename: "[name].js",
    path: resolve(__dirname, "build"),
  },

  plugins: [
    new HtmlWebpackPlugin()
  ],

  mode: "development"  // 为了看到打包后的代码, 此处设置成开发模式
};