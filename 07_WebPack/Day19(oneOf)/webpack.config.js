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

module.exports = {
  entry: ["./src/js/index.js", "./src/index.html"],

  output: {
    filename: "js/built.js",
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
      { // oneOf优化生产环境打包构建速度。
        // 只匹配以下的一个loader; 目的是提升生产环境打包构建速度。
        // 正常来说每个文件在执行的时候都会过一遍所有的loader, 这回严重降低打包速度。
        // oneOf优化下只要匹配到了一符合条件的loader就会停止后续loader的扫描。
        // 注意: 不能有两个配置处理同一个类型的loader,因为之一个可以生效, 因此将eslint语法检测提出来。
        oneOf: [
          { // 抽离.css
            test: /\.css$/,
            use: [...commonCssLoader]
          },
          { // 抽离.less
            test: /\.less$/,
            use: [ ...commonCssLoader, "less-loader" ]
          },
          /**
           *   - 正常来讲, 一个文件只能被一个loader来处理。
           *   - 因此一个文件需要别多个loder处理, 一定要注意looder执行的先后顺序：
           *     - 先执行eslint再执行babel-loader。
          */
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
              ]
            }
          },
          { // 处理图片资源(样式中的图片, 不包括<img>标签中的图片资源)
            test: /\.(jpg|jpeg|png|gif|webp)$/,
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              name: "[hash:10].[ext]",
              outpath: "images"
            }
          },
          { // 处理HTML文件中<img>内的图片资源
            test: /\.html$/,
            loader: "html-loader",           // 注意html-loader使用的是commonjs模块化, 需要处理
            options: {
              esModule: false             // 处理commojs和esMo模块之间的冲突
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
      filename: "css/built.css"
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

  mode: "production"
};