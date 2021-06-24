// pages/index/index.js
Page({

  /** 页面的初始数据
   */
  data: {
    msg: "页面的初始化数据",
    userInfo: {
      // 存放用户的信息
    }
  },

  handleParent() {
    console.log("parent");
  },

  handleChild() {
    console.log("child");
  },

  // 页面跳转的方法
  toLogs() {
    wx.redirectTo({
      url: '/pages/logs/logs',
    })
  },

  // 获取用户授权信息，此方法启用，使用getUserProfile()
  handleGetUserInfo(res) {
    console.log(res);
    if(res.detail.userInfo) {  // 如果存在该属性, 说明获取到了用户的授权
      this.setData({
        userInfo: res.detail.userInfo
      });
    } else {
      console.log("未获得用户的授权信息");
    }
  },
  getUserProfile() {
    wx.getUserProfile({
      desc: '用于展示用户的个人信息',
      success: res => {
        console.log(res);
        this.setData({
          userInfo: res.userInfo
        });
      }
    })

  },

  /* 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    console.log("onLoad() 监听页面加载");
    // debugger;  // 打上一个断点
    // console.log(this);  // this代表当前页面的实例对象
    // console.log(this.data.msg);
    // setTimeout(() => {
    //   // 通过setData()方法来修改数据
    //   this.setData({
    //     msg: "修改后的数据~"
    //   });
    // }, 2000);

    // 授权后获取用户的信息
    wx.getUserInfo({
      success: () => {
        console.log("取得用户授权信息");
      },
      fail: () => {
        console.log("获取用户信息失败。。。");
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    console.log("onReady() 监听页面首次渲染");
  },

  /**
   * 生命周期函数--监听页面显示
  */
  onShow: function () {
    console.log("onShow() 监听页面显示");
  },

  /**
   * 生命周期函数--监听页面隐藏
  */
  onHide: function () {
    console.log("onHide() 监听页面隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
  */
  onUnload: function () {
    console.log("onUnlode() 监听页面卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
  */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})