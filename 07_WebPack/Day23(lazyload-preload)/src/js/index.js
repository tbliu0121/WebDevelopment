console.log("index.js被加载了。。。");

// import {mul} from "./test"

document.getElementById("btn").onclick = function() {
  // [[懒加载~]]: 这个语法会进行代码分割, 因此懒加载的前提条件是代码分割。
  // 将目标文件分割成单独的文件, 然后对这个文件进行懒加载。
  // 思路将加载的触发条件放在一个异步的回调函数当中。
  // [[预加载prefetch]]: 会在使用之间提前加载js文件, 用到的时候才会执行触发。
  // 正常加载可以认为是并行加载 (同一时间加载多个文件)
  // 预加载则是等待其他资源加载完毕, 浏览器再加载需要的资源。(预加载存在兼容性问题, 需要慎用！！！)
  import(/* webpackChunkName: "test", webpackPrefetch: true */"./test").then(({ mul }) => {
    console.log(mul(4, 6));
  });
};
