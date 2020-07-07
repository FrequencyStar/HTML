function abs(x,...rest) {
    console.log("x=>"+x);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    console.log(rest);
    if (x>=0) {
        return x;
    } else {
        return -x;
    }
}

var abs2 = function (x) {
    // 手动抛出异常
    if (typeof x!=='number') {
        throw 'Not a number !!!!';
    }
    if (x>=0) {
        return x;
    } else {
        return -x;
    }
}

function a() {
    let x = 1;
    x = x + 1;
}
// x = x + 1;
// function.js:30 Uncaught ReferenceError: x is not defined

let x = 'xxx';
// alert(x);
// alert(window.x);
// 默认所有的全局变量，都绑定在window对象下
// window.alert(x);

/*
// 唯一全局变量
var KuangApp = {};
// 定义全局变量
KuangApp.name = 'kuangshen';
KuangApp.add = function (a,b) {
    return a + b;
}*/

function aaa() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
    console.log(i+1);// 问题？i出了作用域还可以使用，i=11
}

// const PI = 3.14;
// PI = 3.1415;// 不能修改
// console.log(PI);

let kuangshen = {
    name: 'wm',
    birth: 2008,
    age: function () {
        let now = new Date().getFullYear();
        return now-kuangshen.birth;
    }
}

let kuangshen2 = {
    name:'wm',
    birth:2000,
    age:getAge
}
function getAge() {
    let now = new Date().getFullYear();
    return now - this.birth;
}
let kuangshen3 = {
    name:'wm',
    birth:2019,
    age:getAge
}
// getAge.apply(kuangshen3);
