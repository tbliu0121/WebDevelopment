const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build")
  },

  module: {
    rules: [
      /**        eslint语法检查
       *   - 希望团队代码的风格是类似的。
       *   - eslint-loader, ellint; 其中eslint-loader依赖于eslint。
       *   - 语法检查只针对js做检查; 只针对用户自己的代码不针对第三方库。
       *   - 需要设置检查规则。
       *     - 在package.json下的eslintConfig来设置。
       *         "eslintConfig": {
       *           "extends": "airbnb-base"
       *         }
       *     - 推荐使用airbnb的规则。
       *     - airbnb --> eslint, eslint-config-airbnb-base, eslint-plugin-import。
      */
      {
        test: /\.js$/,
        exclude: /node_modules/,     // 一定要排除node_modules！！！
        loader: "eslint-loader",
        options: {
          fix: true,                 // 自动修复eslint错误。
        }
      }
      
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ],

  mode: "development"
};