// 使用class关键字定义一个类
// 类中主要包含两个部分：属性; 方法。
class Person {
  // 静态属性(类属性)
  static count:number = 0;
  static readonly country:string = "CN";  // 只读的类属性; 注意书写顺序。

  // 静态方法(类方法)
  static greet() {
    console.log("欢迎来到王者荣耀~");
  }

  // 定义实例属性
  name:string = "HuaMulan";
  age:number = 18;
  readonly id:number = 20161757;  // readonly定义了只读属性

  // 实例方法
  sayHello() {
    console.log("Hello, 我是花木兰~");
  }
}

console.log(Person.count);  // 类属性需要通过类来访问
Person.greet();  // 同理类方法也需要通过类来访问

const p01 = new Person();
console.log(p01)
console.log(p01.name);
console.log(p01.age);
console.log(p01.id);
p01.sayHello();
