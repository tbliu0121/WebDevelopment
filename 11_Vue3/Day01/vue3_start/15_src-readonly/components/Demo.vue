<template>
<div>
  <h4>当前求和为: {{sum}}</h4>
  <button @click="sum++">点我 ++ </button>
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
  import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue';

  export default {
    name: 'Demo',
    setup() {
      let sum = ref(0);
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

     /***
      *   - readonly()接受一个响应式数据。
      *   - 将其转化为不允许修改的状态。
      *   - shalloReadonly()仅仅不允许修改响应式数据的第一层
      *   - readonly()和shallowonly()也可以接受一个ref()定义的数据
      * 
      *   - 当一个组件使用另外的组件中数据的时候
      *   - 不允许对数据修改
      *   - 那么在这个组件职组件中可以使用readonly()和shallowreadonly()
      *   - 获得一份禁止修改的状态的数据
      */

      // person = readonly(person);
      // person = shallowReadonly(person);
      sum = readonly(sum);

      return {
        sum,
        ...toRefs(person),
      }
    },
  }
</script>
