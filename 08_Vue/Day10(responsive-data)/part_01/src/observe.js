import Observer from "./Observer.js"

// 创建一个observ函数, 起到辅助判别的作用。
export default function observe(value) {
  /**
   *   - 函数作用的目标应该是个对象
   *   - 传入的value是defineReactive()中用到的value
  */
  if(typeof value === "object") {
    let obj = null;

    if(typeof value.__obj__ !== "undefined") {
      obj = value.__obj__;
    } else {
      obj = new Observer(value);
    }
    return obj;
  }
}