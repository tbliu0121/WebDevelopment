/**  index.js这是webpack的打包入口文件
 *   01 运行指令
 *     开发环境: webpack ./src/index.js -o ./build/built.js --mode=development
 *       - webpack会以 ./sre/index.js为入口文件, 打包后输出到 ./build/built.js
 *       - 整体的打包环境是开发环境。
 * 
 *     生产环境: webpack ./src/index.js -o ./build/built.js --mode=production
 *       - webpack会以 ./sre/index.js为入口文件, 打包后输出到 ./build/built.js
 *       - 整体的打包环境是生产环境（没有了多余的注释，对代码充分压缩！！！）。
 * 
 *     结论: 
 *       - webpack可以处理JSON文件和JS文件; 不可以处理html/css/img等其他资源。
 *       - 生产环境和开发环境能将ES6模块编译成浏览器识别的模块。
 *       - 生产环境和开发环境相比，打包输出的代码为压缩代码。
 */

import data from "./data.json";

console.log(data);

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));