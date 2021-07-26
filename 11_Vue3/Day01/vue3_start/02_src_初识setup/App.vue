<template>
<div>
  <h1>个人信息</h1>
  <h2>姓名: {{name}}</h2>
  <h2>性别: {{gender}}</h2>
  <h2>年龄: {{age}}</h2>
  <h2>sameAttr: {{sameAttr}}</h2>  <!-- 同名属性以3.0中的为准 -->

  <button @click='sayHello'>说话</button>  <br><br>
  <button @click='welcome'>Vue2.0说话</button>  <br><br>
  <button @click='testVue2'>测试Vue2访问Vue3中的属性、方法</button>  <br><br>
  <button @click='testVue3'>测试Vue3访问Vue2中的属性、方法</button>
</div>
</template>

<script>
  // import {h} from 'vue'  // 手动引入渲染函数, setup可以返回一个渲染函数来自定义渲染内容

  export default {
    name: 'App',

    /*** 兼容2.0中的方法  ***/
    data() {
      return {
        generation: 'Vue2.0',
        sameAttr: 'Vue2.0的属性',  // 测试Vue2和Vue3同名属性的优先级
      }
    },
    methods: {
      welcome() {
        alert(`欢迎来到${this.generation}时代`);
      },
      // 测试在Vue2的配置中访问Vue3的属性
      testVue2() {
        console.log(this.generation);
        console.log(this.name, this.gender, this.age);
        console.log(this.sayHello);
      }
    },
    /***  Vue2.0 END  ***/


    /**
     *   - Vue3.0中所有的数据、方法等等均要配置在setup中。
     *   - 不论是数据、属性、生命周期回调、计算属性等等。。。。。。
     *   - setup返回可以是两种值: 可以是一个对象, 也可以是一个返回值。
     *   - setup不可以是一个async函数, 因为返回的结果是一个Promise对象。
    */
    // 此处仅做测试, 先不考虑响应式的问题
    setup() {
      let name = '鲁班';
      let gender = '男';
      let age = 18;
      const LOCATION = '王者峡谷';
      let sameAttr = 'Vue3.0的属性';

      function sayHello() {
        alert(`我叫${name}, 今年${age}岁, 我是${gender}孩子, 欢迎来到${LOCATION}`);
      }

      // 测试在Vue3中访问Vue2中的属性、方法
      function testVue3() {
        console.log(name, gender, age);
        console.log(this.generation);  // 访问Vue2中的数据: undefined
        console.log(this.welcome);     // 访问Vue2中的方法: undefined
      }

      // 01 返回的一个对象, 返回的内容可以在模板中直接使用。
      // 如果返回的是一个渲染函数, 则可以自定义渲染内容(了解); 渲染函数h需要手动引入一下
      return {
        name,
        gender, 
        age,
        sameAttr,  // 测试Vue3和Vue2同名属性的优先级
        sayHello,
        testVue3,
      }

      // 02 返回一个渲染函数, 模板中的内容均会被渲染函数中的内容替换掉
      // return () => {
      //   // 渲染函数要把h()函数调用的返回值交出去。
      //   return h('h1', 'AiCoding')
      // }
      // return () => h('h1', 'AiCoding')
    },
  }
</script>
