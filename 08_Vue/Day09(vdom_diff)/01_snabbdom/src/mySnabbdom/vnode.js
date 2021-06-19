// vnode() 就是将参数构建成一个对象并返回。
export default function (sel, data, children, text, elm) {
  const key = data.key;    // key如果是undefined, 那么结果就是undefined
  return {
    sel, data, children, text, elm, key
  }
};