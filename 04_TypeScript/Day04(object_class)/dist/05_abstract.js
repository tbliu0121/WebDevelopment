"use strict";
(function () {
    /**       抽象类: abstract(这都出来了, 接口还会远么？？？)
     *   - 有时候我们只想让一个类用来被继承, 而不想用这个类来实例化对象。
     *   - 类似于将一些类的共有部分抽离出来。
     *   - 因此可以通过abstract来定义一个抽象类。
     *
    */
    // 抽象类和其他类差别不大, 仅仅是用来被继承的并且不可以用来创建实例。
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        constructor(name, age, home) {
            super(name, age);
            this.home = home;
        }
        // 子类必须实现定义在父类中的抽象方法
        sayHello() {
            console.log("汪汪汪！！！");
        }
    }
    const dog01 = new Dog("二狗", 3, "L.A.");
    // const UNK = new Animal("Unkonwn", 5);  error, 无法创建抽象类实例
})();
