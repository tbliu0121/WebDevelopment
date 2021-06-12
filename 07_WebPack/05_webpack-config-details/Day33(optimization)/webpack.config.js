const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "js/[name].[contenthash].js",
    path: resolve(__dirname, "build"),
    chunkFilename: "js/[name]_[contenthash:8]_chunk.js",     // 设置非入口chunk的名字。
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin()
  ],

  resolve: {
    // 解析路径的别名
    alias: {
      $css: resolve(__dirname, "src/css"),
    },
    extensions: [".js", ".json", "jsx", "css"],
    modules: [resolve(__dirname, "../../node_modules"), "node_modules"]
  },

  mode: "production",

  // 只在生产环境下应用
  optimization: {
    // 分割提取公共代码
    splitChunks: {
      chunks: "all"
    },
    // 将当前模块的记录其他模块的hash单独打包成一个runtime文件
    // 解决的问题是修改非入口文件chunk以contenthash命名时
    // 入口文件引用此文件的hash也会变, 导致入口文件内容变化。
    // 思路：将hash值单独提取出来放入到runtime文件中, 这样非入口文件变化就不会导致入口文件变动。
    runtimeChunk: {
      name: entryPoint => `runtime-${entryPoint.name}`
    },
    // 配置js和css在生产环境下的压缩方案的优化。
    minimizer: [
      // terser是uglify的迁移版本, uglify老旧了~
      new TerserWebpackPlugin({
        cache: true,      // 开启缓存
        parallel: true,   // 开启多进程打包
        sourceMap: true,  // 启用source-map
      })
    ]

    /****** 以下均为默认值, 可以不用写  ******/
    // minSize: 30 * 1024,             // 分割的chunk最小为30kb (只有大于minSize才会提取)
    // maxSize: 0,                     // 最大没有限制~
    // minChunks: 1,                   // 要提取的chunk最少被引用一次
    // maxAsyncRequests: 5,            // 按需加载时并行加载的文件最大数量是多少
    // maxInitialRequests: 3,          // 入口js文件最大的并行请求数量

    // automaticNameDelimiter: "~",    // 名称的连接符
    // name: true,                     // 可以使用命名规则
    // cacheGroups: {                  // 分割chunk
    //   // node_modules中的文件会被打包到vendors组的chunk中 --> vendors~xxx.js
    //   // 需要满足上面的公共规则, 如: 大小超过30kb, 至少被引用一次等
    //   vendors: {
    //     test: /[\\/]node_modules[\\/]/,
    //     priority: -10,              // 优先级
    //   },
    //   default: {
    //     minChunks: 2,
    //     priority: -20,
    //     // 如果当前要打包的模块和之前已经被提取的模块是同一个就会复用, 而不是重新打包。
    //     reuseExistingChunk: true,    
    //   }
    // }
  }
};