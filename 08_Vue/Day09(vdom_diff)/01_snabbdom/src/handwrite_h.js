import h from "./mySnobbdom/h.js";

// const vnode01 = h("div", {}, "textnode");

// const vnode01 = h("div", {}, [
//   h("p", {}, "大毛"),
//   h("p", {}, "二毛"),
//   h("p", {}, "三毛"),
//   h("p", {}, [
//     h("span", {}, "grand-son"),
//     h("span", {}, "grand-daughter")
//   ])
// ]);

const vnode01 =  h("div", {}, h("p", {}, "大毛"));

console.log(vnode01);
