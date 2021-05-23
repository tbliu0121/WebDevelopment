// CommonJS模块化规范
const {add, mul} = require("./js/utils")

// 使用webpack打包此文件时, webpack会自动解析依赖关系, 将导入的模块一起打包
// 打包命令: webpack .src/indexedDB.js ./dist/bundle.js
// VScodeb无法运行webpack命令时, 在VSCode属性中设置以管理员身份运行即可

console.log(add(10, 20))
console.log(mul(10, 20))

// ES6模块化规范
import {name, age, height} from "./js/info";
console.log(name, age, height);

// 依赖css, 以模块化的方式引入即可
require("./css/normal.css");

// 依赖less文件
require("./css/special.less");