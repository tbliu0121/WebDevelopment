import Dep from "./Dep.js";
import observe from "./observe.js";

// 利用闭包的特性, 将defineProperty中需要中转变量完成数据的特点改进并封装。
export default function defineReactive(obj, attr, value) {
  console.log("Here is defineReaction()", obj, attr);
  if(arguments.length === 2) {
    value = obj[attr];
  }
  const dep = new Dep();
  let childOb = observe(value);      // 如果属性是一个基本数据类型, observe会直接返回

  Object.defineProperty(obj, attr, {
    get() {
      console.log(`访问对象的${attr}属性: ${value}`);
      // 如果处于依赖收集的阶段, 则添加依赖
      if(Dep.target) {
        dep.depend();
        // 收集子元素的依赖
        if(childOb) {
          childOb.dep.depend();
        }
      }
      return value;
    },
    set(newValue) {
      console.log(`设置对象的${attr}属性为: ${newValue}`);
      if(newValue == value) {
        return;
      }
      value = newValue;
      childOb = observe(newValue);  // 设置的新值需要成为被观察的属性
      // 通知相关依赖数据产生了变化
      dep.notify();
    }
  });
}
