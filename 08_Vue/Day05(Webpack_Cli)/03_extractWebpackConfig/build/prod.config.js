const path = require("path");                //从Node环境中导入path
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin"); 
const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = webpackMerge.merge(baseConfig, {  //基本配置和生产配置合并
  plugins: [
    new UglifyjsWebpackPlugin() 
  ]
});