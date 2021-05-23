// vue components文件实现了template和js代码的完全分离
// 一个.vue文件就是一个组件
<template>                     <!-- 组件模板 -->
  <div>
    <h3 class="title">{{msg}}</h3>
    <button @click="btnClick">这是一个按钮</button>
    <h3>{{name}}</h3>
    <cpn></cpn>                <!-- 使用一下导入的组件 -->
  </div>
</template>

// app.vue是根组件, 通过对其他组价的引用, 最终形成一个组件树。

<script>                       //JS代码
  import cpn from "./cpn.vue"  //导入子组件cpn

  export default {
    name: "app",
    components: {
      cpn                      //注册子组件cpn
    },
    data() {
      return {
        msg: "Hello Vue~, I'm webpack~~",
        name: "tbliu"
      } 
    },
    methods: {
      btnClick() {
        alert("点我干什么~");
      }
    }
  }
</script>

<style scoped>                /* 样式文件 */
  .title {
    color: #000;
  }
</style>
