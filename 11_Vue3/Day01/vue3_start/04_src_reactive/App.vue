<template>
<div>
  <h1>个人信息</h1>
  <h2 v-show='player.name'>姓名: {{ player.name }}</h2>
  <h2 v-show='player.gender'>性别: {{ player.gender }}</h2>
  <h2>年龄: {{ player.age }}</h2>
  <h2>职业: {{ player.type }}</h2>
  <h2>技能: {{ player.skills }}</h2>
  <h2>皮肤颜色: {{ player.skin.body.color }}</h2>
  <h2>爱好: {{ hobby }}</h2>
  <button @click='changeInfo'>修改个人信息</button>
  <button @click='addGender'>添加性别属性</button>
  <button @click='delName'>删除姓名属性</button>
</div>
</template>

<script>
  import { reactive } from 'vue';  // 通过ref()函数才可以将数据变成响应式数据

  export default {
    name: 'App',
    setup() {
      /**      Vue3.0中的数据响应式
       *   - ref()处理对象得到一个RefImpl对象, .value才会得到对象的Proxy代理实例
       *   - reactive()处理的对象直接得到Proxy代理实例
       *   - 通过reactive()函数设置的对象直接修改即可
       * 
       *   - 将基本数据类型封装到一个对象当中, 可以避免使用ref()函数; 
       */
      const player = reactive({
        name: '鲁班',
        type: '射手',
        age: 12,
        skills: ['鲨嘴炮', '河豚手雷', '活力压制'],
        skin: {
          body: {
            color: 'red',
          }
        }
      });
      const hobby = reactive(['抽烟', '喝酒', '烫头']);  // 数组实现相应式同样需要reactive()函数来处理
      // let slogan = reactive(666);  // value cannot be made reactive: 666; reactive()函数只能处理对象类型数据。

      function changeInfo() {
        player.name = '妲己';
        player.type = '射手~'; 
        player.skills[0] = '偶像魅力';
        player.skills[1] = '灵魂冲击';
        player.skills[0] = '女王崇拜';
        player.skin.body.color = 'pink';  // 对对象的响应式是深层次的
        hobby[0] = '学习';  // 修改数组的值, Vue3中通过reactive()函数设定的数组可以直接通过索引修改
        hobby[1] = '吃饭';
        hobby[0] = '逛街';
      }

      function addGender() {
        player.gender = '蓝孩子';
      }

      function delName() {
        delete player.name;
      }

      return {
        player,
        hobby,
        changeInfo,
        addGender,
        delName,
      }
    },
  }
</script>
