<template>
  <div>
    <h3>我是about</h3>
    <p>我是about的内容。。。。。。</p>
  </div>
</template>

<script>
  export default ({
    name: "About",
    created() {        //组件被创建之后会回调这个生命周期函数
      console.log("about Created");
      document.title = "关于";

    },
    mounted() {        //组件挂载到DOM上之后回调这个生命周期函数
      console.log("about Mounted");
    },
    updated() {        //当页面发生刷新很之后回调这个生命周期函数
      console.log("about Updated");
    }
  })
</script>

<style scoped>

</style>
