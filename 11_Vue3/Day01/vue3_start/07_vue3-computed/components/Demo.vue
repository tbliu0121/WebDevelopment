<template>
<div>
  <h1>个人信息</h1>
  姓：<input type="text" v-model='person.lastName'>
  名：<input type="text" v-model='person.firstName'>
  <br>
  <span>全名：{{person.fullName}}</span>
  <br>
  全名：<input type="text" v-model="person.fullName">
</div>
</template>

<script>
  // Vue3中的计算属性是一个组合式Api, 使用时需要进行引入
  import { reactive, computed } from 'vue';

  export default {
    name: 'Demo',

    // Vue3中支持vue2的计算属性的写法, 但是不推荐
    // computed: {
    //   fullName() {
    //     return this.person.firstName + '-' + this.person.lastName;
    //   }
    // },
   
    setup() {
      // 数据
      const person = reactive({
        firstName: '天保',
        lastName: '刘',
      });

      // 计算属性(此处是简写, 没有考虑到被修改的情况; 简写情况下的计算属性是read only的)
      // 从逻辑上讲fullName也是person的一个属性, 因此直接追加到perosn身上即可。
      // person.fullName = computed(() => {
      //   return person.lastName + "-" + person.firstName;
      // });

      // 完整性写法, 考虑到读和写
      person.fullName = computed({
        get() {
          return `${person.lastName}-${person.firstName}`;
        },

        set(value) {
          const nameArr = value.split('-');
          person.lastName = nameArr[0];
          person.firstName = nameArr[1];
        },
      });

      return {
        person
      }
    },
  }
</script>
