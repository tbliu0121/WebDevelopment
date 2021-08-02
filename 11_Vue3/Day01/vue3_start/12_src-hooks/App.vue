<template>
<div>
  <!-- 通过切换组件的装态可以完成对组件的卸载、挂载 ·· -->
  <button @click="isShowDemo = !isShowDemo">显示/隐藏Demo组件</button>
  <Demo v-if="isShowDemo"/>
</div>
</template>

<script>
  import { ref } from 'vue';
  import Demo from './components/Demo.vue';

  export default {
    name: 'App',
    components: {
      Demo,
    },
    setup() {
      let isShowDemo = ref(true);

      return {
        isShowDemo,
      }
    }
  }
</script>
