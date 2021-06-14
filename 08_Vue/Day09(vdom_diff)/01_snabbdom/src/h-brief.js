import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
  vnode,
} from "snabbdom";

// 创建patch()函数, patch()函数是核心！！！
// patch函数可以完成虚拟节点挂载到真实DOM上。
const patch = init([classModule, propsModule, styleModule, eventListenersModule,]);

// 创建一个虚拟节点
let vnode01 = h("a", {
  props: {
    href: "https://www.baidu.com",
    target: "_blank"
  }
}, "虚拟节点01, 指向百度的<a>标签");
console.log(vnode01);

// vnode02
const vnode02 = h("div", "我是vnode02");  // 元素没有参数可以省略 {}
console.log(vnode02);

// vnode03, h函数的嵌套使用
const vnode03 = h("ul", [
  h("li", "苹果"),
  h("li", "橘子"),
  h("li", [
    h("div", "我是一个li下的div"),
    h("div", "我是一个li下的另一个div")
  ]),
]);
console.log(vnode03);

// 完成VDOM的挂载
const container = document.getElementById("container");

// patch(container, vnode01);
// patch(container, vnode02);               // 一个容器只能允许挂载一个vnode, 除非有内嵌 (see later)。
patch(container, vnode03);

