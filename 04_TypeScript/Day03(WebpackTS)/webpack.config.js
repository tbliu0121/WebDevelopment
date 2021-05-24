// 引入path, Nodejs的一个模块, 主要是帮助我们拼接路径
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");  // 生成index.html入口文件, 同时动态引入资源
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// commonjs模块导出语法
module.exports = {
  // 01 打包程序的入口文件
  entry: "./src/main.ts",

  // 02 指定打包文件所在的目录
  output: {
    path: path.resolve(__dirname, "dist"),  // 生成的打包文件的路径
    filename: "bundle.js",                  // 生成的打包文件的名字
    environment: {                          // 配置打包环境
      arrowFunction: false                  // 生成文件不使用箭头函数
    }
  },
  mode: "development",                      // wepback5.0以上需要设置mode。。。

  // 03 指定webpack打包时需要使用的模块(loader和对应的rules)
  module: {
    // 指定加载规则
    rules: [
      {
        test: /\.ts$/,                      // 通过正则表达式指定规则作用的目标文件
        use: [                              // 要使用的loader, 书写顺序与执行顺序相关, 最先执行的放在后面。
          {                                 // 复杂的loader使用对象的形式放置配置信息
            loader: "babel-loader",          // 指定使用的loader
            options: {                      // 设置定义环境
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {              // 要兼容的目标浏览器的版本
                      "chrome": "58",
                      "ie": "9"
                    },
                    "corejs": "3",         // 指定的corejs方式
                    "useBuiltIns": "usage"  // 使用corejs的方式: usage表示按需加载
                  }
                ]
              ]
            }
          },
          "ts-loader"
        ],
        exclude: /\node_modules/            // 要排除的文件
      }
    ],

  },

  // 04 配置需要使用的plugin, 是一个数组, 注册对应的Plugin。
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: "这是一个自定义的title~"
      template: "./src/index.html"
    }),
  ],
  
  // 05 用来设置哪些文件可以作为模块被使用
  resolve: {
    extensions: ['.js', '.ts']
  }
};