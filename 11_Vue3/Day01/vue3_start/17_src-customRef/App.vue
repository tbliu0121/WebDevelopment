<template>
<section>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</section>
</template>

<script>
  import { ref, customRef } from 'vue';

  export default {
    name: 'App',
  
    setup() {
      // 通过customRef()自定义一个ref()
      function myRef(value) {
        // 将customRef()指定的逻辑放回出去
        // 参数为一个函数, 并且返回结果为一个Object
        let timer;
        return customRef((track, trigger) => {
          return {
            get() {
              console.log(`有人从myRef()中读取数据 ${value}`);
              track();           // 追踪一下数值的变化, 这样才能在trigger()后才可以返回更新后的数据
              return value;
              
            },

            set(newValue) {
              console.log(`有人设置了myRef()的数据为: ${newValue}`);
              // value = newValue;  // Step01 修改数据
              // trigger();         // Step02 通知Vue重新解析模板, 
              clearTimeout(timer);
              timer = setTimeout(() => {
                value = newValue;
                trigger();
              }, 500);
            },
          }
        });
      }
      // let keyWord = ref('Hello');
      let keyWord = myRef('Hello Vue');

      return {
        keyWord,
      }
    }
  }
</script>
