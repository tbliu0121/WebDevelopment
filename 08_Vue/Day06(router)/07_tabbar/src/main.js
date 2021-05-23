import Vue from 'vue'
import App from './App'
import router from './router'   // 写到文件即可, 会自动找到该文件下的index.js

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
