// 配置路由的相关信息
import Vue from "vue"
import VueRouter from "vue-router"

// import Home from "../components/Home"
// import About from "../components/About"
// import User from "../components/User"

// 使用ES6的方式进行路由懒加载, 推荐使用这种方式, 方便统一管理
const Home = () => import("../components/Home");
const HomeNews = () => import("../components/HomeNews");
const HomeMsg = () => import("../components/HomeMsg");

const About = () => import("../components/About");
const User = () => import("../components/User");
const Profile = () => import("../components/Profile");


// 1.通过Vue.use(插件)来使用VueRouter, 来安装路由插件(只有通过插件安装的路由才需要)
Vue.use(VueRouter);

// 2.创建VueRouter对象; 先配置映射关系
const routes = [                              //特殊的路由配置放到前面
  {
    path: "/",                                //设置第一次进入页面时的缺省路径显示内容, /加不加都可以
    redirect: "/home"                         //将缺省路径重定向到home页面
  },
  {
    path: "/home",                            //只要路径出现了/home就显示此组件
    // compont: () => import("../components/home")  //同样的路由懒加载的效果
    component: Home,
    meta: {
      title: "首页"
    },
    beforeEnter: (from, to, next) => {        //路由独享守卫写在单个路由内部
      // console.log("这是route: HOME的路由独享守卫~");
      next();

    },
    children: [                               //配置嵌套子路由
      {
        path: "",                             //嵌套子路由的缺省设置, 每次进到Home自动显示news
        redirect: "news"             
      },
      {
        path: "news",                         //子路由的path属性不需要加 /
        component: HomeNews
      },
      {
        path: "msg",
        component: HomeMsg
      }
    ]
  },
  {
    path: "/about",                         //只要路径出现了/about就显示此组件
    component: About,
    meta: {
      title: "关于"
    }
  },
  {
    path: "/user/:user_id",                 //动态路由, 通过$route.params.user_id可获取到这个参数
    component: User,
    meta: {
      title: "用户"
    },
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "简介"
    }
  }
]

const router = new VueRouter({
  routes,                    // 引入路由和组件之间的映射关系
  mode: "history",           //路由默认的是hash模式, url里面会有一个锚点符号, history模式则不会有
  linkActiveClass: "active"  //将所有的link-active-class重新命名active
});

// 前置守卫（前置钩子）
router.beforeEach((to, from, next) => {       //这是一个全局守卫
  document.title = to.matched[0].meta.title;  // matched解决嵌套子路由的问题
  // console.log(to);
  // console.log("这是一个路由前置钩子(路由守卫)");
  next();
});

// 后置钩子
router.afterEach((to, from) => {
  // console.log("这是一个路由后置钩子");
});

// 3.将router实例导出，以便在Vue实例中引入并使用
export default router