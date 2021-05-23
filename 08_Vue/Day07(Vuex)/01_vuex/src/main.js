import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"   //导入vuex,

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,                      //挂载到Vue实例下面
  render: h => h(App)
})
