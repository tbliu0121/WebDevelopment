function myModule() {
    let msg = "Ai Coding";  //这是一个私有数据。

    function doSomething() {
        console.log('doSomething ' + msg.toUpperCase());
    }

    function doOtherthing() {
        console.log('doOtherthing ' + msg.toUpperCase());
    }

    return {
        doSomething: doSomething,    /**注意一个是属性，一个是函数名字*/
        doOtherthing: doOtherthing
    }
}