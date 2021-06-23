import Observer from "./Observer.js"

// 创建一个observ函数, 起到辅助判别的作用。
export default function observe(value) {
  /**
   *   - 函数作用的目标应该是个对象, 即使observe()一个基本的数据类型返回的是undefined。
   *   - 传入的value是defineReactive()中用到的value
  */
  if(typeof value === "object") {
    let ob = null;

    if(typeof value.__ob__ !== "undefined") {
      ob = value.__ob__;
    } else {
      ob = new Observer(value);
    }
    return ob;
  }
}