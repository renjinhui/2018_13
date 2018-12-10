/*
* 创建于 2018/12/10 ;任金辉新建的
*/
console.log(a,b,c);// undefined * 3
var a=10,b=20,c=30;// var a=10; var b=20; var c=30;
function f(a){
    // a 10
    console.log(a,b,c); // a b 属于私有变量
    var b = a = c = 100;
    console.log(a,b,c)
}
f(10,20);
console.log(a,b,c);




var n = 10;
function fn() {
    var n = 20;//21 22
    function f() {
        n++;
        console.log(n);
    }
    f();
    return f;
}
var x = fn();//不销毁的作用域   21 
x();//22
x(); //23
console.log(n);//10


var name = "zhufengpeixun.com";
var person = {
    name: "zhufeng",
    pro: {
        name: "peixun",
        getName: function() {
            return this.name;
        },
        getName2: function () {
            console.log(this.name);//'peixun'
            return function () {
                return this.name
            }
        }
    }
};
console.log(person.pro.getName()); //"peixun"
var pepole = person.pro.getName;
console.log(person.pro.getName2()());
console.log(pepole()); //"zhufengpeixun.com";

var num = 2;// 3 9
var obj = {
    num: 1,// 3
    fn: (function (num) { // 自执行作用域 num 2 4  5  6
        num *= 2;       
        this.num +=1; //this window .num+=1;
        return function () {
            this.num *=3;
            ++num;
            console.log(num)
        }
    })(num)
};
var fn = obj.fn;
fn(10);// 5
obj.fn(20);//6
console.log(num, obj.num);// 9 3