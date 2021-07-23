/**
 *   - 自定义Promise_模块: IIFE
*/

(function (window) {
  // 01 Promise_构造函数接受一个执行器函数, 这是一个同步执行的函数
  function Promise_(executor) {
    this.state = 'pending';   // 记录Promise_的状态
    this.data = undefined;    // 存放结果数据的属性
    this.callbacks = [];      // 元素为对象, 结构为{ onFulfilled() {}, onRejected() {} }
    
    // resolve()方法
    function resolve(value) {
      // 只有处于 <pending> 状态才可以发生状态的转变
      if(this.state !== 'pending') return;

      this.state = "resolved";  // 修改状态
      this.data = value;        // 保存数据
      
      // 如果有待执行的callback函数, 立即执行回调函数onFulfilled()
      if(this.callbacks.length > 0) {
        // 此处先用setTimeout暂时模拟
        setTimeout(() => {
          this.callbacks.forEach(callbacksObj => {
            callbacksObj.onFulfilled(value);  // 调用成功的回调用
          });
        });
      }
    }

    // reject()方法, 实现思路同上面的reject
    function reject(reason) {
      if(this.state !== 'pending') return;

      this.state = "rejected"; 
      this.data = reason;
      
      if(this.callbacks.length > 0) {
        setTimeout(() => {
          this.callbacks.forEach(callbacksObj => {
            callbacksObj.onRejected(reason);
          });
        });
      }
    }

    // executor只一个同步执行函数, 因此在构造函数中需要立即执行
    try {
      executor(resolve, reject);
    } catch (err) {
      // 抛出异常则Promise_对象变成<rejected>
      reject(err);
    }
  }

  // 02 Promise_原型上两个常用的方法: then() / catch()
  // 函数的返回值是一个新的Promise_对象
  Promise_.prototype.then = function(onFulfilled, onRejected) {};

  Promise_.prototype.catch = function(onRejected) {};




  // 03 函数对象上的方法: resolve / reject / all / race
  Promise_.resolve = function(val) {
    // 返回一个<fulfilled>的Promise
  };

  Promise_.reject = function(err) {
    // 返回一个<rejected>的Promise
  };

  Promise_.all = function(promises) {};

  Promise_.race = function(promises) {}




  // 向外暴露Promise_函数, 添加到window下面即可~
  window.Promise_ = Promise_;  
})(window);  // ES5通过IIFE来实现模块化; 将windowc传进去