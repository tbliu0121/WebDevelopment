import defineReactive from "./defineReactive.js";
import observe from "./observe.js";
import Watcher from "./Watcher.js"

let obj = {};
// 设置obj的数据属性: name; 通过defineProperty()设置的数据属性, 如果不显式设置其读取属性, 则默认是false。
Object.defineProperty(obj, "name", {
  value: "Jonathan",
  writable: false,
  configurable: true
});
// 设置obj的数据属性: age
Object.defineProperty(obj, "age", {
  value: 24,
  writable: true,
  configurable: true
});

// Object.defineproperty设置一个对象的getter和setter, 必须通过一个中间变量来周转
let temp = 0;
Object.defineProperty(obj, "age", {
  get() {
    console.log("你正在试图读取年龄");
    return temp;
  },
  set(age) {
    console.log("你正在试图修改年龄为：", age);
    temp = age;
  }
});
obj.age = 18;  // 在getter中通过一个变量来实现周转, 否则数据会变成undefined。
console.log(obj.age); 

/**        defineReactive(obj, attr, value)
 *   - 通过闭包完成对Object.defineProperty()来设置对象访问属性的getter和setter
*/
let test = {};
defineReactive(test, "testAttr", 24);
console.log(test.testAttr);
test.testAttr = 18;

/***       递归侦测对象的全部属性
 *   - Observer {} 类将对象实现让对象的所有属性均可以监听。
 *   - 需要一个observe()函数辅助
 */
let nestedObj = {
  attr01: {
    son: {
      grandSon: {
        name: "howard",
        age: 12
      }
    }
  },
  attr02: "daughter",
  attr03: ["HTML", "CSS", "JavaScript"]
};

// 将nestedObj及其属性设置为响应式数据; Ovserve()的观察目标是一个object, 基本数据对象会返回undefined。
observe(nestedObj);
new Watcher(nestedObj, "nested.attr01.son.grandSon.age", (val) => {
  console.log(`watching attrbution grandSon.age......${val}`);
})

nestedObj.attr01.son.grandSon.age = 18;

nestedObj.attr02 = "test_attr"
console.log(nestedObj.attr02);

console.log(nestedObj.attr01.son.grandSon);

nestedObj.attr03.push("Vue");
console.log(nestedObj.attr03[3]);  // 后加入的数组内容没有被检测到
