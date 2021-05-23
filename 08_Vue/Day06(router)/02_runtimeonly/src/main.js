import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App)
  render: function (h) {  //等价的效果
    return h(app)
  }
})