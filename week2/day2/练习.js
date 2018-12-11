function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype = {
    y: 400,
    getX: function () {
        console.log(this.x);
    },
    getY: function () {
        console.log(this.y);
    },
    sum: function () {
        console.log(this.x + this.y);
    }
};
var f1 = new Fn;
var f2 = new Fn;
console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(f1.__proto__.getX === f2.getX);
console.log(f1.getX === Fn.prototype.getX);
console.log(f1.constructor);
console.log(Fn.prototype.__proto__.constructor);
f1.getX();
f1.__proto__.getX();
f2.getY();
Fn.prototype.getY();
f1.sum();
Fn.prototype.sum();







function Foo() {
    getName = function () {console.log(1);};
    return this;
}
Foo.getName = function () {console.log(2);};
Foo.prototype.getName = function () {console.log(3);};
var getName = function () {console.log(4);};
function getName() {console.log(5);}
Foo.getName(); //2
getName(); //4
Foo().getName();//window.getName() // 1
getName();//1
var a = new Foo.getName(); //2  a 是 Foo.getName 的一个实例
var b = new Foo().getName();// new Foo() 返回的是 Foo的一个实例 3 b是undefined
var c = new new Foo().getName();//先执行 new Foo();  new 实例.getName() 3 c实例.getName的实例
console.log(a,b,c);





function Fn(){
    var a =1;
    this.a = a
}
Fn.prototype.say = function(){
    this.a = 2
};
Fn.prototype = new Fn;
var f1 = new Fn;

f1.__proto__.b = function (){
    this.a = 3
};
console.log(f1.a);
console.log(f1.prototype);
console.log(f1.b);
console.log(f1.hasOwnProperty('b'));
console.log('b' in f1);
console.log(f1.constructor == Fn);
console.log(Fn.prototype);



