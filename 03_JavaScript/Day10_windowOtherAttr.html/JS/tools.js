/***封装一个函数来完成移动指定盒子到指定位置
             * obj: 要移动的位置。
             * attr: 要是执行动画的样式
             * target: 目标位置(一个数)。
             * speed: 盒子移动的速度。
             * callback: 在动画执行完成之后调用回调函数
        */
 function move(obj, attr, target, speed, callback) {      //封装一个函数用来移动指定盒子到指定目标

    clearInterval(obj.timer);                             //开启定时器之前要关闭上一个计时器
    
    var current = parseInt(getStyle(obj, attr));
    if(current > target) {                                //根据相对位置修改速度方向
        speed = -speed;
    }

    obj.timer = setInterval(function() {                  //自己为自己添加一个定时器, 不会相互之间受到影响 ！！！！！！
        var old_value = parseInt(getStyle(obj, attr));
        var new_value = old_value + speed;

        if((speed > 0 && new_value > target) || (speed < 0 && new_value < target)) {  //判断是否到目标
            new_value = target;                                  
        }

        obj.style[attr] = new_value + "px";               //设置目标属性的style, 记得加px

        if(new_value == target) {                         //动画停止的条件
            clearInterval(obj.timer);
            callback && callback();                       //动画执行完成之后执行回调函数, 如果传入则执行, 否则不执行！！！！！！
        }
    },30);                 
}

function getStyle(obj, styleName) {                       //获取元素的样式属性
    /***获取元素的样式兼容性方法
     *     - 一般的浏览器在全局对象window中有一个getComputedStyle(obj, null)方法来返回一个由Obj所有样式的组成的对象，
     *     - IE8及以下是利用obj.currentStyle中的属性封装了元素的所有样式。
     *     - 因此利用两种方式获取obj的指定样式name:
     *         - window.getComputed(obj, null)[name]  //一般浏览器
     *         - obj.currentStyle[name]               //IE8及以下
    */
    if(window.getComputedStyle) {
        return getComputedStyle(obj, null)[styleName];
    } else {
        return obj.currentStyle[styleName];
    }
}

//封装一个函数，用于向一个元素中添加指定的class属性
function addClass(obj, className) {
    if(!hasClass(obj, className)) {                        //如果属性不存在，则添加进去
        obj.className += " " + className;
    }                 
}

//判断加入到的类先前是否已经存在
function hasClass(obj, className) {
    let regExp = new RegExp("\\b" + className + "\\b");    //利用单词边界\b检测b2是否是独立的, 注意转义字符
    return regExp.test(obj.className);
}

//删除一个元素中指定的className, 将对应的className替换成空串即可。
function removeClass(obj, className) { 
    let regExp = new RegExp("\\b" + className + "\\b");
    obj.className = obj.className.replace(regExp, "");                      //将符合正则表达式的替换为空串
}

//切换操作
function toggleClass(obj, className) {
    if(hasClass(obj, className)) {
        removeClass(obj, className);
    } else {
        addClass(obj, className);
    }
}