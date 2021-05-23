<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，Meow~</p>
    <h4>你好呀~ {{userid}}</h4>        <!-- 计算属性 -->
    <button @click="btnClick">$router</button>
  </div>
</template>

<script>
  export default ({
    name: "User",
    computed: {
      userid() {
        return this.$route.params.user_id;    //获取当前活跃路由的参数, 从参数params中获取userid(自定义的)
      }
    },
    methods: {
      btnClick() {
        console.log(this.$router);
        console.log(this.$route);
      }
    },
    created() {        //组件被创建之后会回调这个生命周期函数
      console.log("user Created");
      document.title = "用户";
    },
    mounted() {        //组件挂载到DOM上之后回调这个生命周期函数
      console.log("user Mounted");
    },
    updated() {        //当页面发生刷新很之后回调这个生命周期函数
      console.log("user Updated");
    }
  })
</script>

<style scoped>

</style>
