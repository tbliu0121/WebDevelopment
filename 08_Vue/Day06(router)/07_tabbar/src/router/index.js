import Vue from 'vue'
import Router from 'vue-router'

// 0. 使用路由懒加载的方式引入对应的路由组件
const Home = () => import("../views/home/Home.vue");
const Category = () => import("../views/category/Category.vue");
const Shopcart = () => import("../views/shopcart/Shopcart.vue");
const Profile = () => import("../views/profile/Profile.vue");

// 1. 安装插件
Vue.use(Router)

// 2. 创建路由对象
const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shopcart",
    component: Shopcart
  },
  {
    path: "/profile",
    component: Profile
  }
]

const router = new Router({
  routes: routes,
  mode: "history"
})

// 3. 导出路由
export default router;
