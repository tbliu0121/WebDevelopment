/**           数据劫持代理
 *   - 数据劫持的目的是当目标数据发生了变化的时候可以实时观测到变化。
*/

let data = {
  username: "curry",
  age: 24
}

let _this = {
  test: "测试属性"
}

for(let item in data) {
  Object.defineProperty(_this, item, {
    // 用来获取扩展属性值,时调用get()方法
    get() {
      console.log("get()");
      return data[item];
    },
    // 属性的修改会调用set()方法
    set(newValue) {
      console.log("set()", newValue);
      // _this.username = nweValue;  //这是一个死循环, 这是无限修改数据时触发set()
      data[item] = newValue;
    }
  })
}

console.log(_this);
// 调用definePRoperty()时, 属性默认的是不可枚举、不可配置、不可写的。
_this.username = "Pony";
console.log(_this.username);
