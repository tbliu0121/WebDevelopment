// CommonJS模块化规范
const {add, mul} = require("./js/utils")

// 使用webpack打包此文件时, webpack会自动解析依赖关系, 将导入的模块一起打包
// 打包命令: webpack .src/indexedDB.js ./dist/bundle.js
// VScodeb无法运行webpack命令时, 在VSCode属性中设置以管理员身份运行即可

console.log(add(10, 20))
console.log(mul(10, 20))

// ES6模块化规范
import {name, age, height} from "./js/info";
console.log(name, age, height);

// 依赖css, 以模块化的方式引入即可
require("./css/normal.css");

// 依赖less文件
require("./css/special.less");

// 使用vue进行开发
// npm install vue --save
// 打包时无法运行, 添加如下属性到modules.export{}中; 因为vue有complier和run-only两个版本
// resolve: {
//   alias: {
//     'vue$': 'vue/dist/vue.esm.js'
//   }
// } 

import Vue from "vue"
// import app from "./vue/app"       //自定义export default{}的内容的名字
// //在vue文件中导入组件, 需要配置vue的loader才可以编译: vue-loader, vue-template-complier
// npm install vue-loader vue-template-compiler --save-dev
import app from "./vue/app.vue"     

// vue开发更多的是SPA单页面富应用, 只有一个index.html文件
// 多个页面之间的跳转通过vue路由实现(前端路由)

new Vue({  //真实开发中不需要对vue实例赋值到const app上, 直接new Vue()就行
  el: "#app",
  template: `<app></app>`,           //在模板中使用组件即可
  components: {
    app                              //在Vue实例下注册组件
  }
});