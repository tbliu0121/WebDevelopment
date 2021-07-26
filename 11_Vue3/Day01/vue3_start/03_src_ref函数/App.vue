<template>
<div>
  <h1>个人信息</h1>
  <h2>姓名: {{name}}</h2>
  <h2>年龄: {{age}}</h2>
  <h2>职业: {{position.type}}</h2>
  <h2>技能: {{position.skill}}</h2>
  <button @click='changeInfo'>修改个人信息</button>
</div>
</template>

<script>
  import {ref} from 'vue';  // 通过ref()函数才可以将数据变成响应式数据

  export default {
    name: 'App',
    setup() {
      /**      Vue3.0中的数据响应式
       *   - 通过ref()函数加工过后的是一个 [RefImpl] 对象 (引用实现对象; 可以简称引用对象)
       *   - refernece implement: 引用实现
       *   - RefImpl下有一个value属性, 是一个Invoke property getter; 修改属性通过.value来修改
       *   - 在模板解析中直接使用即可, 会自动解析RefImpl对象的.value。
       *   - getter和setter放在了__proto__中了
       */
      let name = ref('鲁班');
      let age = ref(12);    // 基本数据类型通过Object.defineProperty()做到数据劫持
      let position = ref({  // 对象是通过Proxy代理来实现的数据劫持
        type: '射手',
        skill: '鲨嘴炮',
      });

      function changeInfo() {
        name.value = '妲己';
        age.value = 16;
        position.value.type = '射手~';
        position.value.skill = '偶像魅力';
        console.log(position.value);  // position.value是一个Proxy实例, Vue3对对象的响应式处理是通过Proxy处理的
      }

      return {
        name,
        age,
        position,
        changeInfo,
      }
    },
  }
</script>
