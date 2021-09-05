<template>
  <section class="child">
    <h3>这是一个子组件 (子组件)</h3>
    <h4>{{ car.carName }}</h4>
    <h4>{{ car.carPrice }}</h4>
    <h4>{{ car.carColor }}</h4>
    <slot></slot>
  </section>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'Child',

  setup() {
    // 通过inject()获取到的数据就是响应式的数据
    // 在后代组建中接收的时候直接传入数据名称即可
    const car = inject('car');
    const testInject = inject('testInject');  // 还可以注入函数QAQ

    testInject();  // 使用一下注入的函数吧~ ~ ~

    return {
      car,
    }
  }
}
</script>

<style scoped>
.child {
  background: teal;
  padding: 10px;
}
</style>
