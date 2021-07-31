<template>
<div>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我 + 1</button>
  <hr>
  <h2>当前信息为: {{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>工资：{{person.job.info.salary}}</h2>
  <button @click='person.name+="~"'>修改名字</button>
  <button @click='person.age++'>修改年龄</button>
  <button @click='person.job.info.salary++'>增涨薪资</button>
</div>
</template>

<script>
  import { ref, reactive, watch, watchEffect } from 'vue';

  export default {
    name: 'Demo',

    setup() {
      // 数据
      let sum = ref(0);
      let msg = ref('Hello Vue 3.0');
      const person = reactive({
        name: '张三',
        age: 18,
        job: {
          info: {
            position: 'RD',
            salary: 18,
          },
          location: '中关村'
        }
      });

      // 监听数据sum
      // watch(
      //   sum,
      //   (newVal, oldVal) => {
      //     console.log(`sum数据发生了变化: ${oldVal} -> ${newVal}`);
      //   },
      //   {
      //     immediate: true,
      //     deep: true,
      //   }
      // );

      // watchEffect()用到那个数据就自动监听那个数据
      watchEffect(
        () => {
          const total = sum.value;  // 在回调中使用的数据就是自动被监视
          console.log('watchEffect()监视的属性执行了~');
        }
      );

      // 返回一个对象（常用）
      return {
        sum,
        msg,
        person,
      }
    },
  }
</script>
