<template>
 <tab-bar>
    <tab-bar-item path="/home" activeColor="red">  <!-- 通过props属性, 将对应的路径传进去 -->
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="teal">
      <img slot="item-icon" src="../assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="green">
      <img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  // 导入组件
  import TabBar from "./tabbar/TabBar.vue";        
  import TabBarItem from "./tabbar/TabBarItem.vue"

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>