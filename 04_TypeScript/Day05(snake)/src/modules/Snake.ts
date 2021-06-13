class Snake {
  ele: HTMLElement;      // 获取蛇的容器
  head: HTMLElement;     // 蛇里面的第一节~
  body: HTMLCollection;  // 表示蛇的身体(包括蛇头的); 注意: HTMLCollection是实时刷新变化的

  constructor() {
    this.ele = document.getElementById("snake")!;
    this.head = document.querySelector("#snake>div")!;
    // this.body = document.querySelectorAll("#sanke>div");  // 这种方法返回的是NodeList, 是固定的！！！
    this.body = this.ele.getElementsByTagName("div");        // 返回的是一个HTMLCollection。
  }

  // 获取蛇头的坐标
  get  X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  // 设置蛇的横坐标
  set X(left: number) {
    // 如果设置的值和当前端值相同，则返回
    if(this.X === left) {
      return;
    }
    // X的合法范围为0~290之间
    if(left < 0 || left > 290) {
      // 进入判断, 说明蛇撞墙了
      throw new Error("游戏结束, 你的小蛇蛇死了哦~");
    }
    // 修改坐标禁止向自身方向移动 (只有一个头的时候可以~)
    if(this.body[1] && (this.body[1] as HTMLElement).offsetLeft === left) {
      // 如果触发调头行为, 应保持原方向继续前进; 即按键的反方向。
      if(left > this.X) {
        // 如果新值大于旧值, 则说明蛇在往右走同时修正数值
        left = this.X - 10;
      } else {
        left = this.X + 10;
      }
    }
    // 移动身体
    this.moveBody();
    this.head.style.left = left + "px";
    this.checkSelfCollid();
  }

  // 设置蛇纵横坐标
  set Y(top: number) {
    if(this.Y === top) {
      return;
    }

    if(top < 0 || top > 290) {
      throw new Error("游戏结束, 你的小蛇蛇死了哦~");
    }

    if(this.body[1] && (this.body[1] as HTMLElement).offsetTop === top) {
      if(top > this.Y) {
        top = this.Y - 10;
      } else {
        top = this.Y + 10;
      }
    }
    this.moveBody();
    this.head.style.top = top + "px";
    this.checkSelfCollid();
  }

  // 给蛇添加一节
  addBody() {
    let div = document.createElement("div");
    this.ele.insertAdjacentElement("beforeend", div);
  }

  // 移动身体的方法
  moveBody() {
    /**         移动身体的方法
     *   - 只移动身体即可, 蛇头每次都是设定好了。
     *   - 身体的移动应该从后往前移动。
     *   - 头移动的时候就会移动身体。
    */
    for(let i = this.body.length - 1; i > 0; i--) {
      let X = (this.body[i - 1] as HTMLElement).offsetLeft;  // 通过断言消除错误提示, 因为已经确定需要的数据一定存在
      let Y = (this.body[i - 1] as HTMLElement).offsetTop;
      // 将数值设置到当前的身体上。
      (this.body[i] as HTMLElement).style.left = X + "px";
      (this.body[i] as HTMLElement).style.top = Y + "px";
    }
  }

  // 检查是否发生了自己撞自己的问题。
  checkSelfCollid() {
    // 获取所有身体, 检查和蛇头的坐标是否发生重叠
    for(let i = 1; i < this.body.length; i++) {
      let body = this.body[i] as HTMLElement;
      if(this.X === body.offsetLeft && this.Y === body.offsetTop) {
        throw new Error("自己撞到了自己 ORZ");
      }
    }
  }
}

export default Snake;
