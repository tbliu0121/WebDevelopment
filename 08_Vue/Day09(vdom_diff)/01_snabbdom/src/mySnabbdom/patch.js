import vnode from "./vnode.js";
import createElement from "./createElement.js";
import patchVNode from "./patchVNode.js";

/**          patch()函数的流程
 *   - 判断旧节点是否是vnode, 如果不是vnode则包装成vnode;
 *   - 如果旧节点是vnode, 则判断新旧节点是否是同一个节点;
 *   - 如果是同一个节点, 则进行精细化比较, 进行最小化更新；
 *     - 先判断newVNode有无text属性
 *     - 如果newVNode有children, 再判断oldVNode有无text属性
 *   - 否则暴力更新。
*/
export default function patch (oldVNode, newVNode) {
  // step01: 判断old是dom_node还是vnode => 有无sel属性即可。。。没想到吧.jpg
  if(!(oldVNode.hasOwnProperty("sel"))) {
    // 将dom_node通过vnode()函数包装成一个vnode
    oldVNode = vnode(oldVNode.tagName.toLowerCase(), {}, [], undefined, oldVNode);
  }

  // step02: 判断old_vnode和new_vnode是否是同一个节点
  if(oldVNode.key === newVNode.key && oldVNode.sel === newVNode.sel) {
    patchVNode(oldVNode, newVNode);
  } else {
    // 不是同一个节点, 插入新节点, 删除旧节点
    let new_dom_node = createElement(newVNode);
    if(oldVNode.elm.parentNode && new_dom_node) {
      oldVNode.elm.parentNode.insertBefore(new_dom_node, oldVNode.elm);
    }
    oldVNode.elm.parentNode.removeChild(oldVNode.elm);
  }
};