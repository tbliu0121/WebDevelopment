class Animal {
  // name:string = "旺财";
  // age:number = 3;
  name:string;
  age:number;

  constructor(name:string, age:number) {
    // 构造函数中的this指向当前的实例对象
    this.name = name;
    this.age = age;
  }

  sayHello() {
    alert(`Hello my name is ${this.name}`);
  }
}

const dog = new Animal("旺财", 3);
const cat = new Animal("二狗", 2);
const turtle = new Animal("呆呆", 360);
const tortoise = new Animal("笨笨", 512);

console.log(dog);
console.log(cat);
console.log(turtle);
console.log(tortoise);

tortoise.sayHello();