import def from "./utils.js"
import defineReactive from "./defineReactive.js";

// 将一个对象（含有嵌套对象）的任何属性转化为每一个属性都可以做到可以被侦测
export default class Observer {

  constructor(value) {
    // 构造函数中的this不是表示类本身, 而是表示实例
    // 给实例添加了__obj__属性, 此属性不可以枚举, 通过def()函数来设定。
    def(value, "__obj__", this, false);
    console.log("Here is constructor of Observer", value);
    this.walk(value);
  }

  // 遍历value, 将value的每一个attr都设置成reactive的
  // 需要调用defineReactive
  walk(value) {
    for(let attr in value) {
      defineReactive(value, attr);
    }
  }
};