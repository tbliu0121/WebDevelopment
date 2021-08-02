import {reactive, onMounted, onBeforeUnmount,} from 'vue';

export default function () {
  // 记录鼠标位置的数据
  const point = reactive({
    x: 0,
    y: 0,
  });

  // 输出鼠标坐标的方法
  // window下的click是事件对应的回调函数
  function getPosition(event) {
    console.log(event);
    point.x = event.clientX;
    point.y = event.clientY;
  }

  // Demo组件挂载时为weindow添加点击事件; 通过相应的钩子函数完成事件的添加和移除
  onMounted(() => {
    console.log('onMounted()');
    window.addEventListener("click", getPosition);
  });

  // Demo组件卸载时移除window对应的
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount()');
    window.removeEventListener("click", getPosition);
  });

  return point;
}
