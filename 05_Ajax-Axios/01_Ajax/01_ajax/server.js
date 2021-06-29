// 01 引入express
const express = require("express");

// 02 创建应用对象
const app = express();

// 03 创建路由规则
// request是对请求报文的一个封装, response是对响应报文的一个封装
// 如果请求头的路径是/server的话, 则启用此回调函数, 并由response响应
app.get("/server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 设置响应
  response.send("Hello AJAX GET"-2);
});

// 将post改成all表示可以接受任何请求
app.all("/json-server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 设置请求头
  response.setHeader("Access-Control-Allow-Headers", "*");  // 表示所有类型请求头都可以接受
  // 设置响应; send对象只能接受字符串和Buffer
  const data = {
    name: "Love Coding",
  };
  let str = JSON.stringify(data);
  // response.send("Hello AJAX JSON");
  response.send(str);
});

// 延时响应
app.get("/delay", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 3s之后再返回客户端
  setTimeout(() => {
    response.send("Hello AJAX Response Delay");
  }, 3000);
});

// jQUery 服务
app.all("/jqueryServer", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");   // 允许跨域请求
  response.setHeader("Access-Control-Allow-Headers", "*");  // 表示所有类型请求头都可以接受
  // response.send("Hello jQuery Ajax");
  const data = {name:"Love Coding", age:2};
  response.send(JSON.stringify(data));
});

// axios 服务
app.all("/axiosServer", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");   // 允许跨域请求
  response.setHeader("Access-Control-Allow-Headers", "*");  // 表示所有类型请求头都可以接受
  // response.send("Hello jQuery Ajax");
  const data = {name:"Love Coding", age:2};
  response.send(JSON.stringify(data));
});

// fetch 服务
app.all("/fetchServer", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");   // 允许跨域请求
  response.setHeader("Access-Control-Allow-Headers", "*");  // 表示所有类型请求头都可以接受
  // response.send("Hello jQuery Ajax");
  const data = {name:"Love Coding", age:2};
  response.send(JSON.stringify(data));
});


// JSONP服务
app.all("/jsonpServer", (request, response) => {
  // response.send("console.log('Hello JSONP~')");

  // script法请求, 返回的数据JS必须可以解析
  let data = {
    name: "Howard",
    age: "16",
  }
  let str = JSON.stringify(data);
  // 和send()方法相比, end()不会加特殊的响应头
  response.end(`handle(${str})`);
});

// 检测用户名是否存在
app.all("/checkUsername", (request, response) => {
  // script法请求, 返回的数据JS必须可以解析
  let data = {
    exist: 1,
    msg: "用户名已存在",
  }

  let str = JSON.stringify(data);
  // 和send()方法相比, end()不会加特殊的响应头
  response.end(`handle(${str})`);
});

// jqueryJSONP
app.all("/jqueryJSONP", (request, response) => {
  // script法请求, 返回的数据JS必须可以解析
  let data = {
    content: "jquery 发送 JSONP请求",
    slogan: "找工作冲冲冲！！！"
  }

  let str = JSON.stringify(data);
  let cb = request.query.callback;  // 获取jq发送jsonp请求中的回调函数声明
  
  response.end(`${cb}(${str})`);    // 和send()方法相比, end()不会加特殊的响应头
});

// CORS
app.all("/corsServer", (request, response) => {
  // 设置响应头，允许跨域
  // response.setHeader("Access-Control-Allow-Origin", "127.0.0.1:5000");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Methods", "*");
  response.send("Hello CORS~");
});

// 04 监听端口, 启动服务; 结合上一步, localhost:8000/server可访问此服务。
app.listen(8000, () => {
  console.log("本地服务已经启动~, 8000端口监听中。。。");
});
