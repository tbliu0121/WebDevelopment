// 真正的创建节点操作; 将vnode创建为dom_node, 并挂载到dom树上
export default function createElement(vnode) {
  let dom_node = document.createElement(vnode.sel);  // 简单版sel中没有id选择器和类选择器

  // 判断元素内是文本信息还是有子元素children[]
  if(vnode.text !== "" && (vnode.children == undefined || vnode.children.length === 0)) {
    dom_node.innerText = vnode.text;                 // 元素内部是文本信息
  } else if(Array.isArray(vnode.children) && vnode.children.length > 0) {
    // 创建元素内部的子元素对应的dom_node
    for(let i = 0; i < vnode.children.length; i++) {
      let child = vnode.children[i];
      let sub_node = createElement(child);
      dom_node.appendChild(sub_node);               // 添加子节点
      console.log(child);
    }
  }
  vnode.elm = dom_node;                             // 记录vnode对应的dom_node

  return vnode.elm;                                 // 返回一个dom_node
};