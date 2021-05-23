import Vue from 'vue'
import App from './App'
import router from './router'

import axios from "axios"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 01.axios的基本使用
// axios()本身会返回一个promise对象
axios({
  // url: "httpbin.org"
  url: "http://123.207.32.32:8000/home/multidata",  //默认使用的是get方法请求网络数据
  // params: {
  // url的get参数可以以params属性指定(只支持get方式哦~) 
  //   type: "pop",
  //   page: 1
  // },
  method: "get"                                     //通method可以指定请求方式
}).then(res => {
  console.log(res);
});

// 02.axios.all()发送并发请求
axios.all([
  axios({
    url: "http://123.207.32.32:8000/home/multidata"
  }), 
  axios({
    url: "http://123.207.32.32:8000/home/multidata"
  })
]).then(results => {                                //并发请求的结果以数组的形式返回
  console.log(results);
});

// 03.并发请求结果分割展开
axios.all([
  axios({
    url: "http://123.207.32.32:8000/home/multidata"
  }), 
  axios({
    url: "http://123.207.32.32:8000/home/multidata"
  })
]).then(axios.spread((res1, res2) => {
  // axios.spread()可以对并发返回的结果分割展开
  console.log(res1);
  console.log(res2);
}));

