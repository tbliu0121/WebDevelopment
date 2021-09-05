<template>
  <section class="grand-son">
    <h3>这个一个孙组件 (后代组件)</h3>
    <h4>{{ car.carName }}</h4>
    <h4>{{ car.carPrice }}</h4>
    <h4>{{ car.carColor }}</h4>
    <slot></slot>
  </section>
</template>

<script>
import { inject } from 'vue';


export default {
  name: 'GrandSon',

  setup() {
    const car = inject('car');

    return {
      car,
    }
  }
}
</script>

<style scoped>
.grand-son {
  background: tomato;
  padding: 10px;
}
</style>


