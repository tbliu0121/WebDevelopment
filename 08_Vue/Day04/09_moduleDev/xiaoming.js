let name = "xiaoMing";
let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if(flag) {
  console.log(sum(10, 20));
}

// 导出方式01
export {
  flag,
  sum
}

// 导出方式02
export let PI = 3.14;
export let E= 2.71828;

// 导出一个函数/类
export function mul(num1, num2) {
  return num1 * num2;
}

export class Person {
  code() {
    console.log("敲代码中。。。。。");
  }
}

// export default。允许导入者自定义命名
let address = "Harbin";
export default address;  //每个文件只能有一个export default！！！