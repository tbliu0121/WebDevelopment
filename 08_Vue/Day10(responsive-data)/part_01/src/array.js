import observe from "./observe.js";
import def from "./utils.js";

// 以Array.prototype为原型, 创建一个对象来改写Array中的方法
const arrayPrototype = Array.prototype;
export const arrayMethods = Object.create(arrayPrototype);  // 以arrayPrototype为原型创建一个对象

const methodsNeedChange = [ "splice", "sort", "reverse", "push", "pop", "shift", "unshift" ];

methodsNeedChange.forEach(methodName => {
  const original = arrayPrototype[methodName];          // 备份原来的方法
  def(arrayMethods, methodName, function() {            // 改写原来的方法
    const ob = this.__ob__;
    // splice、push、unshift会加入新元素, 对新元素做observe()操作
    let inserted = [];
    switch(methodName) {
      case "push":
      case "unshift":
        inserted = [...arguments];
        break;
      case "splice":  
        // slice(start, nums, newData)
        inserted = [...arguments].slice(2);  // 获取插入的新元素
        break;
    }
    // 判断是否有新增的元素
    if(inserted) {
      ob.observeArray(inserted);
    }
    const res = original.apply(this, arguments);        // 调用原来的方法
    console.log("invoke method of arrayMethods~");

    return res;
  }, false);

});

