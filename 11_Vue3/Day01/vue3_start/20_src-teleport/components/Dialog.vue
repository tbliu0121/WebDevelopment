<template>
<section class="dialog">
  <button @click="isShow = true">显示弹窗</button>

  <!-- 将要传送的内容通过teleport组件包裹, 目标写到to属性上 -->
  <!-- to属性也可以写一个CSS选择器 -->
  <teleport to="body">
    <div v-if="isShow" class="mask">
      <div class="dialog-content">
        <h4>对话框标题</h4>
        <h5>LINE-01</h5>
        <h5>LINE-02</h5>
        <h5>LINE-03</h5>
        <h5>LINE-04</h5>
        <button @click="isShow = false">确认</button>
      </div>
    </div>
  </teleport>
</section>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Dialog",

  setup() {
    let isShow = ref(false);

    return {
      isShow,
    };
  },
});
</script>


<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
}

.dialog-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  padding: 10px;
  width: 380px;
  height: 280px;
  padding: 10px;
  text-align: center;
  background: pink;
  border-radius: 15px;
}
</style>
