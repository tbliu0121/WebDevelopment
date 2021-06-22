import def from "./utils.js"
import defineReactive from "./defineReactive.js";
import { arrayMethods } from "./array.js";  // arrayMethods中含有七个数组中的方法
import observe from "./observe.js";

// 将一个对象（含有嵌套对象）的任何属性转化为每一个属性都可以做到可以被侦测
export default class Observer {
  constructor(value) {
    // 构造函数中的this不是表示类本身, 而是表示实例; 给实例添加了__obj__属性, 此属性不可以枚举, 通过def()函数来设定。
    def(value, "__ob__", this, false);
    console.log("Here is constructor of Observer", value);

    if(Array.isArray(value)) {
      // 如果观察对象是一个数组, 将数组的原型指向改写方法后的原型上
      Object.setPrototypeOf(value, arrayMethods);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  // 遍历value, 将value的每一个attr都设置成reactive的; 需要调用defineReactive
  walk(value) {
    for(let attr in value) {
      defineReactive(value, attr);
    }
  }

  // 数组的响应式处理
  observeArray(arr) {
    for(let i = 0, len = arr.length; i < len; i++) {
      // 对数组中的元素进行observe()操作; splice、push、unshift涉及到增加元素的需要特殊处理
      observe(arr[i]);
    }
  }
};