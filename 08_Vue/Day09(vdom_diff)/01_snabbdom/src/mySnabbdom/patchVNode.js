import createElement from "./createElement";

export default function patchVNode(oldVNode, newVNode) {
  // 同一个节点, 进行差异化判断
  console.log("是同一个节点");
  if(oldVNode === newVNode) return;  // 新旧节点指向同一个节点: do nothing
  if(newVNode.text !== undefined && (newVNode.children === undefined || newVNode.children.length === 0)) {
    // newVNode有text属性
    console.log("newVNode有text属性");
    if(newVNode.text !== oldVNode.text) {
      oldVNode.elm.innerText = newVNode.text;
    }
  } else {
    // newVNode没有text属性, 意味着可能有children (嵌套子元素)
    // 判断oldVNode有无text属性
    if(oldVNode.children !== undefined && oldVNode.children.length > 0) {
      // 对比新旧节点的子元素
      for(let i = 0; i < newVNode.children.length; i++) {
        let child = newVNode.children[i];
        let isExist = false;
        for(let j = 0; j < oldVNode.length; j++) {
          if(oldVNode.children[j].sel == child.sel && oldVNode[j].key == child.key) {
            exist = true;
            break;
          }
          if(!isExist) {
            let DOMNode = createElement(child);
            child.ele = DOMNode;
            oldVNode.insertBefore(DOMNode, oldVNode.children[i].elm);
          }
        }
      } 
    } else {
      // oldVNode没有children, newVNode有children(可能有)
      oldVNode.elm.innerText = "";
      for(let i = 0; i < newVNode.children.length; i++) {
        let DOMNode = createElement(newVNode.children[i]);
        oldVNode.elm.appendChild(DOMNode);
      }
    }
  }
}