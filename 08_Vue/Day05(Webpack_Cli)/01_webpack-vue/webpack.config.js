const path = require("path");   //从Node环境中导入path
// 一旦需要node的东西, 使用npm init初始化所在文件, 建立一个package.json文件
// webpack.config.js和npm init生成的package.json要和src以及dist处于同一个目录下面
// 配置好下面的内容可以直接使用webapck命令打包, 而不用webpack ./src/index.js ./dist/bundle.js

module.exports = {
  entry: "./src/index.js",
  output: {
    // path: 需要动态获取路径, 通过node语法
    // __dirname是webpack.config.js所在环境上下文的全局变量; resolve()会拼接这两个形成一个绝对路径
    path: path.resolve(__dirname, 'dist'),     
    filename: "bundle.js",
    publicPath: "dist/"         //以后涉及到url的都会在前面拼接, 默认webpack会将生成的路径直接返给使用者。
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"]  //cssloader只负责加载文件, 也不负责解析css文件。
      },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              //图片小于限制时会生成base64文件
              //图片大于限制时会
              limit: 8196,  //8196。图片规格超出限制会使用file-loader打包。
              name: 'img/[name].[hash:8].[ext]'   //将超出限制的图片按照这个格式命名新生成的文件
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']    //@babel/preset-env
          }
        }
      },
      {
        test: /\.vue$/,            //匹配.vue文件
        use: {
          loader: "vue-loader"     //使用vue-loader
        }
      }
    ]
  },
  resolve: {
    alias: {
      // 'extensions': ['.css', '.vue', '.js'],    //可以不写扩展名直接引用
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}