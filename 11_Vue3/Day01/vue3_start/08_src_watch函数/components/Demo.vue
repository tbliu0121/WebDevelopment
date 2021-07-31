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

    // Vue2.0中watch
    // watch: {
    //   // 简单写法
    //   // sum(newValue, oldValue) {
    //   //   console.log(`sum的数值变化了：${oldValue} -> ${newValue}`);
    //   // }
    //   sum: {
    //     immediate: true,  // 立即监听一下：即数据挂载时还没变化就会监听一下
    //     deep: true,       // 深度监视, 默认开启的是浅层次监视
    //     handler(oldValue, newValue) {
    //       console.log(`sum的数值变化了：${oldValue} -> ${newValue}`);
    //     },
    //   }
    // },

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
      
      // Vue3.0中的watch是一个组合式Api; 所有的组合式Api都是一个内置函数
      // watch(attr, callback, configObj); watch是一种行为~

      // case01 监视单个ref定义的响应式数据
      // watch (
      //   sum,  // 监视的数据
      //   (newValue, oldValue) => {  // 对应的回调函数
      //     console.log(`sum的值变了：${oldValue} -> ${newValue}`);  // 最开始数据没有变化, 此时的oldValue是undefined
      //   },
      //   {  // 监视的配置
      //     immediate: true,
      //   }
      // );

      // case02 监视多个ref定义的响应式数据
      // 监视多个ref定义的响应式数据时, newValue和oldValue是按对应数据的值组成的数组
      // watch (
      //   [sum, msg],
      //   (newValue, oldValue) => {
      //     console.log(`sum / msg 变了: ${oldValue} -> ${newValue}`);
      //   },
      //   {
      //     immediate: true,
      //   }
      // );

      // case03 监视reactive定义的响应式数据
      // 无法获取正确的oldValue; 强制开启深度监视。
      // ref定义对象的响应式, 内部也是调用的reactive ~ ~
      // 但是一般的开发情况下很少会用到oldValue的, 如果非用不可, 可以从对象中抽离出来通过基本数据类型来定义。
      // watch(
      //   person,
      //   (newValue, oldValue) => {
      //     console.log('person变化了~');
      //     console.log("nweValue: ", newValue, "oldValue: ", oldValue);
      //   },
      //   {
      //     deep: false,  // watch一个对象时无法关闭深度监视 (目前无法关闭)
      //   }
      // );

      // case04 监视reactive定义的对象中的某个属性
      // 需要写成一个函数的形式, 将需要watch的属性作为结果返回
      // 换个角度, 这种方法可以监视到case3中reactive定义的对象的某个属性了
      // watch(
      //   // 监视person的name属性
      //   () => person.name,
      //   (newVal, oldVal) => {
      //     console.log(`person.name属性变了：${oldVal} -> ${newVal}`);
      //   }
      // );

      // case5 监视reactive中定义的某些属性
      // watch(
      //   () => [person.name, person.age, person.job.info.salary],
      //   (newVal, oldVal) => {
      //     console.log(`namge / age / salger属性变了: ${oldVal} ==> ${newVal}`);
      //   }
      // );

      // case6 监视reactvie()定义的响应式数据内的一个对象属性(基本数据类型的属性)
      watch(
        () => person.job,
        (newVal, oldVal) => {
          console.log('person的job属性变了: ', oldVal, ' -> ', newVal);
        },
        {
          deep: true  // 配置深层监视属性来完成对reactive对象内的某个对象属性的监视; 注意reactive直接作用的对象此配置无效
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
