<template>
  <div id="app">
    <h3>====== App内容: Modules ======</h3>
    <h4>{{$store.state.a}}</h4>
    <button @click="updateName">改名字</button>
    <h4>{{$store.getters.fullname01}}</h4>
    <h4>{{$store.getters.fullname02}}</h4>
    <h4>{{$store.getters.fullname03}}</h4>
    <button @click="asynUpdateName">异步修改</button>

    <h3>========= App 内容 =========</h3>
    <h3>{{msg}}</h3>
    <h4>{{$store.state.counter}}</h4>    <!-- counter是Vuex实例store中的数据 -->
    <button @click="minus"> - </button>
    <button @click="add"> + </button>
    <button @click="addCounter(5)"> +5 </button>
    <button @click="addCounter(10)"> +10 </button>
    <button @click="addStudent">添加学生</button>

    <h3>======== App内容: getters样例 ========</h3>
    <h4>{{$store.getters.counterSquare}}</h4>
    <h4>{{$store.getters.over20years}}</h4>
    <h4>{{$store.getters.over20yearsLen}}</h4>
    <h4>{{$store.getters.overYears(50)}}</h4>
 
    <h3>======== info 响应式样例 =======</h3>
    <h4>{{$store.state.info}}</h4>
    <button @click="changeInfo">修改信息</button>
    <button @click="asynChange">异步修改</button>

    <h3>========= Vuex 内容 =========</h3>
    <hello-vuex></hello-vuex>
    <h3>======== info 响应式样例 =======</h3>
    <h4>{{$store.state.info}}</h4>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex.vue"
  // 使用mutations常量; 为mutations中的方法定义的常量
  import {INCREMENT, DECREMENT, INCREMENT_N, ADD_STUDENT, CHANGE_INFO} from "./store/mutations-type"

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        msg: "我是App.vue的标题~",
      }
    },
    methods: {
      add() {
        // 想要使用store中的方法，必须通过commit提交方法名称
        this.$store.commit(INCREMENT);
      },
      minus() {
        this.$store.commit(DECREMENT);
      },
      addCounter(n) {
        // n作为参数会传入到incrementN中, 传过去的参数称为payload(负载)
        // 01 普通的提交方式
        // this.$store.commit(INCREMENT_N, n);

        // 02特殊的提交方式
        this.$store.commit({            //提交一个对象, 封装了指定的mutations中的方法和传入的诸多数据
          type: INCREMENT_N,
          N: n
        });
      },
      addStudent() {
        const stu = {id: "1780", name: "Sonali", age: 23};
        // 需要传入数据有多个时, 将数据封装到一个对象中即可
        this.$store.commit(ADD_STUDENT, stu);
      },
      changeInfo() {
        this.$store.commit(CHANGE_INFO);
      },
      asynChange() {   // 异步操作必须通过actions中的方法, 通过dispatch提交到actions中的方法
        const msg = "actions里面的方法也可以传递数据复杂(payload); 说人话就是传递参数"
        this.$store
        .dispatch("asynUpdate", {msg})
        .then(res => console.log(res));
      },
      updateName() {
        this.$store.commit("updateName", "Tomcat");
      },
      asynUpdateName() {
        this.$store.dispatch("asynUpdateName");
      }
      
    }
  }
</script>

<style>

</style>
