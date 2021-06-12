// import "../css/index.css"
import "$css/index.css"  // 配置路径解析的别名

console.log("index.js加载了");

// 为导入的内容设置一个暴露出去的名字: test_add
import(/* webpackChunkName: "test_add" */"./test").then(({add}) => {
  console.log(add(2, 3));
});
