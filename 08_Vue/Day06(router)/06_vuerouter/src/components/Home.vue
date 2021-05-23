<template>
  <div>
    <h3>我是首页~o(*￣︶￣*)o</h3>
    <p>我是首页的内容。。。。。。。</p>

    <!-- 嵌套路由展示的内容放在对应的组件内; 嵌套子路由的路径要写完整 -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/msg">消息</router-link>
    <router-view></router-view>

    <h3>{{msg}}</h3>
  </div>
</template>

<script>
  export default ({
    name: "Home",
    data() {
      return {
        msg: "This is Home page",
        path: "/home/news"
      }
    },
    created() {        //组件被创建之后会回调这个生命周期函数
      console.log("home Created");
      document.title = "首页";
    },
    mounted() {        //组件挂载到DOM上之后回调这个生命周期函数
      console.log("home Mounted");
    },
    updated() {        //当页面发生刷新很之后回调这个生命周期函数
      console.log("home Updated");
    },
    destroyed() {
      console.log("home Destroyed");
    },
    activated() {                        // 使用一个Path记录离开时子组件的路由信息，回来时展示同一个路由
      console.log("home activated");
      this.$router.push(this.path).catch(err => err);  //进入路由之前将path设置为离开的Path
      /*** 第一次进入到Home时会设置homte/msg的缺省路由, 通过.catch(err => err)来解决当前页面push当前页面的报错 ***/ 
    },
    deactivated() {
      console.log("home deActivated");   
    },
    beforeRouteLeave(to, from, next) {   //离开时将当前路由的路径保存在来, 当期路由路径在this.$route.path中获取
      console.log(this.$route.path);
      this.path = this.$route.path;
      next();
    }
  })
</script>


<style scoped>

</style>
