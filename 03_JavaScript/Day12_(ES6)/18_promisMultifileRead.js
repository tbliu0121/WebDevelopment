// 引入fs模块
const fs = require('fs');

// fs.readFile("./resource/testmd.md", (err, data01) => {
//   fs.readFile("./resource/online.md", (err, data02) => {
//     fs.readFile("./resource/deploy.md", (err, data03) => {
//       // 这就是回调地狱, 层层嵌套, 形参容易重名并且不易被发现。。。
//       let res = `${data01}\n${data02}\n${data03}`;
//       console.log(res);
//     });
//   });
// });

// 使用Promise()来实现
const p = new Promise((resolve, reject) => {
  fs.readFile("./resource/testmd.md", (err, data) => {
    resolve(data);
  });
});

p.then(res => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/online.md', (err, data) => {
      resolve([res, data]);
    });
  });
}).then(res => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/deploy.md', (err, data) => {
      res.push(data);
      resolve(res);
    });
  });
}).then(res => {
  console.log(res);
});;

