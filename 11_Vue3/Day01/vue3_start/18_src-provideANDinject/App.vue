<template>
  <section class="app">
    <h3>我是App组件 (祖先)</h3>
    <h4>{{ carName }}</h4>
    <h4>{{ carPrice }}</h4>
    <h4>{{ carColor }}</h4>

    <child>
      <grand-son></grand-son>
    </child>
  </section>
</template>

<script>
import { reactive, toRefs, provide } from 'vue';

import Child from './components/Child.vue';
import GrandSon from './components/GrandSon.vue';

export default {
  name: 'App',
  components: {
    Child,
    GrandSon,
  },

  setup() {
    const car = reactive({
      carName: '哈弗大狗',
      carPrice: '998',
      carColor: 'oragne',
    });

    function testInject() {
      console.log('Hello Provide and Inject');
    }

    // 通过provide()向子组件注入数据,
    // attr01表示参数名字, attr02表示注入的数据实体
    // 所有的后代组件够可以通过inject()获取到
    // 注入到后代组建中就是响应式的数据
    provide('car', car);
    provide('testInject', testInject);  // 似乎注入一个函数也可以啊 QAQ

    return {
      ...toRefs(car),
    };
  },
}
</script>

<style scoped>
.app {
  background: hotpink;
  padding: 10px;
}
</style>
