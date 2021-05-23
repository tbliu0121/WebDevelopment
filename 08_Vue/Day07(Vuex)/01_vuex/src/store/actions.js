import {CHANGE_INFO} from "./mutations-type.js"

export default {    // 类似于mutations, 这里的操作都是异步操作的
  asynUpdate(context, payload) {  //默认参数不是state了, 而是context(一个类似于store的东西)
    return new Promise((resolve, reject)=> {
      console.log(payload.msg);
      setTimeout(() => {
        context.commit(CHANGE_INFO);
        resolve("异步设置完成...ORZ。。。");
      }, 3000);
    });
  }
}