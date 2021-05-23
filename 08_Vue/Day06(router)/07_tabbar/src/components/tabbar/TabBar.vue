<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default ({
    name: "TabBar"
  });
</script>

<style scoped>
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
