let user = {
    name: "wm",
    age: 22,
    sex: "boy"
}
// JS对象转化为json
let user1 = JSON.stringify(user);
// json转化为JS对象
let user2 = JSON.parse('{"name":"wm","age":22,"sex":"boy"}');
