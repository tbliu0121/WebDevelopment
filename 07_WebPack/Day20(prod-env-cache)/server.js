/**
 *   - 服务器代码
 *   - 启动服务器指令: 
 *     - npm i nodemon -g 
 *     - nodemon server.js (这个指令要求全局安装nodemon, 安装指令如上)
 *     - node serevr.js  (只要安装了node就可以启动)
 *   - 访问服务器地址:
 *     - http://localhost:3000
*/
// 使用express搭建一个服务器, 使用Koa搭建也一样~
const express = require("express");

const app = express();

app.use(express.static("build", {maxAge: 1000 * 3600}));

app.listen(3000);
