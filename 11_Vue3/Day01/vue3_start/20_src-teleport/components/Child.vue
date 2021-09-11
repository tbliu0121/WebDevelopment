<template>
<section class="child">
  <h3>我是一个子组件</h3>
  <slot></slot>
</section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Child',
})
</script>


<style scoped>
.child {
  padding: 10px;
  background: teal;
}
</style>