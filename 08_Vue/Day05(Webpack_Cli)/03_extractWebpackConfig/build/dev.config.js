const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = webpackMerge.merge(baseConfig, {     //将基本配置和开发配置合并
  devServer: {                                        
    contentBase: "./dist",                            //启动指定文件夹下面的文件
    inline: true,                                     //实时更新页面内容
    host: "localhost",
    compress: true,                                   //运行到本地服务器之前对代码压缩
    pport: 8081,
    open: true
  }
});