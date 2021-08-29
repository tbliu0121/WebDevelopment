<template>
<div>
  <h4>当前求和为: {{sum}}</h4>
  <button @click="sum++">点我 ++ </button>
  <hr>

  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>工资：{{job.info.salary}}</h2>
  <h2 v-if="person.car">交通工具：{{person.car}}</h2>  
  
  <button @click='name+="~"'>修改名字</button>
  <button @click='age++'>修改年龄</button>
  <button @click='job.info.salary++'>增涨薪资</button> <br><br>

  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人买个车</button>  <br> <br>

  <button v-if="person.car" @click="person.car.brand+='!'">修改车的名字</button>
</div>
</template>

<script>
  import { ref, reactive, toRefs, toRaw, markRaw } from 'vue';

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
        },

      });

      /**        toRaw() / markRaw()
       *   - toRaw()将一个reactive()定义的响应式数据转化为原始的数据状态
       *   - toMarkRaw()可以为响应式对象添加一个不可修改的属性
       */
      function showRawPerson() {
        const temp = toRaw(person);
        console.log(temp);
      }

      function addCar() {
        const car = {
          brand: 'BWM',
          price: '108W',
        }
        // person.car = car;
        // person.car = markRaw(car);
      }

      return {
        sum,
        person,
        ...toRefs(person),
        showRawPerson,
        addCar,
      }
    },
  }
</script>
