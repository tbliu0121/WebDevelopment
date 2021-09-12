<template>
  <section class="app">
    <h1>我是App组件</h1>

    <!-- suspense是内置组件, 不需要import -->
    <suspense>
      <template v-slot:default>
        <Child></Child>
      </template>

      <template v-slot:fallback>
        <h3>加载中，请稍后。。。</h3>
      </template>
    </suspense>

  </section>
</template>

<script>
import { defineComponent } from 'vue';
// import Child from './components/Child';  // 静态引入


import { defineAsyncComponent } from 'vue';

/**        defineAsyncComponent
 *   - 通过defineAsyncComponent()对组件做异步的引入。
 *   - 定义的异步组件不会导致未引入的组件阻塞其他组件的渲染。
 *   - 如果不定义异步组件, 只有所有组件全都引入进来的时候才会渲染出来。
 *   - 【但是】异步组件由于是非同步加载, 会使页面产生抖动.
 *   - 可以通过suspense来解决; suspense底层是通过slot实现的, 是内置的, 无需通过import from 引入。
 *   - suspense内置两个插槽: v-slot:default和v-slot:fallback
 */
const Child = defineAsyncComponent(() => import('./components/Child'));  // 动态引入(异步引入)

export default defineComponent({
  name: 'App',
  components: {
    Child,
  },
});
</script>

<style scoped>
.app {
  background: hotpink;
  padding: 10px;
}
</style>
