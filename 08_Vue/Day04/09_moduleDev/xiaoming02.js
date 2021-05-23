import {flag} from "./xiaoming.js"
import {PI, E} from "./xiaoming.js"
import {mul, Person} from "./xiaoming.js"
import addr from "./xiaoming.js"  //不使用花括号代表这导入默认数据并使用自定义名字
// import * as module01 from "./xiaoming.js"  导入所有内容

if(flag) {
  console.log("导入成功~");
}

console.log(PI, E)
const p = new Person();
p.code();
console.log(mul(18, 14));
console.log(addr);