<template>
  <section class="app">
    <h1>我是App组件</h1>
    <child>
      <grand-son></grand-son>
    </child>
  </section>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';
import Child from './components/Child';
import GrandSon from './components/GrandSon.vue';

export default defineComponent({
  name: 'App',
  components: {
    Child,
    GrandSon,
  },
});
</script>

<style scoped>
.app {
  background: hotpink;
  padding: 10px;
}
</style>
