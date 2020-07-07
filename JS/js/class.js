let student = {
    name: "wm",
    age: 2,
    run: function () {
        console.log(this.name + "run...");
    }
}
let alice = {
    name: "alice"
}
class worker{
    constructor(name) {
        this.name = name;
    }
    hello(){
        console.log("hello")
    }
}
let bob = new worker("bob");
// bob.hello();

class tomes extends worker{
    constructor(name,grade) {
        super(name);
        this.grade = grade;
    }
    mygrade(){
        console.log("我是一个小学生");
    }
}
let ming = new tomes("ming",1);

let dl = document.getElementById('app');