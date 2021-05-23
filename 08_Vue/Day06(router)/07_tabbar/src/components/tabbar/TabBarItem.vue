<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <img src="../../assets/img/tabbar/profile.svg" alt=""> -->
    <!-- <div>我的</div> -->

    <!-- 插槽在使用时会被替换掉，因此尽可能将可能会变的用一个元素包起来 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {    // 接受外部传进来的路径, 每个tab-bar-item实例设置好对应的path
      path: String,
      activeColor: {
        type: String,
        default: "#ff69b4"
      }
    },
    computed: {
      isActive() {
        // 处于活跃的路由的路径和当前tab-bar-item的path是否是同一个来判断状态
        return this.$route.path.indexOf(this.path) != -1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      }
    },
    methods: {
      itemClick() {
        //catch(err => err)解决history模式下连续路由到同一个地址NavigationDuplicated错误
        this.$router.push(this.path).catch(err => err);  
      }
    }
  };
</script>

<style>
  .tab-bar-item {
    flex: 1;
    height: 49px; /* tab-bar的高度一般都是49 */
    text-align: center;
    background-color: #f6f6f6;
    font-size: 14px;
}

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 3px;
  }

  .active {
    color: activeColor;
  }
</style>