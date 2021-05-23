<template>
  <div id="app">
    <h2>Vue组件正式开始</h2>

    <!--        router-link属性
      - router-link 是一个内置组件，最终会被渲染成一个a标签
      - replace: history模式下默认使用的是pushState; replace启动replaceState方法，使网页不会留下历史记录
      - tag: 如果不想用默认的a标签, 使用tag属性
      - active-class: router-link被点击处于活跃装填时，会添加这个类。
    -->

    <!--        router-link使用
      <router-link to="/home" tag="button" replace="true">首页</router-link>  
      <router-link to="/about" tag="button" replace="true">关于</router-link>
      <router-link to="/user" tag="button" replace="true"></router-link>   
      <router-view></router-view>    router-view相当于一个占位符，显示指定的router-link内容 
    -->
   
    <!--        通过代码跳转路由
      <button @click="homeClick">首页</button>     
      <button @click="aboutClick">关于</button> 
    -->

    <router-link to="/home">首页</router-link>  
    <router-link to="/about">关于</router-link>

    <!-- 动态路由的参数传递 -->
    <!-- <router-link :to="'/user/' + userid">用户</router-link>  -->
    <!-- <router-link to="/profile">简介</router-link> -->

    <!-- 普通路由query传参 -->
    <!-- <router-link :to="{path: '/profile', query: {name: 'tbliu', age: 18, height: '172'}}">简介</router-link> -->

    <button @click="userClick">用户</button>           <!-- 代码实现路由跳转 -->
    <button @click="profileClick">简介</button>

    <!-- 将路由放在keep-alive内可以避免路由组件频繁创建和销毁 -->
    <!-- 通过exclude属性将指定的组件排除在keep-alive外部，通过的是组件下的name属性 -->
    <keep-alive exclude="Profile"> 
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userid: "utnapishtim"
      }
    },
    methods: {
      homeClick() {
        console.log("HOME");                    
        this.$router.push('/home');                 //通过代码实现路由跳转
      },
      aboutClick() {
        console.log("ABOUT");
        this.$router.push('/about');
      },
      userClick() {
        this.$router.push("/user/" + this.userid).catch(err => err);  //动态路由
      },
      profileClick() {
				// 相当于router-link中的:to={path: "/profile", query: {name: "Jonathan", age: 18}}
        this.$router.push({
          path: "/profile",
          query: {
            name: "Jonathan",
            age: 18,
            height: 172
          }
        }).catch(err => err);
      }
    }
  }
</script>

<style>
  .active {
    color: #f00;
    font-weight: 700;
  }
</style>
