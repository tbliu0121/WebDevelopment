<template>
  <section class="child">
    <h3>我是一个子组件</h3>
    <h4>{{sum}}</h4>
    <slot></slot>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";

export default {
  name: "Child",
  
  /**
   *   - setup()不能是一个async函数, 因为返回的值不再是一个对象, 而是一个Promise对象
   *   - 如果setup()通过async声明为了一个异步函数, 则需要通过<suspense>和异步组件来配合使用。
   *   - <suspense>底层是通过suspense来实现的, 内部两个插槽: default和fallback。
   */
  async setup() {
    let sum = ref(0);
    const p = new Promise((resolve) => {
      setTimeout(() => {
        resolve({sum});
      }, 1500);
    });

    return await p;
  },
};
</script>

<style scoped>
.child {
  padding: 10px;
  background: teal;
}
</style>