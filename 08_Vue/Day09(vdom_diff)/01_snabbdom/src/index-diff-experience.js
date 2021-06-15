import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

// 创建patch()函数, patch()函数是核心, patch函数可以将虚拟节点挂载到真实DOM上。
const patch = init([classModule, propsModule, styleModule, eventListenersModule,]);

const vnode01 = h("ul", {}, [
  h("li", { key: "A" }, "text_A"),
  h("li", { key: "B" }, "text_B"),
  h("li", { key: "C" }, "text_C"),
  h("li", { key: "D" }, "text_D")
]);
const container = document.getElementById("container");
patch(container, vnode01);

// 同层比较, key相同, 即使位置乱了也会进行精细化比较。
const vnode02 = h("ul", {}, [
  h("li", { key: "A" }, "text_A"),
  h("li", { key: "B" }, "text_B"),
  h("li", { key: "D" }, "text_D"),
  h("li", { key: "C" }, "text_C"),
  h("li", { key: "E" }, "text_E")
]);

// 节点跨层不会进行精细化比较然后更新, 而是原始暴力更新
const vnode03 = h("div", {}, [
  h("p", { key: "A" }, "A1"),
  h("p", { key: "B" }, "B2"),
  h("p", { key: "C" }, "C3"),
  h("p", { key: "D" }, "D4")
]);

const vnode04 = h("div", {}, h("section", {}, [
  h("p", { key: "A" }, "A1"),
  h("p", { key: "B" }, "B2"),
  h("p", { key: "C" }, "C3"),
  h("p", { key: "D" }, "D4"),
]));

const btn = document.getElementById("change");
// 点击按钮时将vnode01变为vnode02
btn.onclick = function() {
  patch(vnode01, vnode02);
  // patch(vnode03, vnode04);      // 跨层级更新不会进行精细化比较
};
