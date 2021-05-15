(function() {               //function()中可以把window作为属性传进去, 避免查找过程
    let msg = "Ai Coding";  //这是一个私有数据。

    function doSomething() {
        console.log('doSomething ' + msg.toUpperCase());
    }

    function doOtherthing() {
        console.log('doOtherthing ' + msg.toUpperCase());
    }

    window.myModule2 = {
        doSomething: doSomething,    /**注意一个是属性，一个是函数名字*/
        doOtherthing: doOtherthing
    }
})();