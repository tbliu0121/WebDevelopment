"use strict";
// TS会检查文件之间的变量重名
// 通过立即执行函数俩限制变量的做作用域
(function () {
    // 定义一个动物类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("动物在叫~");
        }
    }
    // 定义一个狗子类, 使Dog类继承Animal类
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑！！！`);
        }
        // 子类和父类的同名方法会产生覆盖效果
        sayHello() {
            console.log("汪汪汪！！！");
        }
    }
    // 定义一个喵星人类, 使Cat类继承Animal类
    class Cat extends Animal {
        sayHello() {
            console.log("喵喵喵~");
        }
    }
    const dog01 = new Dog("旺财", 2);
    console.log(dog01);
    dog01.sayHello();
    dog01.run();
    const cat01 = new Cat("二狗", 3);
    console.log(cat01);
    cat01.sayHello();
})();
