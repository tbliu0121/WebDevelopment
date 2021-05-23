<template>                     <!-- 组件的模板 -->
  <div>
    <h3>我是cpn组件的标题</h3>
    <p>我是cpn组件的内容。。。。。。</p>
    <h3>{{name}}</h3>          <!-- 使用一下组件内的name -->
  </div>
</template>

<script>
  // 此部分内容编译后会自动导出
  export default {
    name: "cpn",
    data() {
      return {
        name: "cpn's name",
      }
    }
  }
</script>
