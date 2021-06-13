const SCREEN_DIVIDEN = 29;
const FOOD_WIDTH = 10;

// 定义Food类别
class Food {
  // 定义一个属性表示食物所对应的元素(HTMLElement类型的元素)
  element: HTMLElement;

  constructor() {
    // 根据id来获取目标(后面的叹号告诉编译器这个元素一定可以获取到, 不会为空的)
    this.element = document.getElementById("food")!;
  }

  // 定义一个获取食物X坐标的方法, (get访问器通过.X就可以获取到)
  get X() {
    return this.element.offsetLeft;
  }
  
  // 定义一个获取食物Y坐标的方法
  get Y() {
    return this.element.offsetTop;
  }

  // 定义一个随机改变食物位置的方法
  change() {
    // 生成一个双侧闭区间的数: round.(start + span), 前开后闭闭: ceil; 前闭后开: floor。
    let left = Math.round(Math.random() * SCREEN_DIVIDEN) * FOOD_WIDTH + "px";
    let top = Math.round(Math.random() * SCREEN_DIVIDEN) * FOOD_WIDTH + "px";
    this.element.style.left =  left;
    this.element.style.top =  top;
  }
}

// 测试代码
// const food = new Food();
// console.log(food.X, food.Y);

// setInterval(() => {
//   food.change();
//   console.log(food.X, food.Y);
// }, 1500);

// // food.change();
// console.log(food.X, food.Y);

export default Food;