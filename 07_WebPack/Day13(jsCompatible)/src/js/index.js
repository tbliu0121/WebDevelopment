// import "@babel/polyfill"  // 对js做兼容性处理; @babel/polyfill已经弃用了

const add = (x, y) => {
  return x + y;
}
console.log(add(2, 3));

const promise = new Promise(resolve => {
  setTimeout(() => {
    console.log("定时器执行完成~");
  }, 1500);
});
console.log(promise);
