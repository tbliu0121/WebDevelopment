// 定义表示计分牌的类
class ScorePanel {
  score: number = 0;
  level: number = 1;
  elScore: HTMLElement;
  elLevel: HTMLElement;
  MAX_LEVEL: number;  // 标识最高等级的变量
  SCORE_LINE: number;  //多少分升一级

  constructor(maxLevel: number = 20, scoreLine: number = 10) {
    this.elScore = document.getElementById("score")!;
    this.elLevel = document.getElementById("level")!;
    this.MAX_LEVEL = maxLevel;
    this.SCORE_LINE = scoreLine;
  }

  // 加分的方法
  addScore() {
    this.elScore.innerHTML = ++this.score + "";  // 修改成绩并显示~
    if(this.score % this.SCORE_LINE === 0) {
      this.levelUp();
    }
  }

  // 等级增加的方法
  levelUp() {
    if(this.level < this.MAX_LEVEL) {
      this.elLevel.innerHTML = ++this.level + "";  // 修改等级并显示
    }
  }
}

// 测试代码
// const score_panel = new ScorePanel();

// for(let i = 0; i < 175; i++) {
//   score_panel.addScore();
// }

export default ScorePanel;