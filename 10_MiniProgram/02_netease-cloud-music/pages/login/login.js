/**      登录页面
 *   - 登录流程
 *     - 01 收集表单数据
 *     - 02 前端验证: 
 *       - 验证用户信息是否合法；如账号、密码等
 *       - 前端验证不通过则提示用户，不发送请求给后端。
 *       - 前端验证通过则发送请求，请求中携带用户的账号、密码等信息发送给服务器。
 *     - 03 后端验证
 *       - 验证用户信息是否存在
 *       - 用户不存在则直接返回，告诉前端用户不存在
 *       - 用户存在则验证密码是否正确，和数据库的数据比对
 *       - 密码不正确返回给前端提示密码错误；密码正确返回给前端数据，提示用户登录成功（携带用户数据）
 */

import request from '../../utils/request';


Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone: "",    // 用户手机号
    password: ""  // 用户密码
  },

  onLoad: function (options) {},

  /**     向event对象传入自定义数据的两种方式
   *   - event.detail.value中可以获取到表单中的目标数据
   *   - 文本框和密码框均绑定到了handleInput事件（目的如下）
   *   - 向event事件传递参数：
   *     - 通过id来区分不同表单触发的事件
   *     - event.target.dataset可以存储传入的数据, 通过event-key的方法可以访问某个key值, data-是固定格式。
   *   - 向event传入多个数据时使用data-的形式；传入唯一标识时使用id。
  */
  // 表单数据发生改变时的回调; 搜集文本框中输入的数据
  handleInput(event) {
    // console.log(event);
    // let type = event.currentTarget.id;  // 通过id属性来传值
    let type = event.currentTarget.dataset.type;  // 通过data-传入自定义属性
    // 设置表单id和data中的数据同名来巧妙更新数据
    this.setData({
      [type]: event.detail.value
    });
  },

  // 登陆的回调；用于验证数据和发送登录请求
  async login() {
    let { phone, password } = this.data;  // 01 收集表单数据
    /**    手机号验证的内容
     *   - 内容为空。
     *   - 手机号格式不正确。
     *   - 手机号格式正确，验证通过。
     */
    if(!phone) {
      wx.showToast({
        title: '手机号不能为空',  // title为必填属性
       //  icon: 'error',  // 最多只能显示7个汉字
       icon: 'none',  // none最多可以显示两行字符
      })
      return;
    }

    // 利用正则检测手机号的合法性
    let phoneReg = /^1[3-9]\d{9}/;
    if(!phoneReg.test(phone)) {
      wx.showToast({
        title: '手机号格式错误',
        icon: 'error'
      })
      return;
    }

    if(!password) {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      })
    }

    // 后端验证
    let res = await request('/login/cellphone', {phone, password});
    if(res.code === 200) {
      wx.showToast({
        title: '登录成功',
      })
      // 将用户信息存储至本地
      wx.setStorageSync('userInfo', JSON.stringify(res.profile));

      // 返回值个人中心页面
      wx.switchTab({
        url: '/pages/personal/index',
      })
    } else if(res.code === 400) {
      wx.showToast({
        title: '账号错误',
        icon: 'error'
      })
    } else if(res.code === 502) {
      wx.showToast({
        title: '密码错误',
        icon: 'error'
      })
    } else {
      wx.showToast({
        title: '登录失败, 请重新登录',
        icon: 'none'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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