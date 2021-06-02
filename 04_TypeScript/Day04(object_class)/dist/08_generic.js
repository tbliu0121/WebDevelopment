"use strict";
/**                  泛型: generic
 *   - 泛型: 当我们定义函数或者类的时候, 如果数据类型不明确, 此时可以利用泛型。
 *   - 如果使用any来定义则会关闭TS中的数据类型检测、
*/
// 01 利用<>来定义一个泛型, 示例中泛型的名字是T(可以是任意名字)
function func(a) {
    return a;
}
let res01 = func(10086); // 不指定泛型, TS可以做类型自动推断。
let res02 = func("Hello World~"); // 指定泛型
// 02 可以指定多个泛型
function fn01(a, b) {
    console.log(a);
    console.log(b);
}
fn01("Hello Generic", 10086); // 不指定泛型
fn01("Hello world~", "Hello TypeScript~"); // 建议指定泛型, 避免出错。
function fn02(a) {
    return a.length;
}
fn02({ length: 10 }); // 一个含有length属性的类
fn02("Hello world"); // 字符串中含有length属性
fn02([]); // 数组中也含有length属性
// 04 在类中定义泛型
class MyClass {
    constructor(a) {
        this.a = a;
    }
}
const myclass = new MyClass("Jonathan"); // 指定泛型~; 虽然也可以不指定, 但是建议手动指定泛型。
