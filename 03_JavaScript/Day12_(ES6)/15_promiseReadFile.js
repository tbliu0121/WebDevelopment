// 01 引入fs模块
const fs = require("fs");

// // 02 调用方法读取文件; data是一个buffer对象~（buffer缓冲区用来存储二进制文件，用法和数组类似）
// fs.readFile("./resource/testmd.md", (err, data) => {
//   // 如果失败则抛出错误
//   if(err) throw err;
//   console.log(data.toString());
// });  // 终端运行node promiseFile.js可运行此脚本, 然后读取文件。

// 03 用Promise封装一个读取文件的方法
// Promise用来封装一个异步操作, 而读取文件又刚好是一个异步操作。
const p = new Promise(function(resolve, reject) {
  fs.readFile("./resource/testmd.mdd", (err, data) => {
    // 如果失败
    if(err) reject(err);  // 如果读取失败, 则调用reject来转化promise的状态为rejected.
    // 如果成功
    resolve(data);
  });
});

p.then(res => {
  console.log(res.toString());
}, err => {
  console.log("读取文件失败。。。");
});

