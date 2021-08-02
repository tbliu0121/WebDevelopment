<template>
<div>
  <h4>{{person}}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <!-- toRef()函数可以将一个reactive()函数定义的响应式对象的内部某个属性变为响应式的 -->
  <!-- <h2>工资：{{salary}}</h2> -->  
  <!-- toRefs()只能展开Reactive()定义的响应式对象的内部属性的第一层 -->
  <h2>工资：{{job.info.salary}}</h2>  
  <button @click='name+="~"'>修改名字</button>
  <button @click='age++'>修改年龄</button>
  <button @click='job.info.salary++'>增涨薪资</button>
</div>
</template>

<script>
  import { ref, reactive, toRef, toRefs } from 'vue';
  export default {
    name: 'Demo',
    setup() {
      // 数据
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

      // const name0 = person.name;
      // console.log(`------ ${name0}`);

      // toRef()实现了对属性的响应式设置, 可以通过灵活的使用来简化程序的整体代码
      // const name_ = toRef(person, 'name');
      // console.log('======= ', name_);  // ObjectRefImpl

      // 将响应式对象内部的所有数据都变成响应式的。
      const res = toRefs(person);
      console.log(res);

      // 返回一个对象（常用）
      return {
        person, 
        // name: toRef(person, 'name'),
        // age: toRef(person, 'age'),
        // salary: toRef(person.job.info, 'salary'),
        ...toRefs(person),  // 将一个reactive()定义的响应式对象展开; 只能展开到第一层
      }

      // 下面的方法将会生成新的数据, 是错误的~
      // return {
      //   person,
      //   name: ref(person.name),
      //   age: ref(person.age),
      //   salary: ref(person.job.info.salary),
      // }
    },
  }
</script>
