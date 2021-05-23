<template>
  <div>
    <h2>{{msg}}</h2>
    <h3>{{$store.state.counter}}</h3>
    <h3>{{$store.getters.over20years}}</h3>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    data() {
      return {
        msg: "我是Vuex的标题~", 
      }
    }
  }
</script>
