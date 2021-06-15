import vnode from "./vnode.js";
import createElement from "./createElement.js";

/**          patch()函数的流程
 *   - 判断旧节点是否是vnode, 如果不是vnode则包装成vnode;
 *   - 如果旧节点是vnode, 则判断新旧节点是否是同一个节点;
 *   - 如果是同一个节点, 则进行精细化比较, 进行最小化更新；
 *   - 否则暴力更新。
*/

export default function patch (old_vnode, new_vnode) {
  // step01: 判断old是dom_node还是vnode => 有无sel属性即可。。。没想到吧.jpg
  if(!(old_vnode.hasOwnProperty("sel"))) {
    // 将dom_node通过vnode()函数包装成一个vnode
    old_vnode = vnode(old_vnode.tagName.toLowerCase(), {}, [], undefined, old_vnode);
  }

  // step02: 判断old_vnode和new_vnode是否是同一个节点
  if(old_vnode.key === new_vnode.key && old_vnode.sel === new_vnode.sel) {
    console.log("是同一个节点");
  } else {
    // 不是同一个节点, 插入新节点, 删除旧节点
    let new_dom_node = createElement(new_vnode);
    if(old_vnode.elm.parentNode && new_dom_node) {
      old_vnode.elm.parentNode.insertBefore(new_dom_node, old_vnode.elm);
    }
    old_vnode.elm.parentNode.removeChild(old_vnode.elm);
  }
};