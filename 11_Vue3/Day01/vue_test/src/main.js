// 引入的不再是Vue构造函数, 而是引入了一个名为createApp的工厂函数
// 构造函数首字母大写, 通过new操作符使用; 工厂函数则是正常函数的使用方式
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app');  // 代码可拆解如下

// 创建应用实例对象: app; vue2中的实例是通过new Vue()产生的
// 产生的实例更加轻量, 没有那么vue2产生的实例有那么多的属性和方法
const app = createApp(App);
console.log(app);

// 挂载元素
app.mount('#app');  // 不写此句语法检查会报错, 可在vue.config.js中配置: lintOnSave: false 关闭语法检查。

setTimeout(() => {
  // 卸载元素
  app.unmount('#app');
}, 1500);


// const vm = new Vue({
//   render: h => h(App)
// });
// // .$mount('#app)和在new Vue()内部写el: '#app'是一个效果
// vm.$mount('#app');  
