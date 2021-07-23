class EventBus {
  constructor() {
    this._record = {};  // 记录event名称和对应的事件
  }

  // 在事件总线上注册事件
  // 一个事件可以对应多个回调函数, 因此每个事件对应的回调用数组存起来
  on(event, callback) {
    if(this._record[event]) {
      this._record[event].push(callback);
    } else {
      this._record[event] = [callback];
    }
  }

  // 在事件总线上注销事件, 只能删除被命名的函数
  off(event, callback) {
    let tasks = this._record[event];  // 获取事件对应的响应事件
    if(tasks) {
      for(let i = 0; i < tasks.length; i++) {
        if(tasks[i] === callback) {
          tasks.splice(i, 1);        // 移除对应的事件响应事件
        }
      }
    }
  }

  // 使用事件总线上的事件
  emit(event, ...args) {
    const callbacks = this._record[event];

    // 对应的事件存在才执行相应的操作
    if(callbacks) {
      let tasks = this.callbacks.slice();
      for(let i = 0; i < callbacks.length; i++) {
        
      }
    }
  }
}