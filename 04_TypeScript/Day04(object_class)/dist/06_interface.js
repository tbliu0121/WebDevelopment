"use strict";
(function () {
    /**                interface(接口)
     *   - 用来定义一个类的结构; 有哪些属性和哪些方法。
     *   - 接口也可以用来当成类型声明去使用; 想过和type是类似的。
     *   - 和type的区别: type不可以对一个类重复定义, interface可以, 最终的效果已所有声明为准。
     *   - 接口可以在定义类的时候去限制类的结构; (这一点与抽象类相似)。
     *
     *   - 接口是为了定义一种规范, 使类满足一定场景下的需求。
    */
    // 定义类时可以实现一个接口: 使类满足接口的要求。
    class MyClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("Hello interface~");
        }
    }
})();
