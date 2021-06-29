const express = require("express");

const app = express();

app.get("/home", (request, response) => {
  // 响应一个页面, 需要使用绝对路径
  response.sendFile(__dirname + "/index.html");
});

app.get("/userData", (request, response) => {
  response.send("用户数据");
});

app.listen("8848", () => {
  console.log("本地服务已启动, 正在监听port: 8848");
});
