(function() {
  class Animal {
    name:string; 

    constructor(name:string) {
      this.name = name;
    }

    sayHello() {
      console.log("动物在叫~");
    }
  }

  class Dog extends Animal {
    age:number;

    // 子类有constructor之后必须通过super()对父类初始化。
    constructor(name:string, age:number) {
      super(name);
      this.age = age;
    }

    sayHello() {
      // 子类中的super关键字代表当前类的父类
      // super.sayHello()
      console.log("汪汪汪！！！");
    }
  }

  const dog01 = new Dog("旺旺", 2);
  dog01.sayHello();
})();