import Dep from "./Dep";

let uid = 0;

export default class Watcher {
  constructor(target, expression, callback) {
    console.log("Here is constructor of class Watcher");
    this.id = uid++;
    this.target = target;
    this.getter = parsePath(expression);  // expression是某个属性(such as: obj.son.name)的表达式, parsePath会按点进行拆分
    this.callback = callback;
    this.value = this.get();
  }

  update() {
    this.run();
  }

  get() {
    // 进入依赖收集阶段; 让Dep的全局属性Dep.target设置为wotahcer本身。
    Dep.target = this;
    const obj = this.target;
    let value = undefined;
    try {
      value = this.getter(obj);
    } catch(err) {
      return err.message;
    } finally {
      Dep.target = null;
    }
    return value;
  }

  run() {
    getAndInvoke(this.callback);
  }

  getAndInvoke(cb) {
    const value = this.get();
    if(value !== this.value || typeof value === "object") {
      const oldValue = this.value;
      cb.call(this.target, value, oldValue);
    }
  }
}

function parsePath(str) {
  const nestedAttrs = str.split(".");
  return (obj) => {
    for(let i = 0; i < nestedAttrs.length; i++) {
      if(!obj) return;
      obj = obj[nestedAttrs[i]];
    }
    return obj;
  }
}