<template>
<div>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我 + 1</button>
</div>
</template>

<script>
  import { ref } from 'vue';
  import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';

  // 生命周期02: 通过组合式Api的形式使用
  // 配置项和组合式的钩子函数对应关系如下
  // beforeCreate()和created()没有对应的组合式Api, setup()的功能就相当于这两个钩子函数了
  // beforeMmount()、mounted()、beforeUpdate()、updated()、beforeUnmounte、unmouonted()加上on-就变成了组合式Api
  // [[Attention]] 当组合式Api形式的钩子函数和配置项的钩子函数同时存在时, 组合式Api形式的钩子函数先于配置项钩子函数执行

  export default {
    name: 'Demo',

    setup() {
      let sum = ref(0);

      console.log("SETUP()");  // 作用时间先于配置项内的钩子函数

      // 组合式Api形式的钩子函数
      onBeforeMount(() => {
        console.log("onBeforeMount()");
      });

      onMounted(() => {
        console.log("onMounted()");
      });

      onBeforeUpdate(() => {
        console.log("onBeforeUpdate()");
      });

      onUpdated(() => {
        console.log("onUpdated()");
      });

      onBeforeUnmount(() => {
        console.log("onBeforeUnmount()");
      });

      onUnmounted(() => {
        console.log("onUnmounted()");
      });

      return {
        sum,
      }
    },

    // 生命周期01: 通过 [[配置项]] 的形式使用
    // #region
    // beforeCreate() {
    //   console.log("==== beforeCreate() ====");
    // },
    
    // created() {
    //   console.log("==== created() ====");
    // },

    // beforeMount() {
    //   console.log("==== beforeMount() ====");
    // },

    // mounted() {
    //   console.log("==== mounted() ====");
    // },

    // beforeUpdate() {
    //   console.log("==== beforeUpdate() ====");
    // },

    // updated() {
    //   console.log("==== updated() ====");
    // },

    // beforeUnmount() {
    //   console.log("==== beforeUnmount() ====");
    // },

    // unmounted() {
    //   console.log("==== unmounted() ====");
    // }
    // #endregion
  }
</script>
