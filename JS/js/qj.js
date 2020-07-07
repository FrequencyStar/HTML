
// 'use strict':严格检查模式，预防JavaScript随意性产生的一些问题
'use strict'
let a = 1;
// b = 2; 没有定义b，在use strict中报错
// ES6 let

let msg =
    `
    hello
    world
    nihc
    `

let name = "wm";
let age = 22;
let hello = `你好,${name}`;

let student = "student";
console.log(student.length);
student.toLocaleUpperCase();
student.toLocaleLowerCase();

let arr = [1,2,3,4,5,"1","2"];
arr.length;
// 注意：给arr.length赋值，数组大小就会发生变化，如果赋值过小，元素就会丢失
arr.indexOf(2);
// 通过元素获得下标索引,字符串的"1"和数字1是不同的
arr.slice(3)
// 截取Array的一部分，返回一个新数组，类似于String的substring
arr.push("a","b");
// 压入到尾部元素
arr.pop();
// 弹出尾部元素
arr.unshift("a","b");
// 压入到头部元素
arr.shift();
// 弹出头部元素
arr.sort();
// 排序
arr.reverse();
// 元素翻转
arr.concat([1,2,3]);
// 元素拼接，并没有修改数组，只是返回了一个新的数组
arr.join('-');
// 打印拼接数组，使用特定的字符串连接
arr.fill(1);
// 填充
let arr2 = [[1,2],[3,4],[5,6]];
console.log(arr2[1][1]);
// 多维数组

// 定义了一个Person对象，具有各个属性
let Person = {
    name: "wm",
    age: 3,
    email: "840748884@qq.com",
    score: 100
}
// 对象赋值
Person.name = "ww";
// 使用一个不存在的对象属性，不会报错！undefined
Person.haha;
// 动态删减属性，通过delete删除对象的属性
delete Person.age;
// 动态添加属性，直接给新的属性添加值即可
Person.haha = "haha";
// 判断属性值是否在这个对象中，xxx in xxx
'name' in Person;
// 判断一个属性是否是这个对象自身拥有,hasOwnProperty()
Person.hasOwnProperty('age');

let map = new Map([['tom',100],['jack',90],['haha',80]]);
let username = map.get('tom');// 通过key获得value
map.set('admin',123456);
map.delete('tom');

let set = new Set([1,2,3,4,1,1,1]);
set.add(5);
set.delete(1);
set.has(4);// 是否包含某个元素

// 通过for of实现遍历
// 遍历数组
for (let x of arr2) {
    console.log(x);
}
// 遍历map
for (let x of map) {
    console.log(x);
}
// 遍历set
for (let x of set) {
    console.log(x);
}
