<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "./components/MainTabBar.vue"

  export default {
    name: "App",
    components: {
      MainTabBar
    }
  };
</script>

<style>
/* 在CSS中引入其他样式文件 */
@import "./assets/css/base.css";
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0; /* left:0 right: 0可以保证宽度充满父元素 */
  bottom: 0;

  /* box-shadow: x y 模糊程度 模糊距离 模糊颜色 */
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
}

</style>
