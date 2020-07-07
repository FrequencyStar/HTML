let h1 = document.getElementsByTagName("h1");
let p1 = document.getElementById("p1");
let p2 = document.getElementsByClassName("p2");

let father = document.getElementById("father");
let children = father.children;// 获取父节点下的所有子节点
// father .firstChild
// father.lastChild

let aaa = document.getElementById("p1");
aaa.innerText = "aaaa";// 修改文本的值
aaa.innerHTML = '<strong>bbbb</strong>';// 可以解析HTML文本标签
aaa.style.color = 'red';
aaa.style.fontSize = '50px';

let js = document.getElementById("js");
father.appendChild(js);

let newp = document.createElement('p');
newp.id = "newp";
newp.innerText = "hello";
father.appendChild(newp);

// let newp2 = document.createElement('style');
// newp2.setAttribute("type","text/css");
// newp2.innerHTML = 'body{background-color: red;}';
// document.getElementsByTagName('head')[0].appendChild(newp2);

father.insertBefore(newp,p1);