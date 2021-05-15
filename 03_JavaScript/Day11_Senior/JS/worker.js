function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

/*** onmessage和postMessage是固定的方法，不允许写别的名字 */
let onmessage = function(event) {
    let number = event.data;
    console.log("分线程接受到主线程发送的数据: " + number);
    let res = fibonacci(number)
    postMessage(res);
    console.log("分线程向主线程返回数据: " + res);
}; 

