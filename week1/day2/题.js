/*
* 创建于 2018/12/4 ;任金辉新建的
*/
var a = {
    x:1
};
var b = a;
a = {w:1};
console.log(b);
a.c = a = {y:1};

console.log(a, b);
console.log(b.c);
//----------------------------
console.log(a);
var a=12;
function fn(){
    console.log(a);
    var a=13;
}
fn();
console.log(a)

//-------
console.log(a);
var a=12;
function fn(){
    console.log(a);
    a=13
}
fn();
console.log(a)
//----------------
var foo=1;
function bar(){
    if(!foo){
        var foo=10;
    }
    console.log(foo);
}
bar();

//----------------------------

var n=13;
function fn(n){
    alert(n);
    var n=14;
    alert(n);
}
fn(n);
//----------------------------
var n = 13;
function fn(){
    n = 15;
    console.log(n);
}
fn();
alert(n);
//----------------------------
var n = 10;
function outer(){
    var n = 15;
    function inner(){
        function center(){
            alert(n);
        }
        center();
    }
    inner();
}
outer()
//-----------------------------
var n=0;
var c=0;
function a(){
    var n=10;//11
    function b(){
        n++;
        console.log(c);
        alert(n);
    }
    b();
}
a();
alert(n);//0
//--------------------------
console.log(num,str);
var num = 18;
var str = "lily";
function fn2(){
    console.log(str,num);
    num = 19;
    str = "candy";
    var num = 14;
    console.log(str,num);
}
fn2();
console.log(str,num);
//----------------------------------------------------
alert(a);
console.log("a" in window);
if(!("a" in window)){
    var a = 10;
}
alert(a);

console.log(fn);
if(9==8){
    function fn(){
        alert(2);
    }
}
//    ---------------------------------
f = function(){return true};
g = function(){return false};
(function (){
    console.log(g);
    if(g()&&[]==![]){
        f = function f(){return false};
        function g(){return true};
    }
})();
alert(f());
alert(g());




//1、
var str= "我是MT";
test();
function test() {
    console.log(str);
    var str= "哈哈哈";
    console.log(str);
}
console.log(str);

//2、
console.log(a);//undefined
a=12;
function fn(a){
    console.log(a);//undefined
    a=13
}
fn(a)
var a;
console.log(a);//12

//3、
function test(){
    if("a" in window){
        var a = 10;
    }
    console.log(a);
}
test();

//4、
var a = 1;
function fn() {
    console.log(a);
    var a = 5;
    console.log(a);
    a++;
    var a ;
    fn3();
    fn2();
    console.log(a);
    function fn2() {
        console.log(a);
        a = 20;
    }
}
function fn3() {
    console.log(a);
    a = 200;
};
fn();
console.log(a);


//5、
var n = 10;
function outer(){
    var n = 15;
    function inner(n){
        console.log(n)
        function center(){
            n++;
            console.log(n);
        }
        center();
    }
    inner(n);
}
outer();

//6、
var n = 10;
function outer(){
    n = 15;
    function inner(){
        console.log(n++);
        function center(){
            n+=2;
            console.log(n);
        }
        center();
    }
    inner();
};
outer();
console.log(n);
