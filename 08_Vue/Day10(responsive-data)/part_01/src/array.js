import Dep from "./Dep.js";
import observe from "./observe.js";
import def from "./utils.js";

// 以Array.prototype为原型, 创建一个对象来改写Array中的方法
const arrayPrototype = Array.prototype;
export const arrayMethods = Object.create(arrayPrototype);  // 以arrayPrototype为原型创建一个对象

const methodsNeedChange = [ "splice", "sort", "reverse", "push", "pop", "shift", "unshift" ];

methodsNeedChange.forEach(methodName => {
  const original = arrayPrototype[methodName];              // 备份原来的方法

  def(arrayMethods, methodName, function() {                // 改写原来的方法
    const ob = this.__ob__;
    const dep = new Dep();
    // splice、push、unshift会加入新元素, 对新元素做observe()操作
    let inserted = [];
    switch(methodName) {
      case "push":
      case "unshift":
        inserted = [...arguments];
        break;
      case "splice":  
        // slice(start, nums, newData)参数中第三个位置后面是要插入的新元素
        inserted = [...arguments].slice(2);                 // 获取插入的新元素
        break;
    }
    // 判断是否有新增的元素
    if(inserted) {
      ob.observeArray(inserted);
    }
    console.log("invoke method of arrayMethods~");
    const res = original.apply(this, arguments);             // 调用原来的方法
    dep.notify();  // 通知相关依赖数据发生了变化
    return res;
  }, false);

});

