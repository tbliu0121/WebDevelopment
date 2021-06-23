// Dep类负责依赖收集、管理依赖。
// Dep类要在Observer中实例化; 在defineReactice中也要实例化。
let uid = 0; 
export default class Dep {
  constructor() {
    console.log("Here is constructor of class Dep");
    this.id = uid++;
    // 用一个数组记录数据的相关的依赖(即订阅者), 每一个元素都是一个Watcher的实力
    this.subs = [];
  }

  // 添加订阅
  addSub(sub) {
    this.subs.push(sub);
  }

  // 添加依赖
  depend() {
    // Dep.target就是一个自己制定的全局的位置, 使用window.target都可以, 保证全局唯一就可以。
    if(Dep.target) {
      this.addSub(Dep.target);
    }
  }

  // 删除订阅 TODO

  // 在数据发生变化的地方发布消息, 通知相关的依赖
  notify() {
    console.log("notify relative dependency......");
    const subs = this.subs.slice();  // 浅克隆一份订阅者的数组
    // 遍历订阅者
    for(let i = 0, len = subs.length; i < len; i++) {
      subs[i].update();  // 调用每个元素的update()
    }
  }
}