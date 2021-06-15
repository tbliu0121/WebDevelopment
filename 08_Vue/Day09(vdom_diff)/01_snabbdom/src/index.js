import h from "./mySnabbdom/h.js";
import patch from "./mySnabbdom/patch";

const container = document.getElementById("container");
const vnode01 = h("h1", {}, "hello handwrite h-function() and patch()");

const vnode02 = h("ul", {}, [
  h("li", {}, "1_A"),
  h("li", {}, "2_B"),
  h("li", {}, [
    h("p", {}, "这是一段话, 我是li的一个子节点")
  ]),
  h("li", {}, "4_D")
]);

const vnode03 = h("section", {}, [
  h("h2", {}, "我是section中第一个<h2>标签"),
  h("h2", {}, "我是section中第一个<h2>标签")
]);

// patch(container, vnode01);
patch(container, vnode02);

const btn = document.getElementById("btn");
btn.onclick = function() {
  patch(vnode02, vnode03);
};
