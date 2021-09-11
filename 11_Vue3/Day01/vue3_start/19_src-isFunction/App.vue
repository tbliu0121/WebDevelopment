<template>
  <section class="app">
    <h3>我是App组件 (祖先元素)</h3>
  </section>
</template>

<script>
import { ref, reactive, toRefs, isRef, isReactive, isReadonly, isProxy, readonly } from 'vue';

export default {
  name: 'App',

  setup() {
    const car = reactive({
      carName: '哈弗大狗',
      carPrice: '998',
      carColor: 'oragne',
    });
    
    let sum = ref(0);
    let car_ = readonly(car);  // 返回的对象是一个Proxy类型的对象。

    console.log(isRef(sum));        // true
    console.log(isReactive(car));   // true
    console.log(isReadonly(car_));  // true
    console.log(isProxy(car));      // 检测一个对象是否是由reactiv或readonly方法创建的对象; 这两个方法创建的对象结果是一个proxy对象。

    return {
      ...toRefs(car),
    }

   
  },
}
</script>

<style scoped>
.app {
  background: hotpink;
  padding: 10px;
}
</style>
