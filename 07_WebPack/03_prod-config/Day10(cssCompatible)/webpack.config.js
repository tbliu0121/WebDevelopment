const { resolve } = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 设置nodejs环境变量, 以开发环境来执行
process.env.NODE_ENV = "development"

module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build")
  },

  module: {
    rules: [
      { 
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader",
          /**               利用postcss这个库来处理css的兼容性问题
           *   - CSS兼容性处理: postcss --> postcss-loader postcss-preset-env
           *   - postcss要想在webpack下运行需要依赖一个loader和一个plugin。
           *   - postcss-preset-env可以识别环境从而加载某些配置。
           *   - 帮助postcss找到package.json中共browserlist里面的配置, 通过配置加载指定的css兼容性格式。
           * 
           *   - "browserslist": {
           *        // 开发环境 --> 需要设置Nodejs环境变量: precess.env.NODE_ENV = development
           *        "development": [
           *          "last 1 chrome version",
           *          "last 1 firefox version",
           *          "last 1 safari version"
           *        ],
           *        // 生产环境（默认是看生产环境的配置的）
           *        "production": [
           *          ">0.2%",
           *          "not dead",
           *          "not op_mini all"
           *        ]
           *      }
          */

          // way01: 使用loader的默认配置
          // "postcss-loader"
          // way02: 修改loader的配置
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              // postcss的插件
              plugins: [
                // 这里与视频有出入, postcss降低到3.x.x, 然后把箭头函数改为数组才可以。
                require("postcss-preset-env")()
              ]
            }
          }
        ],
      }
    ]
  },

  plugins: [
    new HTMLWebPackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/built.css"
    }),
  ],

  mode: "development",
}
