// 01 引入express
const express = require("express");

// 02 创建应用对象
const app = express();

// 03 创建路由规则
// request是对请求报文的一个封装, response是对响应报文的一个封装
app.get("/", (request, response) => {
  // 设置响应
  response.send("Hello ajax and express~");
});

// 04 监听端口, 启动服务
app.listen(8000, () => {
  console.log("本地服务已经启动~, 8000端口监听中。。。");
});