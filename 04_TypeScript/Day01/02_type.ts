/***
 * 类型声明是TS最大的一个特点。
 * 通过对编译器配制, 可以指定编译目标的JS文件的指定版本。
 */
let price: number;             // 声明一个number类型的price
price = 23;
price = 56;
// price = "hello world~";     数据类型不可更改, 虽然报错但是仍然可以编译成功(因为符合JS语法)
// let name: string;              // 实际中这中写法并不多
// name = "Jonathan";             // 初始值为空之后再赋值会报错

let weight: number = 54;
let name_: string = "Utnapishtim";
let flag: boolean = false;
let flag_ = false;             // 不声明类型可以根据赋值进行自动检测数据类型, 因此声明和赋值同时则可以省略类型声明

// JS中是不考虑参数的个数和类型的。
function sum(a:number, b:number):number {  //在参数后面的括号指定返回值类型
  return a + b;
}

console.log(sum(3, 4));
// console.log(sum(3, '456'));  此时会报错
// console.log(sum(3, 4, 5));   报错

/** ============================= 分割线 ====================================
 * typescript中的数据类型：
 *   - number
 *   - string
 *   - boolean
 *   - 字面量: 数据本身。
 *   - object
 *   - array
 * 
 *   - tuple
 *   - enum
 *   - any
 *   - unknow
 *   - void：一般用于设置函数的返回值; 表示返回值为空。
 *   - never：一般用于设置函数的返回值; 表示永远没有返回值。
 */
let a:10;  // 使用字面量赋值之后无法修改, 类似于const
a = 10;
// a = 11;  error

let str: "male" | "female";  // 意味着str可以赋值的内容
str = "male";
str = "female";
// str = "hello";  error

let tel: number | string;  // 为tel指定两种数据类型; 称之为联合类型  
tel = 10086;
tel = "10086"

let d: any;  // 此时的d可以赋值任何数据类型; 相当于对这个数据关闭了ts的类型检测。
// let d;  这是隐式的any类型！！！ 解析器会设定这个数据类型为any。
d = 10086;
d = "10086";
d = true;
d = {};

let ele: unknown;  // unknow表示数据的类型未知
ele = 10;
ele = false;
ele = "hello";
let test: string;
// test = d;  // d是any类型的, 可以赋值给任何类型的数据。
// test = ele;   // unknow类型不可以赋值给别的变量。
if(typeof ele === "string") {  // 01 把unknow类型的数据复制给其它变量的方法：做类型检测
  test = ele;
}
test = ele as string;        // 02 通过类型断言来把unknow类型赋值给背的数据
test = <string>ele;          // 另外一种形式的断言

function func02(a:string, b:string):void {
  // return a.concat(b);  error
  return undefined;          // 对于void返回类型可以return undefined或者return null;
}

function errorFunc():never {
  throw new Error("报错了");  // JS中有一类函数不返回任何值：就是报错的函数, 会throw一个Error。
}

let obj01:object;
obj01 = {};
obj01 = function (){};       // JS中一切皆对象, 更多的是对对象中的属性做限制; 而不是限制一个数据是不是对象。

let obj02:{
  name:string;
  age: number;
  gender?: string;           //在属性名后面加一个？表示此属性为可选属性, 可写可不写。
}
// obj02 = {};  error(少写)
// obj02 = {name: "Jonathan", age: 18, gender: "female", height: 178};  error(多写)
obj02 = { name:"Jonathan", age:18 };
obj02 = { name:"Jonathan", age:18, gender:"male" };

let player:{ name: string, [propName: string]:any }  // [propName: string]:any表示任意类型的任意属性。
player = { name: "花木兰", gender: "女", position: "assassinator" }

let func03 : (a:number, b:number)=>number;           // 声明一个函数并确定参数和返回值的类型。
func03 = (a:number, b:number) => {
  return a + b;
}

let arrStr:string[];         // 声明一个字符串数组。
arrStr = ["html", "css", "javascript"];
let arrNum:number[];         // 声明一个数字数组。
arrNum = [1, 2, 3];

let flagArr:Array<boolean>;  // 声明一个属数组的另一种方式。
flagArr = [true, false, true, true];

// tuple就是长度固定的数组; 但是元组的各个数据类型可以不相同
let tup01:[string, string];    // 声明一个元组
tup01 = ["python", "PyTorch"];
// tup01 = ["python", "PyTorch", "Jupytor"];  error
let tup02:[string, number];
tup02 = ["鲁班", 18];

// enum常用于某些数据范围固定的数据
// enum Gender{ Male = 0, Female = 1};  两种写法都可以
enum Gender { Male, Female};

let obj03:{ name:string, gender:Gender }
obj03 = { name: "妲己", gender: Gender.Female }  // TS会把Female转化为1。
console.log(obj03.gender === Gender.Male);

// 类型的别名
type myType = string;  // 为string起了一个别名
type numUnionType = 1 | 2 | 3 | 4;
let x: numUnionType;  // let x: 1 | 2 | 3 | 4
let y: numUnionType;  // let y: 1 | 2 | 3 | 4
let m: myType;
