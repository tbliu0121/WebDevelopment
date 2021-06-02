(function() {
  /**                             属性的封装
   *   - 属性的任意修改将会使对象中的数据变得非常不安全; 尤其是对于一些敏感数据！！！
   *   - 为属性添加private可以键属性设为私有, 禁止外部修改。
   *   - public: 属性的默认值。
   *   - private: 私有属性只能在类的内部进行修改; 可以在类内部添加方法来修改内部属性。
   *   - protected: 只可以在当前类和当前类的子类中访问(比private的访问范围多了一丢丢~)
   *   - 属性的访问权完全取决于类的内部是否设置了相关的方法; 并且可以通过方法来检查参数时候符合要求。
   * 
   *   - 一个语法糖: 可以将类的定义直接在构造函数的形参中声明~
  */
  class Person {
    private _name:string;
    private _age:number;

    constructor(name:string, age:number) {
      this._name = name;
      this._age = age;
    }
    
    // getName() {
    //   return this._name;
    // }

    // setName(name:string) {
    //   this._name = name;
    // }

    // getAge() {
    //   return this._age;
    // }

    // setAge(age:number) {
    //   if(age < 0) return;
    //   else {
    //     this._age = age;
    //   }
    // }

    // 通过get和set来设置对应的属性的读取、设置方法, 使用时通过.name即可使用相关的方法。
    get name() {
      return this._name;
    }

    set name(name:string) {
      this._name = name;
    }

    get age() {
      return this._age;
    }

    set age(age:number) {
      if(age > 0) {
        this._age = age;
      }
    }
  }

  class Protect {
    protected id:number;

    constructor(id:number) {
      this.id = id;
    }
  }

  class Temp extends Protect {
    test() {
      console.log(`id: ${this.id}`);
    }
  }

  class GrammerCandy {
    constructor(private id:number, private name:string, private age:number) {
      // this.id = id;
      // this.name = name;
      // this.age = age;
      // 上面的赋值语句都可以直接省略, 初始化的时候直接调用构造函数即可~(New Bee.jpg)
    }
  }
  
  // 01 private与访问器的例子
  const p01 = new Person("Jonathan", 24);
  console.log(p01);
  // p01._name = "Nate~~~";    // 私有属性只能在类内部修改, 虽然会报错但是js依然可以通过。添加"noEmmitOnErro": true即可。
  p01.name = "Van De Kamp";  // 通过访问器设置的
  p01.age = 18;              // 也是通过访问器设置的
  console.log(p01);
  console.log(p01.name);     // 通过get访问器来访问数据

  // 02 一个protected的例子
  const test = new Temp(20161757);
  // console.log(test.id);   protected类型属性只能在类及其子类中访问
  test.test();

  // 03 一个属性声明和构造函数的语法糖的例子。
  const candy = new GrammerCandy(20161757, "Howard", 18);
  console.log(candy);
})();