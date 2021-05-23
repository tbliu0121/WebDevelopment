<template>
  <div>
    <h2>我是Profile的标题</h2>
    <p>我是Profile的内容（づ￣3￣）づ╭❤～</p>
    <!-- 普通路由通过query来传递参数 -->
    <h3>{{$route.query.name}} - {{$route.query.age}} - {{$route.query.height}}</h3>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data() {
      return {
        //TODO
      }
    },
    beforeCreate() {
      console.log("profile beforeCreate");
    },
    created() {
      console.log("profile Created");
    },
    beforeMount() {
      console.log("profile beforeMount");
    },
    mounted() {
      console.log("profile Mounted");
    },
    beforeUpdate() {
      console.log("profile beforeUpdate");
    },
    updated() {
      console.log("profile Updated");
    },
    beforeDestoryed() {
      console.log("profile beforeDestoryed");
    },
    destroyed() {
      console.log("profile Destroyed");
    }  
  }
</script>