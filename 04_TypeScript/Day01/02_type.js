/***
 * 类型声明是TS最大的一个特点。
 * 通过对编译器配制, 可以指定编译目标的JS文件的指定版本。
 */
var price; // 声明一个number类型的price
price = 23;
price = 56;
// price = "hello world~";     数据类型不可更改, 虽然报错但是仍然可以编译成功(因为符合JS语法)
// let name: string;              // 实际中这中写法并不多
// name = "Jonathan";             // 初始值为空之后再赋值会报错
var weight = 54;
var name_ = "Utnapishtim";
var flag = false;
var flag_ = false; // 不声明类型可以根据赋值进行自动检测数据类型, 因此声明和赋值同时则可以省略类型声明
// JS中是不考虑参数的个数和类型的。
function sum(a, b) {
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
var a; // 使用字面量赋值之后无法修改, 类似于const
a = 10;
// a = 11;  error
var str; // 意味着str可以赋值的内容
str = "male";
str = "female";
// str = "hello";  error
var tel; // 为tel指定两种数据类型; 称之为联合类型  
tel = 10086;
tel = "10086";
var d; // 此时的d可以赋值任何数据类型; 相当于对这个数据关闭了ts的类型检测。
// let d;  这是隐式的any类型！！！ 解析器会设定这个数据类型为any。
d = 10086;
d = "10086";
d = true;
d = {};
var ele; // unknow表示数据的类型未知
ele = 10;
ele = false;
ele = "hello";
var test;
// test = d;  // d是any类型的, 可以赋值给任何类型的数据。
// test = ele;   // unknow类型不可以赋值给别的变量。
if (typeof ele === "string") { // 01 把unknow类型的数据复制给其它变量的方法：做类型检测
    test = ele;
}
test = ele; // 02 通过类型断言来把unknow类型赋值给背的数据
test = ele; // 另外一种形式的断言
function func02(a, b) {
    // return a.concat(b);  error
    return undefined; // 对于void返回类型可以return undefined或者return null;
}
function errorFunc() {
    throw new Error("报错了"); // JS中有一类函数不返回任何值：就是报错的函数, 会throw一个Error。
}
var obj01;
obj01 = {};
obj01 = function () { }; // JS中一切皆对象, 更多的是对对象中的属性做限制; 而不是限制一个数据是不是对象。
var obj02;
// obj02 = {};  error(少写)
// obj02 = {name: "Jonathan", age: 18, gender: "female", height: 178};  error(多写)
obj02 = { name: "Jonathan", age: 18 };
obj02 = { name: "Jonathan", age: 18, gender: "male" };
var player; // [propName: string]:any表示任意类型的任意属性。
player = { name: "花木兰", gender: "女", position: "assassinator" };
var func03; // 声明一个函数并确定参数和返回值的类型。
func03 = function (a, b) {
    return a + b;
};
var arrStr; // 声明一个字符串数组。
arrStr = ["html", "css", "javascript"];
var arrNum; // 声明一个数字数组。
arrNum = [1, 2, 3];
var flagArr; // 声明一个属数组的另一种方式。
flagArr = [true, false, true, true];
// tuple就是长度固定的数组; 但是元组的各个数据类型可以不相同
var tup01; // 声明一个元组
tup01 = ["python", "PyTorch"];
// tup01 = ["python", "PyTorch", "Jupytor"];  error
var tup02;
tup02 = ["鲁班", 18];
// enum常用于某些数据范围固定的数据
// enum Gender{ Male = 0, Female = 1};  两种写法都可以
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
;
var obj03;
obj03 = { name: "妲己", gender: Gender.Female }; // TS会把Female转化为1。
console.log(obj03.gender === Gender.Male);
var x; // let x: 1 | 2 | 3 | 4
var y; // let y: 1 | 2 | 3 | 4
var m;
