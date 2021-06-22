export default function def(obj, attr, value, enumerable) {
  // 设置对象某个属性的可枚举性
  Object.defineProperty(obj, attr, {
    value,
    enumerable,
    configurable: true,
    writable: true,
  })

};