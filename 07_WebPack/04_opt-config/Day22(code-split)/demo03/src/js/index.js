// import {mul} from "./test"

// ES10中动态导入模块的方法，返回的是一个Promise。
// 这样引入方式就会对引入的文件进行单独打包, 这就是单页面应用下实现多入口文件的打包效果。
// 在import中加入webpackName参数可以指定打包输出的chunk的名字~ (webpack的魔法注释)
import(/* webpackChunkName: "test" */"./test").then( ({mul, sub}) => {
  // 文件加载成功
  // eslint-disable-next-line
  console.log(mul(2, 3));
}).catch(() => {
  // eslint-disable-next-line
  console.log("加载文件失败");
});

// eslint-disable-next-line

function sum(...args) {
  return args.reduce((acc, cur) => acc + cur, 0);
}
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5));
