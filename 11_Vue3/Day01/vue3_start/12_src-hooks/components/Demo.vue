<template>
<div>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我 + 1</button>

  <h2>当前鼠标点击位置: X: {{point.x}}, Y: {{point.y}}</h2>
</div>
</template>

<script>
  import { ref } from 'vue';
  import usePoint from '../hooks/usePoint';

  export default {
    name: 'Demo',

    setup() {
      console.log("==== setup ====");
      let sum = ref(0);
      const point = usePoint();

      return {
        sum,
        point,
      }
    },
  }
</script>
