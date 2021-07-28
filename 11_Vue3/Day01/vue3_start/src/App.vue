<template>
  <!-- Vue 3.0中子组件的自定义事件hello需要在子组件的emits中声明 -->
  <Demo @hello='sayHello' msg='Hello Vue 3.0' school='Love Coding'>
    <!-- 子组件中如果没有预留对应的槽位则不会在视图上显示, 但是会在setup的第二个参数context的contex.slots中收集到 -->
    <!-- vue3中通过v-slot指令来实现具名插槽 -->
    <template v-slot:second>
      <div>具名插槽: second</div>
    </template> 
    <template v-slot:last>
      <div>具名插槽: last</div>
    </template> 
  </Demo>
</template>

<script>
  import Demo from './components/Demo.vue'

  export default {
    name: 'App',
    components: {
      Demo,
    },
    setup() {
      function sayHello(arg) {
        alert(`父组件的sayHello(), 接收到了: ${arg}`);
      }
      return {
        sayHello,
      }
    },
  }
</script>
