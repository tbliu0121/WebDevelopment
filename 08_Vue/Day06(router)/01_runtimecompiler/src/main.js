// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
const cpn = {
  template: `<div>{{msg}}</div>`,
  data() {
    return {
      msg: "Hello VUe~"
    }
  }
}


new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  // 将组件以参数的形式传给render函数, 就是run time only的过程。
  // 而上面两行注释中的形式则需要从template编译到AST再到render的过程。

  render: function(createElement) {
    // 1. 普通用法: createElement("标签", {标签的属性}, ["标签的内容", "etc"])
    // return createElement("h3", 
    //          {class: "box"},
    //           ["Hello World", createElement("button", ["一个按钮"])])

    // 2. 传入一个组件对象也可以
    // return createElement(cpn)
    return createElement(App);
  }
})
