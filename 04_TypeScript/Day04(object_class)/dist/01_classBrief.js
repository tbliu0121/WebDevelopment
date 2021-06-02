"use strict";
// 使用class关键字定义一个类
// 类中主要包含两个部分：属性; 方法。
class Person {
    constructor() {
        // 定义实例属性
        this.name = "HuaMulan";
        this.age = 18;
        this.id = 20161757; // readonly定义了只读属性
    }
    // 静态方法
    static greet() {
        console.log("欢迎来到王者荣耀~");
    }
    // 实例方法
    sayHello() {
        console.log("Hello, 我是花木兰~");
    }
}
// 静态属性(也称为类属性)
Person.count = 0;
Person.country = "CN"; // 只读的类属性; 注意书写顺序。
console.log(Person.count); // 类属性需要通过类来访问
Person.greet();
const p01 = new Person();
console.log(p01);
console.log(p01.name);
console.log(p01.age);
console.log(p01.id);
p01.sayHello();
