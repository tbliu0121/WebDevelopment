<template>
<div>
  <h1>个人信息</h1>
  <h2 v-show='player.name'>姓名: {{ player.name }}</h2>
  <h2>年龄: {{ player.age }}</h2>
  
  <slot name='last'>预留插槽位</slot>
  <slot name='second'>预留插槽位</slot>

  <button @click='testHello'>测试Demo组件触发父组件的hello事件</button>
</div>
</template>

<script>
  import { reactive } from 'vue';

  export default {
    name: 'Demo',
    // Vue3中父传子必须在子组件中通过props声明, Vue2中不通过props声明的会在子组件中 $sttrs 中捕获
    // ops~ Vue3中不声明的参数会在setup的第二个参数context中的context.attrs中捕获。。。。。。
    props: ['msg', 'school'],
    emits: ['hello'],  // 通过emits来声明子组件的自定义事件, 完成子传父通信

    // setup会接受两个参数: props和 context 
    setup(props, context) {
      // 验证setup的执行事时机是在before create之前的
      console.warn('======== [setup] start ========');

      console.log(props);          // 一个Proxy实例对象
      // console.log(context);        // 一个object实例对象

      // console.log(context.attrs);  // 接收父组件中传入但是子组件没有通过props声明的参数
      // console.log(context.emit);   // 触发子组件自定义事件, 相当于this.$emit()
      console.log(context.slots);  // 父组件使用子组件的时候传入元素会在这里收集到; 只有子组件中预留了对应的槽位才会在视图上显示

      const player = reactive({
        name: '鲁班',
        age: 12,
      });

      function testHello() {
        // 通过context.emit()取代this.$emit()来触发自定义事件
        context.emit('hello', '[[子传父的参数]]');
      }

      return {
        player,
        testHello,
      }
    },

    beforeCreate() {
      console.warn('======== [before create] start ========');
    }
  }
</script>
