const { resolve } = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/js/index.js", "./src/index.html"],

  output: {
    filename: "js/build.js",             // filename只决定入口文件在打包文件的输出位置。
    path: resolve(__dirname, "build")    // 所有文件都会输出到这个目录下面
  },

  module: {
    rules: [
      // 在这里面写各种loader的配置
      { // 01 处理less文件
        test: /\.less$/,
        use: [ "style-loader", "css-loader", "less-loader" ]
      },
      { // 02 处理CSS文件
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
      },
      { // 03 处理图片文件
        test: /\.(jpg|jpeg|png|gif|webp)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,               // 低于限制的图片会以base64的格式嵌入到代码中。
          name: "[hash:10].[ext]",
          outputPath: "imgs"             // 设定打包输出的图片资源的位置
        }
      },
      { // 04 处理<img>中的图片(默认通过commonjs的模块引入), url-loader则是通过es6的规范解析的
        test: /\.html$/,
        loader: "html-loader",
        options: { 
          // 关闭es6模块化
          esModule: false 
        }
      }, 
      { // 05 处理其他资源
        exclude: /\.(html|js|css|less|png|jpg|jpeg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
          outputPath: "font"             // 设置打包其他资源的输出文件
        }
      }
    ]
  },

  plugins: [
    // 各种插件的配置
    new HTMLWebPackPlugin({
      template: "./src/index.html",
    })
  ],

  mode: "development",

  // devServe没有输出, 只在内存中编译打包; 代码体积更小, 启动更快。
  devServer: {
    contentBase: resolve(__dirname, "build"),
    compress: true,         // 启用gzip压缩。
    port: 3000,             // 设置热更新的本地端口号。
    open: true,             // 启动自动打开默认浏览器。
    hot: true,              // 开启HMR功能。
  },

  devtool: "source-map",    // 打包后会生成一个source-map文件
};

/**           开发环境优化: source-map
 *   - source-map: 一种 提供源代码到构建后代码 映射的 技术（如果构建后的代码出错, 可以追踪到源代码的错误位置！！！）
 *     - [inline-|hidden-|eval-]  [nosources-]  [cheap-[module-]]  source-map
 * 
 *     - source-map: 生成单独的map文件。
 *       - 错误代码的信息 和 源代码的错误的位置。
 * 
 *     - inline-source-map: 内联; 只生成一个内联的soource-map。
 *       - 错误代码的信息 和 源代码的错误的位置。
 * 
 *     - hidden-source-map: 外部独立source-map文件。
 *       - 提示错误原因, 无法追踪到错误的正确位置, 只能提示错误代码在构建后的代码的位置。
 * 
 *     - eval-source-map: 内联; 每一个文件都生成对应的source-map。
 *       - 错误代码准确信息 和 源代码错误的位置; 多了一个生成文件的hash映射值。
 *
 *     - nosouces-source-map: 外部独立文件。
 *       - 错误代码准确信息; 但是没有任何源代码的信息！！！
 * 
 *     - cheap-source-map: 外部独立文件。
 *       - 错误代码准确信息 和 源代码的错误位置。
 *       - 但是只能精确到那一行出错。
 * 
 *     - cheap-module-source-map: 外部独立文件。
 *       - 错误代码准确信息 和 源代码的错误位置。
 *       - module会将loader的source-map也加进来。
 * 
 *     - hidden和nosources是为了隐藏源代码而产生的; 防止通过调试来找到源代码从而引起泄露。
 * 
 *     - 开发环境: 要求速度快、调试更友好。
 *       - 速度快: eval > inline > cheap > ... 有叠加效果, 如eval-cheap-source-map是更快的。
 *       - 调试友好: source-map > cheap-module-source-map > cheap-source-map。
 *       - 推荐: eval-source-map可以平衡两种效果; 或者eval-cheap-module-source-map。
 *       - Vue / React脚手架中默认使用的是eval-source-map这中方式。
 * 
 *     - 生产环境: 源代码是否要隐藏？调试是否更友好？
 *       - 内联的source-map会使代码体积变得更大, 生产环境一般不使用内联效果的source-map。
 *       - no-sources-source-map  全部隐藏代码
 *       - hidden-source-map      只隐藏源代码
 *       - 推荐使用: source-map / cheap-module-source-map。
 */