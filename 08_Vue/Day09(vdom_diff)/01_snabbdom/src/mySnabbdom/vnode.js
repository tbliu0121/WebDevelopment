// vnode() 就是将参数构建成一个对象并返回。
export default function (sel, data, children, text, elm) {
  return {
    sel, data, children, text, elm
  }
};