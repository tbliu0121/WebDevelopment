const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");                      // 抽离CSS
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");  // 压缩CSS
const HTMLWebpackPlugin = require("html-webpack-plugin");

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

/**      生产环境优化: 缓存
 *   - babel缓存
 *     - cacheDirectory: true。
 *     - 让后续的打包构建速度更快。
 * 
 *   - 文件资源缓存 (让代码上线运行更好实用)
 *     - hash: 每次打包构建的时候回生成一个唯一的hash。
 *     - 问题: 因为js和css共享同一个hash; 一旦重新打包, 一个资源的变化会导致所有缓存失效。
 * 
 *     - chunkhash: 打包的内容只要来自于同一个chunk, 那么hash就是一样的。
 *     - [[BUT]]: css和js的hash还是一样的; 这是因为css是在js中引入的, 故同属一个chunk (尽管又抽离了出去)。
 *     - 同一个入口文件形成的依赖关系而打包的就是一个chunk。
 * 
 *     - contenthash: 会根据文件的内容来生成hash。不同的文件hahs值一定不一样。
 *   
 *   - 只要维护好hash值就可以控制好文件的缓存。
 */

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
              // 开启缓存之后需要构建一个node服务器, 通过network查看缓存情况
              // network -> all -> built.js -> headers查看缓存设置信息
              // 缓存了之后用户可以很快的访问资源
              cacheDirectory: true,        // 第二次构建的时候会读取缓存, 从而速度能更快。
            }
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
    })
  ],

  mode: "production",
  devtool: "source-map"              // 生产调试工具
};