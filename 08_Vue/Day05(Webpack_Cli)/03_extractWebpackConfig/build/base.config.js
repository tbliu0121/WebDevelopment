const path = require("path");          //从Node环境中导入path
const webpack = require("webpack");    //导入时会从node_modules中去寻找对应的文件
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 一旦需要node的东西, 使用npm init初始化所在文件, 建立一个package.json文件
// webpack.config.js和npm init生成的package.json要和src以及dist处于同一个目录下面
// 配置好下面的内容可以直接使用webapck命令打包, 而不用webpack ./src/index.js ./dist/bundle.js

module.exports = {
  entry: "./src/index.js",   //打包文件的入口
  output: {                  //打包文件的出口
    // path: 需要动态获取路径, 通过node语法
    // __dirname是base.config.js所在环境上下文的全局变量; resolve()会拼接这两个形成一个绝对路径
    path: path.resolve(__dirname, '../dist'),  //base.config和dist不在同一级     
    filename: "bundle.js",
    // 以后涉及到url(如背景图片)的都会在前面拼接, 默认webpack会将生成的路径直接返给使用者。
    // publicPath: "dist/"  使用HtmlWebpackPlugin在dist文件下生成的index.html会在引入bundle时加上这个前缀(先划掉)       
  },
  module: {   //用到的loader
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"]    //cssloader只负责加载文件, 也不负责解析css文件。
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
              limit: 13000,  //8196。图片规格超出限制会使用file-loader打包。
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
      // 'extensions': ['.css', '.vue', '.js'],           //可以不写扩展名直接引用, 此处写法似乎有点问题
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [  //用到的插件
    new webpack.BannerPlugin('练习版权归 tbliu0121 所有'), //在bundle文件中会加入版权信息声明
    new HtmlWebpackPlugin({
      template: "index.html"                              //根据配置文件所在目录下的目标文件来生成模板
    })
  ] 
}