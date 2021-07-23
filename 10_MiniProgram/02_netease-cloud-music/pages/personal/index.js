import { userInfo } from "os";

let startY = 0;  // 手指起始的坐标
let moveY = 0;   // 手指移动的坐标
let moveDistance = 0;  // 手指移动的距离

Page({
  data: {
    coverTransform: "translateY(0)",  // 控制用户卡片纵向移动距离
    coverTransition: "",              // 设置卡片恢复的过渡效果
    userInfo : {}                     // 存储用户数据
  },

  onLoad(options) {
    // 读取用户的基本信息
    let userInfo = wx.getStorageSync('userInfo');
    console.log(JSON.parse(userInfo));
    // 用为未登录的时候读取对应的存储结果是一个空串
    if(userInfo) {}
  },

  // 手指滑动三件套: start / move / end
  handlerTouchStart(event) {
    startY = event.touches[0].clientY;  // 移动端可能会有多个手指触屏，以第一个为基准
    this.setData({
      coverTransition: "",              // 下拉的时候不要过渡效果; 只有松开的时候才会有过渡效果
    });
  },

  handlerTouchMove(event) {
    moveY = event.touches[0].clientY;
    moveDistance = moveY - startY;
    if(moveDistance <= 0) return;  // 如果移动距离则直接放回, 停止卡片的向上移动
    if(moveDistance >= 100) {
      moveDistance = 100;
    }
    this.setData({
      coverTransform: `translateY(${moveDistance}rpx)`
    });
  },

  handlerTouchEnd() {
    // 松开手指之后恢复卡片的距离
    this.setData({
      coverTransform: `translateY(0rpx)`,
      coverTransition: "transform .5s linear"
    });
  },

  // 跳转至登录界面
  toLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }

  
})