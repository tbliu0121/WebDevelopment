import h from "./mySnabbdom/h.js";
import patch from "./mySnabbdom/patch";

const container = document.getElementById("container");
const vnode01 = h("h1", {}, "hello handwrite h-function() and patch()");

const vnode02 = h("ul", {}, [
  h("li", {key: "A"}, "1_A"),
  h("li", {key: "B"}, "2_B"),
  h("li", {key: "C"}, "3_C")
]);

const vnode03 = h("ul", {}, [
  h("li", {key: "A"}, "1_A"),
  h("li", {key: "B"}, "2_B"),
  h("li", {key: "M"}, "4_M"),
  h("li", {key: "N"}, "5_N"),
  h("li", {key: "C"}, "3_C"),
]);


// patch(container, vnode01);    // 挂载第一个VNode
patch(container, vnode02);

const btn = document.getElementById("btn");

btn.onclick = function() {
  patch(vnode02, vnode03);
};
