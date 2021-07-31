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
  import { ref, reactive, watch } from 'vue';

  export default {
    name: 'Demo',

    setup() {
      // 数据
      let sum = ref(0);
      let msg = ref('Hello Vue 3.0');
      // 通过ref()生成的响应式对象内部也是使用了reactive()方法
      const person = ref({
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

      console.log(sum);     // RefImpl
      console.log(msg);     // RefImpl
      console.log(person);  // RefImpl

      // 通过ref()定义的响应式数据(基本数据类型)watch时不需要.value操作
      watch(
        sum,
        (newVal, oldVal) => {
          console.log(``);
        }
      );

      // 01 通过ref()定义的响应式数据(对象)watch时需要.value操作
      // watch(
      //   person.value,
      //   (newVal, oldVal) => {
      //     console.log("person属性发生了变化:", oldVal, ' -> ', newVal);
      //   }
      // );

      // 02 通过ref()定义的响应式数据(对象), 还可以通过配置深度监视来完成
      watch(
        person,
        (newVal, oldVal) => {
          console.log("person属性发生了变化:", oldVal, ' -> ', newVal);
        },
        {
          deep: true,  // 通过开启深度监视可以实现对ref()定义的对象实现监视
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
