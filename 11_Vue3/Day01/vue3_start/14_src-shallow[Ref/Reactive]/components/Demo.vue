<template>
<div>
  <h4>当前的x是：{{x.val}}</h4>
  <button @click="x.val++">点我 x + 1</button>

  <h4>当前的x_是：{{x_.val}}</h4>
  <button @click="x_.val++">点我 x_ + 1</button>

  <hr>

  <h4>{{person}}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>工资：{{job.info.salary}}</h2>  
  
  <button @click='name+="~"'>修改名字</button>
  <button @click='age++'>修改年龄</button>
  <button @click='job.info.salary++'>增涨薪资</button>
</div>
</template>

<script>
  import { ref, reactive, toRefs, shallowReactive, shallowRef } from 'vue';

  export default {
    name: 'Demo',
    setup() {
      // shalloReactive()只会处理对象第一层的响应式; 对象内部的对象的属性不会变成响应式的
      // reactive()则是对一个对象内部的所有数据形成响应式处理
      const person = shallowReactive({
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

      // 将响应式对象内部的所有数据都变成响应式的。
      const res = toRefs(person);
      console.log(res);

      // let x = ref(0);
      // ref()处理对象的时候会在内部使用reactive()来处理
      let x = ref({
        val: 0,
      });

      console.log(x);

      // shallowRef()只能处理基本数据类型, 遇到对象则会放弃工作。。。
      let x_ = shallowRef({
        val: 0
      });

      console.log(x_);

      // 返回一个对象（常用）
      return {
        x,
        x_,
        person, 
        ...toRefs(person),  // 将一个reactive()定义的响应式对象展开; 只能展开到第一层
      }
    },
  }
</script>
