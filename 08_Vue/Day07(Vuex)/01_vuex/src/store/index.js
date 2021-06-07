import Vue from "vue"
import Vuex from "vuex"
import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"
import moduleA from "./modules/moduleA"

// 01安装插件; 执行Vue.use(Vuex)后底层就会自动完成Vuex.install
Vue.use(Vuex);  

// 02创建一个对象, 注意Store是大写(是一个Vue类型的实力大写哦~)
// Vuex的核心内容: state, actiongs, mutations, modules, getters
const state = {   //单一装态树(单一数据源)
  counter: 256,
  students: [
    {id: 1757, name: "Jonathan", age: 18},
    {id: 1758, name: "Orsan", age: 22},
    {id: 1759, name: "Taylor", age: 19},
    {id: 1760, name: "Chebyshev", age: 108}
  ],
  info: {
    id: 666,
    name: "Solis",
    age: 32,
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  getters, 
  actions,
  modules: {     // 当有一些东西需要抽离时可以单独做一个模块
    a: moduleA
  }
});

// 03导出store对象
export default store;