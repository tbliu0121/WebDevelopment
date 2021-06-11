const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");                       // 抽离CSS
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");  // 压缩CSS
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WorkerBoxWebpackPlugin = require("workbox-webpack-plugin");                      // PWA技术支撑
const { options } = require("less");

// 定义nodejs中的环境变量: 决定使用browerslist的那个环境; 未上线之间可使用development
process.env.NODE_ENV = "production";

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,   // 完成CSS的抽离
  "css-loader",
  {
    loader: "postcss-loader",    // 完成CSS的兼容处理 (还需要在package.json中配置browserslist)
    options: {
      ident: "postcss",
      plugins: [
        require("postcss-preset-env")()
      ]
    }
  }
]

module.exports = {
  entry: "./src/js/index.js",

  output: {
    // 将文件打上hash, 一旦变化就访问服务器, 否则访问缓存
    filename: "js/built[contenthash:10].js",
    path: resolve(__dirname, "build")
  },

  module: {
    rules: [
      { // js语法的检查(需要在package.json中配置eslintConfig来指示做哪些检查; 推荐使用airbnb规则)
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",                // 此属性会优先执行此loder！！！
        loader: "eslint-loader",
        options: {
          fix: true                    // 开启代码自动修复
        }
      },
      {
        oneOf: [
          { // 抽离.css
            test: /\.css$/,
            use: [...commonCssLoader]
          },
          { // 抽离.less
            test: /\.less$/,
            use: [ ...commonCssLoader, "less-loader" ]
          },
          { // js兼容性处理
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              // 开启多进程打包
              {
                loader: "thread-loader",
                options: {
                  worker: 2,                   // 启用两个进程来打包
                }
              },
              {
                loader: "babel-loader",
                options: {
                  presets: [                   // 告诉babel做哪些兼容预处理
                    [
                      "@babel/preset-env",
                      {
                        useBuiltIns: "usage",
                        corejs: { version: 3 },
                        targets: {
                          chrome: "60",
                          firefox: "50"
                        }
                      }
                    ]
                  ],
              cacheDirectory: true,        // 第二次构建的时候会读取缓存, 从而速度能更快。
            }
              }              
            ],
          },
          { // 处理图片资源(样式中的图片, 不包括<img>标签中的图片资源)
            test: /\.(jpg|png|gif)$/,
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              name: "[contenthash:10].[ext]",
              outpath: "images"
            }
          },
          { // 处理HTML文件中<img>内的图片资源
            test: /\.html$/,
            loader: "html-loader",           // 注意html-loader使用的是commonjs模块化, 需要处理
            options: {
              esModule: false                // 处理commojs和esMo模块之间的冲突
            }
          },
          { // 处理其他文件(原封不动输出即可)
            exclude: /\.(js|css|less|html|jpg|jpeg|png|gif|webp)$/,
            loader: "file-loader",
            options: {
              outputPath: "media"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // 抽离CSS并指定输出文件
    new MiniCssExtractPlugin({
      // 同理, 给文件加上hash, 一旦文件发生变化就访问服务器, 否则访问缓存。
      filename: "css/built[contenthash:10].css"
    }),
    // 压缩CSS文件
    new OptimizeCssAssetsWebpackPlugin(),
    // 处理HTML文件(无法处理<img>, 因此需要html-loader, go to see loder)
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      minify: {                       // 压缩HTML
        collapseWhitespace: true,
        removeCommoents: true
      }
    }),

    // step 01: 生成SW by GenerateSW
    // step 02: go to the entry jsfile to enroll service worker (./src/js/index.js)
    new WorkerBoxWebpackPlugin.GenerateSW({
      /**        Workerbox
       *   01 帮助serviceWorker快速启动
       *   02 删除旧的serviceworker
       *   
       *   最后会生成一个serviceWorker配置文件, 我们需要在这个配置文件下面注册serviceWorker。
       *   在入口文件index.js中注册(详见./src/js/index.js中注册笔记)
       *   构建后的输出文件会生成一个service-worker.js文件
      */
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],

  mode: "production",
  devtool: "source-map"              // 生产调试工具
};