// 引入需要的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器, 控制其他所有类(因此需要引入其他类~)
class GameController {
  // 定义三个属性: 蛇、食物、分数面板
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  direction: string = "";     // 创建一个属性来存取蛇的移动方向; 可初始化方向
  gameover: boolean = false;  // 记录游戏是否结束

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();  // args0: 最高等级; args1: 获取多少分升一级。
    this.init();
  }

  // 初始化游戏的方法, 调用后游戏即开始
  init() {
    /**       绑定键盘按下的事件
     *   - this.keyDownHandler.bind(this)防止函数被调用时this的指向变化。
     *   - document对象没有direction属性。
    */
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    this.move();
  }

  /**    普通浏览器 / IE   对方向键的不同反应结果(均是字符串)
   *   - ArrowUp / Up
   *   - ArrowDown / Down
   *   - ArrowLeft / Left
   *   - ArrowRright / Right
  */
  // 创建一个键盘按下的响应函数
  keyDownHandler(event: KeyboardEvent) {
    // 按下按键的时候修改direction属性; 需要检测按键的合法性
    this.direction = event.key;
  }

  move() {
    /**           移动蛇
     *   - 根据this.direction来使蛇的方向移动
     *   - up / down:        top 减少 / 增加
     *   - left / right:    left 减少 / 增加
    */
    let X = this.snake.X;
    let Y = this.snake.Y;
    // 根据按键方向修改X和Y的数值。
    switch(this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    this.checkEat(X, Y);
    // 修改蛇的位置
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch(err) {
      // 进入到了catch, 说明出现了异常
      alert(err.message);
      this.gameover = true;
    }
    
    // 游戏未结束, 开启一个定时调用
    !this.gameover && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1)*30);
  }

  // 定义一个方法, 检测蛇是否吃到食物并作出反应
  checkEat(X: number, Y:number) {
    //X, Y为蛇的新坐标
    if(X === this.food.X && Y === this.food.Y) {
      console.log("吃到食物了~");
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
}

export default GameController;