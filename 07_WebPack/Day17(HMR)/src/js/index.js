// 引入相关文件
import "../font/iconfont.css"
import "../css/index.less"
import print from "./print"

console.log("index.js被重新加载了。。。。。。");
print();

function add(x, y) {
  return x + y; 
}

console.log(add(2, 3));

if(module.hot) {
  // 一旦module.hot为true, 说明开启了HMR功能, 让HMR功能代码生效
  module.hot.accept("./print.js", function() {
    // 方法为监听pring.js的变换, 一旦发生变换, 其他模块默认不会重新打包
    // 会执行后面的回调函数
    print();
  });
}