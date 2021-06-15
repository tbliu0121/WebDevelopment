import vnode from "./vnode.js";

// 写一个低配版的h函数, 先只能接受三个参数; 只能接受下面三种形式的调用
// form_01: ("div", {}, "text");
// form_02: h("div", {}, [h(), h(), ...]);    // 数组内是若干个h()的运行返回结果
// form_03: h("div", {}, h());

export default function(sel, data, unk) {
  // unk may be text, array or h()

  // 检查参数的个数
  if(arguments.length !== 3) {
    throw new Error("parameters error");
  }

  // 检查unk属于那种调用形式
  if(typeof unk === "string" || typeof unk === "number") {
    // form_01
    return vnode(sel, data, undefined, unk, undefined);

  } else if(Array.isArray(unk)) {
    // form_02
    let children = [];
    for(let i = 0; i < unk.length; i++) {
      // ATTENTION: h()函数的嵌套中, 数组的内容为h()函数的 [[返回结果]] 。。。
      if(!(typeof unk[i] === "object" && unk[i].hasOwnProperty("sel"))) {
        throw new Error("子节点中存在非h()函数参数。");
      }
      children.push(unk[i]);           // 将嵌套子元素收集起来
    }
    return vnode(sel, data, children, undefined, undefined);

  } else if(typeof unk === "object" && unk.hasOwnProperty("sel")) {
    // form_03
    let children = [unk];
    return vnode(sel, data, children, undefined, undefined);

  } else {
    throw new Error("perameter error......");
  }
};
