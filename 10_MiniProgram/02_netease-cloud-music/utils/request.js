import config from "./config.js"
/** 发送Ajax请求
 *   - 01 封装功能函数
 *     - 功能点明确
 *     - 函数内部应该保留固定代码
 *     - 抽取动态数据为形参，由使用者传入
 *     - 一个良好的函数应该设置形参的默认值（ES6的形参默认值）
 * 
 *   - 02 封装功能组件
 *     - 功能点明确
 *     - 组件内部保留静态代码
 *     - 将动态的数据抽取成pros参数，由使用者根据自身属性的情况以便签属性的形式传入props
 *     - 一个良好的组件应该设置组件的必要性，for example:
 *       props: {
 *         msg: {
 *           required: true,
 *           default: default-value,
 *           type: String
 *         }
 *       }
*/
export default (url, data={}, method="GET") => {
  return new Promise((resolve, reject) => {
    // new Promise的初始状态为Pendding，需要通过resolve/reject分别转化到成功和失败的状态
    wx.request({
      url: config.host + url,
      data,    // 默认值是一个空对象
      method,  // 默认方法是GET
      success: (res) => {
        // console.log("请求成功: ", res);
        resolve(res.data);  // 按照需求从结果中过滤出需要的数据
      },
      fail: (err) => {
        // console.log("请求失败: ", err);
        reject(err);
      }
    })
  });
}