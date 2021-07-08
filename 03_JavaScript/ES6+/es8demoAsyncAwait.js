const fs = require('fs');

// 封装读取文件的函数
function readTestmd() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/testmd.md', (err, data) => {
      if(err) {
        reject(err);  // 如果失败了则返回失败
      }
      resolve(data);
    });
  });
}

function readOnline() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/online.md', (err, data) => {
      if(err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

function readDeploy() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/deploy.md', (err, data) => {
      if(err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

async function main() {
  let test = await readTestmd();    // 获取第一个文件
  let online = await readOnline();  // 获取第二个文件
  let deploy = await readDeploy();  // 获取第三个文件

  console.log(test.toString());
  console.log(online.toString());
  console.log(deploy.toString());
}

main();