import Vue from 'vue'
import router from "./router"      //如果导入的是一个文件夹，那么会自动去文件下找到index文件并导入
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',                      //挂载元素
  router,                          //将配置好的路由挂载到实例下面
  render: h => h(App)              //渲染App组件
})

// console.log(router);
