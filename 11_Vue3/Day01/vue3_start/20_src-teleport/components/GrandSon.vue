<template>
  <section class="grand-son">
    <h3>我是一个后代组件</h3>
    <Dialog/>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import Dialog from "./Dialog";

export default defineComponent({
  name: "GrandSon",
  components: {
    Dialog,
  },
});
</script>

<style scoped>
.grand-son {
  padding: 10px;
  background: tomato;
}
</style>